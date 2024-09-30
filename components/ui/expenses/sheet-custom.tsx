"use client";
import ExpensesForm from "@/app/dashboard/expenses/components/form";
import { useAppManage } from "@/lib/context/AppManageContext";
import CategoryEditForm from "../categories/form-edit";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "../sheet";

export default function SheetCustom() {
	const { sheet, setOpenSheet, typeSheet } = useAppManage();
	const availableExpenseForms = ["newExpense", "editExpense"];

	return (
		<Sheet open={sheet} onOpenChange={() => setOpenSheet(false, typeSheet)}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Nova despesa</SheetTitle>
					<SheetDescription>Adicione a despesa</SheetDescription>
				</SheetHeader>
				{availableExpenseForms.includes(typeSheet) && <ExpensesForm />}
				{typeSheet === "editCategory" && <CategoryEditForm />}
			</SheetContent>
		</Sheet>
	);
}
