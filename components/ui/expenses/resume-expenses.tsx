"use client";

import TableExpenses from "@/app/dashboard/expenses/components/table/table";
import { useAppManage } from "@/lib/context/AppManageContext";
import { showToast } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

const fetchExpenses = async (month: string, year: string) => {
	try {
		const response = await fetch(`/api/expenses?month=${month}&year=${year}`);
		const data = await response.json();
		console.log("Data: ", data);

		return data;
	} catch (error) {
		showToast("Erro ao buscar as despesas", "error");
	}
};

export default function ResumeExpenses() {
	const { referenceDate } = useAppManage();
	const splitMonthYear = referenceDate.split("-");
	const month = splitMonthYear[0];
	const year = splitMonthYear[1];
	const { data } = useQuery({
		queryKey: ["expenses"],
		queryFn: () => fetchExpenses(month, year),
	});

	return (
		<Suspense fallback={<div> </div>}>
			<TableExpenses expenses={data} />
		</Suspense>
	);
}
