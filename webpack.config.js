var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/i, use:'style-loader'},
            {test : /\.css$/i, loader: require.resolve('css-loader'), options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]___[hash:base64:5]"  
              }}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}
