import { showCurrentMonth } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../card";
import { Skeleton } from "../skeleton";
import { CardSkeleton } from "./card";
import CategoriesSkeleton from "./categories";
import TableExpensesSkeleton from "./table-expense";

export default function DashboardSkeleton() {
	return (
		<>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<CardSkeleton typeCard="revenue" />
				<CardSkeleton typeCard="expenses" />
				<CardSkeleton typeCard="paid" />
				<CardSkeleton typeCard="saldo" />
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
						<Skeleton className="h-8 w-20 ml-auto gap-1" />
					</CardHeader>
					<CardContent>
						<TableExpensesSkeleton />
					</CardContent>
				</Card>
				<CategoriesSkeleton />
			</div>
		</>
	);
}
