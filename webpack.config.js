const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 9000,
        compress: true,
    },
    //tell webpack where to look for source files
    context: path.resolve(__dirname, 'src'),
    entry: {
        //each entrypoint results in an output file
        //so this results in an output file called 'main.js' which is built from src/index.ts
        main: './index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        // library means that the exports from the entry file can be accessed from outside, in this case from the global scope as window.TestApp
        library: { type: 'umd', name: 'StarScopeCall' },
        publicPath: '/',
    },
    devtool: false,
    mode: 'development',
    // prevent webpack from bundling these imports (alt1 libs can use them when running in nodejs)
    externals: ['sharp', 'canvas', 'electron/common'],
    experiments: {
        asyncWebAssembly: true,
    },
    resolve: {
        extensions: ['.wasm', '.tsx', '.ts', '.mjs', '.jsx', '.js'],
    },
    module: {
        // The rules section tells webpack what to do with different file types when you import them from js/ts
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // type:"asset" means that webpack copies the file and gives you an url to them when you import them from js
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/,
                type: 'asset/resource',
                generator: { filename: '[base]' },
            },
            {
                test: /\.(html|json)$/,
                type: 'asset/resource',
                generator: { filename: '[base]' },
            },
            // file types useful for writing alt1 apps, make sure these two loader come after any other json or png loaders, otherwise they will be ignored
            {
                test: /\.data\.png$/,
                loader: 'alt1/imagedata-loader',
                type: 'javascript/auto',
            },
            { test: /\.fontmeta.json/, loader: 'alt1/font-loader' },
            {
                test: /\.wasm$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpg|jpeg|gif|bin)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: '../node_modules/tesseract.js/dist/worker.min.js',
                    to: 'tesseract/',
                },
                {
                    from: '../node_modules/tesseract.js/dist/worker.min.js.map',
                    to: 'tesseract/',
                },
                {
                    from: '../node_modules/tesseract.js-core/tesseract-core.wasm.js',
                    to: 'tesseract/',
                },
                {
                    from: '../public/tesseract_data/eng.traineddata.gz',
                    to: 'tesseract/',
                },
            ],
        }),
    ],
};
