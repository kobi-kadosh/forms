var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __STAGE__: JSON.stringify(process.env.STAGE),
  __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
});

var resolverPlugin = new webpack.ResolverPlugin(
  new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
);

// TODO: not working
var htmlPlugin = new HtmlWebpackPlugin({
  template: 'app/index.html', // Load a custom template
  inject: true, // Inject all scripts into the body
  //hash: true,
  //minify: false,
  filename: '.tmp/index_bundle.html'
});

module.exports = {
  devtool: 'sourcemap',
  context: __dirname + "/app",
  entry: './scripts/app.js',
  output: {
    path:  ".wb",
    filename: 'bundle-[hash].js',
    publicPath: '/scripts'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  //resolve: {
  //  // you can now require('file') instead of require('file.coffee')
  //  extensions: ['', '.js', '.json'],
  //  root: [path.join(__dirname, "bower_components")]
  //},
  plugins: [
    definePlugin,
    resolverPlugin
  ]
}
