
module.exports = {
    entry: "./тест.яс",
    output: {
        path: __dirname,
        filename: "result.js"
    },
    module: {
        loaders: [
            { test: /\.яс$/, loader: "pycckuu" }
        ]
    }
};