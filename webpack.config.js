const path = require('path');

module.exports = {
    entry: './contentScript.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // Change this to 'production' when ready
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    externals: {
        // Uncomment this if you need axios externally, but it's better to use the local version
        // axios: 'axios'
    }
};
