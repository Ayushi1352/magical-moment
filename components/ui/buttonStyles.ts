/** Gold button look shared by the header button and the form button: turns navy on hover (a fading layer, so the gradient changes smoothly) */
export const buttonClass =
  "group relative isolate inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-gold-button)] to-[var(--color-gold-button-dark)] text-[var(--color-white)] shadow-[0_0.5rem_1.25rem_-0.6rem_var(--color-shadow-gold)] transition-transform duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[var(--color-navy)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-0.5 hover:before:opacity-100";
/** arrow inside a button that turns up-right on hover */
export const buttonArrow = "shrink-0 transition-transform duration-300 group-hover:-rotate-45";
/** round gold slider arrows (Our Services) */
export const roundGoldClass =
  "grid place-items-center rounded-full bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold-dark)] text-[var(--color-white)] shadow-[0_0.4rem_1rem_-0.4rem_var(--color-shadow-gold)] transition-transform duration-300 hover:scale-105";
/** round outlined slider arrows (Testimonials) */
export const roundOutlineClass =
  "grid place-items-center rounded-full border-[0.19rem] border-[var(--color-gold)] text-[var(--color-navy)] transition-colors duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-white)]";
