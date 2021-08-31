// 添加全局配置文件
const { resolve } = require('path');
const path = require('path');

module.exports = {
	// 关闭esList语法检测功能
	lintOnSave:false,
	// 开发服务器相关的配置  
	devServer: {
		// 配置静态资源目录
		contentBase: path.join(__dirname,'public'),
		// 设置服务端口号
		port:8848,
	  },
	  // 配置webpack相关
	  configureWebpack: {
		  // 解析
		  resolve:{
			  alias:{
				  // 配置路径别名
				  '@v':path.resolve(__dirname,'src/views'),
				  '@c':path.resolve(__dirname,'src/components'),
			  }
		  }
	  },
	//   跨域问题
	// devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:9528',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '/api': ''
    //             }
    //         }
    //     }
    // },
	  
}