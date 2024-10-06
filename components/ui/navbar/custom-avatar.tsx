"use client";

import { getFirstTwoLetters } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

export default function CustomAvatar() {
	const { data } = useSession();
	const image = data?.user?.image || "";
	const fallback = data?.user?.name || "";

	return (
		<Avatar>
			<AvatarImage src={image} alt="@image" />
			<AvatarFallback>{getFirstTwoLetters(fallback)}</AvatarFallback>
		</Avatar>
	);
}
