"use client";

import Image from "next/image";
import { company } from "@/data/company";
import { useShell } from "./ClientShell";

const stats = [
  { value: `${company.experience} лет`, label: "опыта" },
  { value: company.cabins, label: "кабин" },
  { value: company.clients, label: "клиентов" },
  { value: company.partner, label: "партнёр" },
];

export default function Hero() {
  const { openForm } = useShell();
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Сочи"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Санитарные услуги
          <br />
          <span className="text-accent">под ключ в Сочи</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {company.experience} лет на страже чистоты. Официальный представитель {company.partner}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => openForm()}
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg"
          >
            Оставить заявку
          </button>
          {/* KP button hidden until client provides PDF — set showKP=true in data/company.ts */}
          {company.showKP && (
            <a
              href="/kp-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
            >
              Скачать КП 2026
            </a>
          )}
        </div>
      </div>

      {/* Stats ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-xl sm:text-2xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
