## Preview 图片预览

### 基础用法
:::demo

```html
<template>
    <div style="margin-bottom: 10px">
        <md-preview url="https://www.yh31.com/uploadfile/pzsmk5/202104141839417690.jpg"/>
    </div>
    <div>
        <md-preview size="large" url="https://www.yh31.com/uploadfile/pzsmk5/202104141839417690.jpg"/>
    </div>
</template>
```
:::
### 空值/加载失败
:::demo

```html
<template>
    <md-preview size="large" url="sdajsldjlksaj.jpg"/>
</template>
```
:::


### Preview Attributes

| 参数名称 | 说明               |类型               | 默认值 |
| -------- | ------------------ | -------- |-------- |
| url      | 图片地址 | String        |null      |

