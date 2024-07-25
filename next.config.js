const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
