import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

const SpaceTravelBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>(0);
  const speedRef = useRef<number>(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create stars
    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < 400; i++) {
        stars.push({
          x: Math.random() * canvas.width * 2 - canvas.width,
          y: Math.random() * canvas.height * 2 - canvas.height,
          z: Math.random() * 1000 + 50,
          size: Math.random() * 1.5 + 0.5,
          color: i % 100 === 0 ? 
            `rgb(${157 + Math.random() * 98}, ${Math.random() * 100}, ${255})` : // Purple stars
            i % 50 === 0 ? 
            `rgb(0, ${Math.floor(240 + Math.random() * 15)}, 255)` :
            `rgb(255, 255, 255)`
        });
      }
      starsRef.current = stars;
    };

    createStars();

    // Animate stars
    const animate = () => {
      // Use a solid background color instead of fade
      ctx.fillStyle = "rgb(10, 10, 31)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw and update stars
      starsRef.current.forEach((star) => {
        // Update star position
        star.z -= speedRef.current;
        
        // If star is too close, reset it far away
         if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width * 2 - canvas.width;
          star.y = Math.random() * canvas.height * 2 - canvas.height;
        }
        
        // Calculate projected position
        const factor = 200 / star.z;
        const x = centerX + star.x * factor;
        const y = centerY + star.y * factor;
        
        // Only draw if star is within canvas
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          // Size and opacity based on distance
          const size = Math.max(0.5, star.size * factor * 2);
          const opacity = Math.min(0.8, factor * 2);
          
          // Draw star
          ctx.beginPath();
          ctx.fillStyle = star.color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
          
          // Larger stars get a glow effect
          if (size > 1.5) {
            ctx.shadowBlur = size * 1.5;
            ctx.shadowColor = star.color;
          } else {
            ctx.shadowBlur = 0;
          }
          
          // Draw streaks for faster stars
          if (factor > 0.8) {
            const tailLength = Math.min(15, factor * 8);
            const dx = (centerX - x) / 50;
            const dy = (centerY - y) / 50;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + dx * tailLength, y + dy * tailLength);
            ctx.strokeStyle = star.color.replace('rgb', 'rgba').replace(')', `, ${opacity * 0.3})`);
            ctx.lineWidth = size / 2;
            ctx.stroke();
          }
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // Occasional shooting star
      if (Math.random() < 0.01) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height / 3;
        const length = 50 + Math.random() * 100;
        const angle = Math.PI / 4 + Math.random() * Math.PI / 2;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(
          startX + Math.cos(angle) * length,
          startY + Math.sin(angle) * length
        );
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00F0FF";
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-cosmic-dark/50 to-transparent opacity-30"></div>
    </>
  );
};

export default SpaceTravelBackground;
