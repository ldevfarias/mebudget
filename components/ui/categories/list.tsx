"use client";
import { useAppManage } from "@/lib/context/AppManageContext";
import type { Categories } from "@/lib/types/definitions";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../button";

export default function List({ categories }: { categories: Categories[] }) {
	const { setDialogOpen, setOpenSheet, setCategoryItem } = useAppManage();

	const handleEdit = (category: Categories) => {
		console.log(`Edit item ${category.id}`);
		setOpenSheet(true, "editCategory");
		setCategoryItem(category);
	};

	const handleDelete = (id: number) => {
		console.log(`Delete item ${id}`);
		setDialogOpen(true, "remove", "category", String(id));
	};

	return (
		<ul className="space-y-2">
			{categories.map((category) => (
				<li
					key={category.id}
					className="flex items-center justify-between hover:bg-gray-50 rounded-sm p-1"
				>
					<p className="text-sm font-medium leading-none">{category.name}</p>
					<div className="space-x-2">
						<Button
							variant="outline"
							size="icon"
							onClick={() => handleEdit(category)}
						>
							<Pencil className="h-4 w-4" />
							<span className="sr-only">Edit</span>
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={() => handleDelete(category.id)}
						>
							<Trash2 className="h-4 w-4" />
							<span className="sr-only">Delete</span>
						</Button>
					</div>
				</li>
			))}
		</ul>
	);
}
