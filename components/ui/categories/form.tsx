"use client";

import { createCategoryAction } from "@/app/api/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Loader2, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../sheet";

const categorySchema = z.object({
	name: z
		.string()
		.min(5, "O nome da categoria é obrigatório")
		.max(50, "O nome não pode ter mais de 50 caracteres"),
});

type CategoryFormData = z.infer<typeof categorySchema>;

export default function CategoryForm() {
	const [open, setOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		reset,
	} = useForm<CategoryFormData>({
		mode: "onChange",
		resolver: zodResolver(categorySchema),
	});

	const showToast = (message: string, type: "success" | "error") => {
		toast[type](message, {
			duration: 4000,
			position: "top-right",
		});
	};

	const onSubmit = async (form: CategoryFormData) => {
		try {
			const response = await createCategoryAction(form);

			showToast(response.message, response.success ? "success" : "error");
		} catch (error) {
			showToast("Erro ao criar categoria", "error");
		} finally {
			setOpen(false);
			reset();
		}
	};

	return (
		<Sheet open={open}>
			<SheetTrigger asChild>
				<Button
					asChild
					size="sm"
					className="ml-auto gap-1"
					onClick={() => setOpen(true)}
				>
					<Link href="#">
						<Plus className="h-4 w-4" />
						Nova categoria
					</Link>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Nova despesa</SheetTitle>
					<SheetDescription>Adicione a categoria</SheetDescription>
				</SheetHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid gap-4 py-4">
						<div className="grid gap-2">
							<Label htmlFor="name">Nome</Label>
							<Input
								id="name"
								type="text"
								{...register("name")}
								className={`mt-1 block w-full border ${
									errors.name ? "border-red-500" : "border-gray-300"
								} rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500`}
								aria-invalid={!!errors.name}
							/>
							{errors.name && (
								<p className="text-sm text-red-600">{errors.name.message}</p>
							)}
						</div>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button
								type="submit"
								className="w-full"
								disabled={!isValid || isSubmitting}
							>
								<Loader2
									className={clsx("mr-2 h-4 w-4 animate-spin", {
										hidden: !isSubmitting,
									})}
								/>
								Cadastrar
							</Button>
						</SheetClose>
					</SheetFooter>
				</form>
			</SheetContent>
		</Sheet>
	);
}
