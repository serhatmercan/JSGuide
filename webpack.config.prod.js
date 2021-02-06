const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    devtool: "cheap-source-map",
    entry: "./Tool.js",
    mode: "production",
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ],
    output: {
        filename: "[contenthash].js",
        path: path.resolve(__dirname, "assets", "scripts"),
        publicPath: "assets/scripts/"
    }
};