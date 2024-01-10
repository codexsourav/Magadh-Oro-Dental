/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        unoptimized: true,
        remotePatterns: [
            {
                hostname: "**",
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
