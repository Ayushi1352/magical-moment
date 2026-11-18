import Image from "next/image";
import type { ProcessData } from "@/types/templates.types";
import { DesignFrame, sectionSpace } from "@/components/ui/DesignFrame";
import { SectionLabel, titleClass } from "@/components/ui/SectionHeading";

/*
  Where every step sits in the 1920px design (1 design pixel = 0.0625rem, from the top of the section):
  the photo with its cream square behind it, and the text block (line + number, title, text).
*/
const layout = [
  {
    photo: "lg:left-[46.5rem] lg:top-[5.81rem] lg:h-[23.81rem] lg:w-[28rem]",
    backing: "lg:left-[-1.94rem] lg:top-[-1.75rem] lg:h-[20.56rem] lg:w-[17rem]",
    text: "lg:left-[78.94rem] lg:top-[9.65rem] lg:w-[27rem]",
    line: "lg:w-[6.8rem]",
    textWidth: "lg:max-w-[26.5rem]",
    indent: "",
  },
  {
    photo: "lg:left-[81.56rem] lg:top-[32.19rem] lg:h-[24.94rem] lg:w-[31.69rem]",
    backing: "lg:left-[14.25rem] lg:top-[-1.88rem] lg:h-[18.81rem] lg:w-[19.31rem]",
    text: "lg:left-[56.4rem] lg:top-[34.65rem] lg:w-[22rem]",
    line: "lg:w-[7.9rem]",
    textWidth: "lg:max-w-[21.5rem]",
    // the design starts this text a little left of its line and title
    indent: "lg:ml-[1.5rem]",
  },
  {
    photo: "lg:left-[8.13rem] lg:top-[52.06rem] lg:h-[25rem] lg:w-[31.75rem]",
    backing: "lg:left-[-1.94rem] lg:top-[-1.94rem] lg:h-[19.69rem] lg:w-[19.31rem]",
    text: "lg:left-[45.19rem] lg:top-[56.95rem] lg:w-[28rem]",
    line: "lg:w-[6.2rem]",
    textWidth: "lg:max-w-[27rem]",
    indent: "",
  },
];

/** Title on the left; three steps, each a photo on a cream square and its text, zig-zagging down the section */
export const ProcessSection = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative scroll-mt-[4.5rem] bg-[var(--color-bg-soft)] lg:scroll-mt-[6.25rem] ${sectionSpace}`}>
      <DesignFrame height={1167} offset={65}>
        <div className="px-4 sm:px-6 lg:p-0">
          <div data-reveal className="lg:absolute lg:left-[5.63rem] lg:top-[7.65rem]">
            <SectionLabel
              text={data.label}
              lines="after"
              textClass="text-[var(--color-text-dark)]"
              sizeClass="font-sans !font-medium text-[0.95rem] tracking-[0.12em] lg:text-[1.72rem] lg:tracking-[0.04em]"
              lineClass="w-12 lg:w-[5.7rem]"
              gapClass="gap-3 lg:gap-[1.5rem]"
            />
            <h2 className={`mt-4 text-[length:min(2.6rem,calc((100vw-2rem)/6.9))] !font-medium !tracking-[-0.037em] sm:text-[3.6rem] lg:mt-[2.3rem] lg:whitespace-nowrap lg:text-[6.05rem] lg:leading-[6rem] ${titleClass}`}>
              <span className="block">{data.titleTop}</span>
              <span className="block text-[var(--color-gold)]">{data.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-[33rem] font-sans text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:mt-[2.1rem] lg:max-w-[33.5rem] lg:text-[2.03rem] lg:leading-[2.63rem]">{data.description}</p>
          </div>

          <ol className="mt-12 grid gap-14 sm:grid-cols-2 lg:mt-0 lg:block">
            {data.steps.map((step, index) => {
              const place = layout[index % layout.length];
              return (
                <li key={step.id} className="contents">
                  <div data-reveal className={`relative mt-6 ml-6 aspect-[507/399] lg:absolute lg:m-0 lg:aspect-auto ${place.photo}`}>
                    <span aria-hidden="true" className={`absolute -left-6 -top-6 h-[82%] w-[60%] bg-[var(--color-cream)] ${place.backing}`} />
                    <div className="relative size-full overflow-hidden">
                      <Image src={step.image} alt={step.imageAlt} fill quality={90} sizes="(min-width: 1024px) 507px, (min-width: 640px) 46vw, 92vw" className="object-cover" />
                    </div>
                  </div>
                  <div data-reveal data-reveal-delay={100} className={`lg:absolute ${place.text}`}>
                    <p className={`flex items-center gap-[1.9rem] font-heading text-[2.4rem] font-medium italic leading-none text-[var(--color-gold)] lg:text-[3.95rem] ${place.indent}`}>
                      <span aria-hidden="true" className={`h-[0.19rem] w-16 bg-current lg:h-[0.25rem] ${place.line}`} />
                      {step.number}
                    </p>
                    <h3 className={`mt-3 font-heading text-[2.2rem] font-medium leading-none tracking-[-0.01em] text-[var(--color-navy)] lg:mt-[1.3rem] lg:text-[4.05rem] ${place.indent}`}>{step.title}</h3>
                    <p className={`mt-3 font-sans text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:mt-[0.95rem] lg:text-[1.95rem] lg:leading-[2.5rem] ${place.textWidth}`}>{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </DesignFrame>
    </section>
  );
};
