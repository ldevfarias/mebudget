"use client";
import React, { useContext, useState } from "react";
import type { Categories, Expenses } from "../types/definitions";

type AppManageContextProps = {
	id?: string;
	open: boolean;
	scope: string;
	setScope: (scope: string) => void;
	setDialogOpen: (
		open: boolean,
		typeViewDialog: string,
		scope: string,
		id?: string,
	) => void;
	typeViewDialog: string;
	categories: Categories[];
	setFetchCategories: (categories: Categories[]) => void;
	sheet: boolean;
	setOpenSheet: (open: boolean, typeSheet: string) => void;
	typeSheet: string;
	expense?: Expenses;
	setExpenses: (expense: Expenses) => void;
	category?: Categories;
	setCategoryItem: (category: Categories) => void;
};

const AppManageContext = React.createContext<AppManageContextProps | undefined>(
	undefined,
);

export const AppManageProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);
	const [typeViewDialog, setTypeViewDialog] = useState("newRevenue");
	const [categories, setCategories] = useState<Categories[]>([]);
	const [id, setId] = useState<string>();
	const [sheet, setSheet] = useState(false);
	const [typeSheet, setTypeSheet] = useState("newExpense");
	const [expense, setExpense] = useState<Expenses>();
	const [scope, setScope] = useState("expense");
	const [category, setCategory] = useState<Categories>();

	const setDialogOpen = (
		open: boolean,
		typeViewDialog: string,
		scope: string,
		id?: string,
	) => {
		setOpen(open);
		setTypeViewDialog(typeViewDialog);
		setScope(scope);
		setId(id);
	};

	const setOpenSheet = (open: boolean, typeSheet: string) => {
		setSheet(open);
		setTypeSheet(typeSheet);
	};

	const setFetchCategories = (categories: Categories[]) => {
		setCategories(categories);
	};

	const setExpenses = (expense: Expenses) => {
		setExpense(expense);
	};

	const setCategoryItem = (category: Categories) => {
		setCategory(category);
	};

	return (
		<AppManageContext.Provider
			value={{
				open,
				setDialogOpen,
				typeViewDialog,
				scope,
				setScope,
				categories,
				setFetchCategories,
				id,
				sheet,
				setOpenSheet,
				typeSheet,
				expense,
				setExpenses,
				category,
				setCategoryItem,
			}}
		>
			{children}
		</AppManageContext.Provider>
	);
};

export const useAppManage = () => {
	const context = useContext(AppManageContext);
	if (!context) {
		throw new Error("useAppManage must be used within a AppManageProvider");
	}

	return context;
};
