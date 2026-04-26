"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = {
    background: {
      color: { value: "transparent" },
    },
    particles: {
      color: { value: "#60a5fa" },
      links: {
        color: "#60a5fa",
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        density: { enable: true, width: 800, height: 800 },
        value: 100,
      },
      opacity: { value: 0.9 },
      size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      className="absolute inset-0 h-full w-full"
    />
  );
}