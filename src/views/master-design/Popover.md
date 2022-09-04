## Popover 省略弹窗

- 此文档是为了备注之类的缩略弹出气泡显示方便复制
- 宽度最大800px 最小10px
- 如果写了:width会固定显示宽度   没写这个属性会根据内容动态显示宽度


### 基础用法
:::demo 配置`content`来决定弹窗内容，同时配置`line`来决定几行显示，

```html
<template>
    <div style="width: 120px">
        <md-popover
            :line="2"
            :content="content"
        >
            {{content}}
        </md-popover>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: 'The quick brown fox jumps over a lazy dog.'
        };
    },
};
</script>
```
:::

### 弹窗内显示非文本内容
:::demo 通过具名插槽slot="content"向弹框内插入非文本内容

```html
<template>
    <div style="width: 120px">
        <md-popover
            :line="2"
            :width="300"
        >
            <div slot="content">
                <el-button>hello!</el-button>
            </div>
            {{content}}
        </md-popover>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: '我是一行超长的文本，你会换行吗，会吗，会吗，会吗,我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗我是一行超长的文本，你会换行吗，会吗，会吗，会吗'
        };
    },
};
</script>
```
:::

### Popover Attributes
使用了$attr, $listener 进行透明传参,更多参数请参考[el-popover](https://element.eleme.cn/#/zh-CN/component/popover#events)

| 参数 | 说明 | 类型 | 默认值 |
| -------- | ----------- |------ | ---- |
| placement | 气泡弹出的方向 |String | 'top' |
| line      | 多少行才省略   |Number | 1 |
| content      | 气泡内容   |String | '' |


### Popover Slots

| 插槽名称 | 说明               |
| -------- | ------------------ |
| content  | 气泡弹窗内容 |