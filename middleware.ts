import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

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

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/api/:path*"],
};
