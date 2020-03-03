var path = require('path')
console.log(__dirname)
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views'
            }
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    exclude: /index\.html/,
                    // include: [
                    //     path.resolve(__dirname, "src/assets/pages/webclient")
                    // ],
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'pages/webclient/[name].[hash:8].[ext]'
                            }
                        },
                        {
                            loader:'extract-loader'
                        },
                        {
                            loader:'html-loader'
                        }
                    ]
                }
            ]
        }
    }
}
