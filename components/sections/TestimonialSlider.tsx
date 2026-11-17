"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TestimonialItem, TestimonialsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { roundOutlineClass } from "@/components/ui/buttonStyles";
import { fill } from "@/components/ui/text";

const AUTOPLAY_MS = 6000;

/** Quote, then the client's photo, name, city and stars */
const Quote = ({ item, ratingLabel, className }: { item: TestimonialItem; ratingLabel: string; className: string }) => (
  <blockquote className={className}>
    <p className="max-w-[50rem] font-heading text-[1.2rem] leading-[1.5] text-[var(--color-text-black)] sm:text-[1.4rem] lg:text-[2.4rem] lg:leading-[3.44rem]">{item.quote}</p>
    <footer className="mt-7 flex flex-wrap items-center gap-y-4 lg:mt-[3.85rem] lg:flex-nowrap">
      <span className="relative size-[5.5rem] shrink-0 rounded-full border-[0.16rem] border-[var(--color-gold)] p-[0.2rem] lg:size-[9.06rem] lg:border-[0.25rem] lg:p-[0.25rem]">
        <span className="relative block size-full overflow-hidden rounded-full">
          <Image src={item.image} alt={item.name} fill sizes="145px" className="object-cover" />
        </span>
      </span>
      <span aria-hidden="true" className="ml-5 h-16 w-[0.16rem] shrink-0 bg-[var(--color-gold)] lg:ml-[2.19rem] lg:h-[6.13rem] lg:w-[0.25rem]" />
      <span className="ml-5 lg:ml-[2.56rem] lg:w-[21.4rem]">
        <span className="block font-heading text-[1.5rem] font-semibold leading-tight text-[var(--color-text-black)] lg:text-[2.6rem] lg:leading-[2.9rem]">{item.name}</span>
        <span className="mt-1 block font-heading text-[1.05rem] text-[var(--color-text-dark)] lg:mt-[0.45rem] lg:text-[1.72rem]">{item.role}</span>
      </span>
      <span className="flex basis-full gap-[0.5rem] text-[var(--color-star)] lg:basis-auto lg:gap-[0.6rem]" role="img" aria-label={fill(ratingLabel, { stars: item.stars })}>
        {Array.from({ length: item.stars }, (_, n) => (
          <Icon key={n} name="FaStar" className="size-6 lg:size-[2.3rem]" />
        ))}
      </span>
    </footer>
  </blockquote>
);

/** One client at a time with arrows and dots; moves on by itself and stops while the mouse is over it */
export const TestimonialSlider = ({ data }: { data: TestimonialsData }) => {
  const { items } = data;
  const count = items.length;
  const [index, setIndex] = useState(Math.min(data.startIndex, count - 1));
  const [paused, setPaused] = useState(false);
  const go = (step: number) => setIndex((current) => (current + step + count) % count);

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, count]);

  return (
    <div data-reveal onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="contents lg:mt-[2.5rem] lg:block">
      <Icon name="RiDoubleQuotesL" className="-ml-[0.55rem] mt-8 size-16 text-[var(--color-gold)] lg:-my-[1rem] lg:-ml-[0.85rem] lg:size-[8rem]" />

      <div className="mt-2 grid lg:-mt-[0.6rem]" aria-live="polite">
        {/* every quote takes up the same cell unseen, so the block keeps the height of the longest one */}
        {items.map((item) => (
          <Quote key={item.id} item={item} ratingLabel={data.ratingLabel} className="invisible col-start-1 row-start-1" />
        ))}
        <Quote
          key={index}
          item={items[index]}
          ratingLabel={data.ratingLabel}
          className="col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-5 starting:opacity-0"
        />
      </div>

      <div className="order-last mt-10 flex items-center justify-center gap-6 lg:order-none lg:ml-[8.94rem] lg:mt-[3.75rem] lg:justify-start lg:gap-0">
        <button type="button" aria-label={data.previousLabel} onClick={() => go(-1)} className={`${roundOutlineClass} size-12 lg:size-[5.13rem]`}>
          <Icon name="LuChevronLeft" className="size-6 lg:size-[2.2rem]" strokeWidth={2.4} />
        </button>
        <div className="flex items-center gap-4 lg:ml-[6.25rem] lg:gap-[2rem]">
          {items.map((item, n) => (
            <button
              key={item.id}
              type="button"
              aria-label={fill(data.showLabel, { name: item.name })}
              aria-current={n === index}
              onClick={() => setIndex(n)}
              className={`rounded-full transition-colors duration-300 ${n === index ? "size-3.5 bg-[var(--color-gold)] lg:size-[1.25rem]" : "size-3 bg-[var(--color-dot)] hover:bg-[var(--color-gold-soft)] lg:size-[1.13rem]"}`}
            />
          ))}
        </div>
        <button type="button" aria-label={data.nextLabel} onClick={() => go(1)} className={`${roundOutlineClass} size-12 lg:ml-[5.94rem] lg:size-[5.13rem]`}>
          <Icon name="LuChevronRight" className="size-6 lg:size-[2.2rem]" strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
};
