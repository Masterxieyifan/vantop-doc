## Sticky 吸底


### 基础用法
:::demo 采用`fixed`布局，因此同一个页面只能同时存在一个`Sticky`组件

```html
<template>
    <div class="sticky-example-block">
        <md-sticky
            @confirm="onConfirm"
            @cancel="onCancel"/>
    </div>
</template>
<script>
export default {
    methods: {
        onConfirm() {
            this.$message.success('Clicked the confirm button!');
        },
        onCancel() {
            this.$message.info('Clicked the cancel button!');
        },
    }
}
</script>
```
:::

### 默认插槽
:::demo
```html
<template>
    <div class="sticky-example-block">
        <md-sticky
            @confirm="onConfirm"
            @cancel="onCancel">
            <el-button>自定义</el-button>
        </md-sticky>
    </div>
</template>
<script>
export default {
    methods: {
        onConfirm() {
            this.$message.success('Clicked the confirm button!');
        },
        onCancel() {
            this.$message.info('Clicked the cancel button!');
        },
    }
}
</script>
```
:::


### Sticky Attributes

| 参数名称   | 描述                                                  | 类型    |是否必须    |默认值    |
| ---------- | ----------------------------------------------------- | ------------ | ------------ | ------------ |
| offset      | 左边偏移量                              | Number |否 |0 |
| disabled      | 是否禁用保存按钮                              | Boolean |否 |false |
| confirmText      | 保存按钮的文本                              | String |否 |'保存' |
| cancelText      | 取消按钮的文本                              | String' |否 |'取消' |
| hasCancel      | 是否显示取消按钮                              | Boolean |否 |true |
| hasConfirm      | 是否显示确认按钮                              | Boolean |否 |true |

### Sticky Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| confirm      | 点击保存按钮时触发                                 | 无 |
| cancel       | 点击取消按钮时触发                              | 无 |
### Sticky Slots

| 事件名称     | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| defauult   | 默认插槽（置于确认按钮和取消按钮中间）   | 无 |
