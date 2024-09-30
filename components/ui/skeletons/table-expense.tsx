"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { columns } from "@/lib/mock/data";
import clsx from "clsx";
import { Skeleton } from "../skeleton";

export default function TableExpensesSkeleton() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{columns.map((column) => (
						<TableHead key={column.title} className={clsx(column.className)}>
							{column.title}
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>
						<div className="font-medium">
							<Skeleton className="h-4 w-[250px]" />
						</div>
						<div className="hidden text-sm text-muted-foreground md:inline">
							<Skeleton className="h-4 w-[250px] mt-2" />
						</div>
					</TableCell>
					<TableCell className="hidden md:table-cell">
						<Skeleton className="h-4 w-[130px]" />
					</TableCell>
					<TableCell className="hidden md:table-cell text-center">
						<Skeleton className="h-4 w-[100px]" />
					</TableCell>
					<TableCell className="hidden md:table-cell text-center">
						<Skeleton className="h-4 w-[100px]" />
					</TableCell>
					<TableCell className="text-center">
						<Skeleton className="h-4 w-[100px]" />
					</TableCell>
					<TableCell>
						<div className="flex justify-center gap-2">
							<Skeleton className="h-[40px] w-[50px] rounded-xl" />
							<Skeleton className="h-[40px] w-[50px] rounded-xl" />
						</div>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
