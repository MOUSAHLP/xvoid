
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
    
    // Generate stars with no flashing/flickering
    const generateStars = () => {
      stars.length = 0; // Clear existing stars
      const density = window.innerWidth < 768 ? 50 : 100;
      
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.3, // More consistent size
          opacity: Math.random() * 0.3 + 0.6, // Higher base opacity
          speed: Math.random() * 0.03 + 0.01  // Slower speed to reduce flashing
        });
      }
    };
    
    generateStars();
    
    // Animation
    let animationFrameId: number;
    let lastTime = 0;
    const interval = 50; // Only update every 50ms to reduce flickering
    
    const render = (timestamp: number) => {
      // Only update at certain intervals to reduce flashing
      if (timestamp - lastTime > interval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Fill the background with dark color to prevent white flashes
        ctx.fillStyle = "#030014"; // cosmic-dark color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw stars with fixed opacity to prevent flashing
        stars.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();
          
          // Extremely subtle opacity change (almost none)
          star.opacity += Math.random() * 0.004 - 0.002; 
          star.opacity = Math.max(0.6, Math.min(0.8, star.opacity)); // Very narrow opacity range
          
          // Move stars
          star.y += star.speed;
          
          // Reset position if star moves off screen
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });
        
        lastTime = timestamp;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    animationFrameId = requestAnimationFrame(render);
    
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
      className="fixed top-0 left-0 w-full h-full -z-10 bg-cosmic-dark"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default StarBackground;
