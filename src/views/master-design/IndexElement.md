## IndexElement 组件

### 基本用法
:::demo 配置 `zeroType` 为true, 可禁用icon，数值为0，0%，-， -%变为普通文字。

```html
<template>
    <span style="margin-bottom: 8px;">不带上下箭头：</span>
    <md-index-element
        indexElement="99.99%"
        indexElementTooltip="indexElementTooltip"
    />
    <br /><br />
    <span style="margin-bottom: 8px;">带上下箭头：</span>
    <md-index-element
        :up="false"
        indexElement="99.99%"
        indexElementTooltip="indexElementTooltip"
        style="margin-right: 60px"
    />
    <md-index-element
        :up="false"
        indexElement="99.99%"
        indexElementTooltip="indexElementTooltip"
        reverse
        style="margin-right: 60px"
    />
    <md-index-element
        :up="true"
        indexElement="99.99%"
        indexElementTooltip="indexElementTooltip"
        style="margin-right: 60px"
    />
    <md-index-element
        :up="true"
        indexElement="99.99%"
        indexElementTooltip="indexElementTooltip"
        reverse
    />
    <br /><br />
    <span style="margin-bottom: 8px;">值为 （0、0%、-、-% ）去除icon：</span>
    <md-index-element
        :up="false"
        indexElement="0"
        indexElementTooltip="indexElementTooltip"
        style="margin-right: 60px"
        :zeroType="true"
    />
    <md-index-element
        :up="false"
        indexElement="0%"
        indexElementTooltip="indexElementTooltip"
        style="margin-right: 60px"
        :zeroType="true"
    />
    <md-index-element
        :up="true"
        indexElement="-"
        indexElementTooltip="indexElementTooltip"
        style="margin-right: 60px"
        :zeroType="true"
    />
    <md-index-element
        :up="true"
        indexElement="-%"
        indexElementTooltip="indexElementTooltip"
        style="margin-right: 60px"
        :zeroType="true"
    />
    <md-index-element
        :up="true"
        indexElement="111"
        indexElementTooltip="indexElementTooltip"
        style="margin-right: 60px"
        :zeroType="true"
    />
</template>
```
:::

### IndexElement Attributes

| 参数 | 说明 | 类型 | 是否必须 |默认值 |
| -------- | ----------- |------ | ---- | ---- |
| up | icon图标 | Boolean/String/Null(true, false, '', null) | 是 | - |
| indexElement | 数据值 | String | 是 | - |
| indexElementTooltip | 悬浮展示文案 | String | 否 | - |
| reverse | 图标和数值是否反向展示 | Boolean | 否 | false |
| zeroType | 可禁用icon，数值为0，0%，-， -%变为普通文字 | Boolean | 否 | false |