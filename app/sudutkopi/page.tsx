import React from 'react';

export default function SudutKopiWebsite() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1E16] font-sans scroll-smooth">
      
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-[#4A3320] text-white px-8 py-5 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl text-[#D4B895]">SudutKopi</h1>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-sm">
          <a href="#home" className="hover:text-[#D4B895] transition">Home</a>
          <a href="#menu" className="hover:text-[#D4B895] transition">Menu & Pricelist</a>
          <a href="#about" className="hover:text-[#D4B895] transition">About Us</a>
          <a href="#contact" className="hover:text-[#D4B895] transition">Contact</a>
        </div>
      </nav>

      {/* ================= 1. HOME SECTION ================= */}
      <section id="home" className="flex flex-col">
        {/* Hero Banner (Promo) */}
        <div className="flex flex-col items-center text-center py-32 px-4 bg-[#D4B895] text-[#4A3320]">
          <h1 className="text-5xl font-bold mb-4">Seteguk Seruput di Satu Sudut</h1>
          <p className="text-xl mb-8 max-w-2xl text-[#5A412B]">
            Nikmati promo beli 1 gratis 1 untuk semua varian Kopi Susu spesial hari ini!
          </p>
          <a href="#menu" className="px-8 py-3 bg-[#4A3320] text-white rounded-full font-semibold hover:bg-[#2C1E16] transition">
            Lihat Highlight Menu
          </a>
        </div>

        {/* Biji Kopi & Suasana Kafe */}
        <div className="py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#4A3320] mb-4">Biji Kopi Pilihan</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami menggunakan 100% biji kopi Arabika lokal yang disangrai dengan tingkat kematangan medium roast, menghasilkan cita rasa yang seimbang antara pahit, manis, dan sedikit asam buah.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
              alt="Suasana Kafe" 
              className="rounded-3xl shadow-lg w-full h-64 object-cover"
            />
            <p className="text-center text-sm text-gray-500 mt-3 font-medium">Suasana Hangat SudutKopi</p>
          </div>
        </div>
      </section>

      {/* ================= 2. MENU / PRICELIST SECTION ================= */}
      <section id="menu" className="py-20 px-8 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4A3320] mb-16">Menu & Pricelist</h1>

          {/* Coffee */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 border-b pb-2">Coffee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item Card */}
              <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=150&q=80" className="w-20 h-20 rounded-xl object-cover" alt="Espresso" />
                <div>
                  <h3 className="font-bold text-lg">Espresso</h3>
                  <p className="text-[#8B5E3C] font-semibold">Rp 18.000</p>
                </div>
              </div>
              <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=150&q=80" className="w-20 h-20 rounded-xl object-cover" alt="Cappuccino" />
                <div>
                  <h3 className="font-bold text-lg">Cappuccino</h3>
                  <p className="text-[#8B5E3C] font-semibold">Rp 25.000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Coffee */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 border-b pb-2">Non-Coffee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1749280447307-31a68eb38673?w=150&q=80" className="w-20 h-20 rounded-xl object-cover" alt="Matcha" />
                <div>
                  <h3 className="font-bold text-lg">Matcha Latte</h3>
                  <p className="text-[#8B5E3C] font-semibold">Rp 28.000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Makanan & Pastry */}
          <div>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 border-b pb-2">Makanan & Pastry</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=150&q=80" className="w-20 h-20 rounded-xl object-cover" alt="Croissant" />
                <div>
                  <h3 className="font-bold text-lg">Butter Croissant</h3>
                  <p className="text-[#8B5E3C] font-semibold">Rp 22.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. ABOUT US SECTION ================= */}
      <section id="about" className="py-20 px-8 bg-[#D4B895] bg-opacity-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#4A3320] mb-8">About Us</h1>
          
          {/* Cerita Kami */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Cerita Kami</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Berawal dari kecintaan kami terhadap kopi di tahun 2024, SudutKopi hadir untuk menjadi tempat singgah bagi mereka yang lelah berlari. Kami percaya bahwa setiap sudut memiliki ceritanya masing-masing, dan di SudutKopi, cerita itu ditemani dengan secangkir kopi terbaik.
            </p>
          </div>

          {/* Tim / Barista Kami */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Barista Kami</h2>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <p className="font-bold">Budi</p>
                <p className="text-sm text-gray-600">Head Barista</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <p className="font-bold">Siti</p>
                <p className="text-sm text-gray-600">Roaster</p>
              </div>
            </div>
          </div>

          {/* Testimoni */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-[#8B5E3C]">Testimoni Pelanggan</h2>
            <p className="italic text-gray-600">"Kopinya enak, tempatnya cozy banget buat nugas atau sekadar ngobrol bareng teman. Recommended!"</p>
            <p className="mt-4 font-bold text-sm">- Andi W.</p>
          </div>
        </div>
      </section>
      </div>
    );
}