/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/alphalabs" : "";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

export default nextConfig;
