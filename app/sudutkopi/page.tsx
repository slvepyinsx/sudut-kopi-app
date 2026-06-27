"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel";
import TextReveal from "../components/TextReveal";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";

const highlightMenus = [
  {
    name: "Kopi Susu Signature",
    price: "Rp 28.000",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
    desc: "Favorit pelanggan dengan perpaduan espresso dan susu segar.",
  },
  {
    name: "Avocado Coffee",
    price: "Rp 32.000",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80",
    desc: "Kopi dingin dengan alpukat lembut dan sedikit gula aren.",
  },
  {
    name: "Hazelnut Latte",
    price: "Rp 30.000",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
    desc: "Latte dengan sentuhan hazelnut yang harum dan manis.",
  },
];

const suasanCards = [
  { img: "/suasana-1.JPG", alt: "Suasana Kafe 1", caption: "Suasana Kafe" },
  { img: "/suasana-2.JPG", alt: "Suasana Kafe 2", caption: "Area Indoor" },
  { img: "/suasana-3.JPG", alt: "Suasana Kafe 3", caption: "Kenyamanan Pengunjung" },
  { img: "/suasana-4.JPG", alt: "Suasana Kafe 4", caption: "Interior Kafe" },
  { img: "/suasana-5.JPG", alt: "Suasana Kafe 5", caption: "Area Santai" },
  { img: "/suasana-6.JPG", alt: "Suasana Kafe 6", caption: "Tampak Depan" },
  { img: "/suasana-7.JPG", alt: "Suasana Kafe 7", caption: "Outdoor Area" },
];

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      {/* Hero Banner */}
      <section className="hero-animate-bg flex flex-col items-center text-center py-20 px-4 bg-coffee-light text-coffee-dark overflow-hidden">
        <h1 className="hero-animate-text text-5xl font-bold mb-4">Seteguk Seruput di Satu Sudut</h1>
        <p className="hero-animate-sub text-xl mb-8 max-w-2xl text-[#5A412B]">
          Nikmati promo beli 1 gratis 1 untuk semua varian Kopi Susu spesial hari ini!
        </p>
        <Link
          href="/sudutkopi/menu"
          className="hero-animate-btn px-8 py-3 bg-coffee-dark text-white rounded-full font-semibold hover:bg-[#2C1E16] transition"
        >
          Lihat Menu
        </Link>
      </section>

      {/* Biji Kopi */}
      <FadeInSection>
        <section className="py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              <TextReveal text="Biji Kopi Pilihan" speed={45} />
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami menggunakan 100% biji kopi Arabika lokal yang disangrai dengan tingkat kematangan
              medium roast, menghasilkan cita rasa yang seimbang antara pahit, manis, dan sedikit asam
              buah. Setiap biji dipilih dari petani terbaik di dataran tinggi Jawa dan Sumatera.
            </p>
            <Link
              href="/sudutkopi/about"
              className="text-coffee-mid font-semibold hover:text-coffee-dark transition underline underline-offset-4"
            >
              Kenali Cerita Kami &rarr;
            </Link>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
              alt="Biji Kopi Pilihan"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
        </section>
      </FadeInSection>

      {/* Highlight Menu */}
      <section className="py-20 px-8 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center text-coffee-dark mb-4">
              <TextReveal text="Highlight Menu" speed={50} />
            </h2>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
              Pilihan terbaik yang paling digemari oleh pelanggan setia kami.
            </p>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {highlightMenus.map((item, i) => (
              <FadeInSection key={item.name} delay={i * 150}>
                <div
                  className="menu-card bg-cream rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image src={item.img} alt={item.name} fill className="menu-img-zoom object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-coffee-dark">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    <p className="text-coffee-mid font-bold mt-3">{item.price}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={500}>
            <div className="text-center mt-10">
              <Link
                href="/sudutkopi/menu"
                className="inline-block px-8 py-3 bg-coffee-dark text-white rounded-full font-semibold hover:bg-[#2C1E16] transition"
              >
                Lihat Full Menu
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Suasana Kafe */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-coffee-dark mb-4">
            <TextReveal text="Suasana Kafe" speed={55} />
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Tempat yang nyaman untuk bekerja, ngobrol, atau sekadar menikmati kopi sendirian.
          </p>
        </FadeInSection>
        <FadeInSection delay={300}>
          <ImageCarousel items={suasanCards} />
        </FadeInSection>
      </section>
      <Footer />
    </div>
  );
}
