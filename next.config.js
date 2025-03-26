const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? "/alphalabs" : "",
    // assetPrefix: isProd ? "/alphalabs/out/" : "",
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;
