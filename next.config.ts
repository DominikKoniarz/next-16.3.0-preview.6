import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    typedRoutes: true,

    reactCompiler: true,
    experimental: {
        // use the Rust version, instead of the OG Babel one
        turbopackRustReactCompiler: true,
    },
};

export default nextConfig;
