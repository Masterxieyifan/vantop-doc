## SearchList 搜索列表

### 基础用法
:::demo 暴露`search`,`emptyInput`,`delete`,`edit`,`click`事件，文本输入默认触发搜索

```html
<template>
    <md-search-list
        :list="list"
        @search="handleSearch"
        @emptyInput="handleEmptyText"
        @delete="handleDelete"
        @edit="handleEdit"
        @click="handleClick"
        :showNonDataText="true"
        :maxHeight="300"
        valueKey="id"
        labelKey="name"/>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '这是一个很长的文本你会换行吗',
                    id: 1,
                },
                {
                    name: 'list',
                    id: 2,
                },
                {
                    name: 'list',
                    id: 3,
                },
            ],
        };
    },
    methods: {
        handleEmptyText() {
            this.$message.info('Clicked the cancel button!');
        },
        handleSearch(text) {
            this.$message.success(`Clicked the confirm button!${text}`);
        },
        handleEmptyText() {
            this.$message.success('handleEmptyText has clicked!');
        },
        handleDelete(item) {
            this.$message.error(`handleDelete has clicked!${JSON.stringify(item)}`);
        },
        handleEdit(item) {
            this.$message.warning(`handleEdit has clicked!${JSON.stringify(item)}`);
        },
        handleClick(item) {
            this.$message.info(`handleClick has clicked! ${JSON.stringify(item)}`);
        },
    },
};
</script>
```
:::

### 默认激活
:::demo 可以设置`defaultActive`设置默认激活项

```html
<template>
    <md-search-list
        :list="list"
        :defaultActive="1"
        :showNonDataText="true"
        :maxHeight="300"
        valueKey="id"
        labelKey="name"/>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '这是一个很长的文本你会换行吗',
                    id: 1,
                },
                {
                    name: 'list',
                    id: 2,
                },
                {
                    name: 'list',
                    id: 3,
                },
            ],
        };
    },
};
</script>
```
:::



### SearchList Attributes


| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| emit | Search和激活index事件是否提交至外部 |Boolean  | false |
| list | 循环的列表 |Array  | [] |
| editable | 是否显示编辑按钮 |Boolean | true |
| deletable | 是否显示删除按钮 |Boolean | true     |
| defaultActive | 初始激活的下标 |Number or String | - |
| maxWidth | 最大宽度 |Number | 200 |
| maxWidth | 最大高度 |Number | 500 |
| valueKey | 列表循环时采用的value的键名 |String | value |
| labelKey | 列表循环时采用的label的键名 |String | label |
| placeHolderText | 搜索框的占位文本     |String | '搜索' |
| nonDataText | 列表无数据时的占位文本 |String | '暂无数据' |
| topPadding | 是否有上边距 |Boolean | true |
| bottomPadding | 是否有下边距 |Boolean | false |
| leftPadding | 是否有左边距 |Boolean | true |
| rightPadding | 是否有右边距 |Boolean | true |
|scrollBarClass| 滚动框样式|String| -|

### SearchList Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| click      | 点击列表项时触发                                      | 选中的列表项 |
| edit       | 点击列表项编辑按钮时触发                              | 选中的列表项 |
| delete     | 点击列表项删除按钮时触发                              | 选中的列表项 |
| search     | 搜索框输入时触发，默认300s的频率(emit为false无效)     | 输入框的值   |
| emptyInput | 搜索框输入为空时触发，默认300s的频率(emit为false无效) | -            |


### SearchList Slots

| 插槽名称   | 说明                                                  |
| ----------| -----------------------------------------------------|
| operations     | 子项右侧操作按钮区                                      |
| extraOperation  |  子项右侧操作按钮区，可添加额外的按钮                 |
