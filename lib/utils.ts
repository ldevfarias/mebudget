import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export const expenseStatus = {
	pending: {
		label: "Pendente",
	},
	paid: {
		label: "Pago",
	},
};

export const HeaderCardClasses = "grid grid-cols-2 gap-4 items-center";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getFirstTwoLetters(name: string) {
	return name.substring(0, 2).toUpperCase();
}

export function isValidString(value: string) {
	return value && typeof value === "string" && value.trim() !== "";
}

export function showCurrentMonth() {
	return new Date().toLocaleDateString("pt-BR", { month: "long" });
}

export function transformDateToBR(value: string) {
	const date = new Date(value);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

export function formatDate(date: Date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

export function formatToBRL(value: number) {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(value);
}

export function parseBRLToNumber(value: string) {
	const number = Number(value?.replace(/\D/g, "")) / 100;
	return number;
}

export function translateExpenseStatus(status: string) {
	return expenseStatus[status as keyof typeof expenseStatus].label;
}

export function showToast(message: string, type: "success" | "error") {
	return toast[type](message, {
		duration: 4000,
		position: "top-right",
	});
}

export function removeCharactersNonNumeric(value: string) {
	return value.replace(/[^\d,.-]/g, "");
}
