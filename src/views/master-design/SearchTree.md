## Search Tree 搜索树

### 基础用法
:::demo 监听 `change` 事件，会将分隔好的数组返回。

```html
<template>
    <md-search-tree :data="trees"/>
</template>
<script>
export default {
    data() {
        return {
            trees: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }],
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
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

### 参数列表
基于[el-tree](https://element.eleme.cn/#/zh-CN/component/tree#scoped-slot)实现，使用了$attr, $listener 进行透明传参


| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| search | 是否显示搜索框 |Boolean | true |
| data | tree类型的数据 |Array | true |
| width | 宽度 |Number | 200 |
| height | 高度 |Number | 500 |
| placeHolderText | 搜索框的占位文本|String | 搜索 |
