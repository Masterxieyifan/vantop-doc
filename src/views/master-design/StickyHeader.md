## StickyHeader 吸顶


### 基础用法
:::demo 抛出两个事件，`cancel`和`edit`

```html
<template>
    <div class="sticky-header-expamle">
        <md-sticky-header
            title="标题"
            :statusButtonOptions="statusButtonOptions"
            @cancel="cancel"
            @edit="edit"/>
        <p style="height:200px">test test test test</p>
        <p style="height:300px">test test test test</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            statusButtonOptions: {
                text: '待发货',
                color: '#F38901',
                bgColor: '#FFF1DF'
            }
        };
    },
    methods: {
        cancel() {
            this.$message.info('Clicked the cancel button!')
        },
        edit() {
            this.$message.success('Clicked the edit button!')
        }
    }
};
</script>
```
:::


### StickyHeader Attributes

| 参数名称 | 说明                    |类型               | 默认值 |
| -------- | ----------------------| -------- |-------- |
| title      | 标题 | String        |-      |
| statusButtonOptions | 状态按钮配置 | Object       | {text：‘按钮文字’，color：’字体颜色‘，bgColor：’按钮背景色‘}    |
| hasCancel | 是否显示取消按钮 | Boolean | true |
| hasEdit | 是否显示编辑按钮 | Boolean | true |
| cancelLoading | 取消按钮加载中 | Boolean | false |
| editLoading | 编辑按钮加载中 | Boolean | false |
 

### StickyHeader Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| cancel      | 点击取消按钮时触发 | -        |
| edit | 点击编辑按钮时触发 | -        |


### StickyHeader Slots

| slot名称   | 说明                                                  | 参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| default      | 右侧按钮组                                 | - |


