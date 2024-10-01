"use server";
import type { Expenses } from "@/lib/types/definitions";
import { formatDate } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const expensesSchema = z.object({
	categoryId: z.string(),
	name: z
		.string()
		.min(5, "O nome da despesa é obrigatório")
		.max(100, "O nome não pode ter mais de 100 caracteres"),
	description: z.string().optional(),
	status: z.string(),
	value: z
		.number()
		.min(0.01, "O valor deve ser maior que 0")
		.refine((v) => !Number.isNaN(v), { message: "Deve ser um número válido" }),
	dueDate: z.string(),
});

export async function createExpensesAction(
	formData: z.infer<typeof expensesSchema>,
) {
	try {
		// Validação dos dados com Zod
		const validatedData = expensesSchema.parse(formData);

		// Construção da query SQL de inserção
		const query = `
			INSERT INTO expenses (users_id, categories_id, name, description, status, value, reference_date, due_date)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
			RETURNING *;
		`;

		// Definindo os valores para os placeholders da query
		const values = [
			1,
			Number(validatedData.categoryId),
			validatedData.name,
			validatedData.description || null,
			validatedData.status,
			Number(validatedData.value.toFixed(2)),
			formatDate(new Date()),
			validatedData.dueDate,
		];

		// Executa a query no banco de dados
		const result = await sql.query(query, values);

		revalidatePath("/dashboard/expenses");
		// Retorna a resposta com a nova despesa inserida
		return {
			success: true,
			message: "Despesa criada com sucesso",
			data: result.rows[0],
		};
	} catch (error) {
		console.error("Erro ao criar despesa:", error);

		return {
			success: false,
			message: "Erro ao criar despesa",
			error:
				error instanceof z.ZodError
					? error.errors
					: "Error: Failed to create expense",
		};
	}
}

export async function updateExpensesAction(
	formData: z.infer<typeof expensesSchema>,
	expenseId: string,
	userId?: string,
) {
	try {
		// Validação dos dados com Zod
		const validatedData = expensesSchema.parse(formData);

		// Construção da query SQL de inserção
		const query = `
			UPDATE expenses
			SET users_id = $1, categories_id = $2, name = $3, description = $4, status = $5, value = $6, reference_date = $7, due_date = $8
			WHERE id = $9
			RETURNING *;
		`;

		// Definindo os valores para os placeholders da query
		const values = [
			1,
			Number(validatedData.categoryId),
			validatedData.name,
			validatedData.description || null,
			validatedData.status,
			Number(validatedData.value.toFixed(2)),
			formatDate(new Date()),
			validatedData.dueDate,
			expenseId,
		];

		// Executa a query no banco de dados
		const result = await sql.query(query, values);

		revalidatePath("/dashboard");
		// Retorna a resposta com a nova despesa inserida
		return {
			success: true,
			message: "Despesa editada com sucesso",
			data: result.rows[0],
		};
	} catch (error) {
		console.error("Erro ao editar despesa:", error);

		return {
			success: false,
			message: "Erro ao editar despesa",
			error:
				error instanceof z.ZodError
					? error.errors
					: "Error: Failed to updated expense",
		};
	}
}

export async function updateFasterExpensesAction(
	expense: Expenses,
	userId?: string,
) {
	try {
		// Construção da query SQL de inserção
		const query = `
			UPDATE expenses
			SET users_id = $1, categories_id = $2, name = $3, description = $4, status = $5, value = $6, reference_date = $7, due_date = $8
			WHERE id = $9
			RETURNING *;
		`;

		// Definindo os valores para os placeholders da query
		const values = [
			1,
			Number(expense.categories_id),
			expense.name,
			expense.description || null,
			expense.status,
			Number(expense.value).toFixed(2),
			formatDate(new Date()),
			expense.due_date,
			expense.id,
		];

		// Executa a query no banco de dados
		const result = await sql.query(query, values);

		revalidatePath("/dashboard");
		// Retorna a resposta com a nova despesa inserida
		return {
			success: true,
			message: "Despesa marcada como paga com sucesso",
			data: result.rows[0],
		};
	} catch (error) {
		console.error("Erro ao editar despesa:", error);

		return {
			success: false,
			message: "Erro ao editar despesa",
			error:
				error instanceof z.ZodError
					? error.errors
					: "Error: Failed to updated expense",
		};
	}
}
