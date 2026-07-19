export const locales = ["en", "pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = locales[0];

export function isLocale(value: string): value is Locale {
    return locales.some((locale) => locale === value);
}

export function shouldHandleI18nRouting(pathname: string) {
    return (
        !pathname.startsWith("/_next") &&
        !pathname.startsWith("/_vercel") &&
        !pathname.includes(".")
    );
}

export function startsWithAllowedLocale(pathname: string) {
    return locales.some(
        (locale) =>
            pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );
}

export function getPathnameWithoutLocale(pathname: string) {
    const segments = pathname.split("/");
    const maybeLocale = segments[1];

    if (maybeLocale && isLocale(maybeLocale)) {
        const rest = segments.slice(2).join("/");
        return rest ? `/${rest}` : "";
    }

    return pathname;
}

export function localizePathname(pathname: string, locale: Locale) {
    return `/${locale}${getPathnameWithoutLocale(pathname)}`;
}
