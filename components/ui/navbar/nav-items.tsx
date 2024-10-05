"use client";

import clsx from "clsx";
import { Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const navItems = [
	{ name: "Dashboard", href: "/dashboard" },
	{ name: "Despesas", href: "/dashboard/expenses" },
	{ name: "Categorias", href: "/dashboard/categories" },
];

export default function NavItems() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const referenceDate = searchParams.get("referenceDate") ?? "";

	const renderedNavItems = useMemo(() => {
		return navItems.map((item) => {
			const href = referenceDate
				? `${item.href}?referenceDate=${referenceDate}`
				: item.href;

			return (
				<Link
					key={item.name}
					href={href}
					className={clsx(
						"text-muted-foreground",
						pathname === item.href && "text-black font-bold",
					)}
				>
					{item.name}
				</Link>
			);
		});
	}, [pathname, referenceDate]);

	return (
		<>
			<Link
				href="/dashboard"
				className="flex items-center gap-2 text-lg font-semibold md:text-base"
			>
				<Wallet className="h-6 w-6" />
				<span className="sr-only">MeBudget Icon</span>
			</Link>
			{renderedNavItems}
		</>
	);
}
