"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className="relative min-h-[30vh] bg-[#dae3e3] flex flex-col justify-between items-center text-center px-4 pt-10 pb-6 overflow-hidden">
      {/* Фоновое видео */}
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
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      {/* Текстовая часть с анимацией */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 space-y-2 text-white"
      >
        <h1 className="text-4xl sm:text-3xl font-bold tracking-tight">
          Айдын & Гаухар
        </h1>
        <p className="text-lg">Время</p>
      </motion.div>
    </div>
  );
}
