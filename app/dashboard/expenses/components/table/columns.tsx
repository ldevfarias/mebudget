import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { columns } from "@/lib/mock/data";
import clsx from "clsx";

export default function TableColumns() {
	return (
		<TableHeader>
			<TableRow>
				{columns.map((column) => (
					<TableHead key={column.title} className={clsx(column.className)}>
						{column.title}
					</TableHead>
				))}
			</TableRow>
		</TableHeader>
	);
}
