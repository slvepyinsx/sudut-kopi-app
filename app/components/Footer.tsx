"use client";

import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    q: "Apakah SudutKopi menerima pembayaran non-tunai?",
    a: "Ya, kami menerima pembayaran via QRIS, kartu debit/kredit, dan e-wallet (GoPay, OVO, Dana).",
  },
  {
    q: "Apakah ada Wi-Fi gratis?",
    a: "Tentu! Kami menyediakan Wi-Fi gratis dengan kecepatan tinggi untuk semua pengunjung.",
  },
  {
    q: "Bisakah pesan kopi untuk acara atau.event?",
    a: "Bisa! Hubungi kami via WhatsApp untuk pemesanan dalam jumlah banyak dengan harga spesial.",
  },
  {
    q: "Apakah SudutKopi menyediakan ruang privat?",
    a: "Kami memiliki area privat yang bisa dipesan untuk meeting atau acara kecil. Silakan reservasi terlebih dahulu.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-3 flex justify-between items-center text-sm font-medium hover:text-coffee-light transition"
      >
        {q}
        <span className="text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && <p className="pb-3 text-sm text-gray-400 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-white">
      {/* FAQ */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold text-coffee-light mb-8 text-center">FAQ</h2>
        <div className="max-w-2xl mx-auto">
          {faqData.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-coffee-light text-lg">SudutKopi</p>
            <p className="text-sm text-gray-400 mt-1">Seteguk Seruput di Satu Sudut</p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/sudutkopi/contact" className="hover:text-coffee-light transition">
              Kebijakan Privasi
            </Link>
            <Link href="/sudutkopi/contact" className="hover:text-coffee-light transition">
              Syarat &amp; Ketentuan
            </Link>
          </div>

          <p className="text-xs text-gray-500">&copy; 2026 SudutKopi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
