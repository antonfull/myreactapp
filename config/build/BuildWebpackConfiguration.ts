import path from 'path';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildReslovers} from './buildReslovers';
import {buildOptions} from './types/config';
import webpack from 'webpack';
import {buildDevServer} from './buildDevServer';

export function BuildWebpackConfiguration(options: buildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js', //здесь указываем, как будет называться главный файл после бандлa
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildReslovers(options),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}