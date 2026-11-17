import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b8862d] uppercase">
              About Us
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a2f] leading-tight">
            Telling Your Story <br className="hidden sm:inline" />
            <span className="font-normal italic gold-text-gradient">
              Through Magical Moments
            </span>
          </h2>
        </div>

        {/* 3 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-center mb-12">
          
          {/* Image 1: Bridal Bouquet & Dress */}
          <div className="md:col-span-4 group">
            <div className="relative h-[280px] sm:h-[340px] md:h-[380px] rounded-2xl overflow-hidden border border-[#dfb76c]/50 p-1.5 bg-gradient-to-b from-[#fcf9f2] to-white shadow-md transition-all duration-500 hover:shadow-xl hover:border-[#b8862d]">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about-1.jpg"
                  alt="Bride holding delicate floral bouquet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Image 2: Romantic Couple (Center, Prominent) */}
          <div className="md:col-span-4 group md:-mt-4">
            <div className="relative h-[320px] sm:h-[380px] md:h-[430px] rounded-2xl overflow-hidden border-2 border-[#c59d5f] p-1.5 bg-gradient-to-b from-[#fcf9f2] to-white shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about-2.jpg"
                  alt="Loving Bride and Groom Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Image 3: Garden Ceremony Setup */}
          <div className="md:col-span-4 group">
            <div className="relative h-[280px] sm:h-[340px] md:h-[380px] rounded-2xl overflow-hidden border border-[#dfb76c]/50 p-1.5 bg-gradient-to-b from-[#fcf9f2] to-white shadow-md transition-all duration-500 hover:shadow-xl hover:border-[#b8862d]">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about-3.jpg"
                  alt="Magnificent Garden Wedding Canopy Setup"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Narrative Description */}
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-sm sm:text-base md:text-lg text-[#554e44] leading-relaxed">
            <span className="font-serif italic font-semibold text-[#b8862d] text-base sm:text-lg md:text-xl mr-1">
              At Magical Moments,
            </span>
            we believe every wedding is an intimate masterwork. With passionate dedication,
            masterful aesthetic vision, and meticulous logistics coordination, we transform your most
            treasured dreams into breathtaking, stress-free realities that leave you and your loved
            ones with memories to cherish for a lifetime.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59d5f]" />
            <span className="text-[#c59d5f] text-sm">✦</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59d5f]" />
          </div>
        </div>

      </div>
    </section>
  );
}
