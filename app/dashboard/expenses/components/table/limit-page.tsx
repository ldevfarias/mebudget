"use client";
import clsx from "clsx";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Button } from "../../../../../components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../../../../../components/ui/dropdown-menu";

const limits = [
	{ label: "5", value: 5 },
	{ label: "10", value: 10 },
	{ label: "20", value: 20 },
	{ label: "Todos", value: 0 },
];

export default function LimitPage() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { push } = useRouter();

	const [toggle, setToggle] = useState(false);
	const [currentLimit, setCurrentLimit] = useState(limits[0].value);

	const updateURL = useCallback(
		(value: string) => {
			const params = new URLSearchParams(searchParams);
			params.delete("limit");

			params.set("limit", value);

			push(`${pathname}?${params.toString()}`);
		},
		[searchParams, pathname, push],
	);

	const handleSetLimit = (value: number) => {
		setCurrentLimit(value);

		updateURL(String(value));
	};

	return (
		<DropdownMenu onOpenChange={() => setToggle(!toggle)}>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<Filter className="h-5 w-5 mr-2" />
					<span>
						Exibir {currentLimit === 0 ? "todas" : currentLimit} despesas
					</span>
					{toggle ? (
						<ChevronUp className="h-4 w-4 ml-1 mt-1" />
					) : (
						<ChevronDown className="h-4 w-4 ml-1 mt-1" />
					)}
					<span className="sr-only">Toggle menu month</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{limits.map((item) => (
					<DropdownMenuItem
						key={item.label}
						className={clsx({ "font-bold": item.value === currentLimit })}
						onSelect={() => handleSetLimit(item.value)}
					>
						{item.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
