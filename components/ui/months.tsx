"use client";

import clsx from "clsx";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Button } from "./button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./dropdown-menu";

const months = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

export default function Months() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { push } = useRouter();

	const [toggle, setToggle] = useState(false);
	const [currentMonth, setCurrentMonth] = useState<string>(
		months[new Date().getMonth()],
	);

	const updateURL = useCallback(
		(value: string) => {
			const params = new URLSearchParams(searchParams);
			params.delete("referenceDate");

			params.set("referenceDate", value);

			push(`${pathname}?${params.toString()}`);
		},
		[searchParams, pathname, push],
	);

	const handleSetMonth = (month: number) => {
		const monthYear = `${String(month).padStart(2, "0")}-${new Date().getFullYear()}`;

		setCurrentMonth(months[month - 1]);
		updateURL(monthYear);
	};

	return (
		<form className="ml-auto flex-1 sm:flex-initial">
			<DropdownMenu onOpenChange={() => setToggle(!toggle)}>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						<Calendar className="h-5 w-5 mr-2" />
						<span>{currentMonth}</span>
						{toggle ? (
							<ChevronUp className="h-4 w-4 ml-1 mt-1" />
						) : (
							<ChevronDown className="h-4 w-4 ml-1 mt-1" />
						)}
						<span className="sr-only">Toggle menu month</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{months.map((month, index) => (
						<DropdownMenuItem
							key={month}
							className={clsx({ "font-bold": month === currentMonth })}
							onSelect={() => handleSetMonth(index + 1)}
						>
							{month}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</form>
	);
}
