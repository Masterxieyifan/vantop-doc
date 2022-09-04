## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 默认状态
用于基础的开关交互，提供了两个尺寸供业务调用 large / mini；开关背景色可根据实际场景自定义配置。

打开状态：
:::demo
```html
<el-switch
  v-model="value1">
</el-switch>
<el-switch
  v-model="value2" size="mini">
</el-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

关闭状态：
:::demo
```html
<el-switch
  v-model="value1">
</el-switch>
<el-switch
  v-model="value2" size="mini">
</el-switch>
<script>
  export default {
    data() {
      return {
        value1: false,
        value2: false
      }
    }
  };
</script>
```
:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。


```html
<el-switch
  v-model="value1"
  disabled>
</el-switch>
<el-switch
  v-model="value2"
  disabled>
</el-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
```
:::

### 文字和图标

带有文字和图标，仅在large尺寸下生效。图标尺寸默认 12px，2px描边。

文字，右边设置为 `mini` 的两个不会生效
:::demo
```html
<el-switch
  type="font"
  v-model="value1">
</el-switch>
<el-switch
  type="font"
  v-model="value2">
</el-switch>
<el-switch
  type="font"
  v-model="value3" size="mini">
</el-switch>
<el-switch
  type="font"
  v-model="value4" size="mini">
</el-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
        value3: true,
        value4: false
      }
    }
  };
</script>
```
:::

图标，右边设置为 `mini` 的不会生效
:::demo
```html
<el-switch
  type="icon"
  v-model="value1">
</el-switch>
<el-switch
  type="icon"
  v-model="value2">
</el-switch>
<el-switch
  type="icon"
  v-model="value3">
</el-switch>
<el-switch
  type="icon"
  v-model="value4">
</el-switch>
<el-switch
  type="icon"
  :loading="true"
  v-model="value5">
</el-switch>
<el-switch
  type="icon"
  :loading="true"
  v-model="value6">
</el-switch>
<el-switch
  type="icon"
  v-model="value7" size="mini">
</el-switch>
<el-switch
  type="icon"
  v-model="value8" size="mini">
</el-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
        value3: true,
        value4: false,
        value5: true,
        value6: false,
        value7: true,
        value8: false
      }
    }
  };
</script>
```
:::

### 扩展的 value 类型

hover展示tips信息

:::demo 设置`active-value`和`inactive-value`属性，接受`Boolean`, `String`或`Number`类型的值。

```html
<el-tooltip :content="'Switch value: ' + value" placement="top">
  <el-switch
    v-model="value"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| width  | switch 的宽度（像素）    | number   | — | 40 |
| active-icon-class  | switch 打开时所显示图标的类名，设置此项会忽略 `active-text`    | string   | — | — |
| inactive-icon-class  | switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text`    | string   | — | — |
| active-text  | switch 打开时的文字描述    | string   | — | — |
| inactive-text  | switch 关闭时的文字描述    | string   | — | — |
| active-value  | switch 打开时的值    | boolean / string / number | — | true |
| inactive-value  | switch 关闭时的值    | boolean / string / number | — | false |
| active-color  | switch 打开时的背景色    | string   | — | #409EFF |
| inactive-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name            | switch 对应的 name 属性    | string   | — | — |
| validate-event  | 改变 switch 状态时是否触发表单的校验     | boolean   | — | true |
| loading | 显示loading | boolean | — | false |
| type | 按钮类型 | string | font / icon | — | — |
| size | 尺寸 | string | large / mini | large |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 Switch 获取焦点 | - |