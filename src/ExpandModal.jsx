import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function ExpandModal({ data, onClose , isDark, setViewerData}) {
  const {
    titulo,
    subtitle,
    description,
    estadoProyecto,
    detallesDescripcion,
    tags= [],
    imagenes = [],
    links = [],
  } = data;

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? imagenes.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === imagenes.length - 1 ? 0 : i + 1));
  };

  const paragraphs = description.split("\n").filter(Boolean);

  const ColoresEstados= {
    "En Línea": "blue",
    "Finalizado": "gray",
    "Pre-lanzamiento" : "yellow",
    "Entregado al cliente": "purple"
  }

  const handleMaximizeGallery = ()=>{
    setViewerData(index ,imagenes)
  }

  return (
    <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-6">
      
      {/* Modal */}
      <div className="bg-[#0f121a] text-white w-full max-w-6xl h-[90vh] rounded-xl overflow-hidden flex">

        {/* Left Section – Imagenes */}
        <div className="w-[45%] bg-black/30 relative flex flex-col items-center justify-center ">
          <button
            onClick={() => handleMaximizeGallery()}
            className="absolute top-3 right-3 bg-black/40 p-2 rounded-md hover:bg-black/60 transition"
          >
             <Maximize2 className="text-white" size={20} />
          </button>
          {/* Navegación izquierda */}
          {imagenes.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white mix-blend-difference"
            >
              <ChevronLeft size={40} />
            </button>
          )}

          {/* Imagen principal */}
          <img
            src={imagenes[index]}
            className="max-w-full max-h-[70%] object-contain rounded-lg"
          />

          {/* Navegación derecha */}
          {imagenes.length > 1 && (
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white mix-blend-difference "
            >
              <ChevronRight size={40} />
            </button>
          )}

          {/* Mini carrusel */}
          <div className="flex gap-3 px-3 py-3 w-full overflow-x-auto mt-4">
            {imagenes.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setIndex(i)}
                className={`h-20 w-20 object-cover rounded-md cursor-pointer border-2 transition
                ${
                  i === index
                    ? "border-white opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section – Descripción */}
        <div className="w-[55%] p-8 flex flex-col overflow-y-auto">

            
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-red-400 transition"
          >
            <X size={30} />
          </button>

          {/* Título */}
          <div className="tituloSide">
            <h1 className="text-3xl font-bold">{titulo}</h1>
            {subtitle && (
              <p className="text-sm mt-1 text-gray-300">{subtitle}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-2  mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm ${
                  isDark
                    ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                    : "bg-blue-50 text-blue-600 border border-blue-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Descripción */}
          <div className="descriptionSide mt-5 space-y-4">
              {paragraphs.map((p, i) => (
                <p className="text-gray-200 leading-relaxed" key={i}>{p}</p>
              ))}
            {estadoProyecto && (
              <p className={`text-sm px-3 py-1 w-fit rounded bg-${ColoresEstados[estadoProyecto]}-600/20 text-${ColoresEstados[estadoProyecto]}-300 border border-${ColoresEstados[estadoProyecto]}-500/40`}>
                Estado: {estadoProyecto}
              </p>
              
            )}
            {detallesDescripcion && (
              <p className="text-gray-400 text-sm bg-">{detallesDescripcion}</p>
            )}
          </div>
          {/* Botones */}
          <div className="buttonsSide mt-8 flex gap-3 flex-wrap">
            {links.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                className={`flex color-white items-center gap-2 px-4 py-2 rounded-md font-medium
                transition hover:opacity-80 ${item.bg || "bg-blue-600"}`}
              >
                {item.icon && <item.icon size={20} />}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
