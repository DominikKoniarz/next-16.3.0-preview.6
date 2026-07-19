import {
    defaultLocale,
    shouldHandleI18nRouting,
    startsWithAllowedLocale,
} from "@/i18n/config";
import { NextResponse, type NextRequest } from "next/server";

export function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith("/outside-of-root")) {
        return NextResponse.next();
    }

    if (
        !startsWithAllowedLocale(pathname) &&
        shouldHandleI18nRouting(pathname)
    ) {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}`, req.url)
        );
    }

    if (
        startsWithAllowedLocale(pathname) &&
        shouldHandleI18nRouting(pathname)
    ) {
        return NextResponse.rewrite(new URL(req.url));
    }

    return NextResponse.next();
}
