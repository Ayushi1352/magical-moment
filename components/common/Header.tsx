"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CompanyData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";
import { sectionId, useActiveSection } from "@/components/ui/useActiveSection";

/** Desktop link with the gold underline of the current section */
const linkClass = (current: boolean) =>
  `relative -mt-[0.25rem] whitespace-nowrap py-[0.4rem] font-ui text-[1.5625rem] font-medium leading-none transition-colors after:absolute after:inset-x-0 after:-bottom-[0.8rem] after:h-[0.375rem] after:rounded-full after:bg-[var(--color-gold)] after:transition-transform after:duration-300 ${
    current ? "text-[var(--color-gold)] after:scale-x-100" : "text-[var(--color-text-black)] after:scale-x-0 hover:text-[var(--color-gold)]"
  }`;

export const Header = ({ data, company }: { data?: HeaderData; company: CompanyData }) => {
  const [ids] = useState(() => data?.navLinks.map((link) => sectionId(link.url)) ?? []);
  const { active, scrolled } = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;

  /** The logo scrolls back to the top and drops any "#section" from the address bar, without reloading the page */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
  };

  // at the top of the page the header is the design's tall bar; once the page scrolls it gets compact with a shadow
  const compact = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 mx-auto max-w-[120rem] bg-[var(--color-white)] transition-shadow duration-300 ${
        compact ? "shadow-[0_0.5rem_1.75rem_-1rem_var(--color-shadow-strong)]" : ""
      }`}
    >
      <div
        className={`flex items-center gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:gap-0 lg:pl-[3.25rem] lg:pr-[3.125rem] ${
          compact ? "h-[4.5rem] lg:h-[6.25rem]" : "h-[4.5rem] sm:h-[5.5rem] lg:h-[7.8rem]"
        }`}
      >
        <Link href={data.logoUrl} onClick={goHome} aria-label={data.homeLabel} className="shrink-0">
          <Image
            src={company.logo}
            alt={company.logoAlt}
            width={company.logoWidth}
            height={company.logoHeight}
            preload
            quality={90}
            sizes="(min-width: 1024px) 287px, 160px"
            className={`h-auto transition-[width] duration-300 ${compact ? "w-[8.5rem] lg:w-[13.5rem]" : "w-[8.5rem] sm:w-[10rem] lg:w-[17.94rem]"}`}
          />
        </Link>

        <nav aria-label={data.mainNavLabel} className="ml-auto hidden items-center gap-[2.3rem] lg:flex">
          {data.navLinks.map((link) => {
            const current = sectionId(link.url) === active;
            return (
              <a key={link.id} href={link.url} aria-current={current ? "location" : undefined} className={linkClass(current)}>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-[3.25rem]">
          <a
            href={data.buttonUrl}
            className={`${buttonClass} h-11 gap-2 rounded-[0.5rem] px-5 font-ui text-base font-semibold max-sm:hidden lg:h-[4rem] lg:w-[13.56rem] lg:gap-[0.8rem] lg:px-0 lg:text-[1.5625rem]`}
          >
            {data.buttonText}
            <Icon name="LuArrowRight" className={`${buttonArrow} size-[1.15em]`} strokeWidth={2.2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? data.closeMenuLabel : data.openMenuLabel}
            className="grid size-11 place-items-center rounded-full border border-[var(--color-gold-border)] text-[var(--color-gold)] transition-colors hover:bg-[var(--color-cream)] lg:hidden"
          >
            <Icon name={open ? "LuX" : "LuMenu"} className="size-6" />
          </button>
        </div>
      </div>

      {/* phones and tablets: a card under the bar, only as tall as its links */}
      <nav
        id="mobile-menu"
        aria-label={data.mobileNavLabel}
        className={`absolute inset-x-4 top-full mt-2 grid max-h-[calc(100dvh-5.5rem)] overflow-hidden rounded-3xl bg-[var(--color-white)] shadow-[0_1.25rem_3.125rem_-1.25rem_var(--color-shadow-menu)] transition-[grid-template-rows,opacity] duration-500 sm:inset-x-6 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-y-auto">
          <ul className="flex flex-col px-5 py-4 sm:px-6">
            {data.navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-[var(--color-cream)] py-3.5 font-ui text-lg font-semibold transition-colors hover:text-[var(--color-gold)] ${
                    sectionId(link.url) === active ? "text-[var(--color-gold)]" : "text-[var(--color-navy)]"
                  }`}
                >
                  {link.label}
                  <Icon name="LuChevronRight" className="size-4 text-[var(--color-gold)]" strokeWidth={2.2} />
                </a>
              </li>
            ))}
            <li className="pt-5 sm:hidden">
              <a href={data.buttonUrl} onClick={() => setOpen(false)} className={`${buttonClass} h-12 w-full gap-2 rounded-[0.5rem] font-ui text-base font-semibold`}>
                {data.buttonText}
                <Icon name="LuArrowRight" className={`${buttonArrow} size-[1.15em]`} strokeWidth={2.2} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
