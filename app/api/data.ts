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

export async function fetchExpenses(
	name: string,
	referenceDate: string,
	limit: number,
) {
	const limitPage = limit > 0 ? limit : null;
	try {
		const queryBase = `
      WITH filtered_expenses AS (
        SELECT expenses.*, categories.name AS category_name
        FROM expenses
        JOIN categories ON expenses.categories_id = categories.id
        WHERE TO_CHAR(expenses.reference_date, 'MM-YYYY') = $1
    `;

		// Condicional para adicionar filtro por nome, se necessário
		const queryWithName = name
			? `${queryBase} AND expenses.name ILIKE $2 )`
			: `${queryBase} )`;

		// Query completa com ordenação e paginação
		const finalQuery = `
      ${queryWithName}
      SELECT *, (SELECT COUNT(*) FROM filtered_expenses) AS total_expenses
      FROM filtered_expenses
      ORDER BY created_at DESC
      LIMIT $2;
    `;

		// Array de valores dinâmicos baseado na presença de "name"
		const values = name
			? [referenceDate, `%${name}%`, limitPage]
			: [referenceDate, limitPage];

		const data = await sql.query(finalQuery, values);

		const expenses = data.rows;
		const totalExpenses = expenses.length > 0 ? expenses[0].total_expenses : 0;

		return {
			expenses,
			totalExpenses,
		};
	} catch (error) {
		throw new Error(`Falha ao buscar despesas: ${error}`);
	}
}

export async function fetchLatestExpenses(referenceDate: string) {
	try {
		const data = await sql<Expenses>`
			SELECT expenses.*, categories.name AS category_name FROM expenses JOIN categories ON
			expenses.categories_id = categories.id
			WHERE TO_CHAR(expenses.reference_date, 'MM-YYYY') = ${referenceDate}
			ORDER BY expenses.created_at DESC LIMIT 5	
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
export async function fetchDashboardTotals(referenceDate: string) {
	try {
		const totalExpenses =
			await sql`SELECT SUM(value) AS total_value FROM expenses WHERE TO_CHAR(reference_date, 'MM-YYYY') = ${referenceDate};`;
		const totalPaidExpenses =
			await sql`SELECT SUM(value) AS total_value_paid FROM expenses WHERE TO_CHAR(reference_date, 'MM-YYYY') = ${referenceDate} AND status = 'paid';`;

		const totalRevenues = await sql`
			SELECT SUM(value) AS total_value FROM revenues WHERE TO_CHAR(reference_date, 'MM-YYYY') = ${referenceDate};
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
		let totalSaldo = 0;

		if (totalRevenues.rows[0].total_value !== null) {
			totalSaldo = totalRevenues.rows[0].total_value - totalValuePaidExpenses;
		}

		return {
			totalValueExpenses,
			totalValuePaidExpenses,
			totalValueRevenues,
			totalValuePendingExpenses,
			totalSaldo,
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
