## SelectTree 下拉选择树


### 单选（所有节点可选，默认展开所有节点）
:::demo 暴露`multiple`,`checkStrictly`,`singleLeafSelect`,`selectTreeProps`,`handleCheckChange`事件，文本输入默认触发搜索，

```html
<template>
    <md-select-tree 
        v-model="selectVal"
        :multiple="false"
        :treeData="trees"
        setOptionWidth="300"
        clearable
        :selectTreeProps="selectTreeProps"
        label="内嵌标签"
        @handleCheckChange="handleChange">
    </md-select-tree>
</template>
<script>

export default {
    data(){
        return {
            selectVal : '',
            selectTreeProps : {
                disabled: 'disabled', // 指定节点选择框是否禁用为节点对象的某个属性值
                isLeaf: 'isLeaf', // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
                label: 'name', // 指定节点标签为节点对象的某个属性值
                children: 'children', // 指定子树为节点对象的某个属性值
            },
            trees: [
                {
                    "id": 270437,
                    "name": "统计（设置了面板宽度setOptionWidth为300，文本内容超过下拉面板宽度就溢出了，并且还给出了提示！）",
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
    methods: {
        handleChange(val) {
            this.$message.info('Clicked the tree node!', val);
        },
    },
};
</script>
```
:::


### 单选（只有叶子节点可选，默认展开所有节点）
:::demo 设置`singleLeafSelect`

```html
<template>
    <md-select-tree 
        :singleLeafSelect="true"
        v-model="selectVal"
        :multiple="false"
        :treeData="trees"
        style="width:500px"
        :selectTreeProps="selectTreeProps"
        @handleCheckChange="handleChange">
    </md-select-tree>
</template>
<script>

export default {
    data(){
        return {
            selectVal : '',
            selectTreeProps : {
                disabled: 'disabled', // 指定节点选择框是否禁用为节点对象的某个属性值
                isLeaf: 'isLeaf', // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
                label: 'name', // 指定节点标签为节点对象的某个属性值
                children: 'children', // 指定子树为节点对象的某个属性值
            },
            trees: [
                {
                    "id": 270437,
                    "name": "统计（不设置下拉面板宽度，设置选择框的宽度，面板宽度会根据选择框宽度来自适应）",
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
    methods: {
        handleChange(val) {
            this.$message.info('Clicked the tree node!', val);
        },
    },
};
</script>
```
:::


### 单选（不展开节点）
:::demo 设置`defaultExpandAll`

```html
<template>
    <md-select-tree 
        :singleLeafSelect="true"
        :defaultExpandAll="false"
        v-model="selectVal"
        :multiple="false"
        :treeData="trees"
        :selectTreeProps="selectTreeProps"
        @handleCheckChange="handleChange">
    </md-select-tree>
</template>
<script>

export default {
    data(){
        return {
            selectVal : '',
            selectTreeProps : {
                disabled: 'disabled', // 指定节点选择框是否禁用为节点对象的某个属性值
                isLeaf: 'isLeaf', // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
                label: 'name', // 指定节点标签为节点对象的某个属性值
                children: 'children', // 指定子树为节点对象的某个属性值
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
        handleChange(val) {
            this.$message.info('Clicked the tree node!', val);
        },
    },
};
</script>
```
:::


### 多选（带确认框）
:::demo 设置`hasConfirm`

```html
<template>
    <md-select-tree 
        v-model="selectVal"
        :treeData="trees"
        :multiple="true"
        hasConfirm
        clearable
        :selectTreeProps="selectTreeProps"
        @handleCheckChange="handleChange">
    </md-select-tree>
</template>
<script>

export default {
    data(){
        return {
            selectVal : [],
            selectTreeProps : {
                disabled: 'disabled', // 指定节点选择框是否禁用为节点对象的某个属性值
                isLeaf: 'isLeaf', // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
                label: 'name', // 指定节点标签为节点对象的某个属性值
                children: 'children', // 指定子树为节点对象的某个属性值
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
        handleChange(val) {
            this.$message.info('Clicked the tree node!', val);
        },
    },
};
</script>
```
:::
### 多选（节点级联）
:::demo 设置`multiple`

