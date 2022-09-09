const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js'
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
		compress: true,
        historyApiFallback: true,
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

const devMod = {
    mode: 'development',
    devtool: 'inline-source-map'
}

const prodMod = {
    mode: 'production'
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
		return merge([
			common,
			devMod
		])
	} else if (argv.mode === 'production') {
		return merge([
			common,
			prodMod
		])
	}
}
