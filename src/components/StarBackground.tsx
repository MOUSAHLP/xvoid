
import React, { useEffect, useRef } from "react";

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial setup
    setCanvasDimensions();
    
    // Create stars
    const stars: {x: number; y: number; radius: number; opacity: number; speed: number}[] = [];
    
    // Generate stars with reduced flashing/flickering
    const generateStars = () => {
      stars.length = 0; // Clear existing stars
      const density = window.innerWidth < 768 ? 50 : 100;
      
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.5 + 0.5, // Higher base opacity
          speed: Math.random() * 0.05 + 0.01  // Slower speed to reduce flashing
        });
      }
    };
    
    generateStars();
    
    // Animation
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Subtle opacity change to prevent harsh flickering
        star.opacity += Math.random() * 0.02 - 0.01;
        star.opacity = Math.max(0.3, Math.min(0.8, star.opacity));
        
        // Move stars
        star.y += star.speed;
        
        // Reset position if star moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    // Handle resize
    const handleResize = () => {
      setCanvasDimensions();
      generateStars();
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 bg-cosmic-dark"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default StarBackground;
