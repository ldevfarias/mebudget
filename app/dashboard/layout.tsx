import SheetCustom from "@/components/ui/expenses/sheet-custom";
import Navbar from "@/components/ui/navbar/navbar";
import { DialogRevenue } from "@/components/ui/revenue/dialog";
import { AppManageProvider } from "@/lib/context/AppManageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<Navbar />
			<AppManageProvider>
				<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
					{children}

					<SheetCustom />
					<DialogRevenue />
				</div>
			</AppManageProvider>
		</div>
	);
}
