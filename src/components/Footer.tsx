import { company } from "@/data/company";

const footerLinks = [
  { href: "#about", label: "О компании" },
  { href: "#services", label: "Услуги" },
  { href: "#pricing", label: "Цены" },
  { href: "#contacts", label: "Контакты" },
  { href: "/privacy", label: "Политика конфиденциальности" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img src="/logo.svg" alt={company.shortName} className="h-10 mb-4 brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Санитарные услуги под ключ в Сочи. {company.experience} лет опыта.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a href={`tel:${company.phoneRaw}`} className="hover:text-accent transition-colors">
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">
                  {company.email}
                </a>
              </p>
              <p>{company.address}</p>
              <p>{company.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} {company.shortName}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
