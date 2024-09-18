"use client";

import { createExpensesAction } from "@/app/api/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Loader2, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const expensesSchema = z.object({
	name: z
		.string()
		.min(5, "O nome da despesa é obrigatório")
		.max(100, "O nome não pode ter mais de 100 caracteres"),
	description: z.string().optional(),
	status: z.string().default("pending"),
	value: z
		.number()
		.min(0, "O valor deve ser maior que 0")
		.refine((v) => !Number.isNaN(v), { message: "Deve ser um número válido" }),
	dueDate: z.string(),
});
type ExpenseFormData = z.infer<typeof expensesSchema>;

export default function Form() {
	const [open, setOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		reset,
	} = useForm<ExpenseFormData>({
		mode: "onChange",
		resolver: zodResolver(expensesSchema),
	});

	const showToast = (message: string, type: "success" | "error") => {
		toast[type](message, {
			duration: 4000,
			position: "top-right",
		});
	};

	const onSubmit = async (form: ExpenseFormData) => {
		console.log("Dados do formulário:", form);
		try {
			const response = await createExpensesAction(form);
			showToast(response.message, response.success ? "success" : "error");
		} catch (error) {
			showToast("Erro ao criar despesa", "error");
		} finally {
			setOpen(false);
			reset();
		}
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					asChild
					size="sm"
					className="ml-auto gap-1"
					onClick={() => setOpen(true)}
				>
					<Link href="#">
						<Plus className="h-4 w-4" />
						Nova despesa
					</Link>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Nova despesa</SheetTitle>
					<SheetDescription>Adicione a despesa</SheetDescription>
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
						<div className="grid gap-2">
							<Label htmlFor="name">Descricao</Label>
							<Input
								id="name"
								type="text"
								{...register("description")}
								className={`mt-1 block w-full border ${
									errors.description ? "border-red-500" : "border-gray-300"
								} rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500`}
								aria-invalid={!!errors.description}
							/>
							{errors.description && (
								<p className="text-sm text-red-600">
									{errors.description.message}
								</p>
							)}
						</div>
						<div className="grid gap-2">
							<Label htmlFor="value">Valor</Label>
							<Input
								id="value"
								type="number"
								{...register("value", { valueAsNumber: true })}
							/>
							{errors.value && (
								<p className="text-sm text-red-600">{errors.value.message}</p>
							)}
						</div>
						<div className="grid gap-2">
							<Label htmlFor="dueDate">Data de Vencimento</Label>
							<Input id="dueDate" type="date" {...register("dueDate")} />
							{errors.dueDate && (
								<p className="text-sm text-red-600">{errors.dueDate.message}</p>
							)}
						</div>
						<div className="grid gap-2">
							<Label htmlFor="status">Status</Label>
							<RadioGroup defaultValue="pending" className="grid grid-cols-2">
								<div className="flex items-center space-x-2">
									<RadioGroupItem
										value="pending"
										id="pending"
										defaultChecked
										{...register("status")}
									/>
									<Label htmlFor="pending">Pendente</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem
										value="paid"
										id="paid"
										{...register("status")}
									/>
									<Label htmlFor="paid">Pago</Label>
								</div>
							</RadioGroup>
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
