import type { CSSProperties, ReactNode } from "react";

/** Space above and below every section's content: the same on every screen, so all gaps between sections match */
export const sectionSpace = "py-10 sm:py-16 lg:py-[5rem]";

const rem = (px: number) => `${px / 16}rem`;

type Props = {
  /** height of the section's content in the 1920px design (from its first element to its last) */
  height: number;
  /** where that content starts, measured from the section's top in the design */
  offset: number;
  children: ReactNode;
};

/**
 * From 1024px up the sections place their pieces where the 1920px design has them (measured from the section's
 * top). This frame is exactly as tall as the content and moves it up by its offset, so only the section's own
 * padding (sectionSpace) is left above and below it. Phones and tablets keep the normal flow.
 */
export const DesignFrame = ({ height, offset, children }: Props) => (
  <div className="relative lg:h-[var(--frame-h)]" style={{ "--frame-h": rem(height), "--frame-y": rem(-offset) } as CSSProperties}>
    <div className="lg:absolute lg:inset-x-0 lg:top-[var(--frame-y)]">{children}</div>
  </div>
);
