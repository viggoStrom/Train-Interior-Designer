const path = require("path");

module.exports = {
    entry: "./scripts/main.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist", "script")
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ]
    }
};