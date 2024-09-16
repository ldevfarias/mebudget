import {
	Calendar,
	ChevronDown,
	CircleUser,
	Menu,
	Package2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";

export default function Navbar() {
	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<Link
					href="#"
					className="flex items-center gap-2 text-lg font-semibold md:text-base"
				>
					<Package2 className="h-6 w-6" />
					<span className="sr-only">MyBudget Icon</span>
				</Link>
				<Link
					href="/dashboard/"
					className="text-foreground transition-colors hover:text-foreground"
				>
					Dashboard
				</Link>
				<Link
					href="/dashboard/expenses"
					className="text-muted-foreground transition-colors hover:text-foreground"
				>
					Despesas
				</Link>
				<Link
					href="/dashboard/categories"
					className="text-muted-foreground transition-colors hover:text-foreground"
				>
					Categorias
				</Link>
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
					{/* <div className="relative">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search products..."
							className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
						/>
					</div> */}
				</form>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="rounded-full">
							<CircleUser className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Sair</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
