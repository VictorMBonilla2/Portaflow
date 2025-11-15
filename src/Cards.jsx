import { useState } from "react";
import { Github, Maximize2 } from "lucide-react";

export default function Cards({ project, isDark, onExpand, onViewImages }) {
  const [imgIndex, setImgIndex] = useState(0);
  const imagenes = project.imagenes;

  const prev = () => {
    setImgIndex((i) => (i === 0 ? imagenes.length - 1 : i - 1));
  };

  const next = () => {
    setImgIndex((i) => (i === imagenes.length - 1 ? 0 : i + 1));
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 
        ${isDark
          ? "bg-slate-800/60 backdrop-blur-sm shadow-xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/20"
          : "bg-white shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/50"
        }`}
    >
      {/* Imagen con carrusel */}
      <div className="relative h-72 overflow-hidden group">
        
        {/* Imagen principal */}
        <img
          src={imagenes[imgIndex]}
          alt={project.titulo}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY de miniaturas y controles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-t from-black/60 to-transparent" />

        {/* Botón maximizar */}
        <button
          onClick={() => onViewImages(imgIndex, imagenes)}
          className="absolute top-3 right-3 bg-black/40 p-2 cursor-pointer rounded-md hover:bg-black/60 transition"
        >
          <Maximize2 className="text-white" size={20} />
        </button>

        {/* Carrusel prev/next */}
        {imagenes.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              ›
            </button>
          </>
        )}

        {/* Miniaturas pequeñas abajo */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {imagenes.slice(0, 3).map((img, i) => {
            const idx = (imgIndex + i) % imagenes.length;
            return (
              <img
                key={idx}
                src={imagenes[idx]}
                className={`w-12 h-12 rounded-lg object-cover border-2 transition
                  ${idx === imgIndex ? "border-white" : "border-transparent opacity-70"}`}
              />
            );
          })}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="p-6 space-y-4">
        <h3
          className={`font-['Ubuntu:Medium',sans-serif] text-3xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {project.titulo}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm 
                ${isDark
                  ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                  : "bg-blue-50 text-blue-600 border border-blue-200"
              }`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Descripción corta */}
        <p className={isDark ? "text-slate-300" : "text-slate-600"}>
          {project.subtitle || project.description.substring(0, 80) + "..."}
        </p>

        {/* Botones */}
        <div className="flex gap-3">
          {/* GitHub */}
          {project.links?.find((l) => l.label === "GitHub") && (
            <button
              className={`flex-1 rounded-2xl py-4 cursor-pointer px-6 flex items-center justify-center gap-3 transition-colors ${
                isDark
                  ? "bg-slate-900/50 text-cyan-400 hover:bg-cyan-400/10 border border-cyan-400/30"
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-md"
              }`}
              onClick={() =>
                window.open(
                  project.links.find((l) => l.label === "GitHub").url,
                  "_blank"
                )
              }
            >
              GitHub <Github className="w-6 h-6" />
            </button>
          )}

          {/* VER MÁS – Abre ExpandModal */}
          <button
            onClick={() => onExpand(project)}
            className={`px-6 py-4 rounded-2xl font-medium cursor-pointer ${
              isDark
                ? "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
