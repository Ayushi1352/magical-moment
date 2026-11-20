import Image from "next/image";
import type { FaqData } from "@/types/templates.types";
import { DesignFrame, sectionSpace } from "@/components/ui/DesignFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

/** Centred heading; the mandap photo in a gold-outlined arch on the left and the questions on the right */
export const FaqSection = ({ data }: { data?: FaqData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative scroll-mt-[4.5rem] bg-[var(--color-bg-soft)] lg:scroll-mt-[6.25rem] ${sectionSpace}`}>
      <DesignFrame height={1088} offset={94}>
        <div className="px-4 sm:px-6 lg:px-0 lg:pt-[5.4rem]">
          <SectionHeading
            label={data.label}
            titleTop={data.titleTop}
            titleAccent={data.titleAccent}
            description={data.description}
            labelTextClass="text-[var(--color-text-black)]"
            labelSizeClass="text-[1.1rem] tracking-[0.35em] lg:text-[3.2rem] lg:tracking-[0.23em]"
            labelLineClass="w-12 lg:w-[9.69rem]"
            labelGapClass="gap-4 lg:gap-[2.75rem]"
            titleClassName="!font-bold lg:mt-[1.4rem]"
            descriptionClass="lg:!mt-[0.3rem] lg:!text-[2.09rem] text-[var(--color-text-dark)]"
          />

          <div className="mt-10 grid gap-10 lg:mt-0 lg:block">
            <div data-reveal className="relative mx-auto aspect-[546/819] w-full max-w-[24rem] lg:absolute lg:left-[4.25rem] lg:top-[22.69rem] lg:w-[34.13rem] lg:max-w-none">
              <span aria-hidden="true" className="absolute inset-0 rounded-b-[13%_8.5%] rounded-t-[50%_33.5%] border-[0.2rem] border-[var(--color-gold)] lg:border-[0.22rem]" />
              <div className="absolute inset-x-[2.56%] inset-y-[1.7%] overflow-hidden rounded-b-[12%_8%] rounded-t-[50%_33%]">
                <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 520px, (min-width: 640px) 384px, 92vw" className="object-cover" />
              </div>
            </div>
            <div className="lg:absolute lg:left-[40.06rem] lg:top-[24.75rem] lg:w-[75.75rem]">
              <FaqAccordion items={data.items} />
            </div>
          </div>
        </div>
      </DesignFrame>
    </section>
  );
};
