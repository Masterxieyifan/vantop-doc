## BasicBox
为了解决目前列表页中无法占满全屏的痛点而出现




### 基础用法
:::demo 默认自带边距

```html
<template>
    <md-basic-box>basic box</md-basic-box>
</template>
```
:::



### 无边距
:::demo 可以通过设置`padding`为`false`去除

```html
<template>
    <md-basic-box :padding="false">basic box</md-basic-box>
</template>
```
:::

### BasicBox Attributes
| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |---- | ---|
| padding | 边距 | Boolean | true |