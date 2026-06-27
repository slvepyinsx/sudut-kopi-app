import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Sudut Kopi - Seteguk Seruput di Satu Sudut",
  description:
    "Kafe dengan suasana hangat dan biji kopi Arabika pilihan. Nikmati kopi terbaik di Sudut Kopi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
