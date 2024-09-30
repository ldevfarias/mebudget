// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Middleware de autenticação
export function middleware(req: NextRequest) {
	// Obter o token de autenticação dos cookies
	const token = req.cookies.get("authToken");

	// Verifica se o token está presente. Se não, redireciona para a página de login
	if (!token) {
		// Para páginas, redireciona o usuário não autenticado para a página de login
		if (req.nextUrl.pathname.startsWith("/dashboard")) {
			return NextResponse.redirect(new URL("/signin", req.url));
		}

		// Para APIs, retorna um erro 401 (não autorizado)
		if (req.nextUrl.pathname.startsWith("/api")) {
			return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}
	}

	// Se o token estiver presente, permite o acesso
	return NextResponse.next();
}

// Configuração do matcher para aplicar o middleware nas rotas desejadas
export const config = {
	matcher: ["/dashboard/:path*", "/api/:path*"], // Rotas protegidas
};
