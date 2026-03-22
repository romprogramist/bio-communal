"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ScrollReveal from "./ScrollReveal";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  alt: `Объект ${i + 1}`,
}));

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
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
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-text-secondary text-sm">
                  Фото {i + 1}
                </div>
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

        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      </div>
    </section>
  );
}
