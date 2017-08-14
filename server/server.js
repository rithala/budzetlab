const express = require('express');
const port = (process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.static('./public/dst'));

if (!isProduction) {
    addDevServer();
}

app.listen(port, () => console.log(`server listening on http://localhost:${port}`));


function addDevServer() {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('./../webpack.config.js')
    const compiler = webpack(config)

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));
}

module.exports = app;