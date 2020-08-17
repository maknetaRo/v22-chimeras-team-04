// Webpack uses this to work with directories 
const path = require('path');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do 
module.exports = {

    //Path to your entry point. From this file Webpack will begin his work
    entry: {
        main: './src/js/index.js',

    },
    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different thins
    // on final bundle. For now we don't need production's Javascript
    // minifying and other thin so let's set mode to development 
    mode: 'development'
}

// dev server
devServer: {
    contentBase: path.join(__dirname, 'dist')
}

rules: [
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    },
    {
        // rule for .sass, .scss or .css files 
        test: /\.(sa|sc|c)ss$/,
        use: [
            {
                loader: "css-loader",
            },
            {
                loader: "postcss-loader"
            },
            {
                loader: "sass-loader",
                options: {
                    implementation: require('sass')
                }

            }
        ]
    }
]
