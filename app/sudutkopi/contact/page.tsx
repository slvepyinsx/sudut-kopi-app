"use client";

import { useState } from "react";
import TextReveal from "../../components/TextReveal";
import FadeInSection from "../../components/FadeInSection";
import Footer from "../../components/Footer";

const jadwal = [
  { hari: "Senin - Jumat", jam: "08:00 - 22:00" },
  { hari: "Sabtu", jam: "09:00 - 23:00" },
  { hari: "Minggu", jam: "10:00 - 21:00" },
  { hari: "Hari Libur Nasional", jam: "10:00 - 21:00" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="scroll-smooth">
      {/* Header */}
      <section className="hero-animate-bg py-16 px-4 bg-coffee-light text-center overflow-hidden">
        <h1 className="hero-animate-text text-4xl font-bold text-coffee-dark">Contact</h1>
        <p className="hero-animate-sub text-[#5A412B] mt-2">Hubungi kami atau kunjungi langsung kafe.</p>
      </section>

      <div className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Lokasi */}
          <div>
            <h2 className="text-2xl font-bold text-coffee-dark mb-4">Lokasi</h2>
            <div className="w-full h-64 rounded-2xl overflow-hidden bg-gray-200 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.68!2d116.8527!3d-1.2692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327550e6e1b8a1a7%3A0x401e8e3f1e1c1c1c!2sJl.+Keruang%2C+Gn.+Bahagia%2C+Kec.+Balikpapan+Selatan%2C+Kota+Balikpapan%2C+Kalimantan+Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-600">
              Jl. Keruang, RT.15/RW.No 35, Gn. Bahagia, Kecamatan Balikpapan Selatan
              <br />
              Kota Balikpapan, Kalimantan Timur 76114
            </p>
          </div>

          {/* Jam Operasional */}
          <div>
            <h2 className="text-2xl font-bold text-coffee-dark mb-4">Jam Operasional</h2>
            <div className="bg-cream rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {jadwal.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                      <td className="px-4 py-3 font-medium text-coffee-dark">{row.hari}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.jam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Hubungi Kami */}
        <div>
          <h2 className="text-2xl font-bold text-coffee-dark mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 mb-6">
            Kirim pesan kepada kami, kami akan membalas secepat mungkin.
          </p>

          <div className="bg-cream rounded-2xl border border-gray-100 p-6 mb-6">
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-bold text-coffee-dark">Telepon:</span>{" "}
                <span className="text-gray-600">+62 274 123 4567</span>
              </p>
              <p>
                <span className="font-bold text-coffee-dark">WhatsApp:</span>{" "}
                <span className="text-gray-600">+62 812 3456 7890</span>
              </p>
              <p>
                <span className="font-bold text-coffee-dark">Email:</span>{" "}
                <span className="text-gray-600">hello@sudutkopi.id</span>
              </p>
              <p>
                <span className="font-bold text-coffee-dark">Instagram:</span>{" "}
                <span className="text-gray-600">@sudutkopi.id</span>
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <p className="text-green-700 font-semibold">Terima kasih! Pesan Anda sudah terkirim.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-coffee-dark mb-1">Nama</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coffee-light"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-coffee-dark mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coffee-light"
                  placeholder="Masukkan email Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-coffee-dark mb-1">Pesan</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coffee-light resize-none"
                  placeholder="Tulis pesan Anda..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-coffee-dark text-white rounded-xl font-semibold hover:bg-[#2C1E16] transition"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
