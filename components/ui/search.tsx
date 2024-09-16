"use client";

import { Search as SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./input";

export default function Search() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleFiltered = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}

		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div>
			<form className="ml-auto flex-1 sm:flex-initial mb-5">
				<div className="relative">
					<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Ex: Alimentação"
						className="pl-8"
						onChange={(e) => handleFiltered(e.target.value)}
						defaultValue={searchParams.get("query")?.toString()}
					/>
				</div>
			</form>
		</div>
	);
}
