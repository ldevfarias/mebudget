"use client";
import { useAppManage } from "@/lib/context/AppManageContext";
import { Plus } from "lucide-react";
import { type ReactElement, useState } from "react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import HideValue from "../hide-value";
import ShowValue from "../show-value";
import ToggleEye from "../toggle-eye";

export function CardCustom({
	title,
	value,
	type,
	icon,
	description,
	balance,
}: {
	title: string;
	value: string;
	type: "revenue" | "expenses" | "paid" | "saldo";
	icon?: ReactElement;
	description?: string;
	balance?: string;
	action?: () => void;
}) {
	const { setDialogOpen } = useAppManage();
	const [eye, setEye] = useState(true);
	const handleToggle = () => {
		console.log("chamando no card", value.length);
		setEye(!eye);
	};

	return (
		<Card x-chunk="dashboard-01-chunk-0">
			<CardHeader className="flex flex-row space-y-0 pb-2">
				<CardTitle className="flex items-center gap-4 text-sm font-medium">
					<div>{icon}</div>
					<div className="text-muted-foreground">{title}</div>

					{type === "revenue" && (
						<Button
							variant="outline"
							size="sm"
							className="h-9 w-9 p-0"
							onClick={() => setDialogOpen(true, "newRevenue")}
						>
							<Plus className="h-4 w-4" />
						</Button>
					)}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold grid grid-cols-3 gap-2">
					<div className="col-span-2">
						{eye ? <ShowValue value={value} /> : <HideValue value={value} />}
					</div>
					<ToggleEye eyeOn={eye} handleToggle={handleToggle} />
				</div>
				<div className="text-xs flex align-middle gap-2 mt-2">
					<span className="text-xs text-muted-foreground">{description}:</span>
					{balance && <span className="font-semibold">{balance}</span>}
				</div>
			</CardContent>
		</Card>
	);
}
