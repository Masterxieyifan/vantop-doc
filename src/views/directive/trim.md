<!--
 * @Author: lingyong.zeng
 * @Date: 2022-06-17 09:41:01
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-06-17 11:04:06
 * @Description: 
 * @FilePath: /vantop-docs/src/views/directive/trim.md
-->
## v-trim

::: tip
v-trim: 用于 el-input 去除前后空格 (原生v-model.trim不能允许中间空格输入)
:::

### 使用方法
:::demo
```html
<template>
    <el-input 
        v-trim 
        v-model="value"
        style="width: 320px"
        placeholder="请输入"
    />
</template>
<script>
    export default {
        data() {
            return {
                value: ''
            };
        }
    }
</script>
```

