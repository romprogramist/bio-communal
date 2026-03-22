import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Био Коммуналь — Санитарные услуги под ключ в Сочи",
  description:
    "Аренда биотуалетов, душевых кабин, вывоз ЖБО в Сочи. 17 лет опыта, 1000+ кабин, официальный представитель TOI TOI & DIXI.",
  openGraph: {
    title: "Био Коммуналь — Санитарные услуги под ключ в Сочи",
    description: "Аренда биотуалетов, вывоз ЖБО, душевые кабины. 17 лет в Сочи.",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Био Коммуналь — Санитарные услуги под ключ в Сочи",
    description: "Аренда биотуалетов, вывоз ЖБО, душевые кабины. 17 лет в Сочи.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-body text-text-primary bg-background">{children}</body>
    </html>
  );
}
