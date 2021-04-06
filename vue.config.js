// vue.config.js
module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
            '/ako/': {
                target: 'http://other_host',
                ws: true,
                changeOrigin: true,// 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite:{  // 路径重写，
                    '^/ako': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/XXXXX即可。
                }
            }
        }
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page您好',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        //subpage: 'src/subpage/main.js'
    }
}