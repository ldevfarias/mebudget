"use server";
import { formatDate } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const revenueSchema = z.object({
	categoryId: z.string(),
	name: z.string(),
	value: z
		.number()
		.min(0.01, "O valor deve ser maior que 0")
		.refine((val) => !Number.isNaN(val), {
			message: "Deve ser um número válido",
		}),
});

export async function createRevenue(formData: z.infer<typeof revenueSchema>) {
	try {
		const validate = revenueSchema.parse(formData);

		const query = `
			INSERT INTO revenues (users_id, categories_id, name, description,  value, reference_date)
			VALUES ($1, $2, $3, $4, $5, $6)
			RETURNING *;
		`;

		const values = [
			1,
			Number(validate.categoryId),
			validate.name,
			null,
			Number(validate.value.toFixed(2)),
			formatDate(new Date()),
		];

		const result = await sql.query(query, values);

		revalidatePath("/dashboard");

		return {
			success: true,
			message: "Receita criada com sucesso",
			data: result.rows[0],
		};
	} catch (error) {
		return {
			success: false,
			message: "Erro ao criar receita",
			error:
				error instanceof z.ZodError
					? error.errors
					: "Error: Failed to create revenue",
		};
	}
}

async function removeCategory(id: number) {
	try {
		const result = await sql`DELETE FROM categories WHERE id = ${id}`;

		return {
			sucess: true,
			message: "Categoria removida com sucesso",
			data: result.rows[0],
		};
	} catch (error) {
		return {
			success: false,
			message: "Error: Failed to remove category",
		};
	}
}

async function removeExpense(id: number) {
	try {
		const result = await sql`DELETE FROM expenses WHERE id = ${id}`;

		return {
			sucess: true,
			message: "Despesa removida com sucesso",
			data: result.rows[0],
		};
	} catch (error) {
		return {
			success: false,
			message: "Error: Failed to remove expense",
		};
	}
}

const removeHandlers: Record<string, (id: number) => Promise<void>> = {
	category: removeCategory,
	expense: removeExpense,
};

export async function genericRemove(type: string, id: number) {
	const handler = removeHandlers[type];

	if (!handler) {
		throw new Error(`Tipo nao suportado: ${type}`);
	}

	revalidatePath("/dashboard");

	return handler(id);
}
