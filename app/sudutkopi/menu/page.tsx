"use client";

import Image from "next/image";
import { useState } from "react";
import TextReveal from "../../components/TextReveal";
import FadeInSection from "../../components/FadeInSection";
import Footer from "../../components/Footer";

type MenuItem = {
  name: string;
  price: string;
  img: string;
  desc?: string;
};

const categories = ["Coffee", "Non-Coffee", "Makanan & Pastry"] as const;
type Category = (typeof categories)[number];

const menuData: Record<Category, MenuItem[]> = {
  Coffee: [
    { name: "Espresso", price: "Rp 18.000", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&q=80", desc: "Espresso single shot, kuat dan pekat." },
    { name: "Cappuccino", price: "Rp 25.000", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&q=80", desc: "Perpaduan espresso dan steamed milk dengan foam lembut." },
    { name: "Kopi Susu Signature", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&q=80", desc: "Favorit pelanggan, espresso + susu segar + gula aren." },
    { name: "Avocado Coffee", price: "Rp 32.000", img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&q=80", desc: "Kopi dingin dengan alpukat lembut." },
    { name: "Hazelnut Latte", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&q=80", desc: "Latte dengan sentuhan hazelnut harum." },
    { name: "Americano", price: "Rp 20.000", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=300&q=80", desc: "Espresso double shot dengan air panas." },
    { name: "Mocha", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=300&q=80", desc: "Espresso, cokelat, dan susu." },
    { name: "Cold Brew", price: "Rp 27.000", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&q=80", desc: "Kopi dingin diseduh selama 12 jam." },
  ],
  "Non-Coffee": [
    { name: "Matcha Latte", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&q=80", desc: "Matcha premium dengan susu segar." },
    { name: "Chocolate", price: "Rp 25.000", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&q=80", desc: "Cokelat panas/dingin dengan whipped cream." },
    { name: "Vanilla Latte", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&q=80", desc: "Latte dengan sentuhan vanilla yang harum dan manis." },
    { name: "Lemon Tea", price: "Rp 20.000", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80", desc: "Teh segar dengan perasan lemon." },
    { name: "Thai Tea", price: "Rp 22.000", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=300&q=80", desc: "Teh Thailand asli dengan susu." },
  ],
  "Makanan & Pastry": [
    { name: "Butter Croissant", price: "Rp 22.000", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300&q=80", desc: "Croissant mentega renyah." },
    { name: "Indomie Goreng", price: "Rp 18.000", img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&q=80", desc: "Indomie goreng spesial dengan telur." },
    { name: "Cireng", price: "Rp 15.000", img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&q=80", desc: "Aci digoreng renyah dengan bumbu rujak." },
    { name: "Chicken Sandwich", price: "Rp 32.000", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&q=80", desc: "Sandwich ayam panggang dengan sayuran segar." },
    { name: "Cheese Cake", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&q=80", desc: "Cheese cake lembut dengan topping buah." },
    { name: "Tiramisu", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&q=80", desc: "Kue khas Italia dengan kopi dan mascarpone." },
  ],
};

export default function MenuPage() {
  const [active, setActive] = useState<Category>("Coffee");
  const [animKey, setAnimKey] = useState(0);

  const handleTab = (cat: Category) => {
    if (cat === active) return;
    setActive(cat);
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="scroll-smooth">
      {/* Header */}
      <section className="hero-animate-bg py-16 px-4 bg-coffee-light text-center overflow-hidden">
        <h1 className="hero-animate-text text-4xl font-bold text-coffee-dark">Menu &amp; Pricelist</h1>
        <p className="hero-animate-sub text-[#5A412B] mt-2">Pilihan minuman dan makanan terbaik untuk Anda.</p>
      </section>

      {/* Tabs & Menu */}
      <section className="bg-white">
        <div className="py-16 pb-32 px-8 max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-14 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTab(cat)}
                className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active === cat
                    ? "bg-coffee-dark text-white scale-105 shadow-md"
                    : "bg-cream text-coffee-dark border border-gray-200 hover:bg-coffee-light/30 hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div key={animKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[active].map((item, i) => (
              <div
                key={item.name}
                className="menu-card menu-item-enter bg-cream rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="menu-img-zoom object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-coffee-dark">{item.name}</h3>
                  {item.desc && <p className="text-sm text-gray-500 mt-1">{item.desc}</p>}
                  <p className="text-coffee-mid font-bold mt-3">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
