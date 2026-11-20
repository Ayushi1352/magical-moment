import type { CompanyData, ContactData, ContactFormData } from "@/types/templates.types";
import { DesignFrame, sectionSpace } from "@/components/ui/DesignFrame";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Lotus } from "@/components/ui/Ornaments";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  data?: ContactData;
  form?: ContactFormData;
  company: CompanyData;
  /** choices of the form’s event list (built in app/page.tsx from the Services section) */
  eventOptions: string[];
};

/** Centred heading; the navy contact card on the left and the message form on the right (sizes from the 1920px design) */
export const ContactSection = ({ data, form, company, eventOptions }: Props) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative scroll-mt-[4.5rem] bg-[var(--color-bg-soft)] lg:scroll-mt-[6.25rem] ${sectionSpace}`}>
      <DesignFrame height={1122} offset={100}>
        <div className="px-4 sm:px-6 lg:px-0 lg:pt-[5.75rem]">
          <SectionHeading
            label={data.label}
            titleTop={data.titleTop}
            titleAccent={data.titleAccent}
            description={data.description}
            labelTextClass="text-[var(--color-text-black)]"
            labelSizeClass="text-[1.1rem] tracking-[0.4em] lg:text-[3.19rem] lg:tracking-[0.27em]"
            labelLineClass="w-12 lg:w-[9.69rem]"
            labelGapClass="gap-4 lg:gap-[2.63rem]"
            titleClassName="!font-bold !text-[var(--color-text-black)] lg:mt-[1.35rem] lg:text-[5.5rem] lg:leading-[5.5rem] lg:!tracking-[-0.03em]"
            descriptionClass="lg:!mt-[0.75rem] lg:!text-[2.36rem] text-[var(--color-text-black)]"
          />

          <div className="mx-auto mt-10 grid max-w-[47rem] gap-8 lg:mt-0 lg:block lg:max-w-none">
            {/* contact card */}
            <div
              data-reveal
              className="relative overflow-hidden rounded-[2.25rem] bg-[var(--color-navy-deep)] px-6 pb-10 pt-6 text-[var(--color-white)] sm:px-10 lg:absolute lg:left-[8.94rem] lg:top-[23.19rem] lg:h-[53.19rem] lg:w-[47.13rem] lg:rounded-[4rem] lg:p-0"
            >
              <div className="text-center lg:pt-[1.25rem]">
                <Lotus backdrop="var(--color-navy-deep)" className="mx-auto w-[7rem] text-[var(--color-gold-ornament)] lg:w-[10.31rem]" />
                <p className="mt-1 font-heading text-[2.1rem] font-bold leading-none tracking-[-0.01em] sm:text-[2.4rem] lg:-mt-[0.2rem] lg:translate-x-[0.75rem] lg:text-[3.83rem]">{data.cardTitle}</p>
                <p className="mt-3 flex items-center justify-center gap-2 whitespace-nowrap font-heading text-[0.8rem] uppercase leading-none tracking-[0.2em] sm:gap-3 sm:text-[0.95rem] sm:tracking-[0.3em] lg:mt-[1rem] lg:translate-x-[0.45rem] lg:gap-[0.7rem] lg:text-[1.72rem] lg:tracking-[0.23em]">
                  <span aria-hidden="true" className="h-[0.125rem] w-6 bg-[var(--color-gold-bright)] sm:w-8 lg:h-[0.19rem] lg:w-[3.56rem]" />
                  <span className="-mr-[0.3em]">{data.cardTagline}</span>
                  <span aria-hidden="true" className="h-[0.125rem] w-6 bg-[var(--color-gold-bright)] sm:w-8 lg:h-[0.19rem] lg:w-[3.56rem]" />
                </p>
              </div>

              <ul className="mt-8 grid lg:ml-[6.19rem] lg:mt-[2.15rem] lg:w-[35rem]">
                {company.contactItems.map((item, index) => {
                  const external = item.url.startsWith("http");
                  return (
                    <li key={item.id} className={index > 0 ? "relative pt-4 before:absolute before:left-[4.4rem] before:right-0 before:top-0 before:h-px before:bg-[var(--color-white-40)] lg:pt-[0.65rem] lg:before:left-[7.94rem] lg:before:right-0 lg:before:h-[0.125rem]" : ""}>
                      <a
                        href={item.url}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 pb-4 lg:gap-[2.75rem] lg:pb-[1.2rem]"
                      >
                        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold-dark)] transition-transform duration-300 group-hover:scale-105 lg:size-[5.25rem]">
                          <Icon name={item.icon} className="size-6 lg:size-[2.4rem]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-heading text-[1.3rem] font-bold leading-tight text-[var(--color-gold-bright)] lg:text-[2.25rem] lg:leading-[2.6rem]">{item.title}</span>
                          <span className="block break-words font-ui text-[1.05rem] leading-[1.4] group-hover:underline group-hover:underline-offset-4 lg:text-[1.9rem] lg:leading-[2.2rem]">
                            {item.lines.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <ul aria-label={data.socialLabel} className="mt-6 flex justify-center gap-4 lg:mt-[0.2rem] lg:gap-[2rem]">
                {data.socialLinks.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid size-12 place-items-center rounded-full border-[0.14rem] border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] transition-colors duration-300 hover:bg-[var(--color-gold-bright)] hover:text-[var(--color-navy-deep)] lg:size-[4.38rem] lg:border-[0.16rem]"
                    >
                      <Icon name={social.icon} className="size-5 lg:size-[2rem]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* message form */}
            <div
              data-reveal
              className="rounded-[2rem] border-[0.16rem] border-[var(--color-gold-border)] bg-[var(--color-white)] px-5 pb-7 pt-6 shadow-[0_1rem_2rem_-1.2rem_var(--color-shadow)] sm:px-8 lg:absolute lg:left-[58.94rem] lg:top-[24.44rem] lg:h-[51.81rem] lg:w-[52.06rem] lg:rounded-[2.9rem] lg:px-[2.25rem] lg:pb-0 lg:pt-[2rem]"
            >
              <h3 className="font-heading text-[2rem] font-bold leading-[1.2] tracking-[-0.01em] text-[var(--color-text-black)] lg:ml-[0.6rem] lg:text-[3.75rem] lg:leading-[4rem]">{data.formTitle}</h3>
              <ContactForm data={form} eventOptions={eventOptions} />
            </div>
          </div>
        </div>
      </DesignFrame>
    </section>
  );
};
