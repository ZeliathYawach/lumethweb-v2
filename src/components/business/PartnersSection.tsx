import React from 'react';

const PARTNER_LOGOS = [
  {
    name: "Luxe Salon",
    logo: "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&q=80&w=140&h=140",
  },
  {
    name: "Pure Spa",
    logo: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=140&h=140",
  },
  {
    name: "Elite Beauty",
    logo: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=140&h=140",
  },
  {
    name: "Zen Wellness",
    logo: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=140&h=140",
  }
];

export function PartnersSection() {
  return (
    <section className="mb-24">
      <h3 className="text-2xl font-semibold text-center mb-12 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
        Trusted by Leading Brands
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {PARTNER_LOGOS.map((partner, index) => (
          <div 
            key={index}
            className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-white font-semibold">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}