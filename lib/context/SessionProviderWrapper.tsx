"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function SessionProviderWrapper({
	children,
	session,
}: {
	children: React.ReactNode;
	session: Session | null;
}) {
	return (
		<SessionProvider session={session}>
			<Toaster />
			{children}
		</SessionProvider>
	);
}
