// Expensive

// Customer

// Categories

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	createdAt: string;
	updatedAt: string;
};

export type Customer = {
	id: string;
	imageUrl: string;
	user: User;
	createdAt: string;
	updatedAt: string;
};

export type Revenues = {
	id: string;
	user: User;
	category: Categories;
	name: string;
	description?: string;
	value: string;
	month: string;
};

export type Categories = {
	id: number;
	name: string;
	description?: string;
	createdAt?: string;
	updatedAt?: string;
};

export type Expenses = {
	id: string;
	users_id: string;
	categories_id: number;
	category_name: string;
	name: string;
	description: string;
	status: string;
	value: string;
	reference_date: string;
	due_date: string;
	createdAt: string;
	updatedAt: string;
};

export type CategoriesExpenseTotals = {
	category_name: string;
	total_value: string;
};
