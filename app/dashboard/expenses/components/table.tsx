import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Expenses } from "@/lib/types/definitions";

export default function TableExpenses({ expenses }: { expenses: Expenses[] }) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Nome</TableHead>
					<TableHead className="hidden md:table-cell">Categoria</TableHead>
					<TableHead className="hidden md:table-cell">Status</TableHead>
					<TableHead className="hidden md:table-cell">Data</TableHead>
					<TableHead className="text-right">Valor</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{expenses.map((expense) => (
					<TableRow key={expense.id}>
						<TableCell>
							<div className="font-medium">{expense.name}</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								{expense.description}
							</div>
						</TableCell>
						<TableCell className="hidden md:table-cell">
							{expense.categoryId}
						</TableCell>
						<TableCell className="hidden md:table-cell">pendente</TableCell>
						<TableCell className="hidden md:table-cell">
							{expense.dueDate}
						</TableCell>
						<TableCell className="text-right">{expense.amount}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
