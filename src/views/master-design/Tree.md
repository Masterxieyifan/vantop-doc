## Tree 搜索树2.0
可拖拽搜索树

### 基础用法
:::demo 暴露`treeProps`,`append`,`modify`,`remove`,`drag`事件，文本输入默认触发搜索,`treeProps` 中声明了 `count` 属性，则会展示个数

```html
<template>
    <md-tree 
        :data="trees"
        draggable
        :treeProps="treeProps"
        @append="handleAppend"
        @modify="handleModify"
        @remove="handleRemove"
        @node-click="handleClick"
        @drag="handleDrag"
        >
            <template slot="append">
                <i class="el-icon-folder-add"></i>
            </template>
            <template slot="modify">
                <i class="el-icon-edit-outline"></i>
            </template>
            <template slot="remove">
                <i class="el-icon-delete"></i>
            </template>
        </md-tree>
</template>
<script>
export default {
    data(){
        return {
            treeProps : {
                label: 'name', // 标签显示
                children: 'children', // 子级
                count: 'countNumber' // 显示个数
            },
            trees: [
                {
                    "id": 270437,
                    "name": "统计",
                    "children": [
                        {
                            "id": 270438,
                            "name": "利润日报",
                            "children": null,
                            "countNumber": 4
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
    methods: {
        handleAppend(node) {
            this.$message.info('append btn has clicked', node);
        },
        handleModify(node) {
            this.$message.info('modify btn has clicked', node);
        },
        handleRemove(node) {
            this.$message.info('remove btn has clicked', node);
        },
        handleClick(node) {
            this.$message.info('node has clicked', node);
        },
        handleDrag(draggingNode, drag, type) {
            this.$message.info('drag btn has clicked', draggingNode, drag, type);
        },
    },
};
</script>
```
:::


### 自定义tooltip和content
:::demo 使用slot自定义节点

```html
<template>
    <md-tree 
        :data="trees"
        draggable
        @append="handleAppend"
        @modify="handleModify"
        @remove="handleRemove"
        @node-click="handleClick"
        @drag="handleDrag">
            <template slot="vanContent" slot-scope="{data}">
                <!-- <span>{{data.countNumber ? `${data.name} (${data.countNumber})` : data.name}}</span> -->
                <span>customer-tooltip</span>
            </template>
            <template slot="vanTooltip" slot-scope="{data}">
                <span>{{data.countNumber ? `${data.name} [${data.countNumber}]` : data.name}}</span>
            </template>
            <template slot="append">
                <i class="el-icon-folder-add"></i>
            </template>
            <template slot="modify">
                <i class="el-icon-edit-outline"></i>
            </template>
            <template slot="remove">
                <i class="el-icon-delete"></i>
            </template>
    </md-tree>
</template>
<script>
export default {
    data(){
        return {
            treeProps : {
                label: 'name', // 标签显示
                children: 'children', // 子级
                count: 'countNumber' // 显示个数
            },
            trees: [
                {
                    "id": 270437,
                    "name": "统计",
                    "children": [
                        {
                            "id": 270438,
                            "name": "利润日报",
                            "children": null,
                            "countNumber": 4
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
    methods: {
        handleAppend(node) {
            this.$message.info('append btn has clicked', node);
        },
        handleModify(node) {
            this.$message.info('modify btn has clicked', node);
        },
        handleRemove(node) {
            this.$message.info('remove btn has clicked', node);
        },
        handleClick(node) {
            this.$message.info('node has clicked', node);
        },
        handleDrag(draggingNode, drag, type) {
            this.$message.info('drag btn has clicked', draggingNode, drag, type);
        },
    },
};
</script>
```
:::



### 拖拽验证
:::demo 拖拽时判定目标节点能否被放置

```html
<template>
    <md-tree 
        :data="trees"
        draggable
        :treeProps="treeProps"
        @append="handleAppend"
        @modify="handleModify"
        @remove="handleRemove"
        @node-click="handleClick"
        @drag="handleDrag"
        :dropPlaceStrictly="true"
        :dropPlaceStrictlyFn="handleAllowDrop">
            <template slot="append">
                <i class="el-icon-folder-add"></i>
            </template>
            <template slot="modify">
                <i class="el-icon-edit-outline"></i>
            </template>
            <template slot="remove">
                <i class="el-icon-delete"></i>
            </template>
    </md-tree>
</template>
<script>
export default {
    data(){
        return {
            treeProps : {
                label: 'name', // 标签显示
                children: 'children', // 子级
                count: 'countNumber' // 显示个数
            },
            trees: [
                {
                    "id": 270437,
                    "name": "统计",
                    "children": [
                        {
                            "id": 270438,
                            "name": "利润日报",
                            "children": null,
                            "countNumber": 4
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
    methods: {
        handleAppend(node) {
            this.$message.info('append btn has clicked', node);
        },
        handleModify(node) {
            this.$message.info('modify btn has clicked', node);
        },
        handleRemove(node) {
            this.$message.info('remove btn has clicked', node);
        },
        handleClick(node) {
            this.$message.info('node has clicked', node);
        },
        handleDrag(draggingNode, drag, type) {
            this.$message.info('drag btn has clicked', draggingNode, drag, type);
        },
        handleAllowDrop(draggingNode, dropNode, nodeType) {
            console.log('trggier allow drop fn,', draggingNode, dropNode, nodeType);
            return false;
        },
    },
};
</script>
```
:::




### Tree Attributes
基于el-tree实现，使用了$attr, $listener 进行透明传参

| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| search | 是否显示搜索框 |Boolean | true |
| placeHodlerText | 搜索框的占位文本 |String | 搜索 |
| width | 默认宽度 |Number | 200 |
| height | 默认高度 |Number | 500 |
| noRootTitle | 无根节点数据时的文字提示 |String | 暂无节点数据 |
| data | 节点数据 |Array | [] |
| draggable | 是否可拖拽 |Boolean | false |
| treeProps | 配置选项 | Object | {label:'指定节点标签为节点对象的某个属性值', children: '指定子树为节点对象的某个属性值', count: '指定节点包含个数为节点对象的某个属性' }|
| isInjectTree | 新增时是否直接插入树 | Boolean | true
| dropPlaceStrictly | 拖拽时是否严格定义节点落下的范围 | Boolean | false
| dropPlaceStrictlyFn | 拖拽时节点落下范围的函数，暴露出el-tree的allow-drop的draggingNode, dropNode, dropType三个参数 | Function | -


### Tree Events
| 事件 | 说明  | 回调参数 |
|  ----  | ----  |----  |
| append | 添加节点 | 共一个参数，为当前节点的数据 |
| modify | 修改节点 | 共一个参数，为当前节点的数据 |
| remove | 删除节点 | 共一个参数，为当前节点的数据 |
| node-click | 点击节点 | 共一个参数，为当前节点的数据 |
| drag | 拖拽节点 | 共三个参数，为当前拖拽节点的数据，放置节点数据，放置类型 |
