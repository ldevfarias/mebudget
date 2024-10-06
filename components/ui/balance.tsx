"use client";
export default function Balance({
	title,
	value,
}: { title?: string; value: string }) {
	return (
		<div className="font-medium">
			<span>{title}</span>
			<span>{value}</span>
		</div>
	);
}
