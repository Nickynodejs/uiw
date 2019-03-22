(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{633:function(n,e){n.exports='Tag 标签\n===\n\n进行标记和分类的小标签。\n\n```jsx\nimport { Tag } from \'uiw\';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag title="成功-绿色" color="#28a745" />\n    <Tag title="主要-蓝色" color="#008EF0" />\n    <Tag title="信息-青色" color="#1EABCD" />\n    <Tag title="导航-藏青" color="#393E48" />\n    <Divider />\n    <Tag color="#ffc107">警告-黄色</Tag>\n    <Tag color="#F95C2B">提醒-橙色</Tag>\n    <Tag color="#dc3545">危险-红色</Tag>\n    <Tag>默认颜色</Tag>\n    <Divider />\n    <Tag light color="#28a745">成功-绿色</Tag>\n    <Tag light color="#008EF0">主要-蓝色</Tag>\n    <Tag light color="#1EABCD">信息-青色</Tag>\n    <Tag light color="#393E48">导航-藏青</Tag>\n    <Divider />\n    <Tag light color="#ffc107">警告-黄色</Tag>\n    <Tag light color="#F95C2B">提醒-橙色</Tag>\n    <Tag light color="#dc3545">危险-红色</Tag>\n    <Tag light>默认颜色</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 标签禁用\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag disabled title="成功-绿色" color="#28a745" />\n    <Tag disabled title="主要-蓝色" color="#008EF0" />\n    <Tag disabled title="信息-青色" color="#1EABCD" />\n    <Tag disabled title="导航-藏青" color="#393E48" />\n    <Tag disabled color="#ffc107">警告-黄色</Tag>\n    <Tag disabled color="#F95C2B">提醒-橙色</Tag>\n    <Tag disabled color="#dc3545">危险-红色</Tag>\n    <Tag disabled>默认颜色</Tag>\n    <Divider />\n    <Tag light disabled color="#28a745">成功-绿色</Tag>\n    <Tag light disabled color="#008EF0">主要-蓝色</Tag>\n    <Tag light disabled color="#1EABCD">信息-青色</Tag>\n    <Tag light disabled color="#393E48">导航-藏青</Tag>\n    <Tag light disabled color="#ffc107">警告-黄色</Tag>\n    <Tag light disabled color="#F95C2B">提醒-橙色</Tag>\n    <Tag light disabled color="#dc3545">危险-红色</Tag>\n    <Tag light disabled>默认颜色</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 添加图标\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag title={(\n      <>\n        <Icon type="heart-on" verticalAlign="baseline" /> 成功-绿色\n      </>\n    )} color="#28a745" />·\n    <Tag color="#1C7CEB"><Icon type="heart-on" verticalAlign="baseline" /> 限购一份</Tag>\n    <Tag color="red"><Icon type="heart-on" verticalAlign="baseline" /> 胶囊</Tag>\n    <Divider />\n    <Tag light color="#28a745"><Icon type="heart-on" verticalAlign="baseline" /> 成功-绿色</Tag>\n    <Tag light color="#008EF0"><Icon type="heart-on" verticalAlign="baseline" /> 主要-蓝色</Tag>\n    <Tag light color="#dc3545"><Icon type="heart-on" verticalAlign="baseline" /> 信息-红色</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 控制关闭标签\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Icon } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: true,\n      visible1: true,\n    }\n  }\n  onClose(type) {\n    this.setState({\n      [type]: !this.state[type],\n    });\n  }\n  render() { \n    return (\n      <div>\n        <Tag\n          closable\n          onClose={this.onClose.bind(this, \'visible\')}\n          visible={this.state.visible}\n          color="#F95C2B">提醒-橙色</Tag>\n        <Tag\n          closable\n          light\n          visible={this.state.visible1}\n          color="#dc3545"\n          onClose={this.onClose.bind(this, \'visible1\')}\n        >\n            <Icon type="heart-on" verticalAlign="baseline" /> 信息-红色\n        </Tag>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 标签组动态删除\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Button, Icon } from \'uiw\';\n\nlet num = 3;\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dataTags: [\n        { label: \'橘子\', value: 1, color: \'#28a745\' },\n        { label: \'苹果\', value: 2, color: \'#F95C2B\' },\n        { label: \'橘子\', value: 3, color: \'#008EF0\' },\n      ]\n    }\n  }\n  onClose(data) {\n    const dataTags = this.state.dataTags.filter(item => item.value !== data.value);\n    this.setState({ dataTags });\n  }\n  addTag() {\n    const { dataTags } = this.state;\n    num += 1;\n    dataTags.push({\n      label: `橘子${num}`, value: num, color: \'#28a745\'\n    });\n    this.setState({ dataTags });\n  }\n  render() { \n    const { dataTags } = this.state;\n    return (\n      <div>\n        {dataTags.map((item, idx) => {\n          return (\n            <Tag\n              key={idx}\n              closable\n              onClose={this.onClose.bind(this, item)}\n              visible={this.state.visible}\n              color={item.color}>\n              {item.label}\n            </Tag>\n          )\n        })}\n        <Button style={{ marginLeft: 5 }} size="small" onClick={this.addTag.bind(this)}> <Icon type="plus" /> </Button>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 热门标签\n\n选择你感兴趣的话题，下面实例类似 CheckBox 多选。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dataTags: [\n        { label: \'橘子\', value: 1, color: \'#008EF0\' },\n        { label: \'苹果\', value: 2, color: \'#008EF0\' },\n        { label: \'橘子\', value: 3, color: \'#008EF0\' },\n        { label: \'川菜\', value: 4, color: \'#008EF0\' },\n      ],\n      values: [1, 2, 3],\n    }\n  }\n  onTagChecked(data) {\n    let { values } = this.state;\n    const isChecked = values.indexOf(data.value) === -1;\n    if(isChecked) {\n      values.push(data.value);\n    } else {\n      values = values.filter(item => item !== data.value);\n    }\n    this.setState({ values });\n  }\n  render() { \n    const { dataTags, values } = this.state;\n    return (\n      <div>\n        {dataTags.map((item, idx) => {\n          const isChecked = values.indexOf(item.value) === -1;\n          return (\n            <Tag\n              onClick={this.onTagChecked.bind(this, item)}\n              key={idx}\n              light={isChecked}\n              bordered={false}\n              color="#008EF0"\n            >\n              {item.label}\n            </Tag>\n          )\n        })}\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 选择器\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Dropdown, Menu, Button, Icon, Input, Checkbox, Tag, Row, Col } from \'uiw\';\n\nclass SelectTag extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: props.value,\n      option: props.option,\n      selectOption: [],\n      isOpen: false,\n    };\n  }\n  componentDidMount() {\n    const { value, option } = this.state;\n    const selectOption = value.map(val => option.find(item => val === item.value)).filter(item => !!item);\n    this.setState({ selectOption });\n  }\n  componentWillReceiveProps(nextProps) {\n    if (nextProps.value !== this.props.value) {\n      this.setState({ value: nextProps.value });\n    }\n    if (nextProps.option !== this.props.option) {\n      this.setState({ option: nextProps.option });\n    }\n  }\n  onVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  onClick(item) {\n    this.modifyValue(item.value, item);\n  }\n  modifyValue(itemVal, item) {\n    const { onChange } = this.props;\n    let { value, selectOption } = this.state;\n    const checked = value.includes(itemVal);\n    // let values = [...value];\n    if(!checked) {\n      value.push(itemVal);\n      selectOption.push(item);\n    } else {\n      value = value.filter(v => itemVal !== v);\n      selectOption = selectOption.filter(v => item.value !== v.value);\n    }\n    this.setState({ value: value, selectOption, isOpen: false }, () => {\n      onChange && onChange(value);\n    });\n  }\n  onClose(item, e) {\n    e.stopPropagation();\n    this.modifyValue(item.value, item);\n  }\n  onChange(item, e) {\n    this.modifyValue(item.value);\n  }\n  onSearch(e) {\n    let option = this.state.option;\n    const options = this.props.option.filter(item => item.label.indexOf(e.target.value) > -1);\n    this.setState({ option: options  });\n  }\n  render() {\n    const { placeholder = \'请选择\' } = this.props;\n    const { isOpen, value, option, selectOption } = this.state;\n    return (\n      <Dropdown\n        trigger="click"\n        onVisibleChange={this.onVisibleChange.bind(this)}\n        isOpen={isOpen}\n        menu={\n          <Menu bordered style={{ minWidth: 220, height: 210, overflow: \'auto\' }}>\n            <Menu.Divider\n              title={\n                <Input placeholder="请输入内容" onChange={this.onSearch.bind(this)} />\n              }\n            />\n            {option.map((item, idx) => {\n              const active = value.includes(item.value);\n              return (\n                <Menu.Item\n                  key={idx}\n                  text={\n                    <Row gutter={10} justify="space-between">\n                      <Col>\n                        <span style={{ verticalAlign: \'middle\' }}>{item.label}</span>\n                      </Col>\n                      <Col fixed>\n                        {active && <Checkbox checked={active} onChange={this.onChange.bind(this, item)} />}\n                      </Col>\n                    </Row>\n                  }\n                  onClick={this.onClick.bind(this, item)}\n                />\n              );\n            })}\n          </Menu>\n        }\n      >\n        <div style={{ minWidth: 120, maxWidth: 320, padding: 5, border: \'1px solid #c7c8ca\', borderRadius: 3 }}>\n          {selectOption.length === 0 && (\n            <span style={{\n              lineHeight: \'23px\',\n              padding: \'0 4px\',\n            }}>{placeholder}</span>\n          )}\n          {selectOption.map((item, idx) => {\n            const { label, ...itemProps } = item;\n            const props = {\n              style: { margin: 2 },\n              onClose: this.onClose.bind(this, item),\n              key: idx,\n              ...itemProps,\n            }\n            return (\n              <Tag light closable {...props}>{label}</Tag>\n            );\n          })}\n        </div>\n      </Dropdown>\n    )\n  }\n}\n\nconst option = [\n  { label: \'台北市, 中国台湾\', value: 1 },\n  { label: \'海参崴, 俄罗斯\', value: 2 },\n  { label: \'三亚市, 中国\', value: 3, color: \'#dc3545\' },\n  { label: \'成都市, 中国\', value: 4, color: \'#dc3545\' },\n  { label: \'布拉格, 捷克\', value: 5 },\n  { label: \'布拉迪斯拉发, 斯洛伐克\', value: 6 },\n  { label: \'LAX 洛杉矶, 美国\', value: 7 },\n  { label: \'黄冈市, 中国\', value: 8, color: \'#dc3545\' },\n];\n\nReactDOM.render(\n  <div>\n    <SelectTag placeholder="选择城市" option={option} value={[2, 8]} onChange={(item) => { console.log(\'item\', item); }} />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## Tag\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 标题，和 `children` 几乎是一样的 | String/ReactNode | - |\n| color | 颜色 | String | `#1C7CEB` |\n| disabled | 禁用 | Boolean | `false` |\n| light | 有边框的标签 | Boolean | `false` |\n| bordered | 当设置 `light={ture}` 时，起作用，设置为 `false` 不展示边框样式 | Boolean | `true` |\n| closable | 显示关闭按钮 | Boolean | `false` |\n| visible | 是否显示标签 | Boolean | `true` |\n| onClose | 关闭时的回调 | Function | - |\n'}}]);