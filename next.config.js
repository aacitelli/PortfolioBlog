module.exports = {
  target: 'serverless',
  webpack: function (config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html',
        permanent: true,
      },
    ]
  },
  assetPrefix: ".",
}