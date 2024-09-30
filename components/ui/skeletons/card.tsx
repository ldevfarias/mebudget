import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Skeleton } from "../skeleton";

export function CardSkeleton() {
	return (
		<Card x-chunk="dashboard-01-chunk-0">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">
					<Skeleton className="h-4 w-[120px]" />
				</CardTitle>
				<Skeleton className="h-6 w-6 rounded-full" />
			</CardHeader>
			<CardContent>
				<div>
					<Skeleton className="h-6 w-[200px]" />
				</div>
				<div className="gap-2 mt-2">
					<span>
						<Skeleton className="h-4 w-[200px]" />
					</span>
				</div>
			</CardContent>
		</Card>
		// <div
		// 	className={
		// 		"relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm"
		// 	}
		// >
		// 	<div className="flex p-4">
		// 		<div className="h-5 w-5 rounded-md bg-gray-200" />
		// 		<div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
		// 	</div>
		// 	<div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
		// 		<div className="h-7 w-20 rounded-md bg-gray-200" />
		// 	</div>
		// </div>
	);
}
