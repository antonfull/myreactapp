import webpack from "webpack";
import {buildOptions} from "./types/config";
import path from "path";

export function buildReslovers(options: buildOptions): webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {}
    };
}