module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  rewrites: async () => [
    {source: '/', destination: '/pages/api/static/index.js'},
  ],
}

/*
async redirects() {
  return [
    {
      source: '/',
      destination: '/index.html',
      permanent: true,
    },
  ]
},
*/
