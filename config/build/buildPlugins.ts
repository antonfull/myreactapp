import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import {buildOptions} from './types/config';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins(options: buildOptions): webpack.WebpackPluginInstance[] {
    const {paths, isDev} = options;

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        isDev && new ReactRefreshPlugin(),
        isDev && new BundleAnalyzerPlugin({
            openAnalyzer: false,
        })
    ];
}