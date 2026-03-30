"use client";

import { company } from "@/data/company";
import { useShell } from "./ClientShell";


export default function Hero() {
  const { openForm } = useShell();
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* Background gradient (replace with real photo later) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e1a] via-[#1B4332] to-[#0d3d2e]" />
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Аренда и продажа биотуалетов,
          <br />
          душевых кабин.{" "}
          <span className="text-accent">Вывоз ЖБО в Сочи</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-normal">
          {company.experience} лет на страже чистоты. Официальный представитель {company.partner}. Доставка, установка и обслуживание биотуалетов и душевых кабин по всему Сочи.
        </h2>
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

    </section>
  );
}
