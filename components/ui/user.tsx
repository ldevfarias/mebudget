"use client";

import { useSession } from "next-auth/react";

export default function UserName() {
	const { data } = useSession();

	return <div className="text-xl font-semibold">Olá, {data?.user?.name}</div>;
}
