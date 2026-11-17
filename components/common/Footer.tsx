import Link from "next/link";
import Image from "next/image";
import type { CompanyData, FooterData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const Footer = ({
  data,
  company,
  links,
}: {
  data: FooterData;
  company: CompanyData;
  links?: { id: string; label: string; url: string }[];
}) => {
  return (
    <footer className="bg-[#07162c] text-[#d4dfed] relative overflow-hidden border-t-2 border-[#dfb76c]/40">
      
      {/* Top Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Loving Wedding Message & Logo */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative h-14 w-48">
              <Image
                src={company.logo}
                alt={company.logoAlt}
                fill
                sizes="192px"
                className="object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(223,183,108,0.4)]"
              />
            </div>

            <p className="font-serif text-lg sm:text-xl text-[#f3eedf] italic leading-relaxed max-w-md">
              “We can’t wait to see all of our beloved friends and relatives at our wedding. Your presence will make our day{" "}
              <span className="gold-text-gradient font-normal not-italic font-serif font-bold">
                {data.quoteHighlight}
              </span>”
            </p>

            <p className="text-xs text-[#8f9eb3] leading-relaxed max-w-sm">
              {data.description}
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="md:col-span-3 sm:pl-4">
            <h4 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="text-[#dfb76c]">✦</span> {data.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {(links || data.quickLinks).map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#dfb76c] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="text-[#dfb76c]">✦</span> {data.contactsTitle}
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {company.contactItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <span className="text-[#dfb76c] mt-0.5">
                    <Icon name={item.icon} className="w-4 h-4" />
                  </span>
                  <div className="leading-relaxed">
                    {item.lines.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-3">
              {company.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.label}
                  className="h-8 w-8 rounded-full border border-[#dfb76c]/40 text-[#dfb76c] flex items-center justify-center hover:bg-[#dfb76c] hover:text-[#07162c] transition-all"
                >
                  <Icon name={social.icon} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#dfb76c]/20 bg-[#040e1c] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8292a8]">
          <p>{data.copyright}</p>
          <div className="flex items-center gap-6">
            {data.legalLinks.map((item, idx) => (
              <span key={item.id} className="flex items-center gap-6">
                <Link href={item.url} className="hover:text-[#dfb76c] transition-colors">
                  {item.label}
                </Link>
                {idx < data.legalLinks.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};
