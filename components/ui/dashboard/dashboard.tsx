import { fetchCategories, fetchLatestExpenses } from "@/app/api/data";
import { CategoriesExpenses } from "@/app/dashboard/categories/components/categoriesExpenses";
import Form from "@/app/dashboard/expenses/components/form";
import TableExpenses from "@/app/dashboard/expenses/components/table/table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { showCurrentMonth } from "@/lib/utils";
import CardWrapper from "./card-wrapper";

export const description =
	"An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export async function Dashboard() {
	const expenses = await fetchLatestExpenses();
	const categories = await fetchCategories();

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-0">
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				<CardWrapper />
			</div>
			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
				<Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
					<CardHeader className="flex flex-row items-center">
						<div className="grid gap-2">
							<CardTitle>Despesas</CardTitle>
							<CardDescription>
								Lista as ultimas 5 despesas do mes:{" "}
								<b className="capitalize">{showCurrentMonth()}</b>
							</CardDescription>
						</div>
						<Form categories={categories} />
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
