const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './index.jsx',
    ],
    devServer: {
        port: 8081,
        historyApiFallback: true,
    },
    output: {
        filename: 'public/bundle.js',
        publicPath: '',
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                include: [
                    path.resolve(__dirname, 'lib/components'),
                ],
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname,
            },
        ],
    },
};
