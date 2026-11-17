import Image from "next/image";
import type { AboutData } from "@/types/templates.types";
import { DesignFrame, sectionSpace } from "@/components/ui/DesignFrame";
import { SectionLabel, accentClass, titleClass } from "@/components/ui/SectionHeading";

/** white photo frame with a soft shadow */
const frame = "relative overflow-hidden border-[0.35rem] border-[var(--color-white)] bg-[var(--color-white)] shadow-[0_0.6rem_1.6rem_-0.5rem_var(--color-shadow-strong)] lg:border-[0.5rem]";

/** where each of the three photos sits in the 1920px design (the middle one is larger and higher) */
const photoPlaces = [
  "aspect-[533/398] lg:absolute lg:left-[6.06rem] lg:top-[29rem] lg:aspect-auto lg:h-[24.875rem] lg:w-[33.3rem]",
  "col-span-2 row-start-1 aspect-[653/518] sm:col-span-1 sm:row-start-auto lg:absolute lg:left-[39.56rem] lg:top-[24.5rem] lg:z-10 lg:aspect-auto lg:h-[32.375rem] lg:w-[40.8rem]",
  "aspect-[536/398] lg:absolute lg:left-[80.5rem] lg:top-[29rem] lg:aspect-auto lg:h-[24.875rem] lg:w-[33.5rem]",
];
const photoSizes = ["(min-width: 1024px) 517px, 46vw", "(min-width: 1024px) 637px, 92vw", "(min-width: 1024px) 520px, 46vw"];

/** Label and title on the left, three framed photos, then the centred paragraph (sizes from the 1920px design) */
export const AboutSection = ({ data }: { data?: AboutData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative scroll-mt-[4.5rem] bg-[var(--color-bg-soft)] lg:scroll-mt-[6.25rem] ${sectionSpace}`}>
      <DesignFrame height={998} offset={96}>
        <div className="px-4 sm:px-6 lg:p-0">
          <div data-reveal className="lg:absolute lg:left-[8.44rem] lg:top-[5.65rem]">
            <SectionLabel
              text={data.label}
              lines="after"
              sizeClass="text-[1.1rem] tracking-[0.3em] lg:text-[2.4rem] lg:tracking-[0.242em]"
              lineClass="w-14 lg:w-[10.3rem]"
              gapClass="gap-4 lg:gap-[1.6rem]"
            />
            <h2 className={`mt-4 text-[2.4rem] sm:text-[3.4rem] lg:mt-[1.22rem] lg:whitespace-nowrap lg:text-[6rem] lg:leading-[6.55rem] ${titleClass}`}>
              <span className="block lg:text-[6.4rem]">{data.titleTop}</span>
              <span className="block">
                {data.titleAccentLead} <span className={accentClass}>{data.titleAccent}</span>
              </span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:items-center lg:mt-0 lg:block">
            {data.photos.map((photo, index) => (
              <div key={photo.id} data-reveal data-reveal-delay={index * 120} className={`${frame} ${photoPlaces[index]}`}>
                <Image src={photo.image} alt={photo.imageAlt} fill quality={90} sizes={photoSizes[index]} className="object-cover" />
              </div>
            ))}
          </div>

          <p
            data-reveal
            className="mx-auto mt-10 max-w-3xl text-center font-heading text-[1.1rem] leading-[1.6] text-[var(--color-text-dark)] sm:text-[1.3rem] lg:absolute lg:inset-x-0 lg:top-[59.7rem] lg:mt-0 lg:max-w-none lg:text-[2.28rem] lg:leading-[3.03rem]"
          >
            {data.descriptionLines.map((line) => {
              const [before, after] = line.split("{brand}");
              return (
                <span key={line} className="lg:block">
                  {before}
                  {after !== undefined && (
                    <>
                      <strong className="font-bold text-[var(--color-gold)]">{data.brand}</strong>
                      {after}
                    </>
                  )}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </DesignFrame>
    </section>
  );
};
