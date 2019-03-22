(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{618:function(n,t){n.exports='Card 卡片\n===\n\n通用卡片容器，将信息聚合在卡片容器中展示，用来显示文字、列表、图文等内容。\n\n```jsx\nimport { Card } from \'uiw\';\n```\n\n## 基础用法\n\n包含标题、内容、操作区域。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300 }}>\n      卡片内容<br/>\n      卡片内容<br/>\n      卡片内容<br/>\n    </Card>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 无边框\n\n在灰色背景上使用无边框的卡片。\n\n\x3c!--DemoStart,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nReactDOM.render(\n  <Card title="Card标题" bordered={false} style={{ width: 300 }}>\n    卡片内容<br/>\n    卡片内容<br/>\n    卡片内容<br/>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 简洁卡片\n\n只包含内容区域。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nReactDOM.render(\n  <Card style={{ width: 300 }}>\n    卡片内容<br/>\n    卡片内容<br/>\n    卡片内容<br/>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 更灵活的内容展示\n\n可以调整默认边距，设定宽度。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card } from \'uiw\';\n\nlet titleStyle = { padding: `10px 16px` };\n\nReactDOM.render(\n  <Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>\n    <div>\n      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />\n    </div>\n    <div style={titleStyle}>\n      <h3 style={{margin:0}}>我爱漂亮妹妹</h3>\n      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>\n    </div>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 添加页脚\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card, Icon } from \'uiw\';\n\nconst footer = (\n  <a href="https://uiwjs.github.io">\n    <Icon type=\'user\' />&nbsp;\n    16 Friends\n  </a>\n)\n\nReactDOM.render(\n  <Card\n    title="Card标题"\n    footer={footer}\n    style={{ width: 240 }} \n    bodyStyle={{ padding: 0 }}\n  >\n    <div>\n      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />\n    </div>\n    <div style={{ padding: `10px 16px` }}>\n      <h3 style={{margin:0}}>我爱漂亮妹妹</h3>\n      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>\n    </div>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 激活\n\n设置属性 `active=true` 将激活卡片，默认展示鼠标经过的样式。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Card, Icon } from \'uiw\';\n\nconst footer = (\n  <a href="https://uiwjs.github.io">\n    <Icon type=\'user\' />&nbsp;\n    16 Friends\n  </a>\n)\n\nReactDOM.render(\n  <Card\n    active\n    title="Card标题"\n    footer={footer}\n    style={{ width: 240 }} \n    bodyStyle={{ padding: 0 }}\n  >\n    <div>\n      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />\n    </div>\n    <div style={{ padding: `10px 16px` }}>\n      <h3 style={{margin:0}}>我爱漂亮妹妹</h3>\n      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>\n    </div>\n  </Card>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## API\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 卡片标题 | String/ReactNode | - |\n| footer | 页脚内容的简写 | String/ReactNode | - |\n| extra | 卡片右上角的操作区域 | String/ReactNode | - |\n| bordered | 是否显示边框 | Boolean | `true` |\n| active | 展示鼠标经过的样式。 | Boolean | `false` |\n| noHover | 取消鼠标移过时边框阴影 | Boolean | `false` |\n| bodyStyle | 设置 `body` 的样式 | Object | - |\n| bodyClassName | 设置 `body` 的 `className` | String | - |'}}]);