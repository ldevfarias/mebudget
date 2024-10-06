import { z } from "zod";

export const expensesSchema = z.object({
	name: z
		.string()
		.min(5, "O nome da despesa é obrigatório")
		.max(100, "O nome não pode ter mais de 100 caracteres"),
	description: z.string().optional(),
	categoryId: z.string(),
	status: z.string(),
	value: z
		.number()
		.min(0.01, "O valor deve ser maior que 0")
		.refine((v) => !Number.isNaN(v), { message: "Valor inválido" }),
	dueDate: z.string(),
});

export type ExpenseFormData = z.infer<typeof expensesSchema>;
