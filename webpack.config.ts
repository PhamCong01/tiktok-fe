import {Configuration} from 'webpack';

const config: Configuration = {
  mode: 'development',
  module: {
    rules: [
        {
          test: /\.(png|jpe?g|gif|jp2|webp)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default config;