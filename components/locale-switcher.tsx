"use client";

import {
    isLocale,
    localizePathname,
    locales,
    type Locale,
} from "@/i18n/config";
import { usePathname, useRouter } from "next/navigation";

export function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = pathname.split("/")[1];
    const value = isLocale(currentLocale) ? currentLocale : locales[0];

    return (
        <select
            className="bg-transparent font-bold text-gray-300 transition-colors hover:text-white"
            value={value}
            onChange={(event) => {
                router.push(
                    localizePathname(pathname, event.target.value as Locale)
                );
            }}
            aria-label="Select locale"
        >
            {locales.map((locale) => (
                <option key={locale} value={locale}>
                    {locale.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
