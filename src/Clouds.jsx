import { useEffect, useState } from 'react';

export function Clouds() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const generateClouds = () => {
      const newClouds = [];
      for (let i = 0; i < 12; i++) {
        newClouds.push({
          id: i,
          x: Math.random() * 120 - 10, // Start some clouds off-screen
          y: Math.random() * 70,
          scale: Math.random() * 0.6 + 0.4,
          duration: Math.random() * 60 + 40,
          delay: Math.random() * 20,
          opacity: Math.random() * 0.4 + 0.3,
        });
      }
      setClouds(newClouds);
    };

    generateClouds();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Sun */}
      <div className="absolute top-16 right-24 w-40 h-40 rounded-full bg-linear-to-br from-amber-300 to-orange-400 shadow-2xl shadow-amber-300/50 animate-pulse-slow">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-yellow-200 to-transparent opacity-50 animate-pulse" />
      </div>
      
      {/* Sun rays */}
      <div className="absolute top-16 right-24 w-40 h-40">
        <div className="absolute inset-0 animate-spin-slow">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-24 bg-linear-to-t from-amber-300/40 to-transparent"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                transformOrigin: 'center',
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute animate-float"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            transform: `scale(${cloud.scale})`,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
            opacity: cloud.opacity,
          }}
        >
          <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cloud shape with gradient */}
            <defs>
              <linearGradient id={`cloudGradient${cloud.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" stopColor="white" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <ellipse cx="35" cy="45" rx="30" ry="24" fill={`url(#cloudGradient${cloud.id})`} />
            <ellipse cx="60" cy="32" rx="36" ry="28" fill={`url(#cloudGradient${cloud.id})`} />
            <ellipse cx="90" cy="40" rx="32" ry="26" fill={`url(#cloudGradient${cloud.id})`} />
            <ellipse cx="110" cy="48" rx="26" ry="22" fill={`url(#cloudGradient${cloud.id})`} />
          </svg>
        </div>
      ))}
      
      <style>{`
        @keyframes float {
          0% { transform: translateX(-20vw) translateY(0px) scale(var(--scale, 1)); }
          50% { transform: translateX(60vw) translateY(-10px) scale(var(--scale, 1)); }
          100% { transform: translateX(120vw) translateY(0px) scale(var(--scale, 1)); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}