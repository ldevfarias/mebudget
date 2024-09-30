import type {
	Categories,
	CategoriesExpenseTotals,
	Expenses,
	Revenues,
} from "@/lib/types/definitions";
import type { QueryResult } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
import { isValidString } from "../../lib/utils";

export async function fetchCategories() {
	try {
		const data =
			await sql<Categories>`SELECT * FROM categories ORDER BY created_at DESC`;

		return data.rows;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch categories data.");
	}
}

export async function fetchFilteredCategories(name?: string) {
	try {
		let data: QueryResult<Categories>;

		const isValidName = name && isValidString(name);

		if (isValidName) {
			data = await sql<Categories>`
				SELECT id, name FROM categories WHERE name ILIKE ${`%${name}%`}
			`;
		} else {
			data =
				await sql<Categories>`SELECT id, name FROM categories ORDER BY name ASC`;
		}

		return data.rows;
	} catch (error) {
		console.error("Erro ao buscar categorias filtradas:", error);
		throw new Error(`Falha ao buscar categorias: ${error}`);
	}
}

export async function fetchExpenses(name?: string) {
	try {
		let data: QueryResult<Expenses>;
		const isValidName = name && isValidString(name);

		if (isValidName) {
			data = await sql<Expenses>`
				SELECT * FROM expenses WHERE name ILIKE ${`%${name}%`}
			`;
		} else {
			data = await sql<Expenses>`SELECT expenses.*, categories.name AS category_name
				FROM expenses
				JOIN categories ON expenses.categories_id = categories.id
				ORDER BY expenses.created_at DESC;`;
		}

		return data.rows;
	} catch (error) {
		throw new Error(`Falha ao buscar despesas: ${error}`);
	}
}

export async function fetchLatestExpenses() {
	try {
		const data = await sql<Expenses>`
			SELECT expenses.*, categories.name AS category_name FROM expenses JOIN categories ON
			expenses.categories_id = categories.id ORDER BY expenses.created_at DESC LIMIT 5	
		`;

		return data.rows;
	} catch (error) {
		console.error("Error: fetchLatestExpenses", error);
		throw new Error(`Falha ao buscar despesas: ${error}`);
	}
}

export async function fetchCategoryExpenseTotals() {
	try {
		const data = await sql<CategoriesExpenseTotals>`
			SELECT 
				categories.name AS category_name,
				SUM(expenses.value) AS total_value
			FROM 
				expenses
			JOIN 
				categories ON expenses.categories_id = categories.id
			GROUP BY 
				categories.name
			ORDER BY 
				total_value DESC
			LIMIT 6;
		`;

		return data.rows;
	} catch (error) {
		throw new Error(
			`Falha ao buscar totais de despesas por categoria: ${error}`,
		);
	}
}
export async function fetchDashboardTotals() {
	try {
		const totalExpenses =
			await sql`SELECT SUM(value) AS total_value FROM expenses;`;
		const totalPaidExpenses =
			await sql`SELECT SUM(value) AS total_value_paid FROM expenses WHERE status = 'paid';`;

		const totalRevenues = await sql`
			SELECT SUM(value) AS total_value FROM revenues;
		`;

		const data = await Promise.all([
			totalExpenses,
			totalPaidExpenses,
			totalRevenues,
		]);

		const totalValueExpenses = data[0].rows[0].total_value;
		const totalValuePaidExpenses = data[1].rows[0].total_value_paid;
		const totalValueRevenues = data[2].rows[0].total_value;
		const totalValuePendingExpenses =
			totalValueExpenses - totalValuePaidExpenses;

		return {
			totalValueExpenses,
			totalValuePaidExpenses,
			totalValueRevenues,
			totalValuePendingExpenses,
			totalSaldo: totalValueRevenues - totalValuePaidExpenses,
			totalFutureSaldo: totalValueRevenues - totalValuePendingExpenses,
		};
	} catch (error) {
		throw new Error(`Falha ao buscar totais de despesas pagas: ${error}`);
	}
}

export async function fetchRevenues() {
	try {
		const data = await sql<Revenues>`
			SELECT 
  			revenues.*, 
 			 	categories.name AS category_name,
  		SUM(revenues.value) OVER () AS total_revenue
			FROM revenues
			JOIN categories ON revenues.categories_id = categories.id
			ORDER BY revenues.created_at DESC;
		`;

		return data.rows;
	} catch (error) {
		throw new Error(`Falha ao buscar totais de receitas: ${error}`);
	}
}
