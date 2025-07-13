"use client";

import React, { useEffect, useState } from "react";
import SHA256 from "crypto-js/sha256";

const PASSWORD_HASH =
  "e8b6662eb54d4d412542439de0c714a56f478319d61d641cd8932d069f2e6e13";

const OPTIONS = [
  "Әрине, келемін",
  "Жұбайыммен келемін",
  "Өкінішке орай, келе алмаймын",
];

function hashPassword(password) {
  return SHA256(password).toString();
}

export default function AdminPage() {
  const [responses, setResponses] = useState([]);
  const [filteredResponses, setFilteredResponses] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [filter, setFilter] = useState("");

  const fetchResponses = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://toi-backend.onrender.com/api/response");
      const data = await res.json();
      setResponses(data.responses || []);
      setTotalCount(data.totalCount || 0);
    } catch (err) {
      console.error("Ошибка загрузки:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered =
      filter === "" ? responses : responses.filter((r) => r.answer === filter);
    setFilteredResponses(filtered);
  }, [responses, filter]);

  const deleteResponse = async (id) => {
    try {
      await fetch(`https://toi-backend.onrender.com/api/response/${id}`, {
        method: "DELETE",
      });
      fetchResponses();
    } catch (err) {
      console.error("Ошибка при удалении:", err);
    }
  };

  const handleLogin = () => {
    const hashed = hashPassword(inputPassword);
    if (hashed === PASSWORD_HASH) {
      setAuthorized(true);
      fetchResponses();
    } else {
      alert("Неверный пароль!");
      setInputPassword("");
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100 p-4">
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4 text-center">
            🔐 Админ панель
          </h2>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Пароль"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full border p-2 rounded mb-2"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm text-blue-600 mb-4"
          >
            {showPassword ? "Скрыть" : "Показать"} пароль
          </button>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Войти
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">🛠 Админ-панель</h1>

      <p className="mb-6 text-lg">
        Барлығы: <span className="font-bold text-green-600">{totalCount}</span>{" "}
        адам
      </p>

      {/* ФИЛЬТРЫ */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("")}
          className={`px-3 py-1 rounded-full text-sm border ${
            filter === "" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Барлығы
        </button>
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={`px-3 py-1 rounded-full text-sm border ${
              filter === opt ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* ОТФИЛЬТРОВАННОЕ КОЛИЧЕСТВО */}
      {filter && (
        <p className="mb-4 text-gray-700">
          {filter}:{" "}
          <span className="font-bold text-yellow-600">
            {filteredResponses.reduce((sum, r) => sum + r.count, 0)}
          </span>{" "}
          адам
        </p>
      )}

      {/* ТАБЛИЦА */}
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-white border rounded-xl overflow-hidden text-sm md:text-base">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-3">Имя</th>
                <th className="p-3">Ответ</th>
                <th className="p-3">Количество</th>
                <th className="p-3">Дата</th>
                <th className="p-3">Действие</th>
              </tr>
            </thead>
            <tbody>
              {filteredResponses.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.answer}</td>
                  <td className="p-3">{r.count}</td>
                  <td className="p-3">
                    {new Date(r.createdAt).toLocaleString("ru-RU")}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteResponse(r.id)}
                      className="text-red-600 hover:underline"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
              {filteredResponses.length === 0 && (
                <tr>
                  <td className="p-3 text-center" colSpan={5}>
                    Деректер жоқ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