```html
<template>
    <md-select-tree 
        v-model="selectVal"
        :treeData="trees"
        :multiple="true"
        clearable
        :selectTreeProps="selectTreeProps"
        @handleCheckChange="handleChange">
    </md-select-tree>
</template>
<script>

export default {
    data(){
        return {
            selectVal : [],
            selectTreeProps : {
                disabled: 'disabled', // 指定节点选择框是否禁用为节点对象的某个属性值
                isLeaf: 'isLeaf', // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
                label: 'name', // 指定节点标签为节点对象的某个属性值
                children: 'children', // 指定子树为节点对象的某个属性值
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
        handleChange(val) {
            this.$message.info('Clicked the tree node!', val);
        },
    },
};
</script>
```
:::


### 多选（节点不级联）
:::demo 设置`multiple`、`checkStrictly`

```html
<template>
    <md-select-tree 
        v-model="selectVal"
        :treeData="trees"
        :multiple="true"
        :checkStrictly="true"
        :collapse-tags="false"
        clearable
        :selectTreeProps="selectTreeProps"
        @handleCheckChange="handleChange">
    </md-select-tree>
</template>
<script>

export default {
    data(){
        return {
            selectVal : [],
            selectTreeProps : {
                disabled: 'disabled', // 指定节点选择框是否禁用为节点对象的某个属性值
                isLeaf: 'isLeaf', // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
                label: 'name', // 指定节点标签为节点对象的某个属性值
                children: 'children', // 指定子树为节点对象的某个属性值
            },
            trees: [
                {
                    "id": 270437,
                    "name": "统计（设置了collapse-tags为false）",
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
    methods: {
        handleChange(val) {
            this.$message.info('Clicked the tree node!', val);
        },
    },
};
</script>
```
:::


### 多选（checkLoading）
:::demo 设置`multiple`、`checkLoading`

```html
<template>
    <md-select-tree 
        v-model="selectVal"
        :treeData="trees"
        :checkLoading="true"
        :multiple="true"
        :checkStrictly="true"
        :selectTreeProps="selectTreeProps"
        @handleCheckChange="handleChange">
    </md-select-tree>
</template>
<script>

export default {
    data(){
        return {
            selectVal : [],
            selectTreeProps : {
                disabled: 'disabled', // 指定节点选择框是否禁用为节点对象的某个属性值
                isLeaf: 'isLeaf', // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
                label: 'name', // 指定节点标签为节点对象的某个属性值
                children: 'children', // 指定子树为节点对象的某个属性值
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
        handleChange(val) {
            this.$message.info('Clicked the tree node!', val);
        },
    },
};
</script>
```
:::


### SelectTree Attributes
- 基于el-tree实现，使用了$attr, $listener进行透明传参
- 使用了v-model 进行双向绑定数据，双向绑定数据类型支持Array、Number、String类型

| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| selectTreeProps | 配置选项 | Object | { disabled: '指定节点选择框是否禁用', isLeaf: '指定节点是否为叶子节点', label:'指定节点标签名', children: '指定子树节点' }|
| treeData | 下拉树数据 | Array | [] |
| label | 内嵌标签 | String | - |
| multiple | 是否多选 | Boolean | true（默认多选） |
| disabled | 是否禁用 | Boolean | false（默认非置灰状态） |
| placeholder | 搜素框为空提示 | String | '请选择' |
| clearable | 是否支持清空 | Boolean | false（默认不可清空） |
| hasConfirm | 多选模式下是否去要确认框 | Boolean | false |
| checkStrictly | 多选时，节点是否级联 |Boolean | false（默认级联） |
| singleLeafSelect | 单选模式下，是否只能选中叶子节点 |Boolean | false（默认为false，则表示所有节点都可选择，为true则表示只能选择叶子节点）|
| singleLeafWarning | 单选模式下，选中非叶子结点是否警告提示 |Boolean | false |
| defaultExpandAll | 是否全部展开下拉树 | Boolean | true（默认全部展开） |
| checkLoading | 多选模式下，勾选节点时是否loading | Boolean | false（默认非loading状态） |
| setOptionWidth | 设置下拉面板宽度 | Number、String | 空（默认为空，面板宽度自适应输入框宽度；设置值后面板宽度根据设置值显示）|
| size | 输入框尺寸(可选值medium/small/mini) | String | - （默认为空）|
| collapse-tags | 多选时是否将选中值按文字的形式展示 | Boolean | true（默认合并展示） |
| node-key | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | String | id |

### SelectTree Events
| 事件 | 说明  | 回调参数 |
|  ----  | ----  |----  |
| handleCheckChange | 选中节点发生变化时事件 | 共一个参数，为当前节点的数据 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |

### SelectTree Slots
| 参数名称 | 说明                    |
| -------- | ----------------------|
| empty | 无选项时的列表 |