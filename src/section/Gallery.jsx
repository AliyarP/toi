"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4 md:p-10 bg-gradient-to-br from-white to-neutral-100 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        🌟 Галерея
      </h2>
      <p className="text-center text-gray-500 mb-8 text-lg">
        Біздің ең жақсы сәттерімізбен бөлісеміз!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white aspect-square flex items-center justify-center"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Сурет ${index + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-full transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="max-w-3xl w-full p-4 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Толық сурет"
                width={1200}
                height={900}
                className="rounded-xl w-full h-auto object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
