const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        home: './index'
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["transform-react-jsx", "transform-object-rest-spread"],
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'ts-loader'],
            },
            // {
            //     test: /\.tsx?$/,
            //     loader: "awesome-typescript-loader",
            //     options: {
            //         useCache: true,
            //         //useBabel: true,
            //         // babelCore: "/node_modules"
            //     }
            // },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            camelCase: true,
                            import: true,
                            url: true
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new CheckerPlugin()
    ],

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDom"
    // },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9090,
        historyApiFallback: true
    },

    watch: true
};
