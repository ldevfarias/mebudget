"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-3xl font-bold">Login</h1>
			<Button
				type="button"
				onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
				className="bg-red-500 text-white py-2 px-4 rounded mt-2"
			>
				Login com Google
				{/* {loading ? "Carregando..." : "Login com Google"} */}
			</Button>
		</div>
	);
}
