"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";

const WeddingFont = localFont({
  src: "../fonts/GreatVibes-Regular.ttf",
  variable: "--font-wedding",
});

export default function Main() {
  return (
    <div
      className={`relative min-h-[50vh] flex flex-col justify-between items-center text-center px-4 pt-16 pb-10 overflow-hidden ${WeddingFont.variable}`}
    >
      {/* Видео на фоне */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0" />

      {/* Текст с анимацией */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 space-y-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
      >
        <h1
          className="text-5xl sm:text-6xl font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-wedding)" }}
        >
          Айдын & Гаухар
        </h1>
        <p className="text-xl font-light">12 августа 2025</p>
      </motion.div>
    </div>
  );
}
