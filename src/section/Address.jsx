"use client";

import React from "react";
import { MapPin, Plus } from "lucide-react";

export default function Address() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl px-4 py-8 sm:p-10 max-w-2xl w-full space-y-6 text-center border border-yellow-200">
        {/* Иконка */}
        <div className="flex justify-center">
          <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
        </div>

        {/* Заголовок */}
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 break-words">
          Мекен-жайымыз:
        </h2>

        {/* Адрес */}
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed break-words px-2">
          Еңбекшіқазақ ауданы, <br />
          Есік қаласы, Жалын бау-бақша ұжымы, <br />
          <span className="font-semibold">«Paris Soul»</span> мейрамханасы
        </p>

        {/* Подсказка */}
        <p className="text-xs sm:text-sm text-gray-600 italic px-2">
          Төмендегі <span className="font-semibold">2GIS</span> картасын
          пайдаланыңыз
        </p>

        {/* Кнопка */}
        <div className="flex justify-center">
          <a
            href="https://2gis.kz/almaty/geo/70000001100564526/78.340474,45.011844"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-xl font-semibold shadow-md transition-all"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            Картаны ашу
          </a>
        </div>
      </div>
    </section>
  );
}
