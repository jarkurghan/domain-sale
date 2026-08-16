import type { Metadata } from "next";
import { TashrifByDomain } from "./tashrif-by-domain";
import "./globals.css";

export const metadata: Metadata = {
    title: "Domen sotiladi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="uz">
            <body>
                <TashrifByDomain />
                {children}
            </body>
        </html>
    );
}
