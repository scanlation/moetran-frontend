# 漫画译注器本地存储版[MoeTran]前端项目

基于萌翻开源代码修改的版本，目前为Alpha预览版本。可配合漫画译注器本地存储版[MoeTran]后端项目使用。
**前端项目已同步更新！管理员相关功能需要配合最新版本的萌翻[MoeFlow]后端项目**

关于此项目的技术支持和问题反馈，请加群：``451050931``
萌翻的反馈群里面目前也能得到这个项目的技术支持（询问时注明是漫画译注器协作版项目），但后续会进行拆分。

## 技术栈

- Core
  - react
  - react-router // 路由
  - emotion // CSS in JS
  - react-intl // i18n
  - redux
    - react-redux
    - redux-saga // 副作用处理
  - immer.js // 不可变对象处理
- UI
  - antd
  - antd-mobile
  - classnames
  - fontawesome
- Other
  - pepjs // Pointer 事件垫片
  - bowser // 浏览器识别
  - why-did-you-render // 性能优化
  - lodash // 工具库
  - uuid
  - fontmin // 字体剪切

## 开发步骤

1. 使用 Node.js v16
2. `yarn install` 安装依赖项
3. 复制 `.env.production` 改名为 `.env.local` 修改此文件里 `REACT_APP_BASE_URL` 的值为测试后端的地址
4. `yarn start` 启动调试
5. `yarn run build` 发布前端代码，**请注意**此时使用的后端地址配置为 `.env.production` 中的配置。

如果您要部署到 `Vercel` 之类的网站托管程序上，您可以直接将 `REACT_APP_BASE_URL` 相对应的后端接口地址配置到托管程序的环境变量中。

## 将前后端项目合并

最新版本的后端已经支持将前端项目编译完合并到后端，仅保留一个端口更好做映射！

1. 复制 `.env.production` 改名为 `.env.local` 修改此文件为 `REACT_APP_BASE_URL=/`
2. `yarn run build` 发布前端代码，等待编译完成。默认的编译结果目录是 `build`
3. 打开 [萌翻后端项目](https://github.com/kozzzx/moeflow-backend) 找到 `app` 文件夹，将前端 `build/static` 整个文件夹复制到此目录。
4. 找到后端项目 `app/templates/index.html` 文件，用前端 `build/index.html` 文件替换。
5. 将后端跑起来，访问首页 `http://127.0.0.1:5001/`（地址以命令行提示为准） 就可以正常访问、登录等操作。

## 修改项目配置

如果您的译制组不是从 日语(ja) 翻译为 繁体中文(zh-TW) 您可以修改 `src/configs.tsx` 文件中的对应位置的配置（文件中有注释）。
以下是常见的几个语言代码：

- `ja` 日语
- `en` 英语
- `ko` 朝鲜语（韩语）
- `zh-CN` 简体中文
- `zh-TW` 繁体中文

## 版本更新内容

### Version 1.0.0

萌翻前后端开源的首个版本

### Version 1.0.1

1. 处理一些数据处理和界面上的BUG
2. 调整需要初始化的默认配置内容，减少后只需要修改环境变量 `REACT_APP_BASE_URL` 指向您部署的后端地址。
3. 调整静态文件生成的目录结构，方便前后端联合部署。
4. 调整“创建团队”、“创建项目”页面中部分项目提交的内容。**（请配合最新版本的后端，避免出现数据格式问题！）**
5. 可配置网站标题等位置的内容，请从 `src/locales` 中查找对应词汇进行修改。
