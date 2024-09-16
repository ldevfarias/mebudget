import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Input } from "../input";
import { Label } from "../label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../sheet";
import CardWrapper from "./card-wrapper";

export const description =
	"An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export function Dashboard() {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-0">
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				<CardWrapper />
			</div>
			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
				<Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
					<CardHeader className="flex flex-row items-center">
						<div className="grid gap-2">
							<CardTitle>Despesas</CardTitle>
							<CardDescription>Despesas referente ao mes x.</CardDescription>
						</div>
						<Sheet>
							<SheetTrigger asChild>
								<Button asChild size="sm" className="ml-auto gap-1">
									<Link href="#">
										<Plus className="h-4 w-4" />
										Nova despesa
									</Link>
								</Button>
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>Nova despesa</SheetTitle>
									<SheetDescription>Adicione a despesa</SheetDescription>
								</SheetHeader>
								<div className="grid gap-4 py-4">
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="name" className="text-right">
											Nome
										</Label>
										<Input id="name" className="col-span-3" />
									</div>
									<div className="grid gap-2">
										<Label htmlFor="username">Categoria</Label>
										<Input id="username" />
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="username" className="text-right">
											Valor
										</Label>
										<Input id="username" className="col-span-3" />
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="username" className="text-right">
											Data
										</Label>
										<Input id="username" className="col-span-3" />
									</div>
								</div>
								<SheetFooter>
									<SheetClose asChild>
										<Button type="submit">Save changes</Button>
									</SheetClose>
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Nome</TableHead>
									<TableHead className="">Categoria</TableHead>
									<TableHead className="">Status</TableHead>
									<TableHead className="">Date</TableHead>
									<TableHead className="text-right">Valor</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>
										<div className="font-medium">Liam Johnson</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											liam@example.com
										</div>
									</TableCell>
									<TableCell className="">Alimentacao</TableCell>
									<TableCell className="">
										<Badge className="text-xs bg-red-600 hover:bg-red-700 hover:text-white">
											Pendente
										</Badge>
									</TableCell>
									<TableCell className="">2023-06-23</TableCell>
									<TableCell className="text-right">$250.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Liam Johnson</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											liam@example.com
										</div>
									</TableCell>
									<TableCell className="">Alimentacao</TableCell>
									<TableCell className="">
										<Badge className="text-xs bg-green-600 hover:bg-green-700 hover:text-white">
											Pagamento
										</Badge>
									</TableCell>
									<TableCell className="">2023-06-23</TableCell>
									<TableCell className="text-right">$250.00</TableCell>
								</TableRow>
								{/* <TableRow>
									<TableCell>
										<div className="font-medium">Olivia Smith</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											olivia@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">
										Refund
									</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Declined
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-24
									</TableCell>
									<TableCell className="text-right">$150.00</TableCell>
								</TableRow> */}
								{/* <TableRow>
									<TableCell>
										<div className="font-medium">Noah Williams</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											noah@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">
										Subscription
									</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Approved
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-25
									</TableCell>
									<TableCell className="text-right">$350.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Emma Brown</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											emma@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">Sale</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Approved
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-26
									</TableCell>
									<TableCell className="text-right">$450.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Liam Johnson</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											liam@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">Sale</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Approved
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-27
									</TableCell>
									<TableCell className="text-right">$550.00</TableCell>
								</TableRow> */}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
				<Card x-chunk="dashboard-01-chunk-5">
					<CardHeader>
						<CardTitle>
							<Link
								href="/dashboard/categories"
								className="hover:underline hover:text-blue-500"
							>
								Categorias
							</Link>
						</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-8">
						<div className="flex items-center gap-4">
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">
									Olivia Martin
								</p>
								<p className="text-sm text-muted-foreground">
									olivia.martin@email.com
								</p>
							</div>
							<div className="ml-auto font-medium">+$1,999.00</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">Jackson Lee</p>
								<p className="text-sm text-muted-foreground">
									jackson.lee@email.com
								</p>
							</div>
							<div className="ml-auto font-medium">+$39.00</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">
									Isabella Nguyen
								</p>
								<p className="text-sm text-muted-foreground">
									isabella.nguyen@email.com
								</p>
							</div>
							<div className="ml-auto font-medium">+$299.00</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">William Kim</p>
								<p className="text-sm text-muted-foreground">will@email.com</p>
							</div>
							<div className="ml-auto font-medium">+$99.00</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="grid gap-1">
								<p className="text-sm font-medium leading-none">Sofia Davis</p>
								<p className="text-sm text-muted-foreground">
									sofia.davis@email.com
								</p>
							</div>
							<div className="ml-auto font-medium">+$39.00</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
