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
                test: /\.(scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
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
