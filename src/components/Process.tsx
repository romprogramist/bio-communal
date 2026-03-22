import ScrollReveal from "./ScrollReveal";
import { steps } from "@/data/process";

export default function Process() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center mb-4">
            Как мы работаем
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
            6 простых шагов от заявки до результата
          </p>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[8%] right-[8%] h-0.5 bg-primary/20" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-heading text-xl font-bold mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-8 relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="relative">
                <div className="absolute -left-12 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm z-10">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold mb-1">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
