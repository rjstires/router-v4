const webpack = require('webpack');

module.exports = {
    asyncChunks: new webpack.optimize.CommonsChunkPlugin({
        async: true,
        minChunks: ({ resource }, count) => {
            return /node_modules/.test(resource) && count > 2;
        }
    })
};
