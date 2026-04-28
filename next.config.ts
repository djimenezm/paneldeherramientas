import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      // The site targets modern browsers, so avoid shipping Next's module polyfills.
      '../build/polyfills/polyfill-module': './lib/no-browser-polyfills.ts',
      '../build/polyfills/polyfill-module.js': './lib/no-browser-polyfills.ts',
      'next/dist/build/polyfills/polyfill-module': './lib/no-browser-polyfills.ts',
      'next/dist/build/polyfills/polyfill-module.js': './lib/no-browser-polyfills.ts',
    },
  },
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
