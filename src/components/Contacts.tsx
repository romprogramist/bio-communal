"use client";

import ScrollReveal from "./ScrollReveal";
import ApplicationForm from "./ApplicationForm";
import { company } from "@/data/company";
import { useShell } from "./ClientShell";

export default function Contacts() {
  const { handleSuccess, handleError } = useShell();
  return (
    <section id="contacts" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Контакты
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <ScrollReveal>
            <div className="space-y-6">
              <div>
                <p className="text-text-secondary text-sm mb-1">Телефон</p>
                <a href={`tel:${company.phoneRaw}`} className="text-xl font-bold text-primary hover:text-primary-hover transition-colors">
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Email</p>
                <a href={`mailto:${company.email}`} className="text-lg text-primary hover:text-primary-hover transition-colors">
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Адрес</p>
                <p className="text-lg">{company.address}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Часы работы</p>
                <p className="text-lg">{company.hours}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Реквизиты</p>
                <p className="text-sm text-text-secondary">ИНН: {company.inn}</p>
                <p className="text-sm text-text-secondary">Лицензия: {company.license}</p>
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <span className="text-lg font-bold">W</span>
                </a>
                <a
                  href={company.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  aria-label="Telegram"
                >
                  <span className="text-lg font-bold">T</span>
                </a>
                <a
                  href={company.social.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  aria-label="VK"
                >
                  <span className="text-lg font-bold">V</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            <div className="bg-background rounded-card p-6 sm:p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold mb-6">Оставить заявку</h3>
              <ApplicationForm onSuccess={handleSuccess} onError={handleError} />
            </div>
          </ScrollReveal>
        </div>

        {/* Yandex Map */}
        <ScrollReveal>
          <div className="mt-12 rounded-card overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructorLink&ll=39.728773%2C43.594162&z=16&pt=39.728773%2C43.594162%2Cpm2rdm"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen
              title="Карта офиса Био Коммуналь"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
