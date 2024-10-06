import { categories, expenses, revenues } from "@/lib/mock/data";
import { db } from "@vercel/postgres";

const client = await db.connect();

// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) UNIQUE NOT NULL,
//   status_signature VARCHAR(50) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

async function seedCategories() {
	await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE,
        description TEXT NULL,
        icon VARCHAR(30) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

	const insertedCategories = await Promise.all(
		categories.map(async (category) => {
			return client.sql`
          INSERT INTO categories (name, description, icon, created_at, updated_at)
          VALUES (${category.name}, ${category.description}, ${category.icon}, ${category.created_at}, ${category.updated_at})
          ON CONFLICT (name) DO NOTHING;
        `;
		}),
	);

	return insertedCategories;
}

async function createExpensesTable() {
	await client.sql`
    CREATE TABLE IF NOT EXISTS expenses (
      id SERIAL PRIMARY KEY,                
      users_id INT NOT NULL,                                      
      categories_id INT NOT NULL,
      name VARCHAR(120) NOT NULL,                       
      description TEXT NULL,                   
      status VARCHAR(30) NOT NULL,                      
      value DECIMAL(10, 2) NOT NULL,                    
      reference_date DATE NOT NULL,                      
      due_date DATE NOT NULL,                          
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (users_id) REFERENCES users(id),
      FOREIGN KEY (categories_id) REFERENCES categories(id)
    );
  `;

	// Insere dados na tabela expenses com a nova coluna categories_id
	const insertedExpenses = await Promise.all(
		expenses.map(async (expense) => {
			const {
				users_id,
				categories_id,
				name,
				description,
				status,
				value,
				reference_date,
				due_date,
				created_at,
				updated_at,
			} = expense;

			return client.sql`
        INSERT INTO expenses (users_id, categories_id, name, description, status, value, month, due_date, created_at, updated_at) 
        VALUES (
          ${users_id}, 
          ${categories_id}, 
          ${name}, 
          ${description}, 
          ${status}, 
          ${value}, 
          ${reference_date}, 
          ${due_date}, 
          ${created_at}, 
          ${updated_at}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
		}),
	);

	return insertedExpenses;
}

async function createRevenuesTable() {
	// Cria a tabela expenses com a nova coluna categories_id
	await client.sql`
    CREATE TABLE IF NOT EXISTS revenues (
      id SERIAL PRIMARY KEY,                
      users_id INT NOT NULL,                                      
      categories_id INT NOT NULL,
      name VARCHAR(120) NOT NULL,                       
      description VARCHAR(120) NULL,                
      value DECIMAL(10, 2) NOT NULL,                    
      reference_date DATE NOT NULL,                          
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (users_id) REFERENCES users(id),
      FOREIGN KEY (categories_id) REFERENCES categories(id)
  );`;

	// Insere dados na tabela expenses com a nova coluna categories_id
	const insertedRevenues = await Promise.all(
		revenues.map(async (revenue) => {
			return client.sql`
        INSERT INTO revenues (users_id, categories_id, name, description, value, month, created_at, updated_at) 
        VALUES (
          ${revenue.users_id}, 
          ${revenue.categories_id},
          ${revenue.name}, 
          ${revenue.description}, 
          ${revenue.value}, 
          ${revenue.reference_date},
          ${revenue.created_at}, 
          ${revenue.updated_at}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
		}),
	);

	return insertedRevenues;
}

export async function GET() {
	try {
		await client.sql`BEGIN`;
		// await seedCategories();
		// await createExpensesTable();
		await createRevenuesTable();
		await client.sql`COMMIT`;

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}
