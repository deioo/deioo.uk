module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/deioo.uk' : '',
}
