import { Moon, Sun, Github, Mail, Linkedin, Globe, Store } from 'lucide-react';
import { useRef, useState } from 'react';
import { Stars } from './Stars';
import { Clouds } from './Clouds';
import ImageViewer from './ImageViewer';
import Cards from './Cards';
import ExpandModal from './ExpandModal';
import OtherProject from './OtherProject';






function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewerData, setViewerData] = useState(null);
  const [aviso, setAviso] = useState("");

  const sobreMiRef = useRef(null);
  const ProyectoRef = useRef(null);
  const tecnoRef = useRef(null);

  function IconHero({ children, className = "", ...props }) {
    return (
      <div
        className={`p-2 rounded-full cursor-pointer transition hover:scale-110 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }



  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };



  const technologies = [
    { name: 'HTML', img: "src/assets/HTML.png", color: '#e34f26' },
    { name: 'CSS', img: "src/assets/CSS.png", color: '#1572b6' },
    { name: 'Javascript', img: "src/assets/Rectangle 3.png", color: '#f7df1e' },
    { name: 'React', img: "src/assets/Rectangle 3-3.png", color: '#61dafb' },
    { name: 'Node Js', img: "src/assets/Rectangle 3 (1).png", color: '#68a063' },
    { name: 'express', img: "src/assets/Rectangle 3-5.png", color: '#000000' },
    { name: 'Java', img: "src/assets/Rectangle 3-1.png", color: '#e76e07' },
    { name: 'Spring Boot', img: "src/assets/Rectangle 3-2.png", color: '#6db33f' },
    { name: 'JPA + Hibernate', img: "src/assets/Rectangle 3-4.png", color: '#59666c' },
    { name: 'Selenium', img: "src/assets/Rectangle 3-6.png", color: '#00b400' },
  ];


  const estadoStrings = {
    enLinea: "En Línea",
    finalizado: "Finalizado",
    preLanzamiento: "Pre-lanzamiento",
    entregadoCliente: "Entregado al cliente"
  };

  const projects = [
    {
      titulo: "Contrander APP",
      subtitle: "ERP interno de la cooperativa de transporte Cotrander",
      description: `El sistema permite el seguimiento detallado de rutas, tiempos de recorrido, conteo de pasajeros y descensos por vehículo, todo organizado por fecha. Además, se diseñó y desarrolló un módulo de generación deinformes de desempeño, tanto específicos como mensuales, para evaluar la eficiencia de cada ruta y vehículo.
                    Participé en el diseño del frontend (React) y el desarrollo del backend (Java con Spring Boot y JPA), garantizando una solución funcional, intuitiva y adaptable a las necesidades del cliente.`,
      estadoProyecto: estadoStrings.entregadoCliente,
      detallesDescripcion: "Actualmente el proyecto se encuentra en manos de la cooperativa, continuando su desarrollo",
      tags: ["React", "Java", "Spring Boot", "JPA + Hibernate", "MySQL", "Docker"],
      imagenes: [
        "src/assets/cotranderApp/Home.png",
        "src/assets/cotranderApp/Login.png",
        "src/assets/cotranderApp/personal ocnfig.png",
        "src/assets/cotranderApp/SubirMovilizacion.png",
        "src/assets/cotranderApp/Estadisticas.png"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/VictorMBonilla2/CotranderWeb", icon: Github, bg: "bg-gray-700" },
      ]
    },
    {
      titulo: "LinkChest",
      subtitle: "Organiza, recuerda y comparte enlaces con IA",
      description: `Extensión creada para aliviar la necesidad de un recordatorio de enlaces mas enfocado, facil de acceder, con una organización clara y sincronización en la nube`,
      estadoProyecto: estadoStrings.preLanzamiento,
      tags: ["React", "Vite", "Tailwind", "Node Js", "express", "mongoose", "MongoDB"],
      detallesDescripcion: "En busqueda de un hosting",
      imagenes: ["src/assets/link/00.png",
        "src/assets/link/0.png", "src/assets/link/1.png", "src/assets/link/2.png",
        "src/assets/link/3.png", "src/assets/link/4.png",
        "src/assets/link/5.png", "src/assets/link/6.png",

      ],
      links: [
        { label: "GitHub", url: "https://github.com/VictorMBonilla2/LinkChest", icon: Github, bg: "bg-gray-700" },
        { label: "Web", url: "https://site.com", icon: Globe, bg: "bg-green-600" },
        { label: "Store", url: "https://store.com", icon: Store, bg: "bg-purple-600" },
      ]
    },
    {
      titulo: "Gestor de estacionamiento",
      subtitle: "Software de gestión para estacionamientos de instituciones",
      description: `Este sistema fue desarrollado para gestionar de manera eficiente el estacionamiento de una institución, permitiendo controlar, organizar y monitorear los espacios disponibles según diferentes sectores. La plataforma ofrece una administración completa de los espacios asignados, facilitando tanto la gestión diaria como la configuración general del sistema.

Cuenta con múltiples perfiles de usuario Aprendiz, Gestor y Administrador, cada uno con permisos y funcionalidades específicas. Gracias a esta estructura de roles, el sistema garantiza un flujo de trabajo ordenado, seguro y adaptable a las necesidades operativas de la institución.

Además, incluye una sección de configuración del sistema que permite personalizar parámetros clave, mantener actualizada la información de los vehículos y personas, así como controlar el comportamiento general de la plataforma.
`,
      estadoProyecto: estadoStrings.finalizado,
      tags: ["HTML", "CSS", "JavaScript", "Java", "JSP", "JPA", "MySQL"],
      detallesDescripcion: "En busqueda de un hosting",
      imagenes: ["src/assets/Estacionamiento/Home.png", "src/assets/Estacionamiento/Home aprendiz.png",
        "src/assets/Estacionamiento/Historial.png",
        "src/assets/Estacionamiento/GestorVehiculo.png",
        "src/assets/Estacionamiento/EstacionamientoAlgunos.png",
        "src/assets/Estacionamiento/Estacionamiento libre.png",
        "src/assets/Estacionamiento/AjustarEspacio.png",
        "src/assets/Estacionamiento/ReportarEspacio.png",
        "src/assets/Estacionamiento/LiberarEspacio.png",
        "src/assets/Estacionamiento/InfoEspacio.png",
        "src/assets/Estacionamiento/Reportes.png",
        "src/assets/Estacionamiento/DetallesReporte.png",
        "src/assets/Estacionamiento/Perfil.png",
        "src/assets/Estacionamiento/Usuarios.png",
        "src/assets/Estacionamiento/Usuarios-New.png",
        "src/assets/Estacionamiento/Usuarios-Edit.png",
        "src/assets/Estacionamiento/Config Sitema.png",
        "src/assets/Estacionamiento/Config Sectores.png",
        "src/assets/Estacionamiento/Edit Documentos.png",
        "src/assets/Estacionamiento/Editar Vehiculos.png",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/VictorMBonilla2/JSP_proyecto_cascos", icon: Github, bg: "bg-gray-700" },
      ]
    },
  ];

  const otherProjects = []

  const copiarCorreo = (correo) => {
    navigator.clipboard.writeText(correo)
      .then(() => {
        // Mostrar aviso
        setAviso("Correo copiado al portapapeles");

        // Ocultar aviso después de 2s
        setTimeout(() => setAviso(""), 2000);
      })
      .catch(() => {
        setAviso("No se pudo copiar");
        setTimeout(() => setAviso(""), 2000);
      });
  };



  const handleViewImages = (indexImage, imageList) => {
    setViewerData({ indexImage, imageList });
  };
  const mostrarWebgrafia = false;

  return (
    <div className={`relative min-h-screen transition-colors duration-700 ${isDark ? 'bg-linear-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1435]' : 'bg-linear-to-br from-[#c1dcff] via-[#e0f2fe] to-[#c1dcff]'}`}>
      {isDark ? <Stars /> : <Clouds />}
      <header className={` relative w-full h-16 flex justify-end ${isDark ? 'bg-[#0a0e27]/70 border-b border-cyan-400/10' : 'bg-white/70 border-b border-blue-200/50'}`}>
        <nav className={`flex w-3/12 items-center justify-between pr-10 font-medium *:transition *:duration-150 *:hover:text-white ${isDark ? ' *:text-slate-200 *:hover:text-cyan-400' : '   *:text-slate-700 *:hover:text-blue-600'}`}>
          <ul onClick={() => scrollToSection(sobreMiRef)} >Sobre mi</ul>
          <ul onClick={() => scrollToSection(ProyectoRef)}>Proyectos</ul>
          <ul onClick={() => scrollToSection(tecnoRef)}>Tecnologías</ul>
        </nav>
      </header>
      {//isDark ? <Stars /> : <Clouds />
      }

      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-18 right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg 
        ${isDark ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/30' : 'bg-white/70 hover:bg-white/90 border border-blue-200'}`}>
        {isDark ? (<Sun className="w-6 h-6 text-amber-400" />) : (<Moon className="w-6 h-6 text-indigo-600" />)}
      </button>

      <main className="relative overflow-x-hidden overflow-y-hidden">

        <section className="flex mx-auto w-7xl justify-between items-center h-screen ">

          <div>
            <h1 className={`font-['Ubuntu:Bold',sans-serif] text-7xl lg:text-8xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Victor Bonilla
            </h1>
            <p className={`font-['Ubuntu:Regular',sans-serif] text-4xl lg:text-5xl ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              Fullstack Developer
            </p>

            <div className="flex gap-3 pt-4">
              <IconHero onClick={() => window.open("https://github.com/VictorMBonilla2", "_blank")}>
                <Github className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              </IconHero>
              <IconHero onClick={() => window.open("https://www.linkedin.com/in/victor-bonilla-7277a0374/", "_blank")}>
                <Linkedin className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              </IconHero>
              <IconHero>
                <div onClick={() => copiarCorreo("aguapanela23")}>
                  <Mail className={`w-6 h-6 cursor-pointer ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                </div>
              </IconHero>

            </div>
          </div>

          <div>
            <div className="w-120 h-120 bg-white rounded-full">
              <img src="src/assets/Coding_1_.svg" className="w-full h-full object-contain" />
            </div>
          </div>

        </section>

          {aviso && (
            <div
              className={`
                fixed bottom-4 right-4 z-50 px-4 py-2 rounded-lg shadow-xl 
                text-sm font-semibold transition-all duration-300
                animate-slide-in
                backdrop-blur-md

                ${isDark 
                  ? 'bg-cyan-950/80 text-cyan-200 border border-cyan-800/40' 
                  : 'bg-blue-100/90 text-blue-800 border border-blue-300'
                }
              `}
            >
              {aviso}
            </div>
          )}

        <section ref={sobreMiRef} id="about" className="  py-20 px-6">
          <div className="relative mx-auto max-w-6xl">
            <h2 className={`font-['Ubuntu:Medium',sans-serif] text-6xl text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'
              }`}>
              Sobre mi
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                <p>
                  Soy un desarrollador Full Stack con experiencia construyendo aplicaciones web modernas de extremo a extremo. Me enfoco en crear interfaces eficientes y accesibles, y en diseñar arquitecturas backend escalables, seguras y mantenibles.
                </p>
                <p>
                  Me interesa la experiencia de usuario, el rendimiento, las buenas prácticas y la mejora continua. Disfruto resolver problemas complejos, optimizar flujos y desarrollar productos que aporten valor real. Siempre estoy aprendiendo nuevas herramientas y patrones para mantenerme actualizado y mejorar como profesional.
                </p>
              </div>
              <div className={`rounded-2xl overflow-hidden ${isDark ? 'shadow-2xl shadow-cyan-500/10' : 'shadow-2xl shadow-blue-200/50'
                }`}>
                <img src="src/assets/codePicture.png" alt="Workspace" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section ref={ProyectoRef} id="projects" className="relative py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className={`font-['Ubuntu:Medium',sans-serif] text-6xl text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Proyectos
            </h2>
            <div class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              {projects.map((project, i) => (
                <Cards
                  key={i}
                  project={project}
                  isDark={isDark}
                  onExpand={() => setSelectedProject(project)}
                  onViewImages={handleViewImages}
                />
              ))}
            </div>
          </div>
        </section>
        {otherProjects.length > 0 &&
          <section className="relative py-20 px-6">
            <div className="container mx-auto max-w-5xl">
              <h2 className={`font-['Ubuntu:Medium',sans-serif] text-6xl text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                otros proyectos
              </h2>
              <div className="space-y-8">
                {otherProjects.map((project, index) => (
                  <div key={index} className="relative">

                    {index > 0 && (<div className={`absolute left-1/2 -top-8 w-px h-8 ${isDark ? 'bg-cyan-400/30' : 'bg-blue-300/50'}`} />)}

                    <OtherProject project={project} isDark={isDark}
                      onExpand={() => setSelectedProject(project)}
                      setViewerData={handleViewImages}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        }
        <section ref={tecnoRef} className="relative py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className={`font-['Ubuntu:Medium',sans-serif] text-6xl text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'
              }`}>
              Tecnologías
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl p-8 flex flex-col items-center gap-6 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-current ${isDark
                    ? 'bg-slate-800/50 backdrop-blur-sm shadow-lg shadow-cyan-500/5'
                    : 'bg-white shadow-lg shadow-blue-100/50'}`}
                  style={{
                    '--hover-color': tech.color,
                    color: tech.color
                  }} >
                  <div className={`w-48 h-48 rounded-2xl overflow-hidden flex items-center justify-center p-4 ${isDark ? 'bg-white' : 'bg-slate-50'}`}>
                    <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <p className={`font-['Ubuntu:Medium',sans-serif] text-2xl text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>




        {
          mostrarWebgrafia && (

            <section className="relative py-20 px-6">
              <div className="container mx-auto max-w-4xl">
                <h2 className={`font-['Ubuntu:Medium',sans-serif] text-6xl mb-8 
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Webgrafia
                </h2>
                <div className={`backdrop-blur-sm rounded-2xl p-8 
            ${isDark ? 'bg-slate-800/40 border border-cyan-400/10' : 'bg-white/60 border border-blue-200/50 shadow-lg'}`}>
                  <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Recursos y referencias utilizados en el desarrollo de proyectos...
                  </p>
                </div>
              </div>
            </section>
          )}
        <footer id="contact" className={`relative py-12 px-6 ${isDark ? 'border-t border-cyan-400/10' : 'border-t border-blue-200/50'}`}>
          <div className="container mx-auto text-center space-y-4">
            <div className="flex justify-center gap-6">
              <IconHero onClick={() => window.open("https://github.com/VictorMBonilla2", "_blank")}>
                <Github className={`w-6 h-6 transition-colors ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-blue-600'}`}/>
              </IconHero>
              <IconHero onClick={() => window.open("https://www.linkedin.com/in/victor-bonilla-7277a0374/", "_blank")}>
                <Linkedin className={`w-6 h-6 transition-colors ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-blue-600'}`}/>
              </IconHero>
              <IconHero>
                <div onClick={() => copiarCorreo("aguapanela23")}>
                  <Mail className={`w-6 h-6 cursor-pointer transition-colors ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-blue-600'}`}/>
                </div>
              </IconHero>
            </div>
            <p className={isDark ? 'text-slate-500' : 'text-slate-600'}>
            © 2025 VictorMBonilla2.
            </p>
          </div>
        </footer>

      </main>

      {/* Modal de imágenes */}
      {viewerData && (
        <ImageViewer
          indexImage={viewerData.indexImage}
          imageList={viewerData.imageList}
          onClose={() => setViewerData(null)}
        />
      )}

      {/* Expand modal */}
      {selectedProject && (
        <ExpandModal
          data={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDark={isDark}
          setViewerData={handleViewImages}
        />
      )}

    </div>
  )
}

export default App
