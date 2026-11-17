"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Magical Moments was hands-down the best decision we made for our wedding! From our initial styling consultation to the final dance, their team executed every nuance with absolute precision, warmth, and luxury. We couldn't have dreamed of a more unforgettable celebration!",
    name: "Pooja Sharma",
    role: "Bride · Udaipur Palace Wedding",
    avatar: "/images/client-avatar.jpg",
  },
  {
    id: 2,
    quote:
      "Planning a multi-day luxury wedding from abroad felt overwhelming until we partnered with Magical Moments. They managed every single vendor, floral design, and guest itinerary with effortless grace. It truly felt like stepping into a fairytale.",
    name: "Ananya & Rohan Mehra",
    role: "Couple · Beachfront Mandap, Goa",
    avatar: "/images/client-avatar.jpg",
  },
  {
    id: 3,
    quote:
      "The decor, the lighting, the seamless flow of events—everything exceeded our highest expectations. Our guests are still talking about how magical every single moment felt. Thank you for making our special day completely stress-free!",
    name: "Kavita & Aditya Roy",
    role: "Couple · Grand Estate Reception",
    avatar: "/images/client-avatar.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Testimonial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b8862d] uppercase">
                Testimonials
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a2f] leading-tight mb-8">
              Love Stories <br />
              <span className="font-normal italic gold-text-gradient">
                from Our Happy Clients
              </span>
            </h2>

            {/* Giant Gold Quote Mark */}
            <div className="font-serif text-5xl sm:text-6xl text-[#dfb76c] leading-none mb-3 select-none">
              “
            </div>

            {/* Quote Text */}
            <p className="text-base sm:text-lg text-[#554e44] font-normal leading-relaxed italic mb-8 min-h-[100px]">
              {current.quote}
            </p>

            {/* Client Info Row */}
            <div className="flex items-center gap-4 pb-6 border-b border-[#f2ebd9]">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#dfb76c] shadow-sm flex-shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-[#0c1a2f]">
                  {current.name}
                </h4>
                <p className="text-xs text-[#807667]">
                  {current.role}
                </p>
                {/* 5 Stars */}
                <div className="flex text-[#dfb76c] text-sm mt-1 gap-1">
                  {"★".repeat(5)}
                </div>
              </div>
            </div>

            {/* Navigation Arrows & Indicators */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                aria-label="Previous story"
                className="h-10 w-10 rounded-full border border-[#c59d5f] text-[#b8862d] flex items-center justify-center hover:bg-[#b8862d] hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-6 bg-[#b8862d]" : "w-2 bg-[#dfb76c]/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                aria-label="Next story"
                className="h-10 w-10 rounded-full border border-[#c59d5f] text-[#b8862d] flex items-center justify-center hover:bg-[#b8862d] hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Column: Layered Arched Visuals */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px]">
              
              {/* Primary Large Arch: Couple Photo */}
              <div className="p-2 rounded-t-[160px] md:rounded-t-[200px] rounded-b-3xl border-2 border-[#dfb76c]/70 bg-white shadow-[0_15px_45px_rgba(184,134,45,0.15)]">
                <div className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full rounded-t-[152px] md:rounded-t-[192px] rounded-b-2xl overflow-hidden">
                  <Image
                    src="/images/testimonial-couple.jpg"
                    alt="Joyful Bride and Groom"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Secondary Overlaid Arch: Illuminated Night Mandap */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-44 sm:w-56 md:w-60 z-20">
                <div className="p-1.5 rounded-t-[70px] sm:rounded-t-[90px] rounded-b-2xl border-2 border-[#dfb76c] bg-[#07162c] shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
                  <div className="relative h-44 sm:h-52 w-full rounded-t-[64px] sm:rounded-t-[84px] rounded-b-xl overflow-hidden">
                    <Image
                      src="/images/testimonial-decor.jpg"
                      alt="Illuminated Night Mandap"
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
