## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>

```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <el-button disabled>默认按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain disabled>朴素按钮</el-button>
  <el-button type="primary" plain disabled>主要按钮</el-button>
  <el-button type="success" plain disabled>成功按钮</el-button>
  <el-button type="info" plain disabled>信息按钮</el-button>
  <el-button type="warning" plain disabled>警告按钮</el-button>
  <el-button type="danger" plain disabled>危险按钮</el-button>
</el-row>
```
:::

### 文字按钮

没有边框和背景色的按钮。

:::demo
```html
<el-button type="text">文字按钮</el-button>
<el-button type="text" disabled>文字按钮</el-button>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，图标默认展示在左侧，`iconRight` 可以将图标设置在右侧。 `iconed` 可以设置纯图标按钮。

```html
<el-row>
  <el-button icon="vl-icon-search-16" type="primary">搜索</el-button>
  <el-button icon="vl-icon-search-16" type="primary" iconRight>上传</el-button>
</el-row>
<el-row>
  <el-button icon="vl-icon-search-16" iconed hint="搜索" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" size="medium" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" size="small" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" size="mini" />
</el-row>
<el-row>
  <el-button icon="vl-icon-search-16" iconed hint="搜索" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" type="primary" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" type="success" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" type="warning" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" type="danger" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" type="info" />
  <el-button icon="vl-icon-search-16" iconed hint="搜索" type="text" />
</el-row>

<el-row>
  <el-button icon="vl-icon-search-16" circle />
  <el-button icon="vl-icon-search-16" circle type="primary" />
  <el-button icon="vl-icon-search-16" circle type="success" />
  <el-button icon="vl-icon-search-16" circle type="warning" />
  <el-button icon="vl-icon-search-16" circle type="danger" />
  <el-button icon="vl-icon-search-16" circle type="info" />
  <el-button icon="vl-icon-search-16" circle type="text" />
</el-row>
  
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<el-button-group>`标签来嵌套你的按钮。

```html
<el-row>
<el-button-group>
  <el-button type="primary" icon="vl-icon-arrow-left-16">上一页</el-button>
  <el-button type="primary" icon="vl-icon-arrow-right-16" iconRight>下一页</el-button>
</el-button-group>
</el-row>

<el-row>
  <el-button-group>
  <el-button icon="vl-icon-arrow-left-16">上一页</el-button>
  <el-button icon="vl-icon-arrow-right-16" iconRight>下一页</el-button>
</el-button-group>
</el-row>
<el-row>

<el-button-group>
  <el-button iconed icon="vl-icon-star-on-16" hint="收藏"></el-button>
  <el-button iconed icon="vl-icon-set-up-16" hint="设置"></el-button>
  <el-button iconed icon="vl-icon-help-16" hint="帮助"></el-button>
</el-button-group>
</el-row>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<template>
    <el-button @click="loading = !loading">test</el-button>
    <el-button type="primary" :loading="loading">加载中</el-button>
</template>
<script>
    export default {
        data() {
            return {
                loading: false
            }
        }
    }
</script>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button size="medium">中等按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</el-row>
<el-row>
  <el-button round>默认按钮</el-button>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button size="small" round>小型按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</el-row>
<el-row>
  <el-button iconed icon="vl-icon-search-16" hint="默认按钮"></el-button>
  <el-button size="medium" iconed icon="vl-icon-search-16" hint="中等按钮"></el-button>
  <el-button size="small" iconed icon="vl-icon-search-16" hint="小型按钮"></el-button>
  <el-button size="mini" iconed icon="vl-icon-search-16" hint="超小按钮"></el-button>
</el-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| iconRight  | 图标位置 | Boolean   |  —  |  -  |
| iconed  | 是否为纯图标按钮 | boolean   |  —  |  false  |
| hint  | 图标提示文字(只有在iconed为true时生效) | string   |  —  | ''  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
| tooltipDisabled | 是否禁用tooltip | boolean | - | false |
| tooltipEnterable | 鼠标是否能进入tooltip中 | boolean | - | false |
