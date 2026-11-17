import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#07162c] text-[#d4dfed] relative overflow-hidden border-t-2 border-[#dfb76c]/40">
      
      {/* Top Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Loving Wedding Message & Logo */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative h-14 w-48">
              <Image
                src="/images/logo.png"
                alt="Magical Moments Logo"
                fill
                sizes="192px"
                className="object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(223,183,108,0.4)]"
              />
            </div>

            <p className="font-serif text-lg sm:text-xl text-[#f3eedf] italic leading-relaxed max-w-md">
              “We can’t wait to see all of our beloved friends and relatives at our wedding. Your presence will make our day{" "}
              <span className="gold-text-gradient font-normal not-italic font-serif font-bold">
                truly special!
              </span>”
            </p>

            <p className="text-xs text-[#8f9eb3] leading-relaxed max-w-sm">
              Creating bespoke weddings, luxury receptions, and milestone celebrations worldwide with timeless artistry and perfection.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="md:col-span-3 sm:pl-4">
            <h4 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="text-[#dfb76c]">✦</span> Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: "Home", href: "#hero" },
                { name: "About Us", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Our Process", href: "#process" },
                { name: "Gallery", href: "#gallery" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQs", href: "#faq" },
                { name: "Contact Us", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#dfb76c] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="text-[#dfb76c]">✦</span> Contacts
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#dfb76c] mt-0.5">📍</span>
                <p className="leading-relaxed">
                  123 Elegance Boulevard, Suite 400, Beverly Hills, CA 90210
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#dfb76c]">📞</span>
                <p>+1 (800) 555-0199 / +91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#dfb76c]">✉️</span>
                <p>contact@magicalmoments.com</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#dfb76c]">🕒</span>
                <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-3">
              {["IG", "FB", "PT", "LI"].map((code, idx) => (
                <a
                  key={idx}
                  href="#social"
                  className="h-8 w-8 rounded-full border border-[#dfb76c]/40 text-[#dfb76c] text-[11px] font-bold flex items-center justify-center hover:bg-[#dfb76c] hover:text-[#07162c] transition-all"
                >
                  {code}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#dfb76c]/20 bg-[#040e1c] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8292a8]">
          <p>© 2025 Magical Moments. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-[#dfb76c] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#terms" className="hover:text-[#dfb76c] transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="#contact" className="hover:text-[#dfb76c] transition-colors">
              Concierge
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
