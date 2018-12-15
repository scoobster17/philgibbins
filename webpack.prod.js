const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [

  // client-side CSS & assets
  {
    mode: 'production',
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
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'sass-loader', options: { minimize: true } },
          ],
        },
        { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=../fonts/[name].[ext]' },
        { test: /\.(gif|svg|jpg|png)$/, loader: "file-loader" },
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin({ filename: '[name].css', }),
      new CopyWebpackPlugin([{ from: 'src/app/assets/images', to: '../assets/images' }]),
    ]
  },

  // client-side javascript
  {
    mode: 'production',
    devtool: 'source-map',
    entry: { main: './src/app/js/index.tsx', },
    output: { filename: '[name].js', path: __dirname + '/public/js' },
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
    },
    plugins: [new CopyWebpackPlugin([{ from: 'src/server/rendering-server/views', to: '../../dist/views' }])]
  },
];
