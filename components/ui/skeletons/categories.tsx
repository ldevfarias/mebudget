import { getRandomNumber } from "@/lib/utils";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../card";
import { Skeleton } from "../skeleton";

const categoriesLimit = 5;

export default function CategoriesSkeleton() {
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
				{[...Array(categoriesLimit)].map((_, index) => (
					<div
						key={`${index}-${getRandomNumber}`}
						className="flex items-center gap-4"
					>
						<div className="grid gap-1">
							<Skeleton className="h-4 w-40" />
						</div>
						<div className="ml-auto font-medium">
							<Skeleton className="h-4 w-20" />
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
