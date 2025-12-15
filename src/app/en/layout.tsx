import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Veld Tech.",
    template: "%s | Veld Tech.",
  },
  description:
    "Industrial IoT: monitoring, analytics, automation. Secure, on-prem or cloud.",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
