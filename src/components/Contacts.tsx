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
            <address className="space-y-6 not-italic">
              <div>
                <p className="text-text-secondary text-sm mb-1">Телефон</p>
                <a href={`tel:${company.phoneRaw}`} className="text-xl font-bold text-primary hover:text-primary-hover transition-colors" itemProp="telephone">
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Email</p>
                <a href={`mailto:${company.email}`} className="text-lg text-primary hover:text-primary-hover transition-colors" itemProp="email">
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Адрес</p>
                <p className="text-lg" itemProp="address">{company.address}</p>
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
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.7-6.413-1.9l-.447-.292-2.637.884.884-2.637-.292-.447A9.952 9.952 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                </a>
                <a
                  href={company.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href={company.social.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  aria-label="VK"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.184 1.814.616.42 1.084.327 1.084.327l2.178-.03s1.14-.07.6-.964c-.045-.073-.32-.659-1.645-1.862-1.388-1.26-1.202-1.056.47-3.234.932-1.215 1.503-2.154 1.37-2.504-.127-.332-.908-.244-.908-.244l-2.45.015s-.182-.025-.317.056c-.131.079-.216.263-.216.263s-.387 1.028-.903 1.903c-1.088 1.848-1.524 1.946-1.702 1.832-.413-.265-.31-1.065-.31-1.633 0-1.775.27-2.515-.525-2.71-.263-.065-.757-.178-1.016-.178-.476 0-.833.037-1.05.072-.338.055-.476.175-.476.175s-.166.115-.044.373c.06.127.286.3.39.44.134.18.162.595.162.595s.096 2.09-.225 2.349c-.22.177-.522-.184-.522-.184s-1.005-1.727-1.472-2.641c-.264-.517-.468-.932-.468-.932s-.085-.198-.237-.302c-.184-.124-.44-.164-.44-.164l-2.33.015s-.35.01-.478.162c-.114.135-.009.414-.009.414s1.82 4.258 3.879 6.397c.091.095 1.04 2.32 3.49 2.32h.853z"/>
                  </svg>
                </a>
                <a
                  href={company.social.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  aria-label="Max"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 42 42">
                    <path d="M21.47 41.88c-4.11 0-6.02-.6-9.34-3-2.1 2.7-8.75 4.81-9.04 1.2 0-2.71-.6-5-1.28-7.5C1 29.5.08 26.07.08 21.1.08 9.23 9.82.3 21.36.3c11.55 0 20.6 9.37 20.6 20.91a20.6 20.6 0 0 1-20.49 20.67Zm.17-31.32c-5.62-.29-10 3.6-10.97 9.7-.8 5.05.62 11.2 1.83 11.52.58.14 2.04-1.04 2.95-1.95a10.4 10.4 0 0 0 5.08 1.81 10.7 10.7 0 0 0 11.19-9.97 10.7 10.7 0 0 0-10.08-11.1Z"/>
                  </svg>
                </a>
              </div>
            </address>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            <div className="bg-background rounded-card p-6 sm:p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold mb-6">Оставить заявку</h3>
              <ApplicationForm onSuccess={handleSuccess} onError={handleError} />
            </div>
          </ScrollReveal>
        </div>

        {/* Yandex Map - lazy loaded */}
        <ScrollReveal>
          <div className="mt-12 rounded-card overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.744397%2C43.621076&z=17&pt=39.744397%2C43.621076%2Cpm2rdm&text=%D0%91%D0%B8%D0%BE%20%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B0%D0%BB%D1%8C%20%D0%A1%D0%BE%D1%87%D0%B8%20%D0%9F%D0%BB%D0%B0%D1%81%D1%82%D1%83%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20100%D0%92"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Карта офиса Био Коммуналь"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
