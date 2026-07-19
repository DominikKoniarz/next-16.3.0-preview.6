import { NextResponse, type NextRequest } from "next/server";

const allowedLocales = ["en", "pl"];

function shouldHandleI18nRouting(req: NextRequest) {
    const pathname = new URL(req.nextUrl.href).pathname;

    return (
        !pathname.startsWith("/_next") &&
        !pathname.startsWith("/_vercel") &&
        !pathname.includes(".")
    );
}

function startsWithAllowedLocale(pathname: string) {
    return allowedLocales.some((locale) => pathname.startsWith(`/${locale}`));
}

export function proxy(req: NextRequest) {
    const shouldHandle = shouldHandleI18nRouting(req);

    if (!startsWithAllowedLocale(req.nextUrl.pathname) && shouldHandle) {
        return NextResponse.redirect(
            new URL(`/${allowedLocales[0]}${req.nextUrl.pathname}`, req.url)
        );
    }

    return NextResponse.next();
}
