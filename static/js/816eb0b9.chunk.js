(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{698:function(n,e){n.exports="Table 表格\n===\n\n表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。\n\n```jsx\nimport { Table } from 'uiw';\n```\n\n### 基本使用\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Table, Button } from 'uiw';\n\nconst columns = [\n  {\n    title: '姓名',\n    style: { color: 'red' },\n    key: 'name', \n  }, {\n    title: '年龄',\n    key: 'age',\n  }, {\n    title: '地址',\n    key: 'info',\n  }, {\n    title: '操作',\n    key: 'edit',\n    width: 98,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">删除</Button>\n        <Button size=\"small\" type=\"success\">修改</Button>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },\n  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },\n  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },\n  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },\n  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },\n  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },\n  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },\n];\nconst Demo = () => (\n  <div>\n    <Table columns={columns} data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 表头分组\n\n表头分组通过 `columns` 数组中对象的 `children` 来实现，以渲染分组表头。。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Table, Button } from 'uiw';\n\nconst columns = [\n  {\n    title: '姓名',\n    style: { color: 'red' },\n    key: 'name', \n    children: [\n      {\n        title: '中文名字',\n        key: 'cnname',\n        children:[\n          {\n            title: '姓名',\n            style: { color: 'red' },\n            key: 'firstname',\n            children:[\n              { title: '姓', key: 'name1', width: 80 },\n              { title: '名', key: 'name2', width: 80 },\n            ]\n          }, {\n            title: '拼音',\n            key: 'lastname',\n            children:[\n              { title: '姓', key: 'pinyin1', width: 80 },\n              { title: '名', key: 'pinyin2', width: 80 },\n            ],\n          },\n        ],\n      }, {\n        title: '英文名字',\n        width: 100,\n        key: 'name_en',\n      },\n    ]\n  }, {\n    title: '其它',\n    children:[\n      { title: '生日', key: 'birthday', width: 150 },\n      { title: '职业', key: 'job', width: 150 },\n    ],\n  }, {\n    title: '操作',\n    key: 'edit',\n    width: 150,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">删除</Button>\n        <span>{text} {key} - {rowNumber} - {columnNumber}</span>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name1: '邓', name2:'紫棋', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991年8月16日', job: '唱作歌手、作曲人', edit:'' },\n  { name1: '周', name2:'杰伦', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979年1月18日', job: '歌手、音乐人', edit:'' },\n  { name1: '邓', name2:'紫棋', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991年8月16日', job: '唱作歌手、作曲人', edit:'' },\n  { name1: '周', name2:'杰伦', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979年1月18日', job: '歌手、音乐人', edit:'' },\n];\nconst Demo = () => (\n  <div>\n    <Table bordered columns={columns} data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 标题页脚\n\n添加表格边框线，页头和页脚的展现效果。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Table, Button } from 'uiw';\n\nconst columns = [\n  {\n    title: '姓名',\n    style: { color: 'red' },\n    key: 'name', \n  }, {\n    title: '年龄',\n    key: 'age',\n  }, {\n    title: '地址',\n    key: 'info',\n  }, {\n    title: '操作',\n    key: 'edit',\n    width: 98,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">删除</Button>\n        <Button size=\"small\" type=\"success\">修改</Button>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },\n  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },\n  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },\n  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },\n  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },\n  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },\n  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },\n];\nconst Demo = () => (\n  <div>\n    <Table\n      title={(\n        <div>\n          这里是标题，有边框，<b>bordered=true</b>\n        </div>\n      )}\n      footer={(\n        <div>\n          这里是页脚 Footer，有边框，<b>bordered=true</b>\n        </div>\n      )}\n      bordered columns={columns} data={dataSource} />\n    <Table title=\"这里是标题，没有边框\" footer=\"这里是页脚 Footer，没有边框\" columns={columns} data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 点击单元格\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Table, Button, Notify } from 'uiw';\n\nconst columns = [\n  {\n    title: '姓名',\n    style: { color: 'red' },\n    key: 'name', \n  }, {\n    title: '年龄',\n    key: 'age',\n  }, {\n    title: '地址',\n    key: 'info',\n  }, {\n    title: '操作',\n    key: 'edit',\n    width: 98,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">删除</Button>\n        <Button size=\"small\" type=\"success\">修改</Button>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },\n  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },\n  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },\n  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },\n  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },\n  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },\n  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },\n];\nconst Demo = () => (\n  <div>\n    <Table\n      title=\"表内容 tbody 单元格点击回调事件\"\n      onCell={(text, key, rowData, rowNumber, columnNumber) => {\n        console.log('--\x3e1', text);\n        console.log('--\x3e2', key);\n        console.log('--\x3e3', rowData);\n        console.log('--\x3e4', rowNumber);\n        console.log('--\x3e5', columnNumber);\n        Notify.info({ description: `你点击了\"${text}\"。` });\n      }}\n      columns={columns}\n      data={dataSource} />\n    <Table\n      title=\"表头单元格点击回调事件\"\n      onCellHead={(text, key, rowData, rowNumber, columnNumber) => {\n        console.log('--\x3e1', text);\n        console.log('--\x3e2', key);\n        console.log('--\x3e3', rowData);\n        console.log('--\x3e4', rowNumber);\n        console.log('--\x3e5', columnNumber);\n        Notify.info({ description: `你点击了\"${text}\"。` });\n      }}\n      onCell={(text, key, rowData, rowNumber, columnNumber) => {\n        console.log('--\x3e1', text);\n        console.log('--\x3e2', key);\n        console.log('--\x3e3', rowData);\n        console.log('--\x3e4', rowNumber);\n        console.log('--\x3e5', columnNumber);\n        Notify.info({ description: `你点击了\"${text}\"。` });\n      }}\n      columns={columns}\n      data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 原始HTML\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Table, Button } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Table bordered>\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th width=\"60\">数量</th>\n          <th>详情</th>\n          <th width=\"100\">价格</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>土豆</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n        <tr>\n          <td>萝卜</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n        <tr>\n          <td>香蕉</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n        <tr>\n          <td>芝麻</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n      </tbody>\n    </Table>\n    <Table>\n      <caption>没有边框</caption>\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th width=\"60\">数量</th>\n          <th>详情</th>\n          <th width=\"100\">价格</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>土豆</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n        <tr>\n          <td>萝卜</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n        <tr>\n          <td>香蕉</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n        <tr>\n          <td>芝麻</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>￥86,000</td>\n        </tr>\n      </tbody>\n    </Table>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n### Table\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| columns | 表格列的配置描述，可以内嵌 `children`，以渲染分组表头。| ColumnProps[] | `[]` |\n| data | 数据数组。| Array[] | `[]` |\n| title | 表格标题 | String/ReactNode | - |\n| footer | 表格尾部 | String/ReactNode | - |\n| bordered | 是否展示外边框和列边框 | Boolean | - |\n| onCellHead | 表头单元格点击回调 | `Function(text, key, rowData, rowNumber, columnNumber)` | - |\n| onCell | 单元格点击回调 | `Function(text, key, rowData, rowNumber, columnNumber)` | - |\n\n### ColumnProps\n\n列描述数据对象，是 columns 中的一项，\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 列头显示文字。| ReactNode | - |\n| key | 需要的 key，可以忽略这个属性，如果标题带有 `render` 函数，那么这个 `key` 为必须非常重要。| String | - |\n| width | 列宽度。| Number | - |\n| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前值的 `key`，行索引数据，当前行号，当前列号。| `Function(text, key, rowData, rowNumber, columnNumber)` | - |"}}]);