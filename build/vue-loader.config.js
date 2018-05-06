// const docsLoader = require.resolve("./doc-loader");


module.exports = (isDev) =>{
    return {
        preserveWhitepace : true, //将标签中的前后空格清除
        extractCSS : !isDev,//单独打包css文件
        cssModules : {
            localIdentName : isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase : true,
        },
        // hotReload : false,  //根据环境变量生成
        /* loaders : {
            "docs" : docsLoader //自定义模块
        } */
    }
}