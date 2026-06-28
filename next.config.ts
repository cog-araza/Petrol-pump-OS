import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A separate directory avoids Windows sync-client locks on stale build files.
  distDir: ".next-webpack",
};

export default nextConfig;
