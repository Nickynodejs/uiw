(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{730:function(n,e){n.exports="Tree 树形控件\n===\n\n使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。\n\n```jsx\nimport { Tree } from 'uiw';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '湖北省',\n    key: '0-0-0',\n    children:[\n      {\n        label: '武汉市',\n        key: '0-1-0',\n        children:[\n          { label: '新洲区', key: '0-1-1' },\n          { label: '武昌区', key: '0-1-2' },\n          {\n            label: '汉南区',\n            key: '0-1-3',\n            children:[\n              { label: '汉南区1', key: '0-1-3-1' },\n              { label: '汉南区2', key: '0-1-3-2' },\n              { label: '汉南区3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '黄冈市', key: '0-2-0' },\n      {\n        label: '黄石市',\n        key: '0-3-0',\n        children:[\n          { label: '青山区', key: '0-3-1' },\n          { label: '黄陂区', key: '0-3-2' },\n          { label: '青山区', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '上海市',\n    key: '1-0-0',\n    children:[\n      { label: '黄浦区', key: '1-0-1' },\n      { label: '卢湾区', key: '1-0-2' },\n      {\n        label: '徐汇区',\n        key: '1-0-3',\n        children:[\n          { label: '半淞园路街道', key: '1-1-0' },\n          { label: '南京东路街道', key: '1-2-0' },\n          { label: '外滩街道', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '北京市',\n    key: '2-0-0',\n    children:[\n      { label: '东城区', key: '2-1-0' },\n      { label: '西城区', key: '2-2-0' },\n      {\n        label: '崇文区',\n        key: '2-3-0',\n        children:[\n          { label: '东花市街道', key: '2-3-1' },\n          { label: '体育馆路街道', key: '2-3-2' },\n          { label: '前门街道', key: '2-3-3' },\n        ]\n      },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"单选\">\n          <Tree\n            data={data}\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"多选，子节点不受控\">\n          <Tree\n            data={data}\n            multiple\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"多选，子节点受控\">\n          <Tree\n            data={data}\n            multiple\n            checkStrictly\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 自定义图标\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tree, Card, Row, Col, Icon } from 'uiw';\n\nconst data = [\n  {\n    label: '湖北省',\n    key: '0-0-0',\n    children:[\n      {\n        label: '武汉市',\n        key: '0-1-0',\n        children:[\n          { label: '新洲区', key: '0-1-1' },\n          { label: '武昌区', key: '0-1-2' },\n          {\n            label: '汉南区',\n            key: '0-1-3',\n            children:[\n              { label: '汉南区1', key: '0-1-3-1' },\n              { label: '汉南区2', key: '0-1-3-2' },\n              { label: '汉南区3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '黄冈市', key: '0-2-0' },\n      {\n        label: '黄石市',\n        key: '0-3-0',\n        children:[\n          { label: '青山区', key: '0-3-1' },\n          { label: '黄陂区', key: '0-3-2' },\n          { label: '青山区', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '上海市',\n    key: '1-0-0',\n    children:[\n      { label: '黄浦区', key: '1-0-1' },\n      { label: '卢湾区', key: '1-0-2' },\n      {\n        label: '徐汇区',\n        key: '1-0-3',\n        children:[\n          { label: '半淞园路街道', key: '1-1-0' },\n          { label: '南京东路街道', key: '1-2-0' },\n          { label: '外滩街道', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '北京市',\n    key: '2-0-0',\n    children:[\n      { label: '东城区', key: '2-1-0' },\n      { label: '西城区', key: '2-2-0' },\n      {\n        label: '崇文区',\n        key: '2-3-0',\n        children:[\n          { label: '东花市街道', key: '2-3-1' },\n          { label: '体育馆路街道', key: '2-3-2' },\n          { label: '前门街道', key: '2-3-3' },\n        ]\n      },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"标题中添加图标\">\n          <Tree\n            data={data}\n            renderTitle={(item, selected, noChild) => (\n              <span><Icon style={{ display: '-webkit-inline-box' }} type={noChild ? 'smile-o' : 'apple'} />{item.label}</span>\n            )}\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"替换默认折叠图标\">\n          <Tree\n            data={data}\n            icon=\"right-circle-o\"\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"自定义展开图标\">\n          <Tree\n            data={data}\n            iconAnimation={false}\n            icon={(data, isOpen, noChild) => {\n              if(isOpen && !noChild) {\n                return 'folder-open';\n              } else if (!noChild) {\n                return 'folder';\n              }\n              return 'file-text';\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 连接线\n\n带连接线的树，通过设置 `showLine`。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '湖北省',\n    key: '0-0-0',\n    children:[\n      {\n        label: '武汉市',\n        key: '0-1-0',\n        children:[\n          { label: '新洲区', key: '0-1-1' },\n          { label: '武昌区', key: '0-1-2' },\n          {\n            label: '汉南区',\n            key: '0-1-3',\n            children:[\n              { label: '汉南区1', key: '0-1-3-1' },\n              { label: '汉南区2', key: '0-1-3-2' },\n              { label: '汉南区3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '黄冈市', key: '0-2-0' },\n      {\n        label: '黄石市',\n        key: '0-3-0',\n        children:[\n          { label: '青山区', key: '0-3-1' },\n          { label: '黄陂区', key: '0-3-2' },\n          { label: '青山区', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '上海市',\n    key: '1-0-0',\n    children:[\n      { label: '黄浦区', key: '1-0-1' },\n      { label: '卢湾区', key: '1-0-2' },\n      {\n        label: '徐汇区',\n        key: '1-0-3',\n        children:[\n          { label: '半淞园路街道', key: '1-1-0' },\n          { label: '南京东路街道', key: '1-2-0' },\n          { label: '外滩街道', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '北京市',\n    key: '2-0-0',\n    children:[\n      { label: '东城区', key: '2-1-0' },\n      { label: '西城区', key: '2-2-0' },\n      {\n        label: '崇文区',\n        key: '2-3-0',\n        children:[\n          { label: '东花市街道', key: '2-3-1' },\n          { label: '体育馆路街道', key: '2-3-2' },\n          { label: '前门街道', key: '2-3-3' },\n        ]\n      },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"自定义展开图标\">\n          <Tree\n            data={data}\n            showLine\n            iconAnimation={false}\n            icon={(data, isOpen, noChild) => {\n              if(isOpen && !noChild) {\n                return 'folder-open';\n              } else if (!noChild) {\n                return 'folder';\n              }\n              return 'file-text';\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"自定义展开图标\">\n          <Tree\n            data={data}\n            showLine\n            icon={(data, isOpen, noChild) => {\n              if(noChild) {\n                return 'file-text';\n              }\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 默认展开树\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '湖北省',\n    key: '0-0-0',\n    children:[\n      {\n        label: '武汉市',\n        key: '0-1-0',\n        children:[\n          { label: '新洲区', key: '0-1-1' },\n          { label: '武昌区', key: '0-1-2' },\n          {\n            label: '汉南区',\n            key: '0-1-3',\n            children:[\n              { label: '汉南区1', key: '0-1-3-1' },\n              { label: '汉南区2', key: '0-1-3-2' },\n              { label: '汉南区3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '黄冈市', key: '0-2-0' },\n      {\n        label: '黄石市',\n        key: '0-3-0',\n        children:[\n          { label: '青山区', key: '0-3-1' },\n          { label: '黄陂区', key: '0-3-2' },\n          { label: '青山区', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '上海市',\n    key: '1-0-0',\n    children:[\n      { label: '黄浦区', key: '1-0-1' },\n      { label: '卢湾区', key: '1-0-2' },\n      {\n        label: '徐汇区',\n        key: '1-0-3',\n        children:[\n          { label: '半淞园路街道', key: '1-1-0' },\n          { label: '南京东路街道', key: '1-2-0' },\n          { label: '外滩街道', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '北京市',\n    key: '2-0-0',\n    children:[\n      { label: '东城区', key: '2-1-0' },\n      { label: '西城区', key: '2-2-0' },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"默认展开部分\">\n          <Tree\n            data={data}\n            showLine\n            openKeys={['0-0-0', '0-1-0']}\n            iconAnimation={false}\n            icon={(data, isOpen, noChild) => {\n              if(isOpen && !noChild) {\n                return 'folder-open';\n              } else if (!noChild) {\n                return 'folder';\n              }\n              return 'file-text';\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"展开所有\">\n          <Tree\n            data={data}\n            showLine\n            defaultExpandAll\n            icon={(data, isOpen, noChild) => {\n              if(noChild) {\n                return 'file-text';\n              }\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| data | 展示数据 | Array | `[]` |\n| openKeys | 节点展开 `key` | Array | `[]` |\n| selectedKeys | 设置选中的树节点 | Array | `[]` |\n| autoExpandParent | 是否自动展开父节点 | Boolean | `true` |\n| defaultExpandAll | 默认展开所有树节点 | Boolean | `false` |\n| iconAnimation | 展开收缩图标，参数设为 `false` 禁用动画 | Boolean | `true` |\n| showLine | 是否展示连接线 | Boolean | `false` |\n| checkStrictly | 子节点受父节点控制设置 `true`，需要配合 `multiple` 参数使用。 | Boolean | `false` |\n| multiple | 支持点选多个节点 | Boolean | `false` |\n| icon | 重新定义，展开收缩图标，当为函数时视为自定义图标，并展示非折叠项的图标。 | Function(data: object, noChild: bool)/String/Node | - |\n| renderTitle | 重新定义每个标题节点的显示 | Function(item, selected: bool, noChild: bool) | - |\n| onSelected | 点击选择树节点触发 | Function(selectedKeys: array, key, selected: bool, data, e) | - |\n| onExpand | 展开/收起节点时触发 | Function(key, expanded: bool, data, evn) | - |\n\n### data\n\n```json\n[\n  {\n    \"label\": \"湖北省\",\n    \"key\": \"0-0-0\",\n    \"children\":[]\n  }\n  ...\n]\n```"}}]);