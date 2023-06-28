/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP']
    }
}

module.exports = nextConfig
