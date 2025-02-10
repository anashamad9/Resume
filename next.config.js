const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/anashamad-portfolio" : "",
  basePath: process.env.NODE_ENV === "production" ? "/anashamad-portfolio" : "",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    })
    return config
  },
}

module.exports = nextConfig

