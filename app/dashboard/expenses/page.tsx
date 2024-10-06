import { fetchExpenses } from "@/app/api/data";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import NewAction from "@/components/ui/newAction";
import Search from "@/components/ui/search";
import { HeaderCardClasses, getCurrentMonthYear } from "@/lib/utils";
import LimitPage from "./components/table/limit-page";
import TableExpenses from "./components/table/table";

type ExpensePageProps = {
	searchParams?: {
		query?: string;
		page?: string;
		referenceDate: string;
		limit?: string;
	};
};
export default async function Page({ searchParams }: ExpensePageProps) {
	const query = searchParams?.query ?? "";
	const referenceDate = searchParams?.referenceDate ?? getCurrentMonthYear();
	const limitParam = searchParams?.limit ?? 5;
	const limit = Number(limitParam);

	const { expenses, totalExpenses } = await fetchExpenses(
		query,
		referenceDate,
		limit,
	);

	return (
		<Card>
			<CardHeader className={HeaderCardClasses}>
				<div>
					<CardTitle>Lista de despesas</CardTitle>
					<CardDescription className="hidden md:inline">
						Aqui são exibidas as despesas cadastradas no mês e ano:{" "}
						<span className="text-muted-foreground font-semibold">
							{referenceDate}
						</span>
					</CardDescription>
				</div>
				<NewAction
					classValue="ml-auto gap-1 hidden md:block"
					label="Nova despesa"
					typeAction="newExpense"
				/>
				<NewAction
					classValue="ml-auto gap-1 block md:hidden"
					label=""
					typeAction="newExpense"
				/>
			</CardHeader>
			<CardContent>
				<div className="flex justify-start mb-5">
					<LimitPage />
				</div>
				<Search placeholder="Ex: Aluguel" />
				<TableExpenses expenses={expenses} totalItems={totalExpenses} />
			</CardContent>
		</Card>
	);
}
