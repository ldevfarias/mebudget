import { Archive, Clock9, DollarSign, DollarSignIcon } from "lucide-react";
import { CardCustom } from "./card-custom";

export default async function CardWrapper() {
	// const {
	//   numberOfInvoices,
	//   numberOfCustomers,
	//   totalPaidInvoices,
	//   totalPendingInvoices,
	// } = await fetchCardData();

	return (
		<>
			<CardCustom
				title="Collected"
				value={2000}
				type="collected"
				icon={
					<DollarSign size={20} className="h-4 w-4 text-muted-foreground" />
				}
			/>
			<CardCustom
				title="Pending"
				value={100}
				type="pending"
				icon={<Clock9 size={20} className="h-4 w-4 text-muted-foreground" />}
			/>
			<CardCustom
				title="Total Invoices"
				value={222}
				type="invoices"
				icon={<Archive size={20} className="h-4 w-4 text-muted-foreground" />}
			/>
			<CardCustom
				title="Total Customers"
				value={11}
				type="customers"
				icon={
					<DollarSignIcon size={20} className="h-4 w-4 text-muted-foreground" />
				}
			/>
		</>
	);
}
