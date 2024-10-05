import type { Expenses } from "@/lib/types/definitions";
import { sql } from "@vercel/postgres";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const month = searchParams.get("month");
	const year = searchParams.get("year");

	if (!month || !year) {
		return NextResponse.json(
			{ message: "Missing month or year parameter" },
			{ status: 400 },
		);
	}

	try {
		const data = await sql<Expenses[]>`
			SELECT expenses.*, categories.name AS category_name FROM expenses JOIN categories ON
			expenses.categories_id = categories.id
			WHERE TO_CHAR(expenses.reference_date, 'MM-YYYY') = ${`${month}-${year}`}
			ORDER BY expenses.created_at DESC LIMIT 5	
		`;

		return NextResponse.json(data.rows);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error: Failed to fetch expenses data" },
			{ status: 500 },
		);
	}
}
