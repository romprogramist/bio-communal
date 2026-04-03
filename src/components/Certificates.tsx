"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ScrollReveal from "./ScrollReveal";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

const certificates = [
  { src: "/images/certificates/cert-1.webp", alt: "Сертификат 1" },
  { src: "/images/certificates/cert-2.webp", alt: "Сертификат 2" },
  { src: "/images/certificates/cert-3.webp", alt: "Сертификат 3" },
  { src: "/images/certificates/cert-4.webp", alt: "Сертификат 4" },
  { src: "/images/certificates/cert-5.webp", alt: "Сертификат 5" },
  { src: "/images/certificates/cert-6.webp", alt: "Сертификат 6" },
  { src: "/images/certificates/cert-7.webp", alt: "Сертификат 7" },
];

export default function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    // @ts-expect-error css import
    import("yet-another-react-lightbox/styles.css").then(() => setCssLoaded(true));
  }, []);

  return (
    <>
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
                    className="w-full aspect-[3/4] bg-gray-50 rounded-card overflow-hidden cursor-pointer hover:ring-2 hover:ring-accent transition-all"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={400}
                      height={533}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </ScrollReveal>
        </div>
      </section>

      {lightboxIndex >= 0 && cssLoaded && (
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={certificates.map((c) => ({ src: c.src, alt: c.alt }))}
        />
      )}
    </>
  );
}
