// yarn rollup -i ".\dist\main.js" -o ".\dist\main.js" -f iife -p @rollup/plugin-commonjs -p @rollup/plugin-node-resolve --compact 
export default {
    input: "./dist/main.js",
    output: {
        file: "./dist/main.js",
        format: "iife",
        name: "bundledMain",
    },
    plugins: [
        require("@rollup/plugin-node-resolve").nodeResolve(),
        require("@rollup/plugin-commonjs")(),
        require("@rollup/plugin-terser")(),
    ],
}