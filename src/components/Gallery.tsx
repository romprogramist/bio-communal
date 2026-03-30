"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

const galleryImages = [
  ...Array.from({ length: 6 }, (_, i) => ({
    src: `/images/gallery/gallery-${i + 1}.png`,
    alt: `Объект ${i + 1}`,
  })),
  { src: "/images/gallery/truck-1.jpeg", alt: "Ассенизатор белый" },
  { src: "/images/gallery/truck-2.jpeg", alt: "Ассенизатор голубой" },
  { src: "/images/gallery/truck-3.jpeg", alt: "Ассенизатор оранжевый" },
  { src: "/images/gallery/truck-4.jpg", alt: "Ассенизатор ночью" },
  { src: "/images/gallery/truck-5.jpeg", alt: "Ассенизатор голубой вид сбоку" },
  { src: "/images/gallery/truck-6.jpeg", alt: "Ассенизатор оранжевый сзади" },
  { src: "/images/gallery/truck-7.jpeg", alt: "Ассенизатор белый вид сбоку" },
  { src: "/images/gallery/truck-8.jpeg", alt: "Логотип Био Коммуналь на двери" },
  { src: "/images/gallery/truck-9.jpeg", alt: "Ассенизатор Isuzu спереди" },
  { src: "/images/gallery/truck-10.jpeg", alt: "Ассенизатор HD78" },
];

const images = galleryImages;

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    // @ts-expect-error css import
    import("yet-another-react-lightbox/styles.css").then(() => setCssLoaded(true));
  }, []);

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
              Галерея
            </h2>
          </ScrollReveal>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="relative aspect-[4/3] rounded-card overflow-hidden group cursor-pointer w-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex >= 0 && cssLoaded && (
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      )}
    </>
  );
}
