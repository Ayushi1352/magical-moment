"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ServicesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { roundGoldClass } from "@/components/ui/buttonStyles";
import { fill } from "@/components/ui/text";

const AUTOPLAY_MS = 5000;

/** the card at this place in the row is shown on phones (1), tablets (2) or desktops (3) */
const visibleAt = ["", "max-sm:hidden", "max-lg:hidden"];

/**
 * Service cards: one on phones, two on tablets, three on desktop. The arrows, the dots and the timer move the row
 * on by one card and it wraps around, so every service can be the first one.
 */
export const ServicesSlider = ({ data }: { data: ServicesData }) => {
  const { services } = data;
  const count = services.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (step: number) => setIndex((current) => (current + step + count) % count);

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, count]);

  // the cards in their current order, starting from the selected one
  const ordered = services.map((_, place) => services[(index + place) % count]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <ul className="mx-auto mt-10 grid max-w-[34rem] gap-6 sm:max-w-none sm:grid-cols-2 lg:absolute lg:left-[8rem] lg:top-[28.56rem] lg:mt-0 lg:w-[103.875rem] lg:grid-cols-3 lg:gap-[1.94rem]" aria-live="polite">
        {ordered.slice(0, 3).map((service, place) => (
          <li
            key={`${service.id}-${index}`}
            className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border-[0.16rem] border-[var(--color-gold-border)] bg-[var(--color-bg-card)] shadow-[0_0.9rem_1.6rem_-0.6rem_var(--color-shadow)] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-x-6 starting:opacity-0 lg:h-[48.94rem] ${visibleAt[place]}`}
          >
            {/* Pure clean photograph with CSS/SVG curved transition */}
            <div className="relative aspect-[534/476] shrink-0 overflow-hidden">
              <Image src={service.image} alt={service.imageAlt} fill quality={95} sizes="(min-width: 1024px) 534px, (min-width: 640px) 46vw, 92vw" className="object-cover" />
              <svg viewBox="0 0 534 32" fill="var(--color-bg-card)" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute -bottom-[0.05rem] inset-x-0 h-5 w-full lg:h-[2.2rem]">
                <path d="M0,0 Q267,32 534,0 L534,32 L0,32 Z" />
              </svg>
            </div>

            {/* Circular emblem badge styled with CSS matching design screenshot */}
            <div aria-hidden="true" className="relative -mt-7 z-10 mx-auto flex size-14 items-center justify-center rounded-full border-[0.16rem] border-[var(--color-gold)] bg-[#0c1424] text-[var(--color-gold)] shadow-md transition-transform duration-300 group-hover:scale-105 lg:-mt-[2.7rem] lg:size-[5.4rem] lg:border-[0.2rem]">
              {service.id === "wedding-planning" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6 lg:size-[2.4rem]">
                  <circle cx="9" cy="12" r="5" />
                  <circle cx="15" cy="12" r="5" />
                </svg>
              ) : service.id === "engagement-ceremonies" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6 lg:size-[2.4rem]">
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                  <path d="M2 9h20" />
                  <path d="M10 3l-2 6 4 12 4-12-2-6" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6 lg:size-[2.4rem]">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.05-7.05l-2.83 2.83m-8.48 8.48l-2.83 2.83m0-14.14l2.83 2.83m8.48 8.48l2.83 2.83" />
                </svg>
              )}
            </div>

            <Image src={data.leafLeft.src} alt="" width={data.leafLeft.width} height={data.leafLeft.height} sizes="98px" className="pointer-events-none absolute bottom-[0.3rem] left-[0.2rem] w-[5rem] lg:w-[6.13rem]" />
            <Image src={data.leafRight.src} alt="" width={data.leafRight.width} height={data.leafRight.height} sizes="119px" className="pointer-events-none absolute bottom-[0.3rem] right-[0.2rem] w-[6rem] lg:w-[7.44rem]" />
            <div className="relative flex flex-1 flex-col items-center px-6 pb-10 pt-3 text-center lg:pb-0 lg:pt-[1.35rem]">
              <h3 className="max-w-[17rem] font-heading text-[1.75rem] font-bold leading-[1.02] tracking-[-0.01em] text-[var(--color-navy)] transition-colors duration-300 group-hover:text-[var(--color-gold)] lg:max-w-none lg:text-[2.8rem] lg:leading-[2.8rem]">
                {service.title}
              </h3>
              <span aria-hidden="true" className="mt-4 flex items-center gap-[0.85rem] text-[var(--color-gold)] lg:mt-[1.8rem]">
                <span className="h-[0.125rem] w-16 bg-current lg:w-[6.25rem]" />
                <span className="size-[0.7rem] rotate-45 border-[0.14rem] border-current lg:size-[0.82rem]" />
                <span className="h-[0.125rem] w-16 bg-current lg:w-[6.25rem]" />
              </span>
              <p className="mt-4 max-w-[17rem] font-ui text-[1.125rem] leading-[1.45] text-[var(--color-text)] lg:mt-[1.3rem] lg:max-w-[24rem] lg:text-[2rem] lg:leading-[2.44rem]">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-5 lg:mt-0">
        <button type="button" aria-label={data.previousLabel} onClick={() => go(-1)} className={`${roundGoldClass} size-12 lg:absolute lg:left-[2.31rem] lg:top-[48.75rem] lg:size-[4.125rem]`}>
          <Icon name="LuChevronLeft" className="size-6 lg:size-[2.4rem]" strokeWidth={2.2} />
        </button>
        <div className="flex items-center gap-[1rem] lg:absolute lg:left-1/2 lg:top-[79.8rem] lg:-translate-x-1/2 lg:gap-[1.05rem]">
          {services.map((service, n) => (
            <button
              key={service.id}
              type="button"
              aria-label={fill(data.showLabel, { title: service.title })}
              aria-current={n === index}
              onClick={() => setIndex(n)}
              className={`size-[1.4rem] rounded-full border-[0.16rem] border-[var(--color-gold)] transition-colors duration-300 lg:size-[1.5rem] ${n === index ? "bg-[var(--color-gold)]" : "bg-transparent hover:bg-[var(--color-cream)]"}`}
            />
          ))}
        </div>
        <button type="button" aria-label={data.nextLabel} onClick={() => go(1)} className={`${roundGoldClass} size-12 lg:absolute lg:left-[113.5rem] lg:top-[48.75rem] lg:size-[4.125rem]`}>
          <Icon name="LuChevronRight" className="size-6 lg:size-[2.4rem]" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
};
