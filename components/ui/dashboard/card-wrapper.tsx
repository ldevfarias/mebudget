import { fetchDashboardTotals } from "@/app/api/data";
import { formatToBRL } from "@/lib/utils";
import { Archive, Clock9, DollarSignIcon, HandCoins } from "lucide-react";
import { CardCustom } from "./card-custom";

export default async function CardWrapper() {
	const {
		totalValueExpenses,
		totalValuePaidExpenses,
		totalValueRevenues,
		totalValuePendingExpenses,
		totalSaldo,
		totalFutureSaldo,
	} = await fetchDashboardTotals();

	return (
		<>
			<CardCustom
				title="Receitas"
				value={totalValueRevenues}
				type="revenue"
				icon={<HandCoins size={20} className="text-muted-foreground" />}
				description="+20% em relação ao mês passado"
			/>
			<CardCustom
				title="Despesas"
				value={formatToBRL(totalValueExpenses)}
				type="expenses"
				icon={<Clock9 size={20} className="text-muted-foreground" />}
				description="Total de despesas pendentes"
				balance={formatToBRL(totalValuePendingExpenses)}
			/>
			<CardCustom
				title="Despesas Pagas"
				value={formatToBRL(totalValuePaidExpenses)}
				type="paid"
				icon={<DollarSignIcon size={20} className="text-muted-foreground" />}
				description="Total de despesas pendentes"
				balance={formatToBRL(totalValuePendingExpenses)}
			/>
			<CardCustom
				title="Saldo"
				value={formatToBRL(totalSaldo)}
				type="saldo"
				icon={<Archive size={20} className="text-muted-foreground" />}
				description="Saldo previsto"
				balance={formatToBRL(totalFutureSaldo)}
			/>
		</>
	);
}
