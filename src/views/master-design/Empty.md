<!--
 * @Author: 陈建中
 * @Date: 2021-07-15 15:49:14
 * @LastEditTime: 2021-08-26 14:41:29
 * @LastEditors: 蔡远程
-->
## Empty 空状态
空状态时的占位提示。

### 基础用法
:::demo

```html
<template>
    <md-empty />
</template>
```
:::

### 设置图片大小
传入 `image-size` 属性设置图片大小
:::demo

```html
<template>
    <md-empty :image-size="100" />
</template>
```
:::

### 自定义图片、标题和描述
传入 `image`, `title`, `description` 属性设置标题和描述内容

:::demo

```html
<template>
    <md-empty
        title="主要标题内容"
        description="描述内容"
        image="//nextop-saas-web-static-prod.oss-cn-shenzhen.aliyuncs.com/nextop-erp-micro/saas/empty/empty-log.svg" />
</template>
```
:::

### 行内布局
设置 `inline` 属性可将布局变为行内

:::demo

```html
<template>
    <md-empty inline description="描述文本内容" />
</template>
```
:::

### 底部内容
使用默认插槽可在底部插入内容
:::demo

```html
<template>
    <md-empty>
        <el-button type="primary">主要按钮</el-button>
    </md-empty>
</template>
```
:::

### Empty Attributes
| 参数 | 说明 | 类型 |可选值| 默认值 |
|  ----  | ----  |---- | ---| ---- |
| image | 图片地址 | string| - | - |
| image-size | 图片大小(宽度) | number| - | - |
| title | 标题 | string| - | 暂无数据 |
| description | 文本描述 | string| - | - |
| inline | 行内布局 | boolean| - | false |

### Empty Slots
| Name | 说明 |
|  ----  | ---- |
| default | 自定义底部内容 |
| image | 自定义图片 |
| title | 自定义标题 |
| description | 自定义描述文字 |