"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import ScrollReveal from "./ScrollReveal";

const certificates = Array.from({ length: 4 }, (_, i) => ({
  src: `/images/certificates/cert-${i + 1}.jpg`,
  alt: `Сертификат ${i + 1}`,
}));

export default function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Сертификаты
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="certificates-swiper"
          >
            {certificates.map((cert, i) => (
              <SwiperSlide key={i}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="w-full aspect-[3/4] bg-gray-200 rounded-card overflow-hidden flex items-center justify-center text-text-secondary cursor-pointer hover:ring-2 hover:ring-accent transition-all"
                >
                  Сертификат {i + 1}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>

        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={certificates.map((c) => ({ src: c.src, alt: c.alt }))}
        />
      </div>
    </section>
  );
}
