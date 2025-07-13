"use client";

import React from "react";
import { Clock, Users, Music } from "lucide-react";

const events = [
  {
    time: "14:00",
    title: "Қонақтардың жиналуы",
    icon: Users,
  },
  {
    time: "15:00",
    title: "Тойдың басталуы",
    icon: Clock,
  },
  {
    time: "17:00",
    title: "Музыкалық шоу",
    icon: Music,
  },
];

export default function Path() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
          Той Бағдарламасы
        </h2>

        <ol className="relative border-l border-yellow-400">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full -left-4 ring-4 ring-yellow-200">
                  <Icon className="w-4 h-4 text-white" />
                </span>
                <time className="mb-1 text-sm font-normal leading-none text-yellow-300">
                  {event.time}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {event.title}
                </h3>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
