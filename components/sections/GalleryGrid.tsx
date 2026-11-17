"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

/*
  Every photo's place in the 1920px collage (left, top, width, height in design pixels, from the collage's top-left
  corner). From 1024px up the photos sit exactly there; phones and tablets show a simple two / three column grid.
*/
const places: [number, number, number, number][] = [
  [0, 0, 298, 237],
  [304, 0, 308, 237],
  [619, 0, 294, 237],
  [921, 0, 559, 337],
  [1486, 0, 341, 337],
  [0, 245, 913, 430],
  [921, 343, 285, 332],
  [1212, 343, 296, 332],
  [1520, 343, 307, 332],
  [0, 682, 542, 285],
  [549, 682, 377, 285],
  [934, 682, 273, 285],
  [1214, 682, 299, 285],
  [1521, 682, 306, 285],
];
const rem = (px: number) => `${px / 16}rem`;

/** The photo collage; a photo opens large in a lightbox with previous / next */
export const GalleryGrid = ({ data }: { data: GalleryData }) => {
  const { items } = data;
  const [open, setOpen] = useState<number | null>(null);
  const count = items.length;
  const close = useCallback(() => setOpen(null), []);
  const go = useCallback((step: number) => setOpen((current) => (current === null ? null : (current + step + count) % count)), [count]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  return (
    <>
      <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:absolute lg:left-[3rem] lg:top-[19.69rem] lg:mt-0 lg:block lg:h-[60.44rem] lg:w-[114.19rem]">
        {items.map((item, index) => {
          const [left, top, width, height] = places[index] ?? [0, 0, 300, 285];
          return (
            <li
              key={item.id}
              data-reveal
              data-reveal-delay={(index % 5) * 70}
              // the large couple photo spans two columns on phones and tablets
              className={`relative lg:absolute lg:aspect-auto lg:[height:var(--h)] lg:[left:var(--x)] lg:[top:var(--y)] lg:[width:var(--w)] ${index === 5 ? "col-span-2 aspect-[913/430]" : "aspect-[4/3]"}`}
              style={{ "--x": rem(left), "--y": rem(top), "--w": rem(width), "--h": rem(height) } as React.CSSProperties}
            >
              <button
                type="button"
                onClick={() => setOpen(index)}
                aria-label={fill(data.openLabel, { alt: item.imageAlt })}
                className="group relative block size-full overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  quality={90}
                  sizes={`(min-width: 1024px) ${width}px, (min-width: 640px) 33vw, 50vw`}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-[var(--color-navy)] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
              </button>
            </li>
          );
        })}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[open].imageAlt}
          onClick={close}
          className="fixed inset-0 z-50 grid place-items-center bg-[var(--color-lightbox)] p-4 transition-opacity duration-300 starting:opacity-0 sm:p-10"
        >
          <figure onClick={(event) => event.stopPropagation()} className="relative w-full max-w-5xl">
            <div key={open} className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border-2 border-[var(--color-gold-border)] transition-[opacity,transform] duration-500 starting:scale-95 starting:opacity-0">
              <Image src={items[open].image} alt={items[open].imageAlt} fill quality={90} sizes="(min-width: 1024px) 1024px, 100vw" className="object-contain" />
            </div>
            <figcaption className="mt-3 text-center font-ui text-base text-[var(--color-white)] sm:text-lg">{items[open].imageAlt}</figcaption>
          </figure>
          <button type="button" onClick={close} aria-label={data.closeLabel} className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-[var(--color-white)] text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-white)]">
            <Icon name="LuX" className="size-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            aria-label={data.previousLabel}
            className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-gold)] text-[var(--color-white)] transition-transform hover:scale-105 sm:left-6"
          >
            <Icon name="LuChevronLeft" className="size-6" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            aria-label={data.nextLabel}
            className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-gold)] text-[var(--color-white)] transition-transform hover:scale-105 sm:right-6"
          >
            <Icon name="LuChevronRight" className="size-6" strokeWidth={2.4} />
          </button>
        </div>
      )}
    </>
  );
};
