const path = require("path");
module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스  production
  devtool: "eval", //빠르게
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./client",
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
                  browsers: ["last 2 chrome versions"],
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};
