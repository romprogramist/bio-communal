"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { packages } from "@/data/pricing";
import { useShell } from "./ClientShell";

export default function Pricing() {
  const { openForm } = useShell();
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center mb-4">
            Пакеты аренды
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Выберите подходящий тариф — всё включено
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 0.1}>
              <div
                className={`rounded-card overflow-hidden flex flex-col h-full transition-all ${
                  pkg.highlighted
                    ? "bg-primary text-white shadow-xl scale-[1.02] ring-2 ring-accent"
                    : "bg-white shadow-card hover:shadow-card-hover"
                }`}
              >
                {pkg.image && (
                  <div className={`relative h-64 sm:h-72 overflow-hidden ${pkg.highlighted ? "bg-white/10" : "bg-gray-50"}`}>
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                {pkg.highlighted && (
                  <div className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full self-start mb-4">
                    Популярный
                  </div>
                )}
                <h3
                  className={`font-heading text-xl font-bold mb-2 ${
                    pkg.highlighted ? "text-white" : "text-text-primary"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span
                    className={`font-heading text-4xl font-bold ${
                      pkg.highlighted ? "text-accent" : "text-primary"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      pkg.highlighted ? "text-white/70" : "text-text-secondary"
                    }`}
                  >
                    {pkg.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? "text-accent" : "text-primary"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span
                        className={`text-sm ${
                          pkg.highlighted ? "text-white/90" : "text-text-secondary"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openForm(pkg.id)}
                  className={`py-3 rounded-xl font-semibold transition-colors w-full ${
                    pkg.highlighted
                      ? "bg-accent hover:bg-accent-hover text-white"
                      : "bg-primary hover:bg-primary-hover text-white"
                  }`}
                >
                  Заказать
                </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
