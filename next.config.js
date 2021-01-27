module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
  images: {
    domains: [
      "starrgate.s3.amazonaws.com",
      "res.cloudinary.com",
      "torre-media.s3-us-west-2.amazonaws.com",
    ],
  },
};
