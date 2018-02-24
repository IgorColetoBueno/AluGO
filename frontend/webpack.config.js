const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 3000,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/jquery/dist/jquery.min.js',
            popper: 'modules/popper.js/dist/popper.min.css'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: 'popper'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },
        { test: /\.css$/, use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            },
            publicPath: "./public"
        }) },
        {
            test: /\.woff|\.woff2|\.ttf|\.eot|\.svg|\.png|.jpg*.*$/,
            loader:'file-loader'
        }]
    }
}