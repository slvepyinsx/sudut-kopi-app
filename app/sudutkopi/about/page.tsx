"use client";

import Image from "next/image";
import TextReveal from "../../components/TextReveal";
import FadeInSection from "../../components/FadeInSection";
import Footer from "../../components/Footer";

const timData = [
  {
    name: "Morgan",
    role: "Head Barista",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    name: "Andika",
    role: "Roaster & Barista",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  },
  {
    name: "Faris Atsal",
    role: "Manager",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
];

const testimoniData = [
  {
    text: "Kopinya enak, tempatnya cozy banget buat nugas atau sekadar ngobrol bareng teman. Recommended!",
    name: "Andi W.",
    role: "Mahasiswa",
  },
  {
    text: "Tempat favorit saya setelah jam kerja. Suasana tenang, kopi nikmat, dan staff-nya ramah banget.",
    name: "Dewi L.",
    role: "Freelancer",
  },
  {
    text: "Croissant-nya juara! Baru pertama kali ke sini dan langsung jadi langganan. Pelayanan juga top.",
    name: "Rizky A.",
    role: "Content Creator",
  },
];

export default function AboutPage() {
  return (
    <div className="scroll-smooth">
      {/* Header */}
      <section className="hero-animate-bg py-16 px-4 bg-coffee-light text-center overflow-hidden">
        <h1 className="hero-animate-text text-4xl font-bold text-coffee-dark">About Us</h1>
        <p className="hero-animate-sub text-[#5A412B] mt-2">Mengenal lebih dekat Sudut Kopi.</p>
      </section>

      {/* Cerita Kami */}
      <FadeInSection>
        <section className="py-20 px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-coffee-dark mb-6">
            <TextReveal text="Cerita Kami" speed={50} />
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Berawal dari kecintaan kami terhadap kopi di tahun 2026, SudutKopi hadir untuk menjadi
            tempat singgah bagi mereka yang lelah berlari. Kami percaya bahwa setiap sudut memiliki
            ceritanya masing-masing, dan di SudutKopi, cerita itu ditemani dengan secangkir kopi
            terbaik.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            Dari biji kopi yang kami pilih langsung dari petani lokal hingga cara kami meraciknya
            dengan penuh dedikasi, setiap cangkir kami ceritakan dengan sepenuh hati.
          </p>
        </section>
      </FadeInSection>

      {/* Tim / Barista Kami */}
      <section className="py-20 px-8 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-coffee-dark mb-12">
              <TextReveal text="Tim / Barista Kami" speed={40} />
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {timData.map((person, i) => (
              <FadeInSection key={person.name} delay={i * 150}>
                <div className="flex flex-col items-center group">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 ring-2 ring-coffee-light/30 group-hover:ring-coffee-light transition-all duration-400">
                    <Image src={person.img} alt={person.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="font-bold text-coffee-dark">{person.name}</p>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-coffee-dark mb-12">
            <TextReveal text="Testimoni" speed={55} />
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {testimoniData.map((item, i) => (
            <FadeInSection key={item.name} delay={i * 150}>
              <div
                className="bg-cream p-6 rounded-2xl border border-gray-100 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
              >
                <p className="italic text-gray-600 flex-1">&ldquo;{item.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-bold text-coffee-dark">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
