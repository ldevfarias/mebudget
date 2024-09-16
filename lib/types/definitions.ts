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

export type Categories = {
	id: string;
	name: string;
	description?: string;
	icon?: string;
	createdAt: string;
	updatedAt: string;
};

export type Expenses = {
	id: string;
	customerId: string;
	categoryId: string;
	name: string;
	description: string;
	amount: number;
	currentMonth: string;
	dueDate: string;
	createdAt: string;
	updatedAt: string;
};
