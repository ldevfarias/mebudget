"use client";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { Categories } from "@/lib/types/definitions";
import { useEffect, useState } from "react";

interface CategorySelectProps {
	defaultValue: string;
	onChange: (value: string) => void;
}
export default function CategorySelect({
	defaultValue,
	onChange,
}: CategorySelectProps) {
	const [categories, setCategories] = useState<Categories[]>([]);

	useEffect(() => {
		const listCategories = async () => {
			try {
				const response = await fetch("/api/categories");
				const data = await response.json();
				setCategories(data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};
		listCategories();
	}, []);

	const handleValueChange = (val: string) => {
		onChange(val);
	};

	return (
		<div className="grid gap-2">
			<Label htmlFor="category">Selecione uma categoria</Label>
			<Select value={defaultValue} onValueChange={handleValueChange}>
				<SelectTrigger>
					<SelectValue placeholder="Escolha uma categoria" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{categories.map((category) => (
							<SelectItem key={String(category.id)} value={String(category.id)}>
								{category.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
