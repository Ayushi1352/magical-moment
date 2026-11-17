import Image from "next/image";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & Step 03 */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 md:w-12 h-[1px] bg-[#c59d5f]" />
                <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b8862d] uppercase">
                  How We Work
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a2f] leading-tight">
                From Planning <br />
                <span className="font-normal italic gold-text-gradient">
                  to Celebration
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#635c52] leading-relaxed">
                Our structured process ensures seamless coordination from your initial dream
                concept to the final, unforgettable grand celebration.
              </p>
            </div>

            {/* Step 03: Execution Card */}
            <div className="bg-[#fcfaf4] rounded-2xl md:rounded-3xl border border-[#dfb76c]/60 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-serif text-lg md:text-xl font-bold text-[#b8862d]">
                  ( 03 )
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0c1a2f]">
                  Execution
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#635c52] leading-relaxed mb-6">
                On-site coordination, vendor management, and flaw-free timeline execution on your special day so you can immerse yourself in every magical moment.
              </p>

              <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-[#dfb76c]/40">
                <Image
                  src="/images/process-execution.jpg"
                  alt="Flawless Event Execution and Coordination"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Step 01 (Consultation) & Step 02 (Planning) */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            
            {/* Step 01: Consultation */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-[#fdfbf7] rounded-2xl md:rounded-3xl border border-[#dfb76c]/60 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
              
              {/* Image */}
              <div className="sm:col-span-5 relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-[#dfb76c]/40">
                <Image
                  src="/images/process-consultation.jpg"
                  alt="Wedding Consultation and Mood Boards"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Block */}
              <div className="sm:col-span-7 flex flex-col justify-center">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-lg md:text-xl font-bold text-[#b8862d]">
                    ( 01 )
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0c1a2f]">
                    Consultation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#635c52] leading-relaxed">
                  We discover your personal vision, aesthetic desires, budget parameters, and cultural traditions to shape a bespoke wedding design blueprint.
                </p>
              </div>

            </div>

            {/* Step 02: Planning */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-[#fdfbf7] rounded-2xl md:rounded-3xl border border-[#dfb76c]/60 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
              
              {/* Text Block */}
              <div className="sm:col-span-7 order-2 sm:order-1 flex flex-col justify-center">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-lg md:text-xl font-bold text-[#b8862d]">
                    ( 02 )
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0c1a2f]">
                    Planning
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#635c52] leading-relaxed">
                  Comprehensive vendor sourcing, contract negotiations, 3D floor plans, floral mockups, and minute-by-minute itinerary design.
                </p>
              </div>

              {/* Image */}
              <div className="sm:col-span-5 order-1 sm:order-2 relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-[#dfb76c]/40">
                <Image
                  src="/images/process-planning.jpg"
                  alt="Meticulous Wedding Planning and Table Styling"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
