const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? "/alphalabs" : "",
    assetPrefix: isProd ? "/alphalabs" : "",
};

module.exports = nextConfig;
