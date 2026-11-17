import Image from "next/image";
import type { HeroData } from "@/types/templates.types";

/** Plays once on load (CSS @starting-style), so the hero never waits for JavaScript */
const enter = "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-6 starting:opacity-0";

/*
  From 1024px up every piece sits where the 1920px design has it (1 design pixel = 0.0625rem, measured from the
  top of the page, under the header). Phones and tablets stack the title above the two photos.
*/
export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative bg-[var(--color-bg-main)] pt-[4.5rem] sm:pt-[5.5rem] lg:h-[81.25rem] lg:pt-0">
      <div className="px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:p-0">
        <h1
          className={`text-center font-heading text-[3.4rem] font-bold leading-[1] tracking-[-0.01em] text-[var(--color-navy)] sm:text-[5.5rem] lg:absolute lg:left-[7.9rem] lg:top-[17.2rem] lg:text-left lg:text-[8.2rem] lg:leading-[6.8rem] ${enter}`}
        >
          <span className="block">{data.titleTop}</span>
          <span className="block font-semibold italic text-[var(--color-gold)] lg:-ml-[0.2rem]">{data.titleAccent}</span>
          <span className="block">{data.titleBottom}</span>
        </h1>

        {/* photos: on phones and tablets the mandap photo, then the celebration photo */}
        <div className={`mx-auto mt-10 grid max-w-xl gap-5 sm:mt-12 lg:mt-0 lg:block lg:max-w-none ${enter} delay-150`}>
          <div className="relative aspect-[868/1012] overflow-hidden rounded-[1.75rem] border-[0.2rem] border-[var(--color-gold)] lg:absolute lg:left-[59.5rem] lg:top-[13.125rem] lg:aspect-auto lg:h-[63.25rem] lg:w-[54.25rem] lg:rounded-[2.5rem] lg:border-[0.25rem]">
            <Image src={data.image} alt={data.imageAlt} fill preload quality={90} sizes="(min-width: 1024px) 868px, (min-width: 640px) 576px, 92vw" className="object-cover" />
          </div>
          <div className="relative aspect-[784/327] overflow-hidden rounded-[1.5rem] border-[0.2rem] border-[var(--color-gold)] lg:absolute lg:left-[5.94rem] lg:top-[53.875rem] lg:aspect-auto lg:h-[20.44rem] lg:w-[49rem] lg:rounded-[2.2rem] lg:border-[0.25rem]">
            <Image src={data.secondImage} alt={data.secondImageAlt} fill quality={90} sizes="(min-width: 1024px) 784px, (min-width: 640px) 576px, 92vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
