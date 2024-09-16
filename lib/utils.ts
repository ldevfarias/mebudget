import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
