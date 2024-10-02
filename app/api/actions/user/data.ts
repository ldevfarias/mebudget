import { sql } from "@vercel/postgres";

export async function alreadyExists(email: string) {
	try {
		const { rows } =
			await sql`SELECT * FROM users WHERE email = ${email} LIMIT 1`;
		return rows.length > 0 ? rows[0] : null;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch user data");
	}
}

export async function registerUser(
	name: string,
	email: string,
	status_signature: string,
) {
	try {
		// Verifica se o usuário já existe
		const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
		if (existingUser.rows.length > 0) {
			throw new Error("E-mail já cadastrado");
		}

		// Insere o novo usuário
		const result = await sql`
      INSERT INTO users (name, email, status_signature)
      VALUES (${name}, ${email}, ${status_signature})
      RETURNING *;
    `;

		return result.rows[0]; // Retorna o usuário cadastrado
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Falha ao cadastrar o usuário");
	}
}
