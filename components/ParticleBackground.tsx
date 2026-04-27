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
      color: { value: "#e2e8f0" },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "top",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      number: {
        density: { enable: true, width: 800, height: 800 },
        value: 50,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: { enable: true, speed: 1, sync: false },
      },
      size: { value: { min: 1.5, max: 4 } },
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