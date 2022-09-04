<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2021-12-23 15:18:17
 * @LastEditTime: 2021-12-23 20:24:51
 * @LastEditors: 蔡远程
-->
## Scrollbar 滚动条
用于替换浏览器原生滚动条。

### 基础用法
:::demo 通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。
```html
<template>
    <md-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
            {{ item }}
        </p>
    </md-scrollbar>
</template>
```
:::

### 横向滚动
:::demo 当元素宽度大于滚动条宽度时，会显示横向滚动条。
```html
<template>
    <md-scrollbar>
        <div class="flex-content">
            <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
        </div>
    </md-scrollbar>
</template>
```
:::

### 最大高度
:::demo 当元素高度超过最大高度，才会显示滚动条。
```html
<template>
    <div>
        <el-button @click="add">新增</el-button>
        <el-button @click="onDelete" style="margin-bottom: 20px;">删除</el-button>
        <md-scrollbar max-height="400px">
            <p v-for="item in count" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
        </md-scrollbar>
    </div>
</template>
<script>
export default {
    data() {
    return {
        count: 3,
    }
  },
  methods: {
    add() {
      this.count++
    },
    onDelete() {
      if (this.count > 0) {
        this.count--
      }
    },
  },
}
</script>
```
:::


### 手动滚动
:::demo 通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。
```html
<template>
    <div>
        <md-scrollbar ref="scrollbar" height="400px" always @scroll="scroll">
            <div ref="inner">
                <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
                    {{ item }}
                </p>
            </div>
        </md-scrollbar>
        <el-slider
            v-model="value"
            :max="max"
            :format-tooltip="formatTooltip"
            @input="inputSlider"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            max: 0,
            value: 0,
        }
    },
    mounted() {
        this.max = this.$refs.inner.clientHeight - 380
    },
    methods: {
        inputSlider(value) {
            this.$refs.scrollbar.setScrollTop(value)
        },
        scroll({ scrollTop }) {
            this.value = scrollTop
        },
        formatTooltip(value) {
            return `${value} px`
        },
    },
}
</script>
```
:::

### Scrollbar Attributes

| 参数名称 | 说明                    |类型               | 默认值 |
| -------- | ----------------------| -------- |-------- |
| height      | 滚动条高度 | String｜Number   |   -    |
| max-height | 滚动条最大高度 | String｜Number | - |
| native | 是否使用原生滚动条样式 | boolean | false |
| wrap-style | 包裹容器的自定义样式 | string｜Object | - |
| wrap-class | 包裹容器的自定义类名 | string｜Array｜Object | - |
| view-style | 视图的自定义样式 |  string｜Object | - |
| view-class | 视图的自定义类名 |  String｜Array｜Object | - |
| noresize | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 | boolean | false |
| tag | 视图的元素标签 | string | div |
| always | 滚动条总是显示 | boolean | false |
| min-size | 滚动条最小尺寸 | number | 20 |


### Scrollbar Methods

| 方法名称 | 说明               | 参数 |
| -------- | ------------------ | -------- |
| setScrollTop  | 设置滚动条到顶部的距离		 | (scrollTop: number) |
| setScrollLeft  | 设置滚动条到左边的距离 | (scrollLeft: number) |
| update  | 手动更新滚动条状态 | - |


### Scrollbar Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| scroll  | 滚动触发的时间	 | 滚动距离 { scrollLeft, scrollTop } |


### Scrollbar Slots
| 名称 | 说明                    |
| -------- | ----------------------|
| - | 自定义默认插槽 |