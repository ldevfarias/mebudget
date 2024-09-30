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
import { HeaderCardClasses } from "../../../lib/utils";
import TableExpenses from "./components/table/table";
export default async function Page({
	searchParams,
}: { searchParams?: { query?: string; page?: string } }) {
	const query = searchParams?.query || "";
	const expenses = await fetchExpenses(query);

	return (
		<Card>
			<CardHeader className={HeaderCardClasses}>
				<div>
					<CardTitle>Lista de despesas</CardTitle>
					<CardDescription className="hidden md:inline">
						Todas as despesas cadastradas
					</CardDescription>
				</div>
				<NewAction
					classValue="ml-auto gap-1"
					label="Nova despesa"
					typeAction="newExpense"
				/>
			</CardHeader>
			<CardContent>
				<Search placeholder="Ex: Aluguel" />
				<TableExpenses expenses={expenses} />
			</CardContent>
		</Card>
	);
}
