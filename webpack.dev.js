const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [

  // client-side CSS & assets
  {
    mode: 'development',
    devtool: 'source-map',
    entry: { 'index': './src/app/css/index.scss' },
    output: { path: __dirname + '/public/css' },
    resolve: { extensions: ['.scss', '.css', '.js'] },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        },
        { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=../fonts/[name].[ext]' },
        { test: /\.(gif|svg|jpg|png)$/, loader: "file-loader" },
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin({ filename: '[name].css' }),
      new CopyWebpackPlugin([
        { from: 'src/app/assets/images', to: '../assets/images' },
        { from: 'src/server/rendering-server/views', to: '../../dist/views' },
      ]),
    ]
  },

  // client-side javascript
  {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/app/js/index.tsx',
    output: { filename: 'main.js', path: __dirname + '/public/js' },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: { configFileName: './src/app/tsconfig.json' },
        },
        { test: /\.jsx?$/, enforce: 'pre', loader: 'source-map-loader' }
      ]
    }
  },
];
