"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useAppManage } from "@/lib/context/AppManageContext";
import type { Expenses } from "@/lib/types/definitions";
import {
	formatToBRL,
	parseBRLToNumber,
	transformDateToBR,
	translateExpenseStatus,
} from "@/lib/utils";
import clsx from "clsx";
import { Pencil, Trash2 } from "lucide-react";
import TableColumns from "./columns";

export default function TableExpenses({ expenses }: { expenses: Expenses[] }) {
	const { setDialogOpen, setOpenSheet, setExpenses } = useAppManage();

	const updateExpense = (expense: Expenses) => {
		setOpenSheet(true, "editExpense");
		setExpenses(expense);
	};

	const handleRemoveDialog = (id: string) => {
		setDialogOpen(true, "remove", "expense", id);
	};

	const handlePaid = () => {
		console.log("paid");
	};

	return (
		<Table>
			<TableColumns />
			<TableBody>
				{expenses.map((expense) => (
					<TableRow key={expense.id}>
						<TableCell>
							<div className="font-medium">{expense.name}</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								{expense.description}
							</div>
						</TableCell>
						<TableCell className="hidden md:table-cell text-center">
							<Badge
								variant="outline"
								className={clsx(
									"text-white",
									expense.status === "paid" ? "bg-green-700" : "bg-red-700",
								)}
							>
								{translateExpenseStatus(expense.status)}
							</Badge>
						</TableCell>
						<TableCell className="hidden md:table-cell text-center">
							{transformDateToBR(expense.due_date)}
						</TableCell>
						<TableCell className="text-center">
							{formatToBRL(parseBRLToNumber(expense.value))}
						</TableCell>
						<TableCell className="text-center">
							<Switch id="airplane-mode" onCheckedChange={handlePaid} />
						</TableCell>
						<TableCell>
							<div className="flex justify-center gap-2">
								<Button
									variant="outline"
									onClick={() => updateExpense(expense)}
								>
									<Pencil className="h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									onClick={() => handleRemoveDialog(expense.id)}
								>
									<Trash2 className="h-4 w-4" />
								</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
