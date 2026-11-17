/*
  Sizes from 1024px up are taken from the 1920px design: 1 design pixel = 0.0625rem
  (the root font is 100vw / 120 there, at most 16px, so a 1920px screen shows the design 1:1).
*/

/** Serif title in navy */
export const titleClass = "font-heading font-semibold leading-[1.1] tracking-[-0.015em] text-[var(--color-navy)]";
/** the gold italic words of a title */
export const accentClass = "italic text-[var(--color-gold)]";

type LabelProps = {
  text: string;
  /** a short line on both sides (centred headings) or only after / before the text (left headings) */
  lines?: "both" | "after" | "before";
  /** colour of the label text */
  textClass?: string;
  /** label size and letter spacing */
  sizeClass?: string;
  /** length of the lines */
  lineClass?: string;
  /** space between the text and the lines */
  gapClass?: string;
  className?: string;
};

/** Spaced capitals with gold hairlines: "—— OUR SERVICES ——" */
export const SectionLabel = ({
  text,
  lines = "both",
  textClass = "text-[var(--color-gold)]",
  sizeClass = "text-[1.1rem] tracking-[0.25em] lg:text-[2.75rem] lg:tracking-[0.2em]",
  lineClass = "w-10 lg:w-[6.5rem]",
  gapClass = "gap-4 lg:gap-[1.85rem]",
  className = "",
}: LabelProps) => {
  const line = <span aria-hidden="true" className={`h-[0.125rem] shrink-0 bg-[var(--color-gold)] lg:h-[0.19rem] ${lineClass}`} />;
  return (
    <p className={`flex items-center font-heading font-bold uppercase leading-none ${gapClass} ${sizeClass} ${textClass} ${className}`}>
      {(lines === "both" || lines === "before") && line}
      {/* letter spacing also adds space after the last letter; the negative margin keeps the text centred */}
      <span className="-mr-[0.2em]">{text}</span>
      {(lines === "both" || lines === "after") && line}
    </p>
  );
};

type HeadingProps = {
  label: string;
  titleTop: string;
  titleAccent: string;
  description?: string;
  labelTextClass?: string;
  labelSizeClass?: string;
  labelLineClass?: string;
  /** title size and the space above it */
  titleClassName?: string;
  descriptionClass?: string;
  className?: string;
};

/** Centred section intro: label between two lines, title, one or two lines of text */
export const SectionHeading = ({
  label,
  titleTop,
  titleAccent,
  description,
  labelTextClass,
  labelSizeClass,
  labelLineClass,
  titleClassName = "lg:mt-[1.4rem] lg:text-[5.25rem]",
  descriptionClass = "",
  className = "",
}: HeadingProps) => (
  <div data-reveal className={`flex flex-col items-center text-center ${className}`}>
    <SectionLabel text={label} textClass={labelTextClass} sizeClass={labelSizeClass} lineClass={labelLineClass} />
    <h2 className={`mt-4 text-[2.25rem] sm:text-[3rem] lg:whitespace-nowrap ${titleClass} ${titleClassName}`}>
      {titleTop} <span className={accentClass}>{titleAccent}</span>
    </h2>
    {description && (
      <p className={`mx-auto mt-3 max-w-[48rem] font-sans text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:mt-[0.4rem] lg:max-w-none lg:text-[1.8rem] lg:leading-[2.5rem] ${descriptionClass}`}>
        {description}
      </p>
    )}
  </div>
);
