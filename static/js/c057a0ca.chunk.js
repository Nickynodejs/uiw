(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{608:function(n,t){n.exports="在 KKT 中使用\n===\n\n要开始使用 [uiw](https://github.com/uiwjs/uiw) 和 [kkt](https://github.com/jaywcjlove/kkt)，请按照下列步骤操作：\n\n1. 安装最新版本的 Node LTS。 [请参阅此处获取说明](https://docs.npmjs.com/getting-started/installing-node)\n2. 使用以下命令创建新的 `kkt` 项目：\n\n你可以直接通过下面命令初始化一个工程，直接开始开发\n\n```bash\nnpx kkt create my-app -e uiw\n```\n\n注意 [**npx**](https://github.com/npm/npm/releases/tag/v5.2.0) 命令只在 npm 5.2+ 或更高版本中支持。\n\n你也可以使用 [kkt](https://github.com/jaywcjlove/kkt) 工具通过下面步骤，一步一步的创建一个 [kkt](https://github.com/jaywcjlove/kkt) 工程\n\n```bash\nnpx kkt create my-app\n```\n\n此时，您将能够在本地启动默认 `kkt` 应用程序：\n\n```bash\ncd my-app\nnpm start\n```\n\n有关 `KKT` 的更多信息，[请参阅自述文件](https://github.com/jaywcjlove/kkt)。\n\n3. 安装 [uiw](https://github.com/uiwjs/uiw) 包：\n\n```bash\nnpm i uiw\n```\n\n4. 打开 `src/App.js` 并将内容替换为：\n\n```jsx\nimport React, { Component } from 'react';\nimport { Button } from 'uiw';\n\nexport default class App extends Component {\n  render() {\n    return <Button size=\"small\" type=\"primary\">Click Me</Button>;\n  }\n}\n```"}}]);