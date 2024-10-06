import type { Categories } from "@/lib/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const categories = await sql<Categories>`SELECT id, name FROM categories`;

		return NextResponse.json(categories.rows);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error: Failed to fetch categories data" },
			{ status: 500 },
		);
	}
}
