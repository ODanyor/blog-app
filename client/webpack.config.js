const path = require("path");
const HWP = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: "/node_modules",
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: "file-loader",
        exclude: "/node_modules",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
    ],
  },
  resolve: {
    // allows us to do absolute imports from "src"
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [new HWP({ template: path.join(__dirname, "/public/index.html") })],
};
