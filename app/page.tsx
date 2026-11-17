import rawData from "@/data/templates.json";
import type { WeddingTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const templateData: WeddingTemplateData = rawData;
const sectionData = templateData.categories.Wedding.sections;
const commonData = templateData.common;
const servicesData = sectionData.Services?.variants?.WeddingServices1;
const contactFormData = sectionData.ContactForm?.variants?.WeddingContactForm1;

// The form’s event list: every service card, then the extra event types of the form ("Reception" …)
const eventOptions = [...(servicesData?.services ?? []).map((item) => item.title), ...(contactFormData?.extraEventOptions ?? [])];

/*
  One landing page built from the Magical Moments design. Every button leads to the contact form.
  Each section's id (templates.json) matches the header and footer links ("#about" → id="about").
*/
export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.WeddingHero1} />
      <AboutSection data={sectionData.About?.variants?.WeddingAbout1} />
      <ServicesSection data={servicesData} />
      <ProcessSection data={sectionData.Process?.variants?.WeddingProcess1} />
      <GallerySection data={sectionData.Gallery?.variants?.WeddingGallery1} />
      <TestimonialsSection data={sectionData.Testimonials?.variants?.WeddingTestimonials1} />
      <FaqSection data={sectionData.Faq?.variants?.WeddingFaq1} />
      <ContactSection
        data={sectionData.Contact?.variants?.WeddingContact1}
        form={contactFormData}
        company={commonData.company}
        eventOptions={eventOptions}
      />
    </main>
  );
}
