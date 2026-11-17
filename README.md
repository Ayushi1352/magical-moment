# Magical Moments Landing Page

One-page landing page for **Magical Moments — Wedding & Event Planner**, built with Next.js 16, React 19 and Tailwind CSS 3 from the Magical Moments design. It follows the same project structure as the other landing pages (Haulix, Constrix, MenSalon, GlowMist): every piece of text, image and link lives in `data/templates.json`, and the components only render it.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx            fonts, metadata (title, description, favicon), header, footer, scroll reveal
  page.tsx              the sections in page order
  globals.css           theme colours (CSS variables) and the serif's optical size
components/
  common/               Header (tall bar that turns compact on scroll, card menu on phones and tablets), Footer
  sections/             Hero, About, Services (+ ServicesSlider), Process, Gallery (+ GalleryGrid with lightbox),
                        Testimonials (+ TestimonialSlider), FAQ (+ FaqAccordion), Contact (+ ContactForm)
  ui/                   Icon, SectionHeading (label with gold lines, title), buttonStyles, ScrollReveal, FormSuccess,
                        useDummySubmit, useActiveSection, text
data/templates.json     all content (sections and their variants)
types/templates.types.ts
public/images/          photos, logo, lotus, heart and leaf decorations, favicon (WebP / PNG)
```

Each section's `id` in `templates.json` matches a header link (`#about` → `id="about"`).

## Images

Every image is cut straight from the design screenshot (no stock photos): the photos, the logo, the lotus of the contact card, the heart under the footer quote and the leaves in the service cards. The service photos keep the design's curved edge and round icon. Decoration images carry their own pixel size (`{ src, width, height }`).

## Responsive

Designed for phones, tablets, 1024px and desktop. From 1024px up the root font size follows the 1920px design (`1rem = 100vw / 120`, at most 16px), so a 1920px screen shows the design 1:1 and 1024px shows the same layout, only smaller. Sizes are taken from the 1920px design (1 design pixel = 0.0625rem).

Every section has the same space above and below its content (`sectionSpace` in `components/ui/DesignFrame.tsx`), so all gaps between sections match on every screen. From 1024px up, `DesignFrame` keeps each section's pieces where the design has them and trims the design's uneven gaps.

## Interactions

- Services and testimonials are sliders (arrows, dots, autoplay that pauses on hover).
- Gallery photos open in a lightbox (arrows, keyboard and Esc).
- FAQ: one answer open at a time.
- The contact form uses a dummy submit (`useDummySubmit`): it shows a sending state and a thank-you message, but nothing is sent anywhere yet.
