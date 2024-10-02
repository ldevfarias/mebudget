"use client";

import { signIn } from "next-auth/react";
import { Button } from "./button";

export default function LoginButton() {
	return (
		<Button
			type="button"
			onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
			className="bg-white text-black hover:bg-gray-100"
		>
			Entrar com o Google
		</Button>
	);
}
