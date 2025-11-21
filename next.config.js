/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better development experience
    reactStrictMode: true,

    // Optimize images (for future use)
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },

    // Enable compression for faster responses
    compress: true,

    // Compiler optimizations
    compiler: {
        // Remove console.logs in production
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Experimental features for better performance
    experimental: {
        // Optimize package imports to reduce bundle size
        optimizePackageImports: [
            'lucide-react',
            'framer-motion',
            '@radix-ui/react-accordion',
            '@radix-ui/react-slot',
        ],
    },
};

module.exports = nextConfig;
