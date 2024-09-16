export const categories = [
	{
		name: "Alimentação",
		description: "",
		icon: "",
		created_at: "2023-12-01 10:00:00",
		updated_at: "2023-12-01 10:00:00",
	},
	{
		name: "Investimento",
		description: "",
		icon: "",
		created_at: "2023-12-01 10:00:00",
		updated_at: "2023-12-01 10:00:00",
	},
	{
		name: "Casa",
		description: "",
		icon: "",
		created_at: "2023-12-01 10:00:00",
		updated_at: "2023-12-01 10:00:00",
	},
];

export const expenses = [
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a", // UUID do usuário
		categories_id: "9b22210b-0741-429f-b4ee-aced2e705488	",
		name: "Aluguel",
		description: "Pagamento do aluguel mensal",
		status: "Pendente",
		value: 1200.5,
		month: "Janeiro",
		due_date: "2024-01-05",
		created_at: "2023-12-01 10:00:00",
		updated_at: "2023-12-01 10:00:00",
	},
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a",
		categories_id: "9b22210b-0741-429f-b4ee-aced2e705488	",
		name: "Conta de luz",
		description: "Fatura de energia elétrica",
		status: "Pago",
		value: 200.75,
		month: "Janeiro",
		due_date: "2024-01-10",
		created_at: "2023-12-02 11:00:00",
		updated_at: "2024-01-11 12:00:00",
	},
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a",
		categories_id: "9b22210b-0741-429f-b4ee-aced2e705488",
		name: "Casa",
		description: "Assinatura mensal de internet",
		status: "Pendente",
		value: 150.99,
		month: "Fevereiro",
		due_date: "2024-02-01",
		created_at: "2024-01-01 09:00:00",
		updated_at: "2024-01-01 09:00:00",
	},
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a",
		categories_id: "4f700ebb-e25a-451f-981a-5313061b8cfe",
		name: "Investimento",
		description: "Novos investimentos na bolsa de valores",
		status: "Pago",
		value: 850.4,
		month: "Fevereiro",
		due_date: "2024-02-15",
		created_at: "2024-01-15 10:30:00",
		updated_at: "2024-02-16 11:30:00",
	},
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a",
		categories_id: "fc935609-d325-443c-a2e2-06afb9858f2d",
		name: "Alimentação",
		description: null,
		status: "Pendente",
		value: 300.0,
		month: "Março",
		due_date: "2024-03-05",
		created_at: "2024-02-20 08:30:00",
		updated_at: "2024-02-20 08:30:00",
	},
];

export const revenues = [
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a", // UUID fornecido para o usuário
		categories_id: "8b620b62-0be1-40e9-984d-0409808bbed5", // UUID fornecido para a categoria
		name: "Salário",
		description: "Salário recebido no mês",
		value: 3000.0,
		month: "Setembro",
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a", // UUID fornecido para o usuário
		categories_id: "8b620b62-0be1-40e9-984d-0409808bbed5", // UUID fornecido para a categoria
		name: "Freelance",
		description: "Pagamento por trabalho freelance",
		value: 1500.0,
		month: "Setembro",
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	{
		users_id: "410544b2-4001-4271-9855-fec4b6a6442a", // UUID fornecido para o usuário
		categories_id: "8b620b62-0be1-40e9-984d-0409808bbed5", // UUID fornecido para a categoria
		name: "Venda de Produto",
		description: "Receita de venda de produto",
		value: 800.0,
		month: "Setembro",
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
];
