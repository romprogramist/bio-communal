import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности ООО «Био Коммуналь». Обработка персональных данных в соответствии с ФЗ-152.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <a href="/" className="text-primary hover:text-primary-hover transition-colors text-sm mb-8 inline-block">
          &larr; На главную
        </a>

        <h1 className="font-heading text-3xl font-bold text-primary mb-8">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты
            {" "}{company.name} (далее — Оператор) персональных данных пользователей сайта.
          </p>

          <h2 className="font-heading text-xl font-bold text-text-primary mt-8">
            1. Общие положения
          </h2>
          <p>
            Оператор обрабатывает персональные данные в соответствии с Федеральным законом
            от 27.07.2006 № 152-ФЗ «О персональных данных». Предоставляя свои данные через
            формы на сайте, пользователь даёт согласие на их обработку.
          </p>

          <h2 className="font-heading text-xl font-bold text-text-primary mt-8">
            2. Какие данные мы собираем
          </h2>
          <p>Через формы обратной связи: имя, номер телефона, выбранная услуга, комментарий.</p>

          <h2 className="font-heading text-xl font-bold text-text-primary mt-8">
            3. Цели обработки
          </h2>
          <p>
            Связь с пользователем для оказания запрошенных услуг,
            подготовка коммерческих предложений и заключение договоров.
          </p>

          <h2 className="font-heading text-xl font-bold text-text-primary mt-8">
            4. Защита данных
          </h2>
          <p>
            Оператор принимает необходимые организационные и технические меры для защиты
            персональных данных от несанкционированного доступа, изменения, раскрытия или
            уничтожения.
          </p>

          <h2 className="font-heading text-xl font-bold text-text-primary mt-8">
            5. Права пользователя
          </h2>
          <p>
            Пользователь вправе запросить информацию об обработке своих данных, потребовать
            их изменения или удаления, обратившись по адресу: {company.email}
          </p>

          <h2 className="font-heading text-xl font-bold text-text-primary mt-8">
            6. Контакты оператора
          </h2>
          <p>
            {company.name}<br />
            ИНН: {company.inn}<br />
            Адрес: {company.address}<br />
            Email: {company.email}<br />
            Телефон: {company.phone}
          </p>
        </div>
      </div>
    </main>
  );
}
