"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** One answer open at a time (the first one to start with); the open question gets the navy bar */
export const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState(items[0]?.id ?? "");

  return (
    <ul className="grid gap-[0.9rem] lg:gap-[1.45rem]">
      {items.map((item, index) => {
        const isOpen = open === item.id;
        return (
          <li
            key={item.id}
            data-reveal
            data-reveal-delay={index * 80}
            className={`overflow-hidden rounded-[0.9rem] border-[0.125rem] bg-[var(--color-white)] transition-colors duration-300 lg:rounded-[1.25rem] ${
              isOpen ? "border-[var(--color-gold-border)]" : "border-[var(--color-gold-soft)] hover:border-[var(--color-gold)]"
            }`}
          >
            <h3>
              <button
                type="button"
                id={`faq-question-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => setOpen(isOpen ? "" : item.id)}
                className={`flex min-h-[3.75rem] w-full items-center justify-between gap-4 px-5 py-3 text-left font-heading text-[1.15rem] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 sm:text-[1.3rem] lg:pl-[3.5rem] lg:pr-[2.3rem] lg:text-[2.4rem] ${
                  isOpen ? "bg-[var(--color-navy-faq)] text-[var(--color-white)] lg:min-h-[5.56rem]" : "text-[var(--color-text-black)] hover:text-[var(--color-gold)] lg:min-h-[5rem]"
                }`}
              >
                {item.question}
                {isOpen ? (
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border-[0.14rem] border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] lg:size-[3.1rem] lg:border-[0.19rem]">
                    <Icon name="LuMinus" className="size-5 lg:size-[1.9rem]" strokeWidth={2.6} />
                  </span>
                ) : (
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold-dark)] text-[var(--color-white)] lg:size-[3.1rem]">
                    <Icon name="LuPlus" className="size-5 lg:size-[2rem]" strokeWidth={2.8} />
                  </span>
                )}
              </button>
            </h3>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-5 pb-5 pt-4 font-heading text-[1rem] leading-[1.55] text-[var(--color-text-dark)] sm:text-[1.1rem] lg:pb-[1.7rem] lg:pl-[3.6rem] lg:pr-[4rem] lg:pt-[1rem] lg:text-[1.86rem] lg:leading-[2.44rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
