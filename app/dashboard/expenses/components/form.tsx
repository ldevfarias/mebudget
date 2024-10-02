"use client";

import {
	createExpensesAction,
	updateExpensesAction,
} from "@/app/api/actions/expenses/action";
import { Button } from "@/components/ui/button";
import CategorySelect from "@/components/ui/categories/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SheetFooter } from "@/components/ui/sheet";
import { useAppManage } from "@/lib/context/AppManageContext";
// biome-ignore lint/style/useImportType: <explanation>
import { ExpenseFormData, expensesSchema } from "@/lib/schemas/expense";
import { formatDate, parseBRLToNumber, showToast } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

export default function ExpensesForm() {
	const { setOpenSheet, typeSheet, expense } = useAppManage();
	const title = typeSheet === "newExpense" ? "Adicionar" : "Atualizar";

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		setValue,
		watch,
		reset,
	} = useForm<ExpenseFormData>({
		mode: "onChange",
		resolver: zodResolver(expensesSchema),
		defaultValues: {
			categoryId:
				typeSheet === "editExpense" && expense
					? String(expense.categories_id)
					: "",
		},
	});

	const onSubmit = async (data: ExpenseFormData) => {
		console.log("data: ", data);

		const isNewExpense = typeSheet === "newExpense";
		try {
			const response = isNewExpense
				? await createExpensesAction(data)
				: await updateExpensesAction(data, expense ? expense.id : "");

			showToast(response.message, response.success ? "success" : "error");
		} catch (error) {
			showToast("Erro ao criar despesa", "error");
		} finally {
			setOpenSheet(false, typeSheet);
			reset();
		}
	};

	useEffect(() => {
		if (typeSheet === "newExpense") {
			reset();
		} else if (typeSheet === "editExpense" && expense) {
			setValue("name", expense.name);
			setValue("dueDate", formatDate(new Date(expense.due_date)));
			setValue("value", parseBRLToNumber(expense.value));
			setValue("status", expense.status);
		}
	}, [reset, setValue, typeSheet, expense]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="grid gap-4 py-4">
				<div className="grid gap-2">
					<Label htmlFor="name">Descrição</Label>
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
					<CategorySelect
						defaultValue={watch("categoryId" || "")}
						onChange={(value) => setValue("categoryId", value)}
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="value">Valor</Label>
					<NumericFormat
						thousandSeparator="."
						decimalSeparator=","
						prefix="R$ "
						onValueChange={(values) =>
							setValue("value", values.floatValue || 0)
						}
						value={watch("value") || 0}
						allowNegative={false}
						decimalScale={2}
						fixedDecimalScale
						className="h-9 bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500"
					/>
					{errors.value && (
						<p className="text-sm text-red-600">{errors.value.message}</p>
					)}
				</div>
				<div className="grid gap-2">
					<Label htmlFor="dueDate">Data de Vencimento</Label>
					<Input
						id="dueDate"
						type="date"
						{...register("dueDate")}
						value={watch("dueDate") || ""}
						onChange={(e) => setValue("dueDate", e.target.value)}
					/>
					{errors.dueDate && (
						<p className="text-sm text-red-600">{errors.dueDate.message}</p>
					)}
				</div>
				<div className="grid gap-2">
					<Label htmlFor="status">Status</Label>
					<RadioGroup
						defaultValue="pending"
						className="grid grid-cols-2"
						value={watch("status")}
						onValueChange={(value) => setValue("status", value)}
					>
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
							<RadioGroupItem value="paid" id="paid" {...register("status")} />
							<Label htmlFor="paid">Pago</Label>
						</div>
					</RadioGroup>
				</div>
			</div>
			<SheetFooter>
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
					{title}
				</Button>
			</SheetFooter>
		</form>
	);
}
