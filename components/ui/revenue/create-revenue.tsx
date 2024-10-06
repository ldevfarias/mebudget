import { createRevenue } from "@/app/api/actions";
import { useAppManage } from "@/lib/context/AppManageContext";
import { showToast } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { z } from "zod";
import { Button } from "../button";
import CategorySelect from "../categories/select";
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "../dialog";
import { Input } from "../input";
import { Label } from "../label";

const revenueSchema = z.object({
	categoryId: z.string(),
	name: z.string(),
	value: z
		.number()
		.min(0.01, "O valor deve ser maior que 0")
		.refine((val) => !Number.isNaN(val), {
			message: "Deve ser um número válido",
		}),
});

type RevenueFormData = z.infer<typeof revenueSchema>;

export default function CreateRevenue() {
	const { setDialogOpen } = useAppManage();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		setValue,
		reset,
		watch,
	} = useForm<RevenueFormData>({
		mode: "onChange",
		resolver: zodResolver(revenueSchema),
	});
	const onSubmit = async (form: RevenueFormData) => {
		try {
			const response = await createRevenue(form);
			if (response) {
				showToast(response.message, response.success ? "success" : "error");
			}
		} catch (error) {
			showToast("Erro ao criar receita", "error");
		} finally {
			setDialogOpen(false, "newRevenue");
			reset();
		}
	};

	return (
		<DialogContent className="sm:max-w-md">
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
						<CategorySelect
							value={watch("categoryId")}
							onChange={(value) => setValue("categoryId", value)}
						/>
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
		</DialogContent>
	);
}
