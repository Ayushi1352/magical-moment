import Image from "next/image";
import type { TestimonialsData } from "@/types/templates.types";
import { SectionLabel, accentClass, titleClass } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";

/** Title and the testimonial slider on the left; the couple in a gold-outlined arch with the mandap photo over it on the right */
export const TestimonialsSection = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:h-[75rem] lg:scroll-mt-[6.25rem]">
      <div className="grid gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:block lg:p-0">
        <div className="lg:absolute lg:left-[4.06rem] lg:top-[5.35rem] lg:w-[54rem]">
          <div data-reveal>
            <SectionLabel
              text={data.label}
              lines="before"
              textClass="text-[var(--color-text-black)]"
              sizeClass="!font-semibold text-[1rem] tracking-[0.3em] lg:text-[2.25rem] lg:tracking-[0.29em]"
              lineClass="w-12 lg:w-[4.69rem]"
              gapClass="gap-4 lg:gap-[1.9rem]"
            />
            <h2 className={`mt-5 !font-medium lg:mt-[4.15rem] lg:whitespace-nowrap ${titleClass}`}>
              <span className="block text-[3rem] leading-[1.05] sm:text-[4rem] lg:text-[7.75rem] lg:leading-[6.8rem]">{data.titleTop}</span>
              <span className="block text-[2.5rem] leading-[1.1] sm:text-[3.4rem] lg:text-[6.35rem] lg:leading-[6.6rem]">
                {data.titleAccentLead} <span className={accentClass}>{data.titleAccent}</span>
              </span>
            </h2>
          </div>
          <TestimonialSlider data={data} />
        </div>

        {/* photos: the arch keeps the design's proportions on every screen, with the mandap photo over its lower left */}
        <div data-reveal className="relative mx-auto aspect-[945/1128] w-full max-w-[36rem] lg:absolute lg:left-[56.44rem] lg:top-[1.5rem] lg:w-[59.06rem] lg:max-w-none">
          <span aria-hidden="true" className="absolute right-0 top-0 h-full w-[89.4%] rounded-b-[7.6%_5.7%] rounded-t-[50%_37.5%] border-[0.2rem] border-[var(--color-gold)] lg:border-[0.22rem]" />
          <div className="absolute right-[1.06%] top-[0.89%] h-[98.2%] w-[87.2%] overflow-hidden rounded-b-[6.8%_5.1%] rounded-t-[50%_37.2%]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 824px, (min-width: 640px) 540px, 88vw" className="object-cover" />
          </div>
          <div className="absolute left-0 top-[51.2%] h-[41.9%] w-[41.8%] overflow-hidden rounded-[11.4%/9.5%] border-[0.3rem] border-[var(--color-white)] bg-[var(--color-white)] shadow-[0_0.9rem_1.8rem_-0.4rem_var(--color-shadow-strong)] lg:border-[0.56rem]">
            <Image src={data.secondImage} alt={data.secondImageAlt} fill quality={90} sizes="(min-width: 1024px) 375px, 40vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
