const withOffline = moduleExists("next-offline") ? require("next-offline") : {};
const withOptimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");
const nextConfig = {
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "networkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 31536000
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  webpack(config) {
    config.optimization.minimize;
    config.node = {
      fs: "empty"
    };
    return config;
  },
  target: "serverless"
};

module.exports = moduleExists("next-offline")
  ? withOffline(withOptimizedImages(withCSS(nextConfig)))
  : withOptimizedImages(withCSS(nextConfig));

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}
