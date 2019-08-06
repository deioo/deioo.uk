const ghpages = require('gh-pages')

ghpages.publish('out', () => {
  console.log('Deploy Complete!')
})
