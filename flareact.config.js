const { join } = require('path')

module.exports = {
    webpack: (config, { dev, isWorker, defaultLoaders, webpack }) => {
        config.resolve.alias = {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
            'react-render-to-string': 'preact-render-to-string',
            '@pages': join(__dirname, 'pages'),
            '@layouts': join(__dirname, 'src/layouts'),
            '@components': join(__dirname, 'src/components'),
            '@models': join(__dirname, 'src/models'),
            '@styles': join(__dirname, 'styles')
        }

        return config
    }
}
