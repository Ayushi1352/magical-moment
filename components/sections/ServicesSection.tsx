import type { ServicesData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesSlider } from "@/components/sections/ServicesSlider";

/** Centred heading, then the service cards between the two gold arrows (sizes from the 1920px design) */
export const ServicesSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative scroll-mt-[4.5rem] bg-[var(--color-bg-soft)] lg:h-[87.5rem] lg:scroll-mt-[6.25rem]">
      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-0 lg:pb-0 lg:pt-[10.1rem]">
        <SectionHeading
          label={data.label}
          titleTop={data.titleTop}
          titleAccent={data.titleAccent}
          description={data.description}
          titleClassName="lg:mt-[1.85rem] lg:text-[5.3rem] lg:leading-[5.3rem]"
          descriptionClass="lg:!mt-[0.95rem] lg:w-[73rem]"
        />
        <ServicesSlider data={data} />
      </div>
    </section>
  );
};
