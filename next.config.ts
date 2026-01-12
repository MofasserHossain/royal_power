import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static export for cPanel hosting (SSG only, no SSR/ISR)
  output: 'export',

  // Add trailing slash for better cPanel compatibility
  trailingSlash: true,

  // Disable image optimization (not needed for static export)
  images: {
    unoptimized: true,
  },
}

export default nextConfig
