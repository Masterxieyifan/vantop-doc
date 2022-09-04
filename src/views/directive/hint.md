<!--
 * @Author: lingyong.zeng
 * @Date: 2022-06-17 09:41:49
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-06-17 11:11:48
 * @Description: 
 * @FilePath: /vantop-docs/src/views/directive/hint.md
-->
## v-hint（v-tooltip)

::: tip
v-hint: el-tooltip 指令的实现方式（大数据量场景下有弹层单例优化）
:::

(原使用 v-tooltip 仍可使用，建议迭代版本用 v-hint 替换)

### 使用方法

:::demo
```html
<template>
    <el-button v-hint="'提示'">
        按钮
    </el-button>
    <br/>
    <br/>
    <el-tag 
        type="success" 
        v-hint="{ 
            content: '提示', 
            placement: 'bottom', 
            effect: 'light' 
        }"
    >
        成功
    </el-tag>
</template>
<script>
</script>
```
:::



### 方法参数

| 参数  | 说明  | 类型 | 可选值 | 默认值 |
| -- | -- | -- | -- | -- |
| content | 提示内容 | String | --  | -- 
| placement | 提示出现位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top |
| effect | 默认提供的主题 | String | dark/light | dark |