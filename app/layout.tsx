import type { Metadata } from "next";
import { DM_Sans, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import rawData from "@/data/templates.json";
import type { RootVariables, WeddingTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], fallback: ["Arial", "sans-serif"], variable: "--font-dm-sans" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-source-sans" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  // variable font: every weight, plus the optical size (large titles get the high-contrast display cut)
  axes: ["opsz"],
  fallback: ["Georgia", "Times New Roman", "serif"],
  variable: "--font-source-serif",
});

const templateData: WeddingTemplateData = rawData;
const sectionData = templateData.categories.Wedding.sections;
const commonData = templateData.common;
const headerData = sectionData.Header?.variants?.WeddingHeader1;

const rootVariables: RootVariables = {
  "--font-primary": commonData.theme.fonts.primary,
  "--font-heading": commonData.theme.fonts.heading,
  "--font-ui": commonData.theme.fonts.ui,
};

export const metadata: Metadata = {
  title: commonData.metadata.title,
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={rootVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px, and from 1024px up it follows the 1920px design (1rem = 1/120 of the screen, at most 16px),
      // so a 1920px screen shows the design 1:1 and 1024px shows the same layout, only smaller. Every size on the page is
      // in rem, so it all scales together. Header and footer links scroll smoothly to their section on this one page.
      className={`${dmSans.variable} ${sourceSans.variable} ${sourceSerif.variable} h-full text-[16px] lg:text-[length:min(16px,calc(100vw/120))] scroll-smooth antialiased [&_:where(a[href],button:not(:disabled),select,summary,[role=button])]:cursor-pointer motion-reduce:scroll-auto motion-reduce:[&_*]:!duration-[0.01ms]`}
    >
      <body className="min-h-full bg-[var(--color-bg-backdrop)] font-sans text-[var(--color-text)] selection:bg-[var(--color-gold)] selection:text-[var(--color-white)]">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the screen, so
          nothing changes; on wider screens or when the browser is zoomed out the page stays in the middle.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col overflow-x-clip bg-[var(--color-bg-main)]">
          <Header data={headerData} company={commonData.company} />
          {children}
          <ScrollReveal />
          <Footer data={commonData.Footer} company={commonData.company} />
        </div>
      </body>
    </html>
  );
}
