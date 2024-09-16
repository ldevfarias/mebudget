import type { Categories } from "@/app/api/definitions";

export default function List({ categories }: { categories: Categories[] }) {
	return (
		<>
			{categories.map((category) => (
				<div key={category.id} className="flex items-center gap-4 mb-3">
					<div className="grid gap-1">
						<p className="text-sm font-medium leading-none">{category.name}</p>
					</div>
				</div>
			))}
		</>
	);
}
