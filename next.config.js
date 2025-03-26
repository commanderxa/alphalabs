const isProd = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV === 'production');
console.log(process.env.NODE_ENV);

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? "/alphalabs" : "",
    // assetPrefix: isProd ? "/alphalabs/" : "",
    images: {
        unoptimized: true,
        // loader: 'default',
        // path: '/alphalabs/_next/image/',
    }
};

module.exports = nextConfig;
