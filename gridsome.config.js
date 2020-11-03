// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dev Case',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url:
        'https://api-eu-central-1.graphcms.com/v2/ckg8ltpi14f4a01yy7gbfeoiu/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes'
      }
    }
  ]
}
