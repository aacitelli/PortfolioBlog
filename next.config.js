module.exports = {
  target: 'serverless',
  webpack: function (config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html',
        permanent: true,
      },
      {
        source: '/5912hw2',
        destination: '/5912.html',
        permanent: true,
      },
    ]
  },
  assetPrefix: ".",
}