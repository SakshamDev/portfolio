"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  color: string;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Parallax mouse position
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let scrollY = window.scrollY;

    const isMobile = width < 768;
    const nodeCount = isMobile ? 26 : 52;
    const connectionDist = isMobile ? 95 : 135;

    const colors = [
      "rgba(245, 166, 35, 0.7)",  // Amber Gold
      "rgba(16, 185, 129, 0.45)", // Emerald
      "rgba(161, 161, 170, 0.3)", // Zinc secondary
    ];

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 1.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const pulses: Pulse[] = [];
    const maxPulses = isMobile ? 4 : 8;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      // Lerp mouse for ultra-smooth parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle parallax camera shift
      const parallaxX = (mouseX - width / 2) * 0.02;
      const parallaxY = (mouseY - height / 2) * 0.02 - (scrollY * 0.03) % height;

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Move
        a.x += a.vx;
        a.y += a.vy;

        // Wrap boundaries
        if (a.x < -20) a.x = width + 20;
        if (a.x > width + 20) a.x = -20;
        if (a.y < -20) a.y = height + 20;
        if (a.y > height + 20) a.y = -20;

        const posX = a.x + parallaxX;
        const posY = ((a.y + parallaxY) % height + height) % height;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const bPosX = b.x + parallaxX;
          const bPosY = ((b.y + parallaxY) % height + height) % height;

          const dx = posX - bPosX;
          const dy = posY - bPosY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 166, 35, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(posX, posY);
            ctx.lineTo(bPosX, bPosY);
            ctx.stroke();

            // Randomly spawn pulses along valid connections
            if (pulses.length < maxPulses && Math.random() < 0.003) {
              pulses.push({
                fromNode: i,
                toNode: j,
                progress: 0,
                speed: Math.random() * 0.015 + 0.01,
              });
            }
          }
        }

        // Draw Node
        ctx.beginPath();
        ctx.arc(posX, posY, a.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = a.color;
        ctx.fill();
      }

      // Draw and update active pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const nodeA = nodes[pulse.fromNode];
        const nodeB = nodes[pulse.toNode];
        if (!nodeA || !nodeB) {
          pulses.splice(p, 1);
          continue;
        }

        const ax = nodeA.x + parallaxX;
        const ay = ((nodeA.y + parallaxY) % height + height) % height;
        const bx = nodeB.x + parallaxX;
        const by = ((nodeB.y + parallaxY) % height + height) % height;

        const pulseX = ax + (bx - ax) * pulse.progress;
        const pulseY = ay + (by - ay) * pulse.progress;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#F5A623";
        ctx.shadowColor = "#F5A623";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="neural-canvas"
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
}
