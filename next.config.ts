import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@tsparticles/react", "@tsparticles/slim", "@tsparticles/engine"],
};

export default nextConfig;
