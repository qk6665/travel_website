# Environmental dependence

node: v10.16.0

npm: v6.9.0

[RESTful API server for travel-website: https://github.com/qk6665/RESTful-API-server-for-travel-website]: https://github.com/qk6665/RESTful-API-server-for-travel-website



# Deployment steps

## Project setup
```
npm run install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```



# directory structure

```
###########目录结构描述
├── public
│   └── index.html              //入口html文件
├── src
│   ├── api                     // 对外接口
│   │   └── getPageInfo.js      // 服务器资源请求
│   ├── assets                  // 静态资源
│   │   └── styles              // CSS和icon文件
│   ├── common                  // 公用组件
│   │   ├── fade                // 图片淡入淡出动画组件
│   │   └── gallery             // 画廊图片浏览效果组件
│   ├── pages                   // 页面
│   │   ├── city                // 选择城市页面
│   │   ├── detail              // 内容详情页面
│   │   └── home                // 主页面
│   ├── router                  // 路由
│   ├── store                   // vuex
│   ├── App.vue                 // 入口vue文件
│   └── main.js                 // 入口js文件
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── LICENSE                     //证书
├── README.md                   // help
├── babel.config.js
├── package.json
├── vue.config.js               // webpack配置
└── yarn.lock
```



# V1.0 update

1. 设计了主页、城市选择页、详情页
2. 点击主页顶部城市进入城市选择页
3. 点击主页顶部轮播图或下方item进入详情页
4. 城市选择页可在搜索栏或拖动下方列表选择城市，也可点击左上方返回按钮返回主页
5. 详情页可点击横幅图片进入画廊，左右拖动画廊切换图片，单击退出；点击左上角按钮返回主页

