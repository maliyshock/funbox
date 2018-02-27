var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/src-js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'eslint-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1, minimize: {autoprefixer: false} }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')(
                                    {
                                        'browsers': [
                                            '> 1%',
                                            'ie > 9'
                                        ]
                                    }
                                )
                            ]
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
}
