import { Github, Maximize2 } from 'lucide-react';
import React, { useState } from 'react'

export default function OtherProject({ project, isDark, onExpand, setViewerData }) {
    const [imgIndex, setImgIndex] = useState(0);
    const imagenes = project.imagenes;

    const prevIdx = (imgIndex - 1 + imagenes.length) % imagenes.length;
    const currIdx = imgIndex;
    const nextIdx = (imgIndex + 1) % imagenes.length;

    const miniaturas = [prevIdx, currIdx, nextIdx];

    const handleMaximizeGallery = () => {
        setViewerData(imgIndex, imagenes)
    }
    return (
        <div className={`backdrop-blur-sm rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 
                  ${isDark ? 'bg-slate-800/40 border border-cyan-400/10' : 'bg-white/60 border border-blue-200/50 shadow-lg'}`}>

            <button
                onClick={() => handleMaximizeGallery()}
                className="absolute top-2  left-45 bg-black/40 p-2 rounded-md hover:bg-black/60 transition"
            >
                <Maximize2 className="text-white" size={20} />
            </button>
            <div className="flex flex-col items-center relative">

                <img
                    src={imagenes[imgIndex]}
                    className={`w-36 h-36 rounded-full 
                        ${isDark ? 'border-4 border-cyan-400/20' : 'border-4 border-blue-200'}
                    `}
                />
                <div className="flex gap-2 mt-4">
                    {miniaturas.map((idx, pos) => (
                        <img
                            key={idx}
                            src={imagenes[idx]}
                            onClick={() => setImgIndex(idx)}
                            className={`
                                w-12 h-12 rounded-full cursor-pointer transition 
                                ${isDark ? 'border-2 border-cyan-400/30' : 'border-2 border-blue-200'}
                                ${pos === 1 ? 'opacity-100 scale-110' : 'opacity-60'}
                            `}
                            style={{
                                filter: pos === 1 ? (isDark ? 'brightness(1.3)' : 'brightness(0.9)') : 'none'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1 space-y-4">
                <h3 className={`font-['Ubuntu:Medium',sans-serif] text-3xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {project.titulo}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-sm 
                            ${isDark ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30' : 'bg-blue-50 text-blue-600 border border-blue-200'}`}>
                            {tag}
                        </span>))
                    }
                </div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                    {project.description}
                </p>

                <button onClick={() => onExpand(project)}
                    className={`px-6 py-2.5 rounded-2xl font-medium cursor-pointer ${isDark
                            ? "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
                            : "bg-blue-600 text-white hover:bg-blue-500"
                        }`}>
                    Ver más
                </button>
            </div>
            <a href="#" className={`p-4 rounded-full transition-all 
                    ${isDark ? 'bg-slate-900/50 hover:bg-cyan-400/10 border border-cyan-400/30' : 'bg-white hover:bg-blue-50 border border-blue-200 shadow-md'}`}>
                <Github className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
            </a>
        </div>
    )
}
