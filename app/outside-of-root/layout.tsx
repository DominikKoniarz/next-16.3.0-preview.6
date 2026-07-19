import "@/app/[locale]/globals.css";

export default function OutsideOfRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
