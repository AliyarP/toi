"use client";

import React, { useState } from "react";
import Countdown from "react-countdown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/kk"; // Қазақша локаль
import { CalendarDays } from "lucide-react";
import Image from "next/image";

dayjs.locale("kk"); // Локальді орнату

// 🎯 Установленная дата свадьбы
const weddingDate = dayjs("2025-08-10T14:00").toDate();

const renderer = ({ days, hours, minutes, seconds }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-white">
    {[
      { label: "күн", value: days },
      { label: "сағ", value: hours },
      { label: "мин", value: minutes },
      { label: "сек", value: seconds },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-yellow-500 text-black rounded-xl p-3 flex flex-col items-center shadow-lg"
      >
        <span className="text-lg sm:text-2xl font-bold leading-none">
          {item.value}
        </span>
        <span className="text-[10px] sm:text-xs mt-1">{item.label}</span>
      </div>
    ))}
  </div>
);

export default function Welcome() {
  const [date] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex flex-col items-center justify-center p-6">
      <div className="bg-white text-gray-800 shadow-xl rounded-2xl p-8 max-w-xl w-full text-center space-y-6">
        {/* Заголовки */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-yellow-600">
            Құрметті қонақтар!
          </h1>
          <h2 className="text-lg font-semibold">СІЗДЕРДІ БАЛАЛАРЫМЫЗ</h2>
          <h3 className="text-xl font-bold text-yellow-700">
            Айдын мен Гаухар
          </h3>
          <h4 className="text-base">
            ҮЙЛЕНУ ТОЙЫНА АРНАЛҒАН САЛТАНАТТЫ АҚ ДАСТАРХАНЫМЫЗДЫҢ ҚАДІРЛІ ҚОНАҒЫ
            БОЛУҒА ШАҚЫРАМЫЗ!
          </h4>
          <h6 className="text-sm max-[325px]:text-[13px] text-gray-500">
            ТОЙ ИЕЛЕРІ: Аманжол - Бағила
          </h6>
        </div>

        {/* Фото ата-аналар */}
        <div className="rounded-2xl overflow-hidden shadow-lg mx-auto border-4 border-yellow-300 w-full max-w-xs">
          <Image
            src="/parents.jpg"
            alt="Ата-анамыз"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Таймер */}
        <div>
          <Countdown date={weddingDate} renderer={renderer} />
        </div>

        {/* Календарь */}
        <div className="mt-6 bg-gray-100 p-4 rounded-xl shadow-inner border border-yellow-300">
          <div className="text-center mb-3">
            <div className="flex items-center justify-center gap-2 text-yellow-700 mb-1">
              <CalendarDays className="w-5 h-5" />
              <span className="font-semibold">Той күні:</span>
            </div>
            <h4 className="text-md sm:text-lg font-bold text-gray-700">
              {dayjs(weddingDate).format("MMMM YYYY")} {/* Тамыз 2025 */}
            </h4>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-xs">
              <Calendar
                value={weddingDate}
                tileDisabled={() => true}
                showNavigation={false}
                showNeighboringMonth={false}
                navigationLabel={() => null}
                tileClassName={({ date: d, view }) => {
                  if (view === "month" && dayjs(d).isSame(weddingDate, "day")) {
                    return "react-calendar__tile--active";
                  }
                  return "";
                }}
                className="border-none rounded-xl text-sm pointer-events-none select-none w-full"
              />
            </div>
          </div>

          <p className="mt-3 text-sm sm:text-base text-yellow-700 font-semibold text-center">
            2025, 10 Тамыз — сағат 14:00
          </p>
        </div>
      </div>
    </div>
  );
}
