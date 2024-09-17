"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import type { Expense } from "./definitions";

const categorySchema = z.object({
	name: z
		.string()
		.min(5, "O nome da categoria é obrigatório")
		.max(50, "O nome não pode ter mais de 50 caracteres"),
});

export async function createCategoryAction(form: { name: string }) {
	const validation = categorySchema.safeParse(form);

	if (!validation.success) {
		throw new Error("Invalid data");
	}

	try {
		await sql`
      INSERT INTO categories (name)
      VALUES (${form.name})
    `;

		revalidatePath("/dashboard/categories");

		return {
			success: true,
			message: `Categoria ${form.name} cadastrada.`,
		};
	} catch (error) {
		return {
			success: false,
			message: "Database Error: Failed to create category",
		};
	}
}

export async function createExpensesAction(form: Expense) {
	return {
		success: true,
	};
}
