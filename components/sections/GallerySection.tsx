import type { GalleryData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

/** Centred heading, then the photo collage (sizes from the 1920px design) */
export const GallerySection = ({ data }: { data?: GalleryData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative scroll-mt-[4.5rem] bg-[var(--color-bg-soft)] lg:h-[86.88rem] lg:scroll-mt-[6.25rem]">
      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-0 lg:pb-0 lg:pt-[5.4rem]">
        <SectionHeading
          label={data.label}
          titleTop={data.titleTop}
          titleAccent={data.titleAccent}
          description={data.description}
          labelSizeClass="text-[1.1rem] tracking-[0.3em] lg:text-[2.6rem] lg:tracking-[0.3em]"
          labelLineClass="w-10 lg:w-[8.19rem]"
          titleClassName="lg:mt-[1.6rem] lg:text-[5.25rem] lg:leading-[5.25rem]"
          descriptionClass="lg:!mt-[0.6rem] text-[var(--color-text-dark)]"
        />
        <GalleryGrid data={data} />
      </div>
    </section>
  );
};
