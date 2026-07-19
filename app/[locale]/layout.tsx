import { LocaleSwitcher } from "@/components/locale-switcher";
import { locales } from "@/i18n/config";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { locale } from "next/root-params";
import { Suspense } from "react";
import "./globals.css";
import GithubSvg from "@/components/github-svg";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next.js 16.3.0 Preview",
    description: "Next.js 16.3.0 Preview",
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang={await locale()}
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full bg-black flex flex-col">
                <header className="relative max-w-3xl flex items-center py-8 gap-4 px-16 w-full mx-auto *:font-bold *:text-gray-300 *:transition-colors *:hover:text-white">
                    <Link href="/en">Home</Link>
                    <Link href="/en/contact">Contact</Link>
                    <Link
                        href="https://github.com/DominikKoniarz/next-16.3.0-preview.6"
                        className="absolute left-1/2 -translate-x-1/2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubSvg />
                    </Link>
                    <div className="ml-auto">
                        <Suspense>
                            <LocaleSwitcher />
                        </Suspense>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
