"use client";

import { useState } from "react";
import Image from "next/image";
import type { FaqData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const FaqSection = ({ data }: { data?: FaqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={data.id} className="py-20 md:py-28 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal>
          <SectionHeading
            label={data.label}
            titlePart1={data.titlePart1}
            titleHighlight={data.titleHighlight}
            description={data.description}
          />
        </div>

        {/* 2-Column Grid: Arched Photo Left & Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Arched Ceremony Aisle Image */}
          <div className="lg:col-span-5 flex justify-center" data-reveal>
            <div className="relative w-full max-w-[420px]">
              <div className="p-2 rounded-t-[140px] md:rounded-t-[180px] rounded-b-3xl border-2 border-[#dfb76c]/70 bg-white shadow-[0_15px_40px_rgba(184,134,45,0.12)]">
                <div className="relative h-[440px] sm:h-[500px] md:h-[540px] w-full rounded-t-[132px] md:rounded-t-[172px] rounded-b-2xl overflow-hidden">
                  <Image
                    src={data.sideImage}
                    alt={data.sideImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center bg-white/90 backdrop-blur-md rounded-xl py-2 px-3 border border-[#dfb76c]/60">
                    <p className="text-xs font-serif italic text-[#0c1a2f]">
                      {data.sideBadgeText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-3.5" data-reveal data-reveal-delay="150">
            {data.items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#07162c] border-[#dfb76c] text-white shadow-lg"
                      : "bg-white border-[#e8dfcf] text-[#0c1a2f] hover:border-[#dfb76c]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span
                      className={`font-serif text-base sm:text-lg font-medium tracking-tight ${
                        isOpen ? "text-white" : "text-[#0c1a2f]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex-shrink-0 h-8 w-8 rounded-full border flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "border-[#dfb76c] bg-[#b8862d] text-white rotate-180"
                          : "border-[#dfb76c] text-[#b8862d] bg-[#fdfbf7]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#d4dfed] leading-relaxed border-t border-white/10 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
