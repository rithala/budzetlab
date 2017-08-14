const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/src/index.html',
    filename: 'index.html',
    inject: 'body'
});



module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './client/src/index.jsx'
    ],
    devtool: 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, './client/dst'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ]
}