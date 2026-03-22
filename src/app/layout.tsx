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
      <body className="font-body text-text-primary bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Био Коммуналь",
                description: "Санитарные услуги под ключ в Сочи: аренда биотуалетов, душевых кабин, вывоз ЖБО",
                telephone: "+7 (988) 237-21-03",
                email: "biokomm@mail.ru",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Пластунская, 100 В, офис 1",
                  addressLocality: "Сочи",
                  addressCountry: "RU",
                },
                openingHours: "Mo-Fr 09:00-17:00",
                url: "https://bio-communal.ru",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                provider: { "@type": "LocalBusiness", name: "Био Коммуналь" },
                serviceType: ["Аренда биотуалетов", "Аренда душевых кабин", "Вывоз ЖБО", "Продажа оборудования"],
                areaServed: { "@type": "City", name: "Сочи" },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "Какие сроки аренды и обслуживания?", acceptedAnswer: { "@type": "Answer", text: "Минимальный срок аренды — 1 месяц. Обслуживание включено в стоимость и проводится по согласованному графику. Для мероприятий возможна посуточная аренда." } },
                  { "@type": "Question", name: "Как часто требуется откачка и обработка?", acceptedAnswer: { "@type": "Answer", text: "Стандартная частота — 1-2 раза в неделю, в зависимости от интенсивности использования." } },
                  { "@type": "Question", name: "Какие документы предоставляются для СЭС?", acceptedAnswer: { "@type": "Answer", text: "Полный пакет: договор, акты выполненных работ, справки об утилизации, сертификаты на оборудование." } },
                  { "@type": "Question", name: "Что делать при поломке или нештатной ситуации?", acceptedAnswer: { "@type": "Answer", text: "Выезд аварийной бригады в течение 2 часов. Замена оборудования бесплатно в рамках договора." } },
                  { "@type": "Question", name: "Какова стоимость услуг для конкретного объекта?", acceptedAnswer: { "@type": "Answer", text: "Стоимость зависит от количества кабин, частоты обслуживания и удалённости объекта. Оставьте заявку — рассчитаем за 15 минут." } },
                  { "@type": "Question", name: "Есть ли опыт на подобных объектах?", acceptedAnswer: { "@type": "Answer", text: "За 17 лет мы обслужили более 3000 клиентов: застройщики, администрация Сочи, международные форумы." } },
                ],
              },
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
