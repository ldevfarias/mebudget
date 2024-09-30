"use client";
import { useAppManage } from "@/lib/context/AppManageContext";
import { Plus } from "lucide-react";
import { Button } from "./button";

type NewActionProps = {
	classValue?: string;
	label: string;
	typeAction: string;
};

export default function NewAction({
	classValue,
	label,
	typeAction,
}: NewActionProps) {
	const { setOpenSheet, typeSheet } = useAppManage();

	const handleAction = () => {
		console.log("action: ", typeSheet);

		setOpenSheet(true, typeAction);
	};

	return (
		<div className={classValue}>
			<Button type="button" size="sm" onClick={handleAction}>
				<Plus className="mr-2 h-4 w-4" />
				{label}
			</Button>
		</div>
	);
}
