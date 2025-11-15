import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageViewer({ imageList, indexImage = 0, onClose }) {
  const [current, setCurrent] = useState(indexImage);

  // Actualizar índice si prop cambia
  useEffect(() => {
    setCurrent(indexImage);
  }, [indexImage]);

  const prev = () => {
    setCurrent((c) => (c === 0 ? imageList.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === imageList.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="fixed inset-0 z-70 bg-black/80 flex flex-col items-center justify-center select-none">

      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white hover:text-red-400 transition"
      >
        <X size={32} />
      </button>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        className="absolute left-5 text-white hover:text-gray-300 transition"
      >
        <ChevronLeft size={50} />
      </button>

      {/* Imagen principal */}
      <div className="max-w-[90%] max-h-[70%] flex items-center justify-center">
        <img
          src={imageList[current]}
          alt=""
          className="object-contain max-h-full max-w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Flecha derecha */}
      <button
        onClick={next}
        className="absolute right-5 text-white hover:text-gray-300 transition"
      >
        <ChevronRight size={50} />
      </button>

      {/* Tiras de miniaturas */}
      <div className="flex gap-3 mt-6 max-w-[90%] overflow-x-auto pb-3">
        {imageList.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setCurrent(i)}
            className={`h-20 w-20 object-cover rounded-md cursor-pointer border-2 transition
              ${i === current ? "border-white" : "border-transparent opacity-70 hover:opacity-100"}`}
          />
        ))}
      </div>
    </div>
  );
}
