import Image from "next/image";

export default function Main() {
  return (
    <div className="relative min-h-[30vh] bg-[#dae3e3] flex flex-col justify-between items-center text-center px-4 pt-10 pb-6 overflow-hidden">
      {/* Текстовая часть */}
      <div className="z-10 space-y-2">
        <h1 className="text-4xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Айдын & Гаухар
        </h1>
        <h2 className="text-lg sm:text-xl font-medium text-gray-700">
          Үйлену тойы
        </h2>
      </div>

      {/* Цветок внизу */}
      <div className="w-full flex justify-center z-0">
        <Image
          src="/flower.png"
          alt="Flower Decoration"
          width={1200}
          height={300}
          className="w-full max-w-[500px] sm:max-w-[650px] md:max-w-[800px] object-contain"
          priority
        />
      </div>
    </div>
  );
}
