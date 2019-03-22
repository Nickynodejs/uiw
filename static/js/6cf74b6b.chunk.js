(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{692:function(n,e){n.exports="Slider 滑块输入条\n===\n\n通过拖动滑块在一个固定区间内进行选择，效果比 [`input`](https://www.w3.org/wiki/HTML/Elements/input/range) 类型为 [`range`](https://www.w3.org/wiki/HTML/Elements/input/range) 的功能丰富。\n\n### 基本用法\n\n按钮样式的单选组合。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Slider, Divider } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 20,\n      value2: -5,\n      value3: [10, 50],\n    };\n  }\n  render() {\n    return (\n      <div>\n        <Slider\n          value={this.state.value}\n          style={{ maxWidth: 360 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>设置 progress 值为 <b>\"false\"</b> 不显示进度条</div>\n        <Slider\n          progress={false}\n          value={this.state.value}\n          style={{ maxWidth: 360, marginTop: 30 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>设置 progress 值为 <b>\"#dc3545\"</b> 这是一个颜色值，设置进度条颜色</div>\n        <Slider\n          progress={false}\n          progress=\"#dc3545\"\n          value={this.state.value}\n          style={{ maxWidth: 360, marginTop: 30 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>当前值：<b>{this.state.value}</b></div>\n        <Divider />\n        <Slider\n          min={-10}\n          max={30}\n          value={this.state.value2}\n          style={{ maxWidth: 260 }}\n          onChange={(value2)=> {\n            this.setState({ value2 });\n          }}\n        />\n        <div>可选 -10~30值范围：<b>{this.state.value2}</b></div>\n        <Divider />\n        <Slider value={this.state.value3} range style={{ maxWidth: 260 }}\n          onChange={(value3)=> {\n            this.setState({ value3 });\n          }}\n        />\n        <div>取值范围：<b>{this.state.value3[0]} ~ {this.state.value3[1]}</b></div>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 在表单中使用\n\n在 [`<Form />`](#/components/form) 表单中应用 [`<Slider />`](#/components/slider) 组件，需要设置 `initialValue` 初始值。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Form, Row, Col, Slider, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        if(current.age === initial.age) {\n          Notify.error({\n            title: '提交失败！',\n            description: `表单提交年龄失败，年龄为：${current.age}，与初始化值是一样滴！`,\n          });\n        } else {\n          Notify.success({\n            title: '提交成功！',\n            description: `表单提交年龄成功，年龄为：${current.age}，将自动填充初始化值！`,\n          });\n        }\n      }}\n      fields={{\n        age: {\n          initialValue: 0,\n          inline: true,\n          label: '年龄',\n          children: <Slider />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row gutter={10}>\n              <Col style={{ maxWidth: 300 }}>{fields.age}</Col>\n              <Col>{state.current.age}</Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">提交</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 控制提示显示\n\n通过设置 `tooltip` 的值，来控制提示的显示。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <div>设置 tooltip 值为 <b>true</b>，提示将始终显示。</div>\n        <Slider value={25} style={{ maxWidth: 260 }} tooltip />\n        <Divider />\n        <div>设置 tooltip 值为 <b>null</b>，提示将始终不显示。</div>\n        <Slider value={25} style={{ maxWidth: 260 }} tooltip={null} />\n        <Divider />\n        <div>设置 tooltip 值为 <b>false</b>，鼠标经过显示提示。</div>\n        <Slider value={25} style={{ maxWidth: 260 }} tooltip={false} />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 刻度\n\n通过 `step` 设置或返回每次拖动滑块控件时的递增量。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 20,\n      value2: 1.5,\n      value3: 20,\n      value4: [10, 40],\n    };\n  }\n  render() {\n    return (\n      <div>\n        <div>刻度 <b>step=10</b> 当前值：<b>{this.state.value}</b></div>\n        <Slider\n          step={10}\n          max={200}\n          dots\n          value={this.state.value}\n          style={{ maxWidth: 460 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <Divider />\n        <div>刻度 <b>step=0.5</b> 当前值：<b>{this.state.value2}</b></div>\n        <Slider\n          min={0}\n          max={2}\n          step={0.5}\n          dots\n          value={this.state.value2}\n          style={{ maxWidth: 460 }}\n          onChange={(value2)=> {\n            this.setState({ value2 });\n          }}\n        />\n        <Divider />\n        <div>刻度 <b>step=3</b>，设置 <b>dots=false</b> 不显示刻度 当前值：<b>{this.state.value3}</b></div>\n        <Slider\n          value={26}\n          min={20}\n          max={40}\n          step={2}\n          value={this.state.value3}\n          style={{ maxWidth: 260 }}\n          onChange={(value3)=> {\n            this.setState({ value3 });\n          }}\n        />\n        <Divider />\n        <div>值 <b>value=[10, 40]</b> ，必须设置<b>range=true</b>，取值范围：<b>{this.state.value4[0]} ~ {this.state.value4[1]}</b></div>\n        <Slider value={this.state.value4} range style={{ maxWidth: 260 }}\n          onChange={(value4)=> {\n            this.setState({ value4 });\n          }}\n        />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 标记刻度\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 20,\n      value2: 1.5,\n      value3: 20,\n    };\n  }\n  render() {\n    return (\n      <div>\n        <div>刻度 <b>step=2</b> 当前值：<b>{this.state.value}</b></div>\n        <Slider\n          min={-10}\n          max={30}\n          step={2}\n          dots\n          value={this.state.value}\n          marks={{\n            [-10]: '-10°C',\n            [-2]: '-2°C',\n            0: {\n              style: { color: '#af00ff' },\n            },\n            30: {\n              style: { color: '#ff7c00' },\n              label: <strong>30°C</strong>,\n            }\n          }}\n          renderMarks={(mark) => `${mark}°C`}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>刻度 <b>step=0.5</b> 当前值：<b>{this.state.value2}</b></div>\n        <Slider\n          min={0}\n          max={2}\n          step={0.5}\n          dots\n          marks\n          value={this.state.value2}\n          style={{ maxWidth: 460 }}\n          onChange={(value2)=> {\n            this.setState({ value2 });\n          }}\n        />\n        <div>刻度 <b>step=3</b> 当前值：<b>{this.state.value3}</b></div>\n        <Slider\n          value={26}\n          min={20}\n          max={44}\n          step={2}\n          dots\n          marks\n          value={this.state.value3}\n          style={{ maxWidth: 260 }}\n          onChange={(value3)=> {\n            console.log('value5:', value3);\n            this.setState({ value3 });\n          }}\n        />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 禁用样式\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Slider value={25} disabled style={{ maxWidth: 260 }} />\n        <Divider />\n        <Slider\n          step={10}\n          disabled\n          dots\n          value={50}\n          style={{ maxWidth: 260 }}\n        />\n        <Divider />\n        <Slider disabled step={2} value={26} min={20} max={44} dots marks />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 垂直方向\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Row, Col, Slider } from 'uiw';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <Row>\n        <Col fixed style={{ width: 70 }}>\n          <Slider\n            vertical\n            min={-10}\n            max={30}\n            step={2}\n            dots\n            value={20}\n            marks={{\n              [-10]: '-10°C',\n              [-2]: '-2°C',\n              0: ' ',\n              2: {\n                style: { color: '#af00ff' },\n              },\n              30: {\n                style: { color: '#ff7c00' },\n                label: <strong>30°C</strong>,\n              }\n            }}\n            style={{ height: 260 }}\n            renderMarks={(mark) => `${mark}°C`}\n          />\n        </Col>\n        <Col fixed>\n          <Slider vertical value={25} style={{ height: 260 }} />\n        </Col>\n        <Col fixed>\n          <Slider vertical value={62} progress={false} tooltip style={{ height: 260 }} />\n        </Col>\n        <Col fixed>\n          <Slider vertical value={50} step={10} dots style={{ height: 260 }} />\n        </Col>\n        <Col fixed>\n          <Slider vertical step={2} range value={[26, 40]} min={20} max={44} dots marks style={{ height: 260 }} />\n        </Col>\n      </Row>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 选择的数值，为数组时即可开启范围选择，并且指定范围 | Number | `0` |\n| min | 最小值 | Number | `0` |\n| max | 最大值 | Number | `100` |\n| dots | 显示 `step` 间断点，建议在 `step` 间隔不密集时使用 | Number | `false` |\n| marks | 刻度标记，`key` 的类型必须为 `number` 且取值在闭区间 `min`, `max` 内，每个标签可以单独设置样式，当值为 `Boolean` 值时表示是否显示刻度 | Object/Boolean | - |\n| renderMarks | 刻度标记渲染 | Function(mark) => String | - | \n| step | 设置或返回每次拖动滑块控件时的递增量，规定合法数字间隔（如果 `step={3}`，则合法数字是 `0`,`3`,`6`，以此类推） | Number | `1` |\n| range | 当 range 为 true 时，渲染为双滑块| Boolean | `false` |\n| disabled | 是否禁用 | Boolean | `false` |\n| progress | 显示滑动的进度条，设为 `false` 不显示进度条，设为为颜色值，将进度条设为不同的颜色 | Boolean/String | `true` |\n| vertical | 值为 `true` 时，`Slider` 为垂直方向。 | Boolean | `false` |\n| tooltip | 是否显示提示，若设置为 `true` 提示始终显示，若设置为 `null` 将始终不显示提示。 | Boolean | `false` |\n| onChange | 值改变时触发 | Function(value) | - |"}}]);