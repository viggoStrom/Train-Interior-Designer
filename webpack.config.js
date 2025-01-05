const path = require("path");

module.exports = {
    entry: "./scripts/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist", "script")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};