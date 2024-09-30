"use client";

import { signOut } from "next-auth/react";
import { Button } from "./button";

export default function ButtonLogout() {
	return (
		<Button
			variant="ghost"
			className="bg-red-500 text-white py-2 px-4 rounded"
			onClick={() => signOut({ callbackUrl: "/" })}
		>
			Logout
		</Button>
	);
}
