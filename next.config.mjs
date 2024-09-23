/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: '',
    trailingSlash: true,
    reactStrictMode: true
};

export default nextConfig;
