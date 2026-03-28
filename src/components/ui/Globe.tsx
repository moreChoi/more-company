"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    // We ensure the canvas is resized to 600x600 for the core simulation
    if (!canvasRef.current) return;

    const options: any = {
      devicePixelRatio: 2,
      width: 600 * 2, // Double width for Retina displays
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1, // dark mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2],
      markerColor: [0.1, 0.6, 1], // bright blue
      glowColor: [0.1, 0.2, 0.6], // subtle blue glow
      markers: [
        { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
        { location: [37.5665, 126.9780], size: 0.08 }, // Seoul
        { location: [40.7128, -74.0060], size: 0.08 }, // NY
        { location: [51.5074, -0.1278], size: 0.08 }, // London
      ],
      onRender: (state: Record<string, any>) => {
        // Called on every animation frame.
        state.phi = phi;
        phi += 0.003; // rotation speed
      },
    };

    const globe = createGlobe(canvasRef.current, options);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className} pointer-events-none`}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1/1",
        }}
      />
    </div>
  );
}
