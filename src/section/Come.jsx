"use client";

import React from "react";
import { PartyPopper, Sparkles } from "lucide-react";

export default function Come() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-300/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-40 sm:h-40 bg-pink-300/20 rounded-full blur-2xl" />

      {/* Контент */}
      <div className="bg-white/90 backdrop-blur-md border border-yellow-300 rounded-3xl shadow-2xl px-4 py-8 sm:p-10 max-w-3xl w-full text-center space-y-6 z-10">
        {/* Иконка */}
        <div className="flex justify-center">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 animate-ping-slow" />
        </div>

        {/* Заголовок */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-600 leading-snug break-words">
          Келіңіздер, <br />
          Қуанышымызға ортақ болыңыздар!
        </h2>

        {/* Основной текст */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
          Бұл күн – біздің жүрегімізге ең қымбат сәт. <br />
          Сіздердің жылы күлкілеріңіз, ізгі тілектеріңіз – біз үшін үлкен бақыт!
        </p>

        {/* Анимации */}
        <div className="flex justify-center gap-4 text-yellow-500">
          <PartyPopper className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce delay-200" />
          <PartyPopper className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce delay-400" />
        </div>

        {/* Подпись */}
        <p className="text-xs sm:text-sm text-gray-500 italic">
          Сүйіспеншілікпен, той иелері ❤️
        </p>
      </div>
    </section>
  );
}
