import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    email_test_app: `email_test_app@http://localhost:3010/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'component_test_app',
        remotes: remotes(isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Pricing': './pages/pricing.tsx',
          './Card': './pages/card.tsx',
        },
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
