import type { Categories } from "@/app/api/definitions";
import { getFirstTwoLetters } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../avatar";

export default function List({ categories }: { categories: Categories[] }) {
	return (
		<>
			{categories.map((category) => (
				<div key={category.id} className="flex items-center gap-4 mb-3">
					<Avatar className="hidden h-9 w-9 sm:flex">
						<AvatarFallback>{getFirstTwoLetters(category.name)}</AvatarFallback>
					</Avatar>
					<div className="grid gap-1">
						<p className="text-sm font-medium leading-none">{category.name}</p>
					</div>
				</div>
			))}
		</>
	);
}
