import { useEffect, useState } from 'react';


export function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      
      // Estrellas grandes (brillantes)
      for (let i = 0; i < 30; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 2,
          duration: Math.random() * 2 + 2,
          delay: Math.random() * 3,
          opacity: Math.random() * 0.5 + 0.5,
        });
      }
      
      // Estrellas medianas
      for (let i = 30; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 4,
          opacity: Math.random() * 0.4 + 0.3,
        });
      }
      
      // Estrellas pequeñas (tenues)
      for (let i = 100; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1 + 0.5,
          duration: Math.random() * 4 + 3,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.8})`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
