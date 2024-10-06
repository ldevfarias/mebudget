"use client";

import { Dialog } from "@/components/ui/dialog";
import { useAppManage } from "@/lib/context/AppManageContext";
import RemoveDialog from "../confirmation/dialog";
import CreateRevenue from "./create-revenue";

// const categories = [
// 	{
// 		id: "a691e19e-92ff-40f7-a812-84e2bea3ed72",
// 		name: "fdfdsfdsf",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-19T02:54:42.589Z",
// 		updated_at: "2024-09-19T02:54:42.589Z",
// 	},
// 	{
// 		id: "c507b63f-442c-434d-8f54-bcc4e45795ef",
// 		name: "xddddd",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-19T02:52:57.007Z",
// 		updated_at: "2024-09-19T02:52:57.007Z",
// 	},
// 	{
// 		id: "55400a7d-ff54-4ca8-af79-b0e5201d03c8",
// 		name: "teste",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-17T02:46:23.981Z",
// 		updated_at: "2024-09-17T02:46:23.981Z",
// 	},
// 	{
// 		id: "f00dacef-c628-4b69-880d-ee915b94ed95",
// 		name: "novinha",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-17T02:41:12.084Z",
// 		updated_at: "2024-09-17T02:41:12.084Z",
// 	},
// 	{
// 		id: "0f2d1bdf-bd5d-4135-ba78-3d1a460c7203",
// 		name: "tudo certo",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-15T17:38:27.376Z",
// 		updated_at: "2024-09-15T17:38:27.376Z",
// 	},
// 	{
// 		id: "f2d9b710-a55a-4cfa-9122-292690c0827f",
// 		name: "mais uma categoria nova",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-14T15:04:09.746Z",
// 		updated_at: "2024-09-14T15:04:09.746Z",
// 	},
// 	{
// 		id: "fefb89e8-c339-4456-b2ff-822596dfcd32",
// 		name: "newtest",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-14T14:42:19.940Z",
// 		updated_at: "2024-09-14T14:42:19.940Z",
// 	},
// 	{
// 		id: "7795c95f-d34d-4135-9524-2280de8caa74",
// 		name: "Newscat",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-14T14:34:20.379Z",
// 		updated_at: "2024-09-14T14:34:20.379Z",
// 	},
// 	{
// 		id: "ccdf0057-d046-49c2-ad9e-62066b50e588",
// 		name: "Transporte",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-13T23:00:18.672Z",
// 		updated_at: "2024-09-13T23:00:18.672Z",
// 	},
// 	{
// 		id: "0fa470cf-cd72-43b6-a35d-b2f88ce9656a",
// 		name: "Emprestimo",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-13T22:59:02.624Z",
// 		updated_at: "2024-09-13T22:59:02.624Z",
// 	},
// 	{
// 		id: "bb32ece2-2c4d-42b5-a775-212fdf51dfb8",
// 		name: "Outros",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-13T22:58:50.109Z",
// 		updated_at: "2024-09-13T22:58:50.109Z",
// 	},
// 	{
// 		id: "8b620b62-0be1-40e9-984d-0409808bbed5",
// 		name: "Salario",
// 		description: null,
// 		icon: null,
// 		created_at: "2024-09-13T22:33:34.252Z",
// 		updated_at: "2024-09-13T22:33:34.252Z",
// 	},
// 	{
// 		id: "fc935609-d325-443c-a2e2-06afb9858f2d",
// 		name: "Alimentação",
// 		description: "",
// 		icon: "",
// 		created_at: "2023-12-01T13:00:00.000Z",
// 		updated_at: "2023-12-01T13:00:00.000Z",
// 	},
// 	{
// 		id: "9b22210b-0741-429f-b4ee-aced2e705488",
// 		name: "Casa",
// 		description: "",
// 		icon: "",
// 		created_at: "2023-12-01T13:00:00.000Z",
// 		updated_at: "2023-12-01T13:00:00.000Z",
// 	},
// 	{
// 		id: "4f700ebb-e25a-451f-981a-5313061b8cfe",
// 		name: "Investimento",
// 		description: "",
// 		icon: "",
// 		created_at: "2023-12-01T13:00:00.000Z",
// 		updated_at: "2023-12-01T13:00:00.000Z",
// 	},
// ];

export function DialogRevenue() {
	const { open, setDialogOpen, typeViewDialog } = useAppManage();

	return (
		<Dialog
			open={open}
			onOpenChange={() => setDialogOpen(false, "newRevenue", "revenue")}
		>
			{typeViewDialog === "newRevenue" ? <CreateRevenue /> : <RemoveDialog />}
			{/* <DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Adicione uma nova receita</DialogTitle>
					<DialogDescription>
						A receita pode ser tudo que você recebe de dinheiro.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex items-center space-x-2">
						<div className="grid flex-1 gap-2 mb-4">
							<Label htmlFor="link">Nome</Label>
							<Input
								id="name"
								type="text"
								{...register("name")}
								className={`mt-1 block w-full border ${
									errors.name ? "border-red-500" : "border-gray-300"
								} rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500`}
								aria-invalid={!!errors.name}
							/>
							{errors.name && (
								<p className="text-sm text-red-600">{errors.name.message}</p>
							)}
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<div className="grid flex-1 gap-2 mb-4">
							<Label htmlFor="link">Categoria</Label>
							<Select
								onValueChange={(value) =>
									setValue("categoryId", value, { shouldValidate: true })
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="Selecionar categoria" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{categories?.map((category) => (
											<SelectItem key={category.id} value={category.id}>
												{category.name}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<div className="grid flex-1 gap-2 mb-4">
							<Label htmlFor="link">Valor</Label>
							<NumericFormat
								thousandSeparator="."
								decimalSeparator=","
								prefix="R$ "
								onValueChange={(values) =>
									setValue("value", values.floatValue || 0, {
										shouldValidate: true,
									})
								}
								allowNegative={false}
								decimalScale={2}
								fixedDecimalScale
								className="h-9 bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500"
							/>
							{errors.value && (
								<p className="text-sm text-red-600">{errors.value.message}</p>
							)}
						</div>
					</div>
					<DialogFooter className="sm:justify-end">
						<Button
							type="submit"
							variant="default"
							disabled={!isValid || isSubmitting}
						>
							<Loader2
								className={clsx("mr-2 h-4 w-4 animate-spin", {
									hidden: !isSubmitting,
								})}
							/>
							Adicionar
						</Button>
					</DialogFooter>
				</form>
			</DialogContent> */}
		</Dialog>
	);
}
