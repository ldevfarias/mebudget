import { genericRemove } from "@/app/api/actions";
import { useAppManage } from "@/lib/context/AppManageContext";
import { showToast } from "@/lib/utils";
import { Button } from "../button";
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "../dialog";

export default function RemoveDialog() {
	const { id, scope, setDialogOpen } = useAppManage();
	const handleRemove = async () => {
		console.log(`Remove item ${id}`);

		try {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			await genericRemove(scope, Number(id!));

			setDialogOpen(false, "remove", scope);
			showToast("Item removido com sucesso", "success");
		} catch (error) {
			showToast("Houve um problema ao remover este item", "error");
		}
	};

	return (
		<DialogContent className="sm:max-w-md">
			<DialogHeader>
				<DialogTitle>Deseja remover este item?</DialogTitle>
				<DialogDescription>
					Clique em remover para confirmar esta ação.
				</DialogDescription>
			</DialogHeader>
			<DialogFooter className="sm:justify-end">
				<Button type="button" variant="default" onClick={handleRemove}>
					Remover
				</Button>
			</DialogFooter>
		</DialogContent>
	);
}
