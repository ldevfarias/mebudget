"use client";

import clsx from "clsx";
import {
	Calendar,
	ChevronDown,
	CircleUser,
	Menu,
	Package2,
	Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../button";
import ButtonLogout from "../button-logout";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";

const navItems = [
	{ name: "Dashboard", href: "/dashboard" },
	{ name: "Despesas", href: "/dashboard/expenses" },
	{ name: "Categorias", href: "/dashboard/categories" },
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<Link
					href="#"
					className="flex items-center gap-2 text-lg font-semibold md:text-base"
				>
					<Wallet className="h-6 w-6" />
					<span className="sr-only">MyBudget Icon</span>
				</Link>
				{navItems.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className={clsx(
							"text-muted-foreground",
							pathname === item.href && "text-black font-bold",
						)}
					>
						{item.name}
					</Link>
				))}
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="#"
							className="flex items-center gap-2 text-lg font-semibold"
						>
							<Package2 className="h-6 w-6" />
							<span className="sr-only">Acme Inc</span>
						</Link>
						<Link href="#" className="hover:text-foreground">
							Dashboard
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							Despesas
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							Categorias
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<form className="ml-auto flex-1 sm:flex-initial">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								<Calendar className="h-5 w-5 mr-2" />
								<span>Janeiro</span>
								<ChevronDown className="h-4 w-4 ml-1 mt-1" />
								<span className="sr-only">Toggle menu month</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>Fevereiro</DropdownMenuItem>
							<DropdownMenuItem>Março</DropdownMenuItem>
							<DropdownMenuItem>Abril</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</form>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="rounded-full">
							<CircleUser className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<ButtonLogout />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
