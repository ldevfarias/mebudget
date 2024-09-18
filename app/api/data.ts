import { Expenses } from "@/lib/types/definitions";
import type { QueryResult } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
import { isValidString } from "../../lib/utils";
import type { Categories } from "./definitions";

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
				SELECT name FROM categories WHERE name ILIKE ${`%${name}%`}
			`;
		} else {
			data =
				await sql<Categories>`SELECT name FROM categories ORDER BY created_at DESC`;
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
			data =
				await sql<Expenses>`SELECT * FROM expenses ORDER BY created_at DESC`;
		}

		return data.rows;
	} catch (error) {
		throw new Error(`Falha ao buscar despesas: ${error}`);
	}
}
