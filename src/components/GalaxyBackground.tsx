import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  speed: number;
  color: string;
  twinklePhase: number;
}

const STAR_COLORS = ["#ffffff", "#c084fc", "#93c5fd", "#e0e7ff", "#f472b6", "#67e8f9"];

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    // Create stars
    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      const count = Math.max(180, Math.floor((width * height) / 3800));
      for (let i = 0; i < count; i++) {
        const size = Math.random() < 0.85 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.5 + 1.5;
        const baseAlpha = Math.random() * 0.7 + 0.2;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          baseAlpha,
          alpha: baseAlpha,
          speed: Math.random() * 0.03 + 0.01,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initStars();

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Deep Space Base
      const bgGradient = ctx.createRadialGradient(
        width * 0.3,
        height * 0.3,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.9
      );
      bgGradient.addColorStop(0, "#0e0720");
      bgGradient.addColorStop(0.35, "#080314");
      bgGradient.addColorStop(0.7, "#04010a");
      bgGradient.addColorStop(1, "#020005");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Cosmic Nebula Cloud 1 (Purple / Violet)
      const nebula1 = ctx.createRadialGradient(
        width * 0.2 + Math.sin(time * 0.2) * 50,
        height * 0.25 + Math.cos(time * 0.2) * 40,
        20,
        width * 0.2,
        height * 0.25,
        Math.min(width, height) * 0.55
      );
      nebula1.addColorStop(0, "rgba(112, 26, 117, 0.22)");
      nebula1.addColorStop(0.4, "rgba(76, 29, 149, 0.14)");
      nebula1.addColorStop(0.8, "rgba(30, 27, 75, 0.06)");
      nebula1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      // Cosmic Nebula Cloud 2 (Deep Indigo / Cyan stardust)
      const nebula2 = ctx.createRadialGradient(
        width * 0.8 + Math.cos(time * 0.15) * 60,
        height * 0.75 + Math.sin(time * 0.15) * 50,
        20,
        width * 0.8,
        height * 0.75,
        Math.min(width, height) * 0.6
      );
      nebula2.addColorStop(0, "rgba(30, 58, 138, 0.18)");
      nebula2.addColorStop(0.4, "rgba(88, 28, 135, 0.12)");
      nebula2.addColorStop(0.8, "rgba(15, 23, 42, 0.05)");
      nebula2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // Draw and animate stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.speed;
        const currentAlpha = Math.max(
          0.1,
          Math.min(1, star.baseAlpha + Math.sin(star.twinklePhase) * 0.35)
        );

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowBlur = star.size > 2 ? 8 : 4;
        ctx.shadowColor = star.color;
        ctx.fill();

        // Slow subtle drift
        star.y -= 0.1;
        if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default GalaxyBackground;
