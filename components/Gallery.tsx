import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b8862d] uppercase">
              Our Gallery
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a2f] leading-tight">
            Snapshots of{" "}
            <span className="font-normal italic gold-text-gradient">
              Magical Moments
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#635c52] leading-relaxed max-w-2xl mx-auto">
            A glimpse into the cherished celebrations, opulent ceremonies, and unforgettable events
            we have brought to life.
          </p>
        </div>

        {/* Gallery Mosaic Layout */}
        <div className="space-y-4">
          
          {/* Row 1: 5 Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { src: "/images/gallery-1.jpg", alt: "Luxury Table Setting with Golden Accents" },
              { src: "/images/gallery-2.jpg", alt: "Illuminated Night Wedding Mandap" },
              { src: "/images/gallery-3.jpg", alt: "Grand Floral Dining Table Runner" },
              { src: "/images/gallery-4.jpg", alt: "Fairy Light Dinner Under The Stars" },
              { src: "/images/gallery-5.jpg", alt: "Diamond Engagement Ring in Velvet Box" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative h-36 sm:h-44 md:h-48 rounded-xl md:rounded-2xl overflow-hidden border border-[#dfb76c]/50 p-1 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Large Featured Couple + 3 Single Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            
            {/* Featured Couple (Spans 2 columns on lg) */}
            <div className="sm:col-span-2 group relative h-64 sm:h-72 md:h-80 rounded-xl md:rounded-2xl overflow-hidden border-2 border-[#c59d5f] p-1 bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src="/images/gallery-6.jpg"
                  alt="Bride and Groom In Traditional Royal Attire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold">
                    Royal Weddings
                  </p>
                  <p className="font-serif text-base sm:text-lg font-bold">
                    Timeless Traditions & Romance
                  </p>
                </div>
              </div>
            </div>

            {/* Image 7: Bridal Bouquet */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-xl md:rounded-2xl overflow-hidden border border-[#dfb76c]/50 p-1 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src="/images/gallery-7.jpg"
                  alt="Delicate Bridal Bouquet"
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Image 8: Engagement Ring */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-xl md:rounded-2xl overflow-hidden border border-[#dfb76c]/50 p-1 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src="/images/gallery-8.jpg"
                  alt="Emerald Ring Box with Roses"
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Image 9: Floral Garden Walkway */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-xl md:rounded-2xl overflow-hidden border border-[#dfb76c]/50 p-1 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src="/images/gallery-9.jpg"
                  alt="Floral Garden Walkway"
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

          </div>

          {/* Row 3: 5 Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { src: "/images/gallery-10.jpg", alt: "Candlelit Evening Dinner Table" },
              { src: "/images/gallery-11.jpg", alt: "Colorful Traditional Mehendi Stage" },
              { src: "/images/gallery-12.jpg", alt: "Crystal Chandeliers and Golden Lights" },
              { src: "/images/gallery-13.jpg", alt: "Ceremony Aisle and Wooden Chiavari Chairs" },
              { src: "/images/gallery-14.jpg", alt: "Grand Floral Altar Canopy" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative h-36 sm:h-44 md:h-48 rounded-xl md:rounded-2xl overflow-hidden border border-[#dfb76c]/50 p-1 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
