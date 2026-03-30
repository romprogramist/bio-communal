import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bio-communal.ru"),
  title: {
    default: "Био Коммуналь — Аренда биотуалетов, душевых кабин, вывоз ЖБО в Сочи",
    template: "%s | Био Коммуналь",
  },
  description:
    "Аренда и продажа новых и б/у биотуалетов, мобильных душевых кабин, откачка и вывоз ЖБО в Сочи. Аренда биотуалетов для людей с ограниченными возможностями. Официальный представитель TOI TOI & DIXI. 17 лет опыта, 1000+ кабин на складе, собственный автопарк ассенизаторов, обслуживание 24/7. Звоните: +7 (988) 237-21-03.",
  keywords: [
    "аренда биотуалетов Сочи",
    "биотуалет Сочи",
    "аренда туалетных кабин Сочи",
    "мобильные туалеты Сочи",
    "вывоз ЖБО Сочи",
    "откачка септиков Сочи",
    "аренда душевых кабин Сочи",
    "продажа биотуалетов Сочи",
    "купить биотуалет б/у Сочи",
    "биотуалет для инвалидов Сочи",
    "аренда биотуалета для инвалидов",
    "TOI TOI Сочи",
    "туалетные кабины для стройки",
    "биотуалеты для мероприятий Сочи",
    "ассенизаторские услуги Сочи",
    "откачка выгребных ям Сочи",
    "мобильные душевые кабины аренда",
    "обслуживание биотуалетов Сочи",
    "сервисное обслуживание МТК Сочи",
    "санитарные услуги Сочи",
    "Био Коммуналь",
  ],
  alternates: {
    canonical: "https://bio-communal.ru",
  },
  openGraph: {
    title: "Био Коммуналь — Аренда биотуалетов, душевых кабин, вывоз ЖБО в Сочи",
    description:
      "Аренда и продажа новых и б/у биотуалетов, мобильных душевых кабин, откачка и вывоз ЖБО в Сочи. Аренда для людей с ограниченными возможностями. 17 лет опыта, 1000+ кабин, собственный автопарк. Официальный представитель TOI TOI & DIXI.",
    locale: "ru_RU",
    type: "website",
    url: "https://bio-communal.ru",
    siteName: "Био Коммуналь",
    images: [
      {
        url: "/images/products/product-7.png",
        width: 1200,
        height: 630,
        alt: "Био Коммуналь — мобильные туалетные кабины TOI TOI в Сочи",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Био Коммуналь — Аренда биотуалетов, вывоз ЖБО в Сочи",
    description:
      "17 лет опыта, 1000+ кабин, официальный представитель TOI TOI & DIXI. Звоните: +7 (988) 237-21-03.",
    images: ["/images/products/product-7.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "RU-KDA",
    "geo.placename": "Сочи",
    "geo.position": "43.621076;39.744397",
    ICBM: "43.621076, 39.744397",
    "format-detection": "telephone=yes",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bio-communal.ru/#organization",
    name: "Био Коммуналь",
    alternateName: "ООО Био Коммуналь",
    description:
      "Аренда и продажа новых и б/у биотуалетов, мобильных душевых кабин, откачка и вывоз ЖБО в Сочи. Аренда для людей с ограниченными возможностями. Официальный представитель TOI TOI & DIXI.",
    url: "https://bio-communal.ru",
    logo: "https://bio-communal.ru/logo.svg",
    image: "https://bio-communal.ru/images/products/product-7.png",
    telephone: "+7 (988) 237-21-03",
    email: "biokomm@mail.ru",
    foundingDate: "2009",
    priceRange: "₽₽",
    currenciesAccepted: "RUB",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Пластунская, 100 В, офис 1",
      addressLocality: "Сочи",
      addressRegion: "Краснодарский край",
      postalCode: "354000",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.621076,
      longitude: 39.744397,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Сочи" },
      { "@type": "City", name: "Адлер" },
      { "@type": "City", name: "Красная Поляна" },
      { "@type": "City", name: "Лазаревское" },
      { "@type": "City", name: "Дагомыс" },
    ],
    sameAs: ["https://t.me/+79882372103", "https://vk.com/biokomm"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Санитарные услуги",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Аренда биотуалетов",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Аренда туалетной кабины Стандарт",
                description: "Мобильная туалетная кабина с обслуживанием",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Аренда кабины TOI TOI FRESH",
                description: "Премиальная туалетная кабина TOI TOI с полным сервисом",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Аренда VIP кабины TOI TOI",
                description: "VIP туалетная кабина для мероприятий",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Дополнительные услуги",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Аренда биотуалетов для людей с ограниченными возможностями",
                description: "Специализированные туалетные кабины для маломобильных граждан",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Аренда мобильных душевых кабин",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Откачка и вывоз ЖБО",
                description: "Откачка септиков, ЛОС и выгребных ям собственным автопарком ассенизаторов",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Продажа биотуалетов новых и б/у",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Сервисное обслуживание биотуалетов (МТК)",
                description: "Доставка, откачка, мойка кёрхером, дезинфекция, наполнение расходными материалами",
              },
            },
          ],
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Био Коммуналь",
    url: "https://bio-communal.ru",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bio-communal.ru/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит аренда биотуалета в Сочи?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость аренды биотуалета в Сочи от 3 000 ₽/мес за стандартную кабину до 15 000 ₽/мес за VIP-кабину TOI TOI. В стоимость входит доставка, установка, обслуживание и расходные материалы.",
        },
      },
      {
        "@type": "Question",
        name: "Какие сроки аренды биотуалетов?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Минимальный срок аренды — 1 месяц. Обслуживание включено в стоимость и проводится по согласованному графику. Для мероприятий возможна посуточная аренда.",
        },
      },
      {
        "@type": "Question",
        name: "Как часто требуется откачка и обработка биотуалета?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стандартная частота — 1-2 раза в неделю, в зависимости от интенсивности использования. Обслуживание включает откачку, мойку, дезинфекцию и пополнение расходников.",
        },
      },
      {
        "@type": "Question",
        name: "Какие документы предоставляются для СЭС?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Полный пакет: договор, акты выполненных работ, справки об утилизации, сертификаты на оборудование. Лицензия № 02300355.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать при поломке или нештатной ситуации?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Выезд аварийной бригады в течение 2 часов. Замена оборудования бесплатно в рамках договора.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли вы по госконтрактам 44-ФЗ и 223-ФЗ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, у нас есть тендерный отдел. Мы работаем по 44-ФЗ и 223-ФЗ, являемся подрядчиком Администрации г. Сочи на протяжении 17 лет.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://bio-communal.ru",
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="canonical" href="https://bio-communal.ru" />
        <meta name="yandex-verification" content="" />
        <meta name="google-site-verification" content="" />
      </head>
      <body className="font-body text-text-primary bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
