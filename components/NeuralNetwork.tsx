"use client";

import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { useCallback } from "react";

const NeuralNetwork = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#00ff99" },
          links: {
            enable: true,
            color: "#00ff99",
            distance: 150,
          },
          move: { enable: true, speed: 1.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // ✅ Cursor links with nearby dots
            onClick: { enable: true, mode: "repulse" }, // Optional click effect
          },
          modes: {
            grab: {
              distance: 180, // ✅ Connects particles near the cursor
              links: { opacity: 0.8, color: "#00ff99" },
            },
            repulse: { distance: 120, duration: 0.3 }, // Pushes away on click
          },
        },
      }}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

export default NeuralNetwork;
