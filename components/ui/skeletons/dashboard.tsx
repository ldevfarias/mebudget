import { CardSkeleton } from "./card";
import TableExpensesSkeleton from "./table-expense";

export default function DashboardSkeleton() {
	return (
		<>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
			</div>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				{/* <RevenueChartSkeleton />
        <LatestInvoicesSkeleton /> */}
				<TableExpensesSkeleton />
			</div>
		</>
	);
}
