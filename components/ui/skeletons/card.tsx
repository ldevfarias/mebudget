import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Skeleton } from "../skeleton";

type CardSkeletonProps = {
	typeCard: "revenue" | "expenses" | "paid" | "saldo";
};

export function CardSkeleton({ typeCard }: CardSkeletonProps) {
	return (
		<Card x-chunk="dashboard-01-chunk-0">
			<CardHeader className="flex flex-row space-y-0 pb-2">
				<CardTitle className="flex items-center gap-4 text-sm font-medium">
					<div>
						<Skeleton className="h-6 w-6 rounded-full" />
					</div>
					<div className="text-muted-foreground">
						<Skeleton className="h-5 w-20" />
					</div>

					{typeCard === "revenue" && <Skeleton className="h-9 w-9" />}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold grid grid-cols-3 gap-2">
					<div className="col-span-2">
						<Skeleton className="h-6 w-36" />
					</div>
					<Skeleton className="h-6 w-6 rounded-full" />
				</div>
				<div className="text-xs flex align-middle gap-2 mt-2">
					<Skeleton className="h-4 w-40" />
				</div>
			</CardContent>
		</Card>
	);
}
