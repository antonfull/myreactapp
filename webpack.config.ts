import * as webpack from 'webpack';
import * as path from 'path';
import {BuildWebpackConfiguration} from './config/build/BuildWebpackConfiguration';
import {buildEnv, BuildPaths} from './config/build/types/config';

export default (env: buildEnv) => {

    const paths:BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = BuildWebpackConfiguration({
        mode, paths, isDev, port: PORT,
    });
    return config;
};