import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Riedel Vinum',
    category: 'Rode Wijn',
    price: '€65',
    image: 'https://primary.jwwb.nl/public/u/l/d/temp-gsjtwlqpbvpnvbisphtr/432-high-xcll2q.webp?enable-io=true&enable=upscale&crop=1%3A1&width=800',
  },
  {
    id: 2,
    name: 'Zalto Denk\'Art',
    category: 'Rode Wijn',
    price: '€55',
    image: 'https://primary.jwwb.nl/public/u/l/d/temp-gsjtwlqpbvpnvbisphtr/zalto-glas-intro-sortiment-1920x0-c-default-2x-high-lal5wn.webp?enable-io=true&enable=upscale&crop=1%3A1&width=800',
  },
  {
    id: 3,
    name: 'Schott Zwiesel',
    category: 'Witte Wijn',
    price: '€45',
    image: 'https://primary.jwwb.nl/public/u/l/d/temp-gsjtwlqpbvpnvbisphtr/spiegelau-definition-kristalglas-bourgogneglas-high.webp?enable-io=true&enable=upscale&crop=1%3A1&width=800',
  },
  {
    id: 4,
    name: 'Zieher Vision',
    category: 'Rode Wijn',
    price: '€79',
    image: 'https://primary.jwwb.nl/public/u/l/d/temp-gsjtwlqpbvpnvbisphtr/zieher-vision-intense-wijnglas-2-standard.webp',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-8 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="flex-1">
          <button className="text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity">
            Menu
          </button>
        </div>
        <div className="font-serif text-2xl tracking-widest uppercase">
          Wijnglazenshop
        </div>
        <div className="flex-1 flex justify-end items-center gap-6">
          <button className="text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity">
            Winkelwagen [0]
          </button>
          <button className="hidden md:block bg-white text-black border border-black/20 shadow-sm text-[10px] uppercase tracking-[0.2em] font-medium px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors">
            Shop Nu
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end p-6 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vineyard_header.png"
            alt="Elegante wijngaard"
            fill
            className="object-cover opacity-[45%]"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full h-full flex flex-col justify-end">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative">
            <div className="relative z-20">
              <div className="flex items-center gap-4 mb-8 opacity-80">
                <div className="w-12 h-[1px] bg-black/60 hidden md:block"></div>
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-black/80 font-medium">
                  Lente Deal: nu tijdelijk 15% korting op merk x
                </p>
              </div>
              <h1 className="font-serif text-[15vw] md:text-[10vw] leading-[0.85] font-light tracking-tighter mb-4">
                PERFECT <span className="italic text-black/70">glas</span>
              </h1>
              <p className="text-[11px] uppercase tracking-[0.2em] max-w-sm text-black/60 leading-relaxed font-bold bg-white/40 p-2 rounded">
                Mondgeblazen, flinterdunne kristalglazen ontworpen om de nuances van elke wijn te verheffen.
              </p>
            </div>
            
            <div className="absolute right-0 bottom-10 md:bottom-20 pointer-events-none z-10 w-[80vw] md:w-[60vw] max-w-[800px] h-[50vh] md:h-[70vh]">
              <Image 
                src="/hero_glasses_final.jpeg" 
                alt="Riedel wijnglazen op een rij" 
                fill 
                className="object-contain opacity-100 mix-blend-multiply object-bottom md:translate-x-12" 
              />
            </div>

            <button className="relative z-20 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] border border-black/30 rounded-full px-8 py-4 hover:bg-black hover:text-white bg-white/70 shadow-sm transition-all duration-300">
              Bekijk Collectie <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer p-8 hover:bg-black/5 transition-colors duration-500">
              <div className="relative aspect-[2/3] mb-10 overflow-hidden bg-black/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-serif text-3xl font-light mb-2">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">{product.category}</p>
                </div>
                <span className="text-[11px] tracking-widest font-medium">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-32 px-6 border-t border-black/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
              Het glas is net zo <span className="italic text-black/50">belangrijk</span> als de wijn.
            </h2>
            <p className="text-black/60 leading-relaxed font-light max-w-md mb-10">
              Onze glazen worden vervaardigd door meester-ambachtslieden met behulp van traditionele glasblaastechnieken. De ongelooflijk dunne rand en de precieze vorm van de kelk zijn ontworpen om de wijn naar het optimale deel van uw gehemelte te leiden, waardoor de ware ziel van de wijn wordt onthuld.
            </p>
            <a href="#" className="inline-block text-[10px] uppercase tracking-[0.2em] border-b border-black/30 pb-1 hover:border-black transition-colors">
              Lees ons verhaal
            </a>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-square rounded-full overflow-hidden border border-black/10 p-4">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/pouring_wine.png"
                  alt="Inschenken van wijn"
                  fill
                  className="object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-2xl tracking-widest uppercase">
            Wijnglazenshop
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-black/50">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
            <a href="#" className="hover:text-black transition-colors">Verzending</a>
            <a href="#" className="hover:text-black transition-colors">Voorwaarden</a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-black/30">
            &copy; 2026 Wijnglazenshop
          </div>
        </div>
      </footer>
    </main>
  );
}
