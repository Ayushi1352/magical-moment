import type { CompanyData, FooterData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { HeartFlourish } from "@/components/ui/Ornaments";
import { fill } from "@/components/ui/text";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const heading = "font-heading text-[1.5rem] leading-none sm:text-[2rem] text-[var(--color-white)] lg:text-[3.1rem]";
const underline = "mt-2 block h-[0.25rem] w-[3.5rem] sm:mt-3 sm:h-[0.3rem] sm:w-[4.8rem] rounded-full bg-[var(--color-gold-bright)] lg:mt-[1.2rem] lg:h-[0.44rem]";
const divider = "hidden w-[0.19rem] shrink-0 bg-[var(--color-gold)] lg:block";

// Wedding quote with the heart flourish; links; contact details; then the copyright line with the social links.
export const Footer = async ({ data, company }: { data?: FooterData; company: CompanyData }) => {
  if (!data) return null;
  // the footer lists the company contact details (the same ones as the contact section), in its own order
  const contactItems = data.contactIds.flatMap((id) => company.contactItems.filter((item) => item.id === id));
  const copyright = fill(data.copyrightText, { year: await currentYear() });

  return (
    <footer className="relative bg-[var(--color-navy-deep)] text-[var(--color-white)] lg:h-[40.9rem]">
      <div className="px-4 sm:px-6 lg:px-0">
        {/* phones and tablets: the quote on top, then the links and the contact details side by side */}
        <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-8 pb-8 pt-10 sm:gap-x-12 sm:gap-y-10 sm:pb-10 sm:pt-12 lg:flex lg:h-[33.4rem] lg:gap-0 lg:p-0">
          {/* quote and heart */}
          <div className="col-span-2 lg:ml-[9.56rem] lg:mt-[5rem] lg:w-[54.5rem]">
            <p className="max-w-[55.6rem] font-heading text-[1.2rem] leading-[1.4] sm:text-[1.4rem] lg:text-[2.75rem] lg:leading-[3.6rem]">
              {data.quoteText} <em className="font-semibold text-[var(--color-gold-bright)]">{data.quoteAccent}</em>
            </p>
            <HeartFlourish className="mt-4 w-[14rem] text-[var(--color-gold-ornament)] lg:ml-[13.94rem] lg:mt-[1.5rem] lg:w-[22.69rem]" />
          </div>

          <span aria-hidden="true" className={`${divider} lg:ml-[2.38rem] lg:mt-[5.65rem] lg:h-[22.44rem]`} />

          {/* links */}
          <nav aria-label={data.linksTitle} className="lg:ml-[4rem] lg:mt-[4.35rem] lg:w-[15.19rem]">
            <h2 className={heading}>{data.linksTitle}</h2>
            <span aria-hidden="true" className={underline} />
            <ul className="mt-4 grid gap-1.5 sm:mt-5 sm:gap-2 lg:mt-[1.4rem] lg:gap-0">
              {data.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="group inline-flex items-center gap-2 whitespace-nowrap font-ui text-[0.95rem] sm:gap-[1.4rem] sm:text-[1.1rem] text-[var(--color-white)] transition-colors hover:text-[var(--color-gold-bright)] lg:h-[2.37rem] lg:gap-[1.6rem] lg:pl-[0.5rem] lg:text-[1.6rem]"
                  >
                    <Icon name="LuChevronRight" className="size-[0.9rem] text-[var(--color-gold-bright)] sm:size-[1.1rem] transition-transform group-hover:translate-x-0.5 lg:size-[1.35rem]" strokeWidth={3} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className={`${divider} lg:mt-[5.65rem] lg:h-[22.44rem]`} />

          {/* contact details */}
          <div className="lg:ml-[3rem] lg:mt-[3.7rem] lg:w-[26rem]">
            <h2 className={heading}>{data.contactsTitle}</h2>
            <span aria-hidden="true" className={underline} />
            <ul className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 lg:mt-[1.25rem] lg:gap-[0.75rem]">
              {contactItems.map((item) => {
                const external = item.url.startsWith("http");
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={`${item.title}: ${item.lines.join(" ")}`}
                      className="group flex items-center gap-2.5 font-ui sm:gap-4 lg:gap-[1.6rem]"
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border-[0.12rem] sm:size-12 sm:border-[0.14rem] border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] transition-colors duration-300 group-hover:bg-[var(--color-gold-bright)] group-hover:text-[var(--color-navy-deep)] lg:size-[3.69rem] lg:border-[0.16rem]">
                        <Icon name={item.footerIcon ?? item.icon} className="size-4 sm:size-6 lg:size-[1.85rem]" strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0 break-words">
                        <span className="block text-[0.85rem] font-semibold leading-tight sm:text-[1.05rem] text-[var(--color-gold-bright)] lg:text-[1.56rem] lg:leading-[1.75rem]">{item.title}</span>
                        {item.lines.map((line) => (
                          <span key={line} className="block text-[0.8rem] leading-snug sm:text-[1rem] text-[var(--color-white)] lg:whitespace-nowrap lg:text-[1.56rem] lg:leading-[1.75rem]">
                            {line}
                          </span>
                        ))}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 border-t-[0.25rem] border-[var(--color-gold-bright)] lg:border-t-[0.4rem] py-6 sm:flex-row sm:justify-between lg:ml-[6.75rem] lg:mr-[6.44rem] lg:h-[7.5rem] lg:items-start lg:py-0 lg:pt-[1.75rem]">
          <p className="text-center font-sans text-[1rem] text-[var(--color-white)] sm:text-left lg:mt-[0.62rem] lg:text-[1.76rem]">{copyright}</p>
          <div className="flex items-center gap-4 lg:gap-0">
            <ul aria-label={data.socialLabel} className="flex gap-3 lg:gap-[1.6rem]">
              {data.socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-full border-[0.14rem] border-[var(--color-gold-bright)] text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-gold-bright)] hover:text-[var(--color-navy-deep)] lg:size-[3.5rem] lg:border-[0.14rem]"
                  >
                    <Icon name={social.icon} className="size-5 lg:size-[1.6rem]" />
                  </a>
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="h-10 w-px bg-[var(--color-white-85)] lg:ml-[2rem] lg:h-[3.25rem] lg:w-[0.19rem]" />
            <a
              href={data.backToTopUrl}
              aria-label={data.backToTopLabel}
              className="grid size-11 place-items-center rounded-full bg-[var(--color-gold-bright)] text-[var(--color-white)] transition-transform duration-300 hover:-translate-y-1 lg:ml-[2.13rem] lg:size-[3.5rem]"
            >
              <Icon name="LuArrowUp" className="size-6 lg:size-[2rem]" strokeWidth={2.8} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
