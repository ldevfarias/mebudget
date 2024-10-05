import { fetchCategoryExpenseTotals } from "@/app/api/data";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import EmptyRecords from "@/components/ui/empty-records";
import { formatToBRL, parseBRLToNumber } from "@/lib/utils";
import Link from "next/link";

export async function CategoriesExpenses() {
	const categoriesWithValue = await fetchCategoryExpenseTotals();

	return (
		<Card x-chunk="dashboard-01-chunk-5">
			<CardHeader>
				<CardTitle>
					<Link
						href="/dashboard/categories"
						className="hover:underline hover:text-blue-500"
					>
						Categorias
					</Link>
					<CardDescription>
						Exibe as categorias com a soma anual das despesas.
					</CardDescription>
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-8">
				{categoriesWithValue.map((category) => (
					<div key={category.category_name} className="flex items-center gap-4">
						<div className="grid gap-1">
							<p className="text-sm font-medium leading-none">
								{category.category_name}
							</p>
						</div>
						<div className="ml-auto font-medium">
							+{formatToBRL(parseBRLToNumber(category.total_value))}
						</div>
					</div>
				))}

				{!categoriesWithValue.length && (
					<EmptyRecords message="Nenhuma soma de categorias encontrada, pois não há despesas cadastradas." />
				)}
			</CardContent>
		</Card>
	);
}
