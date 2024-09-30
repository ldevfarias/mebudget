"use client";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

type BreadcrumbItemProps = {
	label: string;
	href: string;
};

export default function BreadCrumb() {
	const breadcrumbItems: BreadcrumbItemProps[] = [
		{ label: "Dashboard", href: "/dashboard" },
		{ label: "Despesas", href: "/dashboard/expenses" },
		{ label: "Categorias", href: "/dashboard/categories" },
	];

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{breadcrumbItems.map((item, index) => {
					return (
						<React.Fragment key={item.label}>
							<BreadcrumbItem>
								<BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
							</BreadcrumbItem>
							{index < breadcrumbItems.length - 1 && (
								<BreadcrumbSeparator
									key={`separator-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										index
									}`}
								/>
							)}
						</React.Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
