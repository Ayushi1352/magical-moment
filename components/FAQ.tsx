"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What services are included in your packages?",
    answer:
      "Our full-service packages provide end-to-end luxury management: mood board design, custom 3D layouts, venue selection, vendor contracts, floral and lighting styling, budget management, rehearsal direction, and dedicated on-site event managers.",
  },
  {
    id: 2,
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking 6 to 12 months in advance, especially for prime wedding season dates and destination venues, ensuring priority availability for top-tier venues and artisan vendors.",
  },
  {
    id: 3,
    question: "Can you provide customized wedding packages?",
    answer:
      "Yes, absolutely. Every love story is completely unique. We curate bespoke packages tailored specifically to your aesthetic vision, guest count, cultural traditions, and logistical scope.",
  },
  {
    id: 4,
    question: "Can you handle both indoor and outdoor events?",
    answer:
      "Yes, we specialize in luxury indoor ballrooms, heritage palaces, beachfront mandaps, open garden lawns, and custom marquee structures with all climate and weather contingencies planned.",
  },
  {
    id: 5,
    question: "Do you work within a specific budget?",
    answer:
      "We accommodate a range of luxury celebration budgets. During our initial consultation, we establish transparent budgetary allocations to maximize value and ensure unmatched elegance without surprises.",
  },
  {
    id: 6,
    question: "Will you manage vendors and day-of coordination?",
    answer:
      "Yes. From signing contracts and overseeing production load-in to directing the minute-by-minute schedule and final breakdown, our dedicated coordination team orchestrates every single detail.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b8862d] uppercase">
              FAQs
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a2f] leading-tight">
            Frequently Asked{" "}
            <span className="font-normal italic gold-text-gradient">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#635c52] leading-relaxed max-w-2xl mx-auto">
            Find answers to commonly asked questions about our planning process, packages, and on-day coordination.
          </p>
        </div>

        {/* 2-Column Grid: Arched Photo Left & Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Arched Ceremony Aisle Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="p-2 rounded-t-[140px] md:rounded-t-[180px] rounded-b-3xl border-2 border-[#dfb76c]/70 bg-white shadow-[0_15px_40px_rgba(184,134,45,0.12)]">
                <div className="relative h-[440px] sm:h-[500px] md:h-[540px] w-full rounded-t-[132px] md:rounded-t-[172px] rounded-b-2xl overflow-hidden">
                  <Image
                    src="/images/faq-decor.jpg"
                    alt="Wedding Ceremony Floral Altar"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-center bg-white/90 backdrop-blur-md rounded-xl py-2 px-3 border border-[#dfb76c]/60">
                    <p className="text-xs font-serif italic text-[#0c1a2f]">
                      Every detail crafted with absolute passion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
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
}
