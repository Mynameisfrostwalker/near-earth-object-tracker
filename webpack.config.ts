import * as path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const devServer: DevServerConfiguration = {
  static: './dist',
};

const config: Configuration = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.ts',
    render: './src/scripts/render.ts',
    fetchData: './src/scripts/fetchData.ts',
    utilities: './src/scripts/utilities.ts',
    display: './src/scripts/display.ts',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif|)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {                                                                        
        test: /\.json$/i,                                                       
        type: 'asset/resource'                                 
      },
      {                                                                        
        test: /\.(mp3|ogg)$/i,                                                       
        type: 'asset/resource'                                 
     },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
        template: './src/index.html',
        favicon: "./src/assets/favicon.ico",
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer,
};

export default config;
