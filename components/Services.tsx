"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Wedding Planning",
    description:
      "Full-service wedding planning, day-of coordination, bespoke floral design, and seamless vendor management tailored to your unique love story.",
    image: "/images/service-wedding.jpg",
    icon: "rings",
  },
  {
    id: 2,
    title: "Engagement Celebration",
    description:
      "Celebrate the beginning of your forever journey with romantic candlelit ambiance, custom styling, curated gastronomy, and unforgettable moments.",
    image: "/images/service-engagement.jpg",
    icon: "diamond",
  },
  {
    id: 3,
    title: "Mehendi & Sangeet",
    description:
      "Vibrant traditional ceremonies filled with rhythmic music, choreographed dances, lavish marigold decor, and joyous family celebrations.",
    image: "/images/service-mehendi.jpg",
    icon: "sparkles",
  },
];

export default function Services() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#fdfbf7] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7eed9]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f7eed9]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b8862d] uppercase">
              Our Services
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a2f] leading-tight">
            Create{" "}
            <span className="font-normal italic gold-text-gradient">
              Unforgettable Celebrations
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#635c52] leading-relaxed max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide comprehensive event management
            services tailored to your unique vision and style.
          </p>
        </div>

        {/* Services Cards with Navigation Chevrons */}
        <div className="relative">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous service"
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white border border-[#dfb76c] text-[#b8862d] items-center justify-center shadow-lg hover:bg-[#b8862d] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next service"
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white border border-[#dfb76c] text-[#b8862d] items-center justify-center shadow-lg hover:bg-[#b8862d] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#dfb76c]/60 shadow-[0_8px_30px_rgba(184,134,45,0.08)] hover:shadow-[0_15px_40px_rgba(184,134,45,0.18)] hover:border-[#b8862d] transition-all duration-500 flex flex-col"
              >
                {/* Image Container with Arched Shape */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden p-2.5 pb-0">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating Circular Badge Centered Over Border */}
                <div className="relative -mt-7 flex justify-center z-10">
                  <div className="h-14 w-14 rounded-full bg-[#07162c] border-2 border-[#dfb76c] flex items-center justify-center text-[#dfb76c] shadow-lg group-hover:bg-[#b8862d] group-hover:text-white transition-colors duration-300">
                    {service.icon === "rings" && (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.69 2 6 4.69 6 8c0 1.95.93 3.68 2.37 4.78C5.45 14.18 3 17.81 3 22h18c0-4.19-2.45-7.82-5.37-9.22C17.07 11.68 18 9.95 18 8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
                      </svg>
                    )}
                    {service.icon === "diamond" && (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 2H8l-5 7 9 13 9-13-5-7zm-1.4 2l3.6 5h-4.3l.7-5zm-5.2 0h5.2l-1 5H9.4l-1-5zm-3.6 5l3.6-5 .7 5H5.8zm6.2 11.2L6.3 11h11.4l-5.7 7.2z" />
                      </svg>
                    )}
                    {service.icon === "sparkles" && (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2zm6 12l-1.25 3.75L13 19l3.75 1.25L18 24l1.25-3.75L23 19l-3.75-1.25L18 14z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 pt-3 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c1a2f] mb-3 group-hover:text-[#b8862d] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#635c52] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#f2ebd9]">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b8862d] hover:text-[#0c1a2f] transition-colors group/link"
                    >
                      <span>Explore Service</span>
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>

                {/* Subtle Luxury Corner Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#dfb76c]/60 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#dfb76c]/60 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-8 bg-[#b8862d]" : "w-2.5 bg-[#dfb76c]/40 hover:bg-[#dfb76c]"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
