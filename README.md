# 漫画译注器协作版[MoeTran]前端项目

基于萌翻开源代码修改的版本，目前为Alpha预览版本。可配合漫画译注器协作版[MoeTran]后端项目使用。
**由于部分API代码调整，不支持直接连萌翻原版后端！**

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
1. `yarn install`
1. `yarn start`