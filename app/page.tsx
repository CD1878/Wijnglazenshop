import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'The Bordeaux',
    category: 'Red Wine',
    price: 'â‚¬45',
    image: 'https://picsum.photos/seed/bordeauxglass/800/1200',
  },
  {
    id: 2,
    name: 'The Burgundy',
    category: 'Red Wine',
    price: 'â‚¬48',
    image: 'https://picsum.photos/seed/burgundyglass/800/1200',
  },
  {
    id: 3,
    name: 'The Chardonnay',
    category: 'White Wine',
    price: 'â‚¬42',
    image: 'https://picsum.photos/seed/chardonnayglass/800/1200',
  },
  {
    id: 4,
    name: 'The Flute',
    category: 'Sparkling',
    price: 'â‚¬38',
    image: 'https://picsum.photos/seed/fluteglass/800/1200',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-8 bg-white/80 backdrop-blur-md border-b border-black/5">
        <button className="text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity">
          Menu
        </button>
        <div className="font-serif text-2xl tracking-widest uppercase">
          VinoGlass
        </div>
        <button className="text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity">
          Cart [0]
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end p-6 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/lightwineglass/1920/1080?blur=2"
            alt="Elegant wine glass"
            fill
            className="object-cover opacity-30"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="font-serif text-[15vw] md:text-[10vw] leading-[0.85] font-light tracking-tighter mb-4">
              PURE <span className="italic text-black/70">form</span>
            </h1>
            <p className="text-[11px] uppercase tracking-[0.2em] max-w-sm text-black/60 leading-relaxed">
              Mouth-blown, ultra-thin crystal glasses designed to elevate the nuances of every vintage.
            </p>
          </div>
          <button className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] border border-black/30 rounded-full px-8 py-4 hover:bg-black hover:text-white transition-all duration-300">
            Explore Collection <ArrowRight className="w-4 h-4" />
          </button>
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
              The vessel is as <span className="italic text-black/50">important</span> as the vintage.
            </h2>
            <p className="text-black/60 leading-relaxed font-light max-w-md mb-10">
              Our glasses are crafted by master artisans using traditional glass-blowing techniques. The incredibly thin rim and precise bowl shape are engineered to direct the wine to the optimal part of your palate, revealing the true soul of the wine.
            </p>
            <a href="#" className="inline-block text-[10px] uppercase tracking-[0.2em] border-b border-black/30 pb-1 hover:border-black transition-colors">
              Read our story
            </a>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-square rounded-full overflow-hidden border border-black/10 p-4">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/glassartisan/800/800"
                  alt="Artisan glass blowing"
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
            VinoGlass
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-black/50">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
            <a href="#" className="hover:text-black transition-colors">Shipping</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-black/30">
            &copy; 2026
          </div>
        </div>
      </footer>
    </main>
  );
}
