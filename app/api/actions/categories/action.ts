"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

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

export async function updateCategoryAction(
	form: { name: string },
	categoryId: number,
) {
	const validation = categorySchema.safeParse(form);

	if (!validation.success) {
		throw new Error("Invalid data");
	}

	try {
		const query = `
			UPDATE categories
				SET name = $1 WHERE id = $2
			RETURNING *;
		`;

		const values = [validation.data.name, categoryId];

		const result = await sql.query(query, values);

		revalidatePath("/dashboard");

		return {
			success: true,
			message: "Categoria editada com sucesso",
			data: result.rows[0],
		};
	} catch (error) {
		console.error("Erro ao editar categoria:", error);

		return {
			success: false,
			message: "Erro ao editar categoria",
			error:
				error instanceof z.ZodError
					? error.errors
					: "Error: Failed to updated category",
		};
	}
}
