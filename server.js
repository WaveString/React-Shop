require('localenv');
const __DEVELOPMENT__ = process.env.NODE_ENV === 'development';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./routes/api');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));

if (__DEVELOPMENT__) {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.dev');
    const compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/api', api);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/build/index.html`));


app.listen(process.env.PORT, () => {
    console.log(`listening on *: ${process.env.PORT}`);
});
