const webpack = require('webpack');
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  //define an entry point

  entry: {
    app: './src/index.js',
    // bootstrap: bootstrapConfig
  },

  //define output

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',

    // path: './dist',
    // filename: 'bundle.js'
  },
    devtool: 'source-map',

  module: {

    rules: [
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        },
      { test: /\.js/, use: 'imports-loader?define=>false' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      }
    ],
  },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'TweenLite': 'gsap/src/minified/TweenLite.min.js',
            'TweenMax': 'gsap/src/minified/TweenMax.min.js',
            'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
            'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
            'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
            'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
            'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
        }
    },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
      // new BundleAnalyzerPlugin()
  ],
};
