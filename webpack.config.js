const
webpack = require("webpack"),
path = require("path");
module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    output: {
        path: path.resolve(__dirname),
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "app"),
            path.resolve(__dirname, "public"),
            "node_modules"],
        alias: {
            Main: path.resolve(__dirname, "app/components/Main.jsx"),
            applicationStyles: path.resolve(__dirname, "app/styles/app.scss"),
            Nav: path.resolve(__dirname, "app/components/Nav.jsx"),
            About: path.resolve(__dirname, "app/components/About.jsx"),
            Timer: path.resolve(__dirname, "app/components/Timer.jsx"),
            Countdown: path.resolve(__dirname, "app/components/Countdown.jsx"),
            Clock: path.resolve(__dirname, "app/components/Clock.jsx"),
            Controls: path.resolve(__dirname, "app/components/Controls.jsx"),
            CountdownForm: path.resolve(__dirname, "app/components/CountdownForm.jsx")
        },
        extensions: [" ", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: [
                                path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devtool: "cheap-module-eval-source-map"
};
