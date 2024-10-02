"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "./button";

export default function ButtonLogout() {
	return (
		<Button
			variant="ghost"
			className="w-full h-6 border-hidden bg-transparent text-black hover:bg-transparent hover:text-black"
			onClick={() => signOut({ callbackUrl: "/signin" })}
		>
			<LogOut className="h-5 w-5 mr-2" />
			<span className="text-base font-medium">Sair</span>
		</Button>
	);
}
