"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding Planning",
    eventDate: "",
    guestCount: "150 - 300 Guests",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        eventType: "Wedding Planning",
        eventDate: "",
        guestCount: "150 - 300 Guests",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b8862d] uppercase">
              Contact Us
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a2f] leading-tight">
            Get in Touch with{" "}
            <span className="font-normal italic gold-text-gradient">
              Magical Moments
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#635c52] leading-relaxed max-w-2xl mx-auto">
            We would love to hear from you. Let’s start crafting your dream wedding celebration together.
          </p>
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Card: Luxury Navy Card */}
          <div className="lg:col-span-5 bg-[#07162c] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#dfb76c] shadow-[0_20px_50px_rgba(7,22,44,0.25)] flex flex-col justify-between relative overflow-hidden">
            {/* Background subtle gold mandala glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#dfb76c]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Crown / Floral Motif */}
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full border border-[#dfb76c]/60 flex items-center justify-center text-[#dfb76c] text-xl">
                  👑
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center gold-text-gradient tracking-wide mb-1">
                Magical Moments
              </h3>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#dfb76c] text-center font-medium mb-6">
                Wedding & Event Planner
              </p>

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent mx-auto mb-8" />

              {/* Contact Info List */}
              <div className="space-y-6 text-sm text-[#d1dbee]">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0d223f] border border-[#dfb76c]/50 flex items-center justify-center text-[#dfb76c] flex-shrink-0 mt-0.5">
                    📍
                  </div>
                  <div>
                    <p className="text-xs text-[#dfb76c] uppercase tracking-wider font-semibold">Our Studio</p>
                    <p className="text-sm mt-0.5 leading-relaxed">
                      123 Elegance Boulevard, Suite 400, Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0d223f] border border-[#dfb76c]/50 flex items-center justify-center text-[#dfb76c] flex-shrink-0 mt-0.5">
                    📞
                  </div>
                  <div>
                    <p className="text-xs text-[#dfb76c] uppercase tracking-wider font-semibold">Call Us</p>
                    <p className="text-sm mt-0.5">
                      +1 (800) 555-0199 / +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0d223f] border border-[#dfb76c]/50 flex items-center justify-center text-[#dfb76c] flex-shrink-0 mt-0.5">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs text-[#dfb76c] uppercase tracking-wider font-semibold">Email Us</p>
                    <p className="text-sm mt-0.5">
                      contact@magicalmoments.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0d223f] border border-[#dfb76c]/50 flex items-center justify-center text-[#dfb76c] flex-shrink-0 mt-0.5">
                    🕒
                  </div>
                  <div>
                    <p className="text-xs text-[#dfb76c] uppercase tracking-wider font-semibold">Working Hours</p>
                    <p className="text-sm mt-0.5">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links at Bottom */}
            <div className="pt-8 mt-8 border-t border-white/10 flex justify-center items-center gap-4">
              {["Instagram", "Facebook", "Pinterest", "LinkedIn"].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  aria-label={platform}
                  className="h-9 w-9 rounded-full border border-[#dfb76c]/60 flex items-center justify-center text-xs text-[#dfb76c] hover:bg-[#dfb76c] hover:text-[#07162c] transition-all duration-300"
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>

          </div>

          {/* Right Card: Message Form */}
          <div className="lg:col-span-7 bg-[#fdfbf7] rounded-3xl p-8 sm:p-10 border border-[#dfb76c]/60 shadow-[0_10px_35px_rgba(184,134,45,0.08)] flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c1a2f] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#665e52] mb-6">
                Please complete the form below, and our wedding concierge will reach out within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#07162c] border border-[#dfb76c] text-white flex items-center gap-3">
                  <span className="text-[#dfb76c] text-lg">✓</span>
                  <p className="text-xs sm:text-sm">
                    Thank you! Your message has been received. Our planning director will contact you promptly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Patel"
                      className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] placeholder-[#a69d8f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] placeholder-[#a69d8f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Event Type and Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
                    >
                      <option value="Wedding Planning">Wedding Planning</option>
                      <option value="Engagement Celebration">Engagement Celebration</option>
                      <option value="Mehendi & Sangeet">Mehendi & Sangeet</option>
                      <option value="Destination Wedding">Destination Wedding</option>
                      <option value="Anniversary / Reception">Anniversary / Reception</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                      Estimated Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Guest Count */}
                <div>
                  <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                    Estimated Guest Count
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
                  >
                    <option value="50 - 150 Guests">50 – 150 Guests (Intimate)</option>
                    <option value="150 - 300 Guests">150 – 300 Guests (Classic)</option>
                    <option value="300 - 500 Guests">300 – 500 Guests (Grand)</option>
                    <option value="500+ Guests">500+ Guests (Royal Celebration)</option>
                  </select>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your desired venue, color theme, or specific traditions..."
                    className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] placeholder-[#a69d8f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="gold-btn w-full py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-2 flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <span className="text-base">→</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
