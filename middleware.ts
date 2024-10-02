import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { alreadyExists, registerUser } from "./app/api/actions/user/data";

const publicRoutes = ["/signin", "/api/auth"];

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const isPublicRoute = publicRoutes.some((route) =>
		pathname.startsWith(route),
	);

	if (isPublicRoute) {
		return NextResponse.next();
	}

	const token = await getToken({ req: request });

	if (!token) {
		return NextResponse.redirect(new URL("/signin", request.url));
	}

	try {
		const userAlreadyExists = await alreadyExists(token.email ?? "");

		if (!userAlreadyExists) {
			await registerUser(token.name ?? "", token.email ?? "", "");
		}
	} catch (error) {
		console.error("Error while checking or registering user:", error);
		return NextResponse.redirect(new URL("/error", request.url)); // Redirecionar para uma página de erro ou similar
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/api/:path*"],
};
