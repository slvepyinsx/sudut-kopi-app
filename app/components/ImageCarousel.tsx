"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

type SlideItem = {
  img: string;
  alt: string;
  caption: string;
};

export default function ImageCarousel({ items }: { items: SlideItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let intervalId: ReturnType<typeof setInterval>;

    const start = () => {
      intervalId = setInterval(() => {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }, 30);
    };

    start();

    el.addEventListener("mouseenter", () => clearInterval(intervalId));
    el.addEventListener("mouseleave", start);

    return () => clearInterval(intervalId);
  }, []);

  const doubled = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto pb-4"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {doubled.map((item, i) => (
        <div
          key={i}
          className="relative shrink-0 w-[280px] md:w-[350px] h-64 rounded-2xl overflow-hidden group"
        >
          <Image
            src={item.img}
            alt={item.alt}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-semibold text-sm">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
