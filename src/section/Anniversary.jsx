"use client";

import React from "react";
import { Sparkles, Gift, Heart } from "lucide-react";

export default function Anniversary() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl px-4 py-8 sm:p-10 max-w-3xl w-full text-center space-y-6 border border-yellow-200">
        {/* Верхний значок */}
        <div className="flex justify-center">
          <Sparkles className="text-yellow-500 w-10 h-10 sm:w-12 sm:h-12 animate-pulse" />
        </div>

        {/* Заголовки */}
        <h1 className="text-xl sm:text-3xl font-extrabold text-yellow-700 leading-snug break-words">
          Құрметті ағайын-туыс, бауырлар, нағашы-жиен, бөлелер,
        </h1>
        <h2 className="text-lg sm:text-2xl font-bold text-yellow-600 break-words">
          құда-жекжат, дос-жарандар, әріптестер!
        </h2>

        {/* Основной текст */}
        <p className="text-base sm:text-lg text-gray-800 leading-normal px-2 sm:px-4">
          Сіздерді аса қадірлі, аяулы анамыз{" "}
          <span className="font-bold text-yellow-700">Шолпанның</span> <br />
          <span className="font-bold text-yellow-600">
            50 жас мерей тойына
          </span>{" "}
          арналған <br />
          салтанатты{" "}
          <span className="text-yellow-500 font-semibold">
            Ақ Дастарханымыздың
          </span>{" "}
          қадірлі қонағы болуға шақырамыз!
        </p>

        {/* Анимация иконок */}
        <div className="flex justify-center gap-6 text-yellow-500">
          <Gift className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce delay-200" />
          <Gift className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce delay-500" />
        </div>

        {/* Подпись */}
        <p className="text-xs sm:text-sm text-gray-600 font-medium">
          Сүйіспеншілікпен: Отбасы мен балалары
        </p>
      </div>
    </section>
  );
}
