import { fetchExpenses } from "@/app/api/data";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Search from "@/components/ui/search";
import { HeaderCardClasses } from "../../../lib/utils";
import Form from "./components/form";
import TableExpenses from "./components/table";
export default async function Page({
	searchParams,
}: { searchParams?: { query?: string; page?: string } }) {
	const query = searchParams?.query || "";
	const expenses = await fetchExpenses(query);

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
			<Card>
				<CardHeader className={HeaderCardClasses}>
					<div>
						<CardTitle>Lista de despesas</CardTitle>
						<CardDescription className="hidden md:inline">
							Todas as despesas cadastradas
						</CardDescription>
					</div>
					<Form />
				</CardHeader>
				<CardContent>
					<Search placeholder="Ex: Aluguel" />
					<TableExpenses expenses={expenses} />
				</CardContent>
			</Card>
		</div>
	);
}
