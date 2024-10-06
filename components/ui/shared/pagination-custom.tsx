import { Button } from "../button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "../pagination";

type PaginationCustomProps = {
	totalItems: number;
	itemsPerPage: number;
	handlePagination: (page: number) => void;
};

export default function PaginationCustom({
	totalItems,
	itemsPerPage,
	handlePagination,
}: PaginationCustomProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const renderPageButtons = () => {
		const buttons = [];
		for (let i = 0; i < totalPages; i++) {
			buttons.push(
				<PaginationItem key={i}>
					<Button type="button" onClick={() => handlePagination(i + 1)}>
						{i + 1}
					</Button>
				</PaginationItem>,
			);
		}
		return buttons;
	};

	return (
		<Pagination className="flex justify-end pt-8">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>

				{renderPageButtons()}

				{/* <PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem> */}
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
