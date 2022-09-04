## TreeTransfer 树形穿梭框


### 基础用法
:::demo 监听 `change` 事件，会将分隔好的数组返回。

```html
<template>
  <div class="container">
    <md-tree-transfer
        v-model="selectData"
        :data="trees"
        :props="props"
        ref="treeTransfer">
    </md-tree-transfer>
  </div>
</template>
<script>
export default {
    data() {
        return {
            props: {
                label: 'name',
                key: 'id',
                children: 'children'
            },
            selectData:[270438, 270439, 270440, 270441],
            trees: [
                {
                    "id": 270437,
                    "name": "统计",
                    "children": [
                        {
                            "id": 270438,
                            "name": "利润日报",
                            "children": null,
                        },
                        {
                            "id": 270439,
                            "name": "利润周报",
                            "children": null,
                        },
                        {
                            "id": 270440,
                            "name": "利润月报",
                            "children": null,
                        },
                        {
                            "id": 270441,
                            "name": "销售统计",
                            "children": null,
                        }
                    ],
                    "menued": 0
                },
                {
                    "id": 1,
                    "name": "商品",
                    "children": [
                        {
                            "id": 270226,
                            "name": "品牌管理",
                            "children": null,
                        },
                        {
                            "id": 270227,
                            "name": "SKU认领",
                            "children": null,
                        },
                        {
                            "id": 270228,
                            "name": "分类管理",
                            "children": null,
                        },
                    ],
                },
            ]
        }
    },
};
</script>

```
:::



### TreeTransfer Attributes
> 使用了v-model 进行双向绑定数据，双向绑定数据类型支持Array类型

| 参数名称 | 说明                    |类型               | 默认值 |
| -------- | ----------------------| -------- |-------- |
| data      | transfer的数据 | Array        |-      |
| props | 数据源的字段别名 | Object | {key: 'id', label: 'label', children: 'children'} |
| leftPlaceholder | 自定义左侧列表输入框提示文案 | String | 请输入关键字 |
| rightPlaceholder | 自定义右侧列表输入框提示文案 | String | 请输入关键字 |
| removeAllPrompt | 自定义全部移除按钮提示 | String | 是否确定移除所有选中数据？ |
| removeAllTitle | 自定义全部移除按钮标题 | String | 批量移除 |
| leftHeadLeft | 自定义左侧列表头部左边文案 | String | 未选 |
| rightHeadLeft | 自定义右侧列表头部左边文案 | String | 已选 |
| rightHeadRight | 自定义右侧列表题头部全部移除按钮文案 | String | 全部移除 |
 

### TreeTransfer Methods

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| getSelectedNodes      | 获取当前被选中节点的 data，若没有节点被选中则返回空数组 | 当前选中的data        |



#### 使用示例

```html
    <tree-transfer
        v-model="selectData"
        :data="trees"
        :props="props"
        ref="treeTransfer">
    </tree-transfer>
```
