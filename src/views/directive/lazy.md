<!--
 * @Author: lingyong.zeng
 * @Date: 2022-06-17 09:42:56
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-06-17 11:00:25
 * @Description: 
 * @FilePath: /vantop-docs/src/views/directive/lazy.md
-->
## v-lazy / v-lazy-container

::: tip
v-lazy: 用于实现图片资源懒加载（进入可视区域再进行资源请求）
:::


### 使用方法
具体用法可参照 [VueLazyload](https://github.com/hilongjw/vue-lazyload)

:::demo
```html
<template>
    <img 
        v-lazy="'https://picsum.photos/id/101/200/300'"
        style="width: 200px; height: 300px"
    >
</template>
<script>
</script>
```
:::


### 方法参数

| 参数  | 说明  | 类型 | 默认值
| -- | -- | -- | -- |
| - | - | - | - |

