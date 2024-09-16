import { fetchFilteredCategories } from "@/app/api/data";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import CategoryForm from "@/components/ui/categories/form";
import List from "@/components/ui/categories/list";
import Search from "@/components/ui/search";
import { HeaderCardClasses } from "@/lib/utils";

export default async function Page({
	searchParams,
}: { searchParams?: { query?: string; page?: string } }) {
	const query = searchParams?.query || "";
	const categories = await fetchFilteredCategories(query);

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
			<Card>
				<CardHeader className={HeaderCardClasses}>
					<div>
						<CardTitle>Lista de categorias</CardTitle>
						<CardDescription className="hidden md:inline">
							As últimas categorias cadastradas serão exibidas primeiro
						</CardDescription>
					</div>
					<CategoryForm />
				</CardHeader>
				<CardContent>
					<Search />
					<List categories={categories} />
				</CardContent>
			</Card>
		</div>
	);
}
