const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: "./Tool.js",
    mode: "development",
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ],
    output: {
        filename: "Tool.js",
        path: path.resolve(__dirname, "assets", "scripts"),
        publicPath: "assets/scripts/"
    }
};