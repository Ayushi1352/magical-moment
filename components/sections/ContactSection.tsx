import type { CompanyData, ContactData, ContactFormData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";

export const ContactSection = ({
  data,
  form,
  company,
  serviceOptions,
}: {
  data?: ContactData;
  form?: ContactFormData;
  company: CompanyData;
  serviceOptions?: string[];
}) => {
  if (!data) return null;

  return (
    <section id={data.id} className="py-20 md:py-28 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal>
          <SectionHeading
            label={data.label}
            titlePart1={data.titlePart1}
            titleHighlight={data.titleHighlight}
            description={data.description}
          />
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Card: Luxury Navy Card */}
          <div
            className="lg:col-span-5 bg-[#07162c] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#dfb76c] shadow-[0_20px_50px_rgba(7,22,44,0.25)] flex flex-col justify-between relative overflow-hidden"
            data-reveal
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#dfb76c]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Crown Motif */}
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full border border-[#dfb76c]/60 flex items-center justify-center text-[#dfb76c]">
                  <Icon name="crown" className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center gold-text-gradient tracking-wide mb-1">
                {data.cardTitle}
              </h3>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#dfb76c] text-center font-medium mb-6">
                {data.cardTagline}
              </p>

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent mx-auto mb-8" />

              {/* Contact Info List */}
              <div className="space-y-6 text-sm text-[#d1dbee]">
                {company.contactItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#0d223f] border border-[#dfb76c]/50 flex items-center justify-center text-[#dfb76c] flex-shrink-0 mt-0.5">
                      <Icon name={item.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#dfb76c] uppercase tracking-wider font-semibold">
                        {item.title}
                      </p>
                      <div className="text-sm mt-0.5 leading-relaxed">
                        {item.lines.map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links at Bottom */}
            <div className="pt-8 mt-8 border-t border-white/10 flex justify-center items-center gap-4">
              {company.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.label}
                  className="h-9 w-9 rounded-full border border-[#dfb76c]/60 flex items-center justify-center text-xs text-[#dfb76c] hover:bg-[#dfb76c] hover:text-[#07162c] transition-all duration-300"
                >
                  <Icon name={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>

          </div>

          {/* Right Card: Message Form */}
          <div className="lg:col-span-7" data-reveal data-reveal-delay="150">
            <ContactForm data={form} serviceOptions={serviceOptions} />
          </div>

        </div>

      </div>
    </section>
  );
};
