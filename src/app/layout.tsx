import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VT — Industrial IoT",
  description:
    "IoT решения для промышленности: мониторинг, аналитика, автоматизация. Локально или в облаке.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${grotesk.variable} antialiased`}>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
