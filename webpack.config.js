const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const optimize = () => {
  const config = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  };
  if (!isDev) return config;
  return {};
};

const modules = () => {
  const prod = {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  "useBuiltIns": "usage", // alternative mode: "entry"
                  "corejs": 3, // default would be 2
                  "targets": "> 0.25%, not dead"
                }
              ],
              ["@babel/preset-react"],
            ],
              plugins: [
                [
                  'babel-plugin-styled-components',
                  {
                    "displayName": false,
                    "pure": true,
                    "minify": true,
                    "transpileTemplateLiterals": true
                  }
                ]
              ]
          },
        },
      },
    ],
  };
  const dev = {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  };
  if (!isDev) {
    return prod;
  }
  return dev;
};

module.exports = {
  target: "web",
  devtool: isDev && "cheap-module-source-map",
  devServer: {
    port: 5000,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: optimize(),
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: modules(),
};
