const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require("glob");

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const entryArr = glob.sync("**/module.ts");
const entryObj = {};
for(const item of entryArr) {
  const name = item.replace("src/", "");
  entryObj[`./${name.replace(".ts", '.js')}`] = `./${name}`;
}

module.exports = {
  target: 'node',
  context: resolve('src'),
  entry: entryObj,
  output: {
    path: resolve('dist'),
    filename: "[name]",
    libraryTarget: "amd"
  },
  externals: [
    function (context, request, callback) {
      var prefix = 'grafana/';
      if (request.indexOf(prefix) === 0) {
        return callback(null, request.substr(prefix.length));
      }
      callback();
    }
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: '**/*.json' },
      { from: 'img/**' },
      { from: '**/*.css' },
      { from: '**/*.svg' },
      { from: '**/*.eot' },
      { from: '**/*.ttf' },
      { from: '**/*.woff' },
      { from: '**/*.html' },
      { from: '**/imgs/**' },
    ]),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' },
      },
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"],
        exclude: [/node_modules/, /vendor/],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            useRelativePath: true,
            outputPath: "public/plugins/proj-taqnia-app/",
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/node_modules/],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", 'sass-loader'] // sass-loader not scss-loader
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loaders: ["raw-loader", 'less-loader']
      },
      {
        test: require.resolve('snapsvg'),
        use: 'imports-loader?this=>window,fix=>module.exports=0',
      }
    ]
  }
}
