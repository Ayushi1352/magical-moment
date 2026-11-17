import type { ServicesData } from "@/types/templates.types";
import { DesignFrame, sectionSpace } from "@/components/ui/DesignFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesSlider } from "@/components/sections/ServicesSlider";

/** Centred heading, then the service cards between the two gold arrows (sizes from the 1920px design) */
export const ServicesSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative scroll-mt-[4.5rem] bg-[var(--color-bg-soft)] lg:scroll-mt-[6.25rem] ${sectionSpace}`}>
      <DesignFrame height={1127} offset={173}>
        <div className="px-4 sm:px-6 lg:px-0 lg:pt-[10.35rem]">
          <SectionHeading
            label={data.label}
            titleTop={data.titleTop}
            titleAccent={data.titleAccent}
            description={data.description}
            labelSizeClass="text-[1.1rem] tracking-[0.2em] lg:text-[2.93rem] lg:tracking-[0.16em]"
            titleClassName="!font-bold lg:mt-[1.5rem] lg:text-[5.3rem] lg:leading-[5.3rem]"
            descriptionClass="lg:!mt-[0.85rem] lg:w-[75rem] lg:!text-[1.95rem] lg:!leading-[2.5rem]"
          />
          <ServicesSlider data={data} />
        </div>
      </DesignFrame>
    </section>
  );
};
