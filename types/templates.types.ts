import type { CSSProperties } from "react";

export interface ThemeFonts {
  primary: string;
  heading: string;
  ui: string;
}

/** CSS variables set on <html> from templates.json (fonts) */
export type RootVariables = CSSProperties & {
  "--font-primary": string;
  "--font-heading": string;
  "--font-ui": string;
};

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
  lang: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ContactItem {
  id: string;
  icon: string;
  /** icon in the footer, when it differs from `icon` */
  footerIcon?: string;
  title: string;
  lines: string[];
  url: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  contactItems: ContactItem[];
}

/** A decoration image with its own pixel size (so the page reserves its space before it loads) */
export interface DecorImage {
  src: string;
  width: number;
  height: number;
}

export interface FooterData {
  quoteText: string;
  quoteAccent: string;
  heartImage: DecorImage;
  linksTitle: string;
  links: LinkItem[];
  contactsTitle: string;
  /** which of the company contact details the footer lists, in order */
  contactIds: string[];
  socialLabel: string;
  socialLinks: SocialLink[];
  copyrightText: string;
  backToTopLabel: string;
}

export interface NavLink extends LinkItem {
  /** a dropdown under the link (Our Services) */
  children?: LinkItem[];
}

export interface HeaderData {
  logoUrl: string;
  homeLabel: string;
  navLinks: NavLink[];
  buttonText: string;
  buttonUrl: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  submenuLabel: string;
}

/** A title with its highlighted words (titleAccent) in gold */
export interface SplitTitle {
  titleTop: string;
  titleAccent: string;
}

export interface HeroData extends SplitTitle {
  id: string;
  titleBottom: string;
  image: string;
  imageAlt: string;
  secondImage: string;
  secondImageAlt: string;
}

export interface AboutPhoto {
  id: string;
  image: string;
  imageAlt: string;
}

export interface AboutData extends SplitTitle {
  id: string;
  label: string;
  /** words at the start of the second title line that stay navy ("Through") */
  titleAccentLead: string;
  photos: AboutPhoto[];
  /** the paragraph, one entry per line of the design; "{brand}" is replaced by the gold brand name */
  descriptionLines: string[];
  brand: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

export interface ServicesData extends SplitTitle {
  id: string;
  label: string;
  description: string;
  leafLeft: DecorImage;
  leafRight: DecorImage;
  previousLabel: string;
  nextLabel: string;
  showLabel: string;
  services: ServiceCard[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

export interface ProcessData extends SplitTitle {
  id: string;
  label: string;
  description: string;
  steps: ProcessStep[];
}

export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData extends SplitTitle {
  id: string;
  label: string;
  description: string;
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  items: GalleryItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  stars: number;
}

export interface TestimonialsData extends SplitTitle {
  id: string;
  label: string;
  /** words before the gold accent on the second title line ("from Our") */
  titleAccentLead: string;
  image: string;
  imageAlt: string;
  secondImage: string;
  secondImageAlt: string;
  ratingLabel: string;
  previousLabel: string;
  nextLabel: string;
  showLabel: string;
  /** the testimonial shown first (the middle dot of the design) */
  startIndex: number;
  items: TestimonialItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData extends SplitTitle {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  items: FaqItem[];
}

export interface ContactData extends SplitTitle {
  id: string;
  label: string;
  description: string;
  lotusImage: DecorImage;
  cardTitle: string;
  cardTagline: string;
  socialLabel: string;
  socialLinks: SocialLink[];
  formTitle: string;
}

export interface ContactFormData {
  fields: {
    name: string;
    email: string;
    phone: string;
    date: string;
    eventType: string;
    message: string;
  };
  icons: {
    name: string;
    email: string;
    phone: string;
    date: string;
    eventType: string;
    message: string;
  };
  button: string;
  sending: string;
  successTitle: string;
  success: string;
  closeLabel: string;
}

interface Variants<T> {
  variants: Record<string, T>;
}

export interface TemplateComponent {
  key: string;
  component: string;
}

export interface WeddingTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    company: CompanyData;
    Footer: FooterData;
  };
  categories: {
    Wedding: {
      sections: {
        Header?: Variants<HeaderData>;
        Hero?: Variants<HeroData>;
        About?: Variants<AboutData>;
        Services?: Variants<ServicesData>;
        Process?: Variants<ProcessData>;
        Gallery?: Variants<GalleryData>;
        Testimonials?: Variants<TestimonialsData>;
        Faq?: Variants<FaqData>;
        Contact?: Variants<ContactData>;
        ContactForm?: Variants<ContactFormData>;
      };
      templateComponents: {
        [template: string]: {
          shared: Record<string, string>;
          pages: Record<string, { components: TemplateComponent[] }>;
        };
      };
    };
  };
}
