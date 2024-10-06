export const categories = [
	{
		id: 1,
		name: "Alimentação",
		description: "Despesas relacionadas a alimentos e refeições.",
		icon: "",
		created_at: "2024-01-01T10:00:00Z",
		updated_at: "2024-01-01T10:00:00Z",
	},
	{
		id: 2,
		name: "Transporte",
		description: "Despesas com transporte público e combustível.",
		icon: "",
		created_at: "2024-01-02T10:00:00Z",
		updated_at: "2024-01-02T10:00:00Z",
	},
	{
		id: 3,
		name: "Saúde",
		description: "Despesas médicas e hospitalares.",
		icon: "",
		created_at: "2024-01-03T10:00:00Z",
		updated_at: "2024-01-03T10:00:00Z",
	},
	{
		id: 4,
		name: "Educação",
		description: "Despesas com cursos e materiais educativos.",
		icon: "",
		created_at: "2024-01-04T10:00:00Z",
		updated_at: "2024-01-04T10:00:00Z",
	},
	{
		id: 5,
		name: "Lazer",
		description: "Despesas com entretenimento e lazer.",
		icon: "",
		created_at: "2024-01-05T10:00:00Z",
		updated_at: "2024-01-05T10:00:00Z",
	},
	{
		id: 6,
		name: "Salario",
		description: "Salario recebido.",
		icon: "",
		created_at: "2024-01-06T10:00:00Z",
		updated_at: "2024-01-06T10:00:00Z",
	},
];

export const expenses = [
	{
		users_id: 1,
		categories_id: 3,
		name: "Plano de saude",
		description: "Plano de saude familiar",
		status: "pending",
		value: 1200.5,
		reference_date: "2024-09",
		due_date: "2024-01-05",
		created_at: "2023-12-01 10:00:00",
		updated_at: "2023-12-01 10:00:00",
	},
	{
		users_id: 1,
		categories_id: 3,
		name: "Compra de remedios",
		description: "Remedios para dor de cabeca",
		status: "paid",
		value: 200.75,
		reference_date: "2024-09",
		due_date: "2024-01-10",
		created_at: "2023-12-02 11:00:00",
		updated_at: "2024-01-11 12:00:00",
	},
];

export const revenues = [
	{
		users_id: 1,
		categories_id: 6, // UUID fornecido para a categoria
		name: "Salário",
		description: "Salário recebido no mês",
		value: 3000.0,
		reference_date: "2024-09-01",
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	{
		users_id: 1,
		categories_id: 6,
		name: "Freelance",
		description: "Pagamento por trabalho freelance",
		value: 1500.0,
		reference_date: "2024-09-01",
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
];

export const columns = [
	{
		title: "Descrição",
		className: "",
	},
	{
		title: "Status",
		className: "hidden md:table-cell text-center",
	},
	{
		title: "Data de vencimento",
		className: "hidden md:table-cell text-center",
	},
	{
		title: "Valor",
		className: "text-center",
	},
	{
		title: "Pagar",
		className: "text-center",
	},
	{
		title: "",
		className: "",
	},
];
