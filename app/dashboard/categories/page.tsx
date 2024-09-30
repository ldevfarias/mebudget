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

export default async function Page({
	searchParams,
}: { searchParams?: { query?: string; page?: string } }) {
	const query = searchParams?.query || "";
	const categories = await fetchFilteredCategories(query);

	return (
		<Card>
			<CardHeader className="grid grid-cols-2 gap-4 items-center">
				<div>
					<CardTitle>Lista de categorias</CardTitle>
					<CardDescription className="hidden md:inline">
						As últimas categorias cadastradas serão exibidas primeiro
					</CardDescription>
				</div>
				<CategoryForm />
			</CardHeader>
			<CardContent>
				<Search placeholder="Ex: Alimentação" />
				<List categories={categories} />
			</CardContent>
		</Card>
	);
}
