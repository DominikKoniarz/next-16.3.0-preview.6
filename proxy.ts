import {
    defaultLocale,
    shouldHandleI18nRouting,
    startsWithAllowedLocale,
} from "@/i18n/config";
import { NextResponse, type NextRequest } from "next/server";

export function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (!startsWithAllowedLocale(pathname) && shouldHandleI18nRouting(pathname)) {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}`, req.url)
        );
    }

    return NextResponse.next();
}
