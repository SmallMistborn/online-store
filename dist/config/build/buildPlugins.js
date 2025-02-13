import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
export function buildPlugins(_a) {
    var mode = _a.mode, paths = _a.paths;
    var isDev = mode === 'development';
    var isProd = mode === 'production';
    var plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }
    return plugins;
}
