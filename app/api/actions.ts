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

const expensesSchema = z.object({
	name: z
		.string()
		.min(5, "O nome da despesa é obrigatório")
		.max(100, "O nome não pode ter mais de 100 caracteres"),
	description: z.string().optional(),
	status: z.string(),
	value: z
		.number()
		.min(0, "O valor deve ser maior que 0")
		.refine((v) => !Number.isNaN(v), { message: "Deve ser um número válido" }),
	dueDate: z.string(),
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

export async function createExpensesAction(
	formData: z.infer<typeof expensesSchema>,
) {
	try {
		// Validação dos dados com Zod
		const validatedData = expensesSchema.parse(formData);

		// Construção da query SQL de inserção
		const query = `
			INSERT INTO expenses (users_id, categories_id, name, description, status, value, month, due_date)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
			RETURNING *;
		`;

		// Definindo os valores para os placeholders da query
		const values = [
			"410544b2-4001-4271-9855-fec4b6a6442a",
			"fc935609-d325-443c-a2e2-06afb9858f2d",
			validatedData.name,
			validatedData.description || null, // Descrição pode ser opcional
			validatedData.status,
			validatedData.value,
			"september",
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
