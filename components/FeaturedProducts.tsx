import React from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: "Roborock S8 Pro Ultra",
    tag: "Top Rated Vacuum",
    price: "$1,599",
    image: "https://m.media-amazon.com/images/I/717M7f6nylL._AC_SX679_.jpg", 
    link: "https://amazon.com", // Replace with your affiliate link later
  },
  {
    id: 2,
    name: "Scrub Daddy 3-Pack",
    tag: "Cleaning Essential",
    price: "$14.99",
    image: "https://m.media-amazon.com/images/I/81B+0s+j+AL._AC_SX679_.jpg",
    link: "https://amazon.com",
  },
  {
    id: 3,
    name: "Bissell Little Green",
    tag: "Viral Favorite",
    price: "$123.59",
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg",
    link: "https://amazon.com",
  },
  {
    id: 4,
    name: "Affresh Washer Cleaner",
    tag: "Maintenance Must-Have",
    price: "$11.98",
    image: "https://m.media-amazon.com/images/I/71W-LhF4hUL._AC_SX679_.jpg",
    link: "https://amazon.com",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Trusted Gear</h2>
            <p className="text-slate-500 text-sm mt-1">Tools we are currently testing.</p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {PRODUCTS.map((product) => (
            <a 
              key={product.id} 
              href={product.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="min-w-[240px] bg-white border border-slate-200 rounded-xl p-3 hover:shadow-lg transition-shadow snap-start block"
            >
              <div className="relative h-40 w-full mb-3 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                 {/* Using standard img tag to avoid Next.js config errors for now */}
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="object-contain h-full w-full mix-blend-multiply"
                 />
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-tight mb-1">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium text-sm">{product.price}</span>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  AMAZON
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
