"use client";

import React, { useState } from "react";
import { User, Users } from "lucide-react";

export default function Form() {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://toi-backend.onrender.com/api/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, answer, count }),
    });

    if (res.ok) {
      alert("Жауабыңыз сәтті жіберілді!");
      setName("");
      setAnswer("");
      setCount(1);
    } else {
      alert("Қате орын алды. Қайта көріңіз.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full space-y-6 text-gray-800"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-600 tracking-wide">
          Тойға келесіз бе?
        </h2>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <User className="w-4 h-4" />
            Атыңыз
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Атыңызды жазыңыз"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Таңдаңыз:
          </label>
          <div className="space-y-2">
            {[
              "Әрине, келемін",
              "Жұбайыммен келемін",
              "Өкінішке орай, келе алмаймын",
            ].map((option) => (
              <label
                key={option}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                  answer === option
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300"
                } cursor-pointer`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={answer === option}
                  onChange={() => setAnswer(option)}
                  className="accent-yellow-500"
                />
                <span className="text-sm text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Қанша адам */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Users className="w-4 h-4" />
            Қанша адам келесіздер?
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCount((c) => Math.max(1, c - 1))}
              className="px-3 py-1 bg-yellow-500 rounded-full text-lg font-bold text-white hover:bg-yellow-600"
            >
              –
            </button>
            <span className="text-lg font-semibold">{count}</span>
            <button
              type="button"
              onClick={() => setCount((c) => c + 1)}
              className="px-3 py-1 bg-yellow-500 rounded-full text-lg font-bold text-white hover:bg-yellow-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition-all"
        >
          Жауап беру
        </button>
      </form>
    </div>
  );
}
