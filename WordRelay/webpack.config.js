const path = require("path");
module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스  production
  devtool: "eval", //빠르게
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client.jsx"],
  }, //입력
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
                targets: {
                  browsers: [">1% in KR"],
                },
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
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};
