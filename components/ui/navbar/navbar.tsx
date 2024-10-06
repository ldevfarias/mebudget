"use client";

import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "../button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../dropdown-menu";
import Months from "../months";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import NavItems from "./nav-items";

const CustomAvatar = dynamic(() => import("./custom-avatar"), { ssr: false });
const ButtonLogout = dynamic(() => import("../button-logout"), { ssr: false });

export default function Navbar() {
	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<NavItems />
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" aria-describedby="sheet-menu">
					<nav id="sheet-menu" className="grid gap-6 text-lg font-medium">
						<NavItems />
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<Months />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="rounded-full">
							<CustomAvatar />
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
