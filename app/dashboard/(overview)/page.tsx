import { fetchLatestExpenses } from "@/app/api/data";
import { CategoriesExpenses } from "@/app/dashboard/categories/components/categoriesExpenses";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import CardWrapper from "@/components/ui/dashboard/card-wrapper";
import NewAction from "@/components/ui/newAction";
import UserName from "@/components/ui/user";
import { showCurrentMonth } from "@/lib/utils";
import TableExpenses from "../expenses/components/table/table";

export default async function Page() {
	const expenses = await fetchLatestExpenses();

	return (
		<main className="flex flex-1 flex-col gap-2 md:gap-4 md:p-0">
			<UserName />

			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				<CardWrapper />
			</div>

			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
				<Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
					<CardHeader className="flex flex-row items-center">
						<div className="grid gap-2">
							<CardTitle>Despesas</CardTitle>
							<CardDescription>
								Lista as ultimas 5 despesas do mês:{" "}
								<b className="capitalize">{showCurrentMonth()}</b>
							</CardDescription>
						</div>
						<NewAction
							classValue="ml-auto gap-1"
							label="Nova despesa"
							typeAction="newExpense"
						/>
					</CardHeader>
					<CardContent>
						<TableExpenses expenses={expenses} />
					</CardContent>
				</Card>
				<CategoriesExpenses />
			</div>
		</main>
	);
}
