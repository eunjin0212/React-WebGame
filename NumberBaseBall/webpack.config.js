const path = require("path");
const port = process.env.PORT || 3000;
// 배포모드 : process.env.NODE_ENV = "production";

module.exports = {
  name: "number-baseball-dev",
  mode: "development", //실서비스 : production
  devtool: "eval", //실서비스 : hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
          ],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
};
