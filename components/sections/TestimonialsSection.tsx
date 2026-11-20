import Image from "next/image";
import type { TestimonialsData } from "@/types/templates.types";
import { DesignFrame, sectionSpace } from "@/components/ui/DesignFrame";
import { SectionLabel, accentClass, titleClass, titleSizeClass } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";

/**
 * Title and the testimonial slider on the left; the couple in a gold-outlined arch with the mandap photo over it on the right.
 * Phones and tablets stack everything, with the slider's arrows and dots centred at the bottom, under the photos.
 */
export const TestimonialsSection = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[6.25rem] ${sectionSpace}`}>
      <DesignFrame height={1128} offset={24}>
        <div className="flex flex-col px-4 sm:px-6 lg:block lg:p-0">
          {/* on phones and tablets this column dissolves (display: contents), so the arrows can move below the photos */}
          <div className="contents lg:absolute lg:left-[4.06rem] lg:top-[5.35rem] lg:block lg:w-[54rem]">
            <div data-reveal>
              <SectionLabel
                text={data.label}
                lines="before"
                textClass="text-[var(--color-text-black)]"
                sizeClass="!font-semibold text-[1rem] tracking-[0.3em] lg:text-[2.25rem] lg:tracking-[0.29em]"
                lineClass="w-12 lg:w-[4.69rem]"
                gapClass="gap-4 lg:gap-[1.9rem]"
              />
              <h2 className={`mt-5 !font-medium lg:mt-[4.15rem] lg:whitespace-nowrap ${titleSizeClass} ${titleClass}`}>
                <span className="block">{data.titleTop}</span>
                <span className="block">
                  {data.titleAccentLead} <span className={accentClass}>{data.titleAccent}</span>
                </span>
              </h2>
            </div>
            <TestimonialSlider data={data} />
          </div>

          {/* photos: the arch keeps the design's proportions on every screen, with the mandap photo over its lower left */}
          <div data-reveal className="relative mx-auto mt-12 aspect-[945/1128] w-full max-w-[36rem] lg:absolute lg:mt-0 lg:left-[56.44rem] lg:top-[1.5rem] lg:w-[59.06rem] lg:max-w-none">
            <span aria-hidden="true" className="absolute right-0 top-0 h-full w-[89.4%] rounded-b-[7.6%_5.7%] rounded-t-[50%_37.5%] border-[0.2rem] border-[var(--color-gold)] lg:border-[0.22rem]" />
            <div className="absolute right-[1.06%] top-[0.89%] h-[98.2%] w-[87.2%] overflow-hidden rounded-b-[6.8%_5.1%] rounded-t-[50%_37.2%]">
              <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 824px, (min-width: 640px) 540px, 88vw" className="object-cover" />
            </div>
            <div className="absolute left-0 top-[51.15%] h-[41.93%] w-[41.7%] overflow-hidden rounded-[24.4%_24.4%_11.7%_11.7%/20.3%_20.3%_9.7%_9.7%] border-[0.3rem] border-[var(--color-white)] bg-[var(--color-white)] shadow-[0_0.9rem_1.8rem_-0.4rem_var(--color-shadow-strong)] lg:border-[0.56rem]">
              <Image src={data.secondImage} alt={data.secondImageAlt} fill quality={90} sizes="(min-width: 1024px) 375px, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </DesignFrame>
    </section>
  );
};
