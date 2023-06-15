
export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
}

export  interface buildEnv{
    port: number,
    mode: BuildMode,
}

export interface buildOptions{
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
}