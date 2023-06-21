import webpack from 'webpack';
import {buildOptions} from './types/config';
import {buildCssLoaders} from "./loaders/buildCssLoaders";

export function buildLoaders({isDev} : buildOptions) : webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [ typescriptLoader, cssLoader, svgLoader, fileLoader];
}