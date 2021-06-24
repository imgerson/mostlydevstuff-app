const path = require('path');

module.exports = {
  plugins: {
    presets: [
      '@gasket/nextjs'
    ],
    add: [
      '@gasket/config',
      '@gasket/git',
      '@gasket/lint',
      '@gasket/manifest',
      '@gasket/log',
      '@gasket/service-worker',
      '@gasket/swagger',
      '@gasket/webpack',
      '@gasket/workbox',
      '@gasket/jest'
    ]
  },
  swagger: {
    jsdoc: {
      definition: {
        info: {
          title: 'mostlydevstuff',
          version: '1.0.0'
        }
      },
      apis: [
        './routes/*'
      ]
    }
  },
  nextConfig: {
    future: {
      webpack5: true
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    }
  }
};
