import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#fdfbf7] to-[#faf6ee]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#f5ecd8]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Concert Celebration Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-12">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0c1a2f] leading-[1.12] tracking-tight">
                <span>Creating</span>
                <span className="block italic font-normal gold-text-gradient font-serif my-1 md:my-2">
                  Unforgettable
                </span>
                <span>Experiences</span>
              </h1>
              <p className="mt-4 text-[#635c52] text-sm md:text-base font-normal leading-relaxed max-w-md">
                Bespoke wedding planning and luxury event curation designed with uncompromised artistry, meticulous attention, and timeless elegance.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="gold-btn px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Plan Your Event
                </Link>
                <Link
                  href="#gallery"
                  className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#0c1a2f] border border-[#c59d5f] hover:bg-[#fbf7ee] transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Concert / Party Celebration Card */}
            <div className="relative group max-w-md">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-[#dfb76c]/70 shadow-[0_10px_30px_rgba(184,134,45,0.15)] bg-white p-1">
                <div className="relative h-44 sm:h-52 w-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero-concert.jpg"
                    alt="Vibrant Wedding Sangeet Celebration"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold tracking-wider uppercase drop-shadow-md">
                      Sangeet & After Parties
                    </span>
                    <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30">
                      Live Energy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grand Arched Wedding Reception Photo */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              {/* Outer decorative gold border layer */}
              <div className="p-2 sm:p-2.5 rounded-t-[140px] sm:rounded-t-[200px] md:rounded-t-[240px] rounded-b-3xl border-2 border-[#c59d5f]/60 bg-gradient-to-b from-[#fbf8f2] to-white shadow-[0_20px_50px_rgba(197,157,95,0.18)]">
                
                {/* Main Image Container */}
                <div className="relative h-[440px] sm:h-[540px] md:h-[620px] w-full rounded-t-[132px] sm:rounded-t-[192px] md:rounded-t-[232px] rounded-b-2xl overflow-hidden group">
                  <Image
                    src="/images/hero-main.jpg"
                    alt="Magical Moments Luxury Wedding Reception Setup"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Elegant floating badge on bottom */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md border border-[#dfb76c]/60 p-4 rounded-xl flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#b8862d] font-semibold">
                        Luxury Decor & Production
                      </p>
                      <p className="font-serif text-sm sm:text-base text-[#0c1a2f] font-bold">
                        Bespoke Mandap & Grand Reception
                      </p>
                    </div>
                    <div className="hidden sm:flex h-10 w-10 rounded-full bg-[#0c1a2f] items-center justify-center text-[#dfb76c]">
                      ✦
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
