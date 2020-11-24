const { fs } = require('fs');
const path = require('path');


 module.exports = {
    // define entry file and output
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    devServer: {
        port: 3002,
        open: "Google Chrome",
        historyApiFallback: true
      },
    // define babel loader
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
              },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ],
      
   },
};