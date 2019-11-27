---
next: false
---
# 新建项目
## 新建本地web项目
+ 全局安装 potato-cli

``` 
 npm install -g potato-cli
 ```
::: tip
首先保证npm镜像在的nuxus私服里
:::
``` 
//查看当前镜像地址
 npm config get registry

//确保输出为以下路径
 http://nexus.e-tudou.com:83/repository/tudou-npm-public/

 //切换到私服地址
 npm config set registry http://nexus.e-tudou.com:83/repository/tudou-npm-public/

 //创建web前端项目
 potato-cli create 项目名

 ```
### 目录结构说明

```
├── .hooks/                     # windows os git hooks
├── .macHooks/                  # mac os git hooks
├── config/                     # 与项目构建相关的常用的配置选项
│   ├── index.js                # 主配置文件，如：配置接口代理转发
│   ├── dev.env.js              # 开发环境变量
│   ├── prod.env.js             # 生产环境变量
│   └── test.env.js             # 测试环境变量
├── public/                     # 纯静态资源，该目录下的文件不会被webpack处理，该目录会被拷贝到输出目录下
├── src/
│   ├── main.js                 # webpack 的入口文件
│   ├── api/                    # 存放API接口文件
│   └── views/                  # 存放项目业务代码
│       ├── App.vue             # app 的根组件
│       ├── module1/            # 模块1的目录，如：Home
│                  ├──assets/       # 模块1私有资源文件的目录，如：images/
│                  └──components/   # 模块1公共组件的目录，如：SubmitButton.vue\ResetButton.vue
│       └── module2/            # 模块2的目录，如：Login
│                  ├──assets/       # 模块2私有资源文件的目录，如：images/
│                  └──components/   # 模块2公共组件的目录，如：SubmitButton.vue\ResetButton.vue
│       └── ...
│   ├── common/                 # 存放项目共用的资源，如：常用的图片、图标，共用的组件、模块、样式，常量文件等等
│       ├── assets/             # 存放项目共用的代码以外的资源，如：图片、图标、视频 等
│       ├── components/         # 存放项目共用的组件，如：封装的导航条、选项卡等等
│       ├── compatible/         # 存放项目的兼容模块，如：适合App和微信各种接口的模块
│       ├── extension/          # 存放已有类的扩展模块，如：对 Array 类型进行扩展的模块
│       ├── libraries/          # 存放自己封装的或者引用的库
│       ├── tools/              # 自己封装的一些工具
│       ├── constant.js         # 存放js的常量
│       ├── constant.scss       # 存放scss的常量
│       └── ...
│   ├── components/             # 存放不需全局注册的组件，如：容器组件、业务组件
│   ├── filters/                # 存放自定义的vue过滤器
│   ├── layouts/                # 存放自定义的layout布局组件
│   ├── router/                 # 存放vue router配置
│   ├── store/                  # 存放store
├── tests/                      # 测试
├── .browserslistrc             # 设置浏览器版本查询范围
├── .commitlintrc.js            # githooks配置
├── .editorconfig               # 编辑器的配置文件；可配置如缩进、空格、制表类似的参数
├── .eslintignore               # eslint 的忽略规则
├── .eslintrc.js                # eslint 的配置文件
├── .gitignore                  # git的忽略配置文件
├── babel.config.js             # babel 的配置文件
├── csscomb.json                # csscomb 的配置文件
├── cypress.json                # test的配置文件
├── sonar-project.properties    # sonar代码检查工具的配置文件
├── package.json                # npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
├── postcssrc.config.js         # postcss 的配置文件
├── README.md
└── vue.config.js               # webpack 的配置文件
```

+ 需要根据具体的项目名称修改的文件：
   + public\nginx_项目名-web.conf
   + sonar-project.properties

### 项目启用csscomb格式化css代码
- Visual Studio Code 插件安装csscomb插件
- 打开Visual Studio Code的设置settings.json文件，添加如下代码,启用csscomb保存自动格式化css代码的功能
  ```
    "csscomb.formatOnSave": true,
    "csscomb.preset": {}
  ```
- 项目根目录添加csscomb.json配置文件
- 首次使用时，按F1打开Visual Studio Code命令工具，输入csscomb，点击候选项的CSSComb:Format styles启用csscomb功能。
- > csscomb.json的css属性排序参考[Bootstrap property order for Stylelint](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/master/css/index.js)

### 项目自动保存启用eslint格式化代码
- vscode编辑器安装eslint、Prettier-Code formatter两个插件
- 打开设置里的settings.json文件，添加如下代码，启用VSCode配合ESLint自动修复格式化代码
```
    "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
      "eslint.options": {
    //指定vscode的eslint所处理的文件的后缀
    "extensions": [".js", ".vue"]
    },
    "eslint.validate": [
        //开启对.vue文件中错误的检查
        "javascript",
        "javascriptreact",
        {
        "language": "html",
        "autoFix": true
        },
        {
        "language": "vue",
        "autoFix": true
        },
        {
        "language": "typescript",
        "autoFix": true
        },
        {
        "language": "typescriptreact",
        "autoFix": true
        }
    ],
```

## 管理

### 应用管理
<a href="http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-3/1.png" target="_blank">![应用管理](http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-3/1.png "应用管理")</a>

#### 添加应用
<a href="http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-11/5.png" target="_blank">![添加应用](http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-11/5.png "添加应用")</a>

### 添加后台服务
<a href="http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-5/2.png" target="_blank">![添加后台服务](http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-5/2.png "添加后台服务")</a>

### 角色管理
<a href="http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-7/3.png" target="_blank">![角色管理](http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-7/3.png "角色管理")</a>

### 服务接口
<a href="http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-9/4.png" target="_blank">![服务接口](http://potato-public.oss-cn-beijing.aliyuncs.com/auth/vc-upload-1574852693347-9/4.png "服务接口")</a>


