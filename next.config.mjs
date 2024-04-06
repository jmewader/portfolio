/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
};

export default {
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    }, );

    return config;
  },
};


