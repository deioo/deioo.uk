const ghpages = require('gh-pages')

ghpages.publish(
  'out',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:deioo/deioo.uk.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
