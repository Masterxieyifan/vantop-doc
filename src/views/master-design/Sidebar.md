## Sidebar 组件

### 基础树
:::demo 当 `selectionMode` 为 `checkbox` 时，树形为多选
```html
<template>
    <div class="md-sidebar-demo">
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            :data="data"
            :loading="loading"
            @refresh="refresh"
            @change="handleChange"
        />
    
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            :data="data"
            :loading="loading"
            selectionMode="checkbox"
            @refresh="refresh"
            @change="handleChange"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            data: [{
                "id": 270437,
                "label": "统计",
                "children": [
                    {
                        "id": 270438,
                        "label": "利润日报利润日报利润日报利润日报",
                        "children": [
                            {
                                "id": 27230440,
                                "label": "利润月报11",
                                "children": null,
                                "data": 10,
                            },
                            {
                                "id": 272370441,
                                "label": "销售统计11",
                                "children": null,
                                "data": 10
                            },
                            {
                                "id": 272370449,
                                "label": "利润月报22",
                                "children": null,
                                "data": 10
                            },
                            {
                                "id": 2704472333,
                                "label": "销售统计22",
                                "children": null,
                                "data": 10
                            }
                        ],
                    },
                    {
                        "id": 270439,
                        "label": "利润周报",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270440,
                        "label": "利润月报1",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270441,
                        "label": "销售统计1",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270449,
                        "label": "利润月报2",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 2704433,
                        "label": "销售统计2",
                        "children": null,
                        "data": 10
                    }
                ],
            },
            {
                "id": 1,
                "label": "商品",
                "children": [
                    {
                        "id": 270226,
                        "label": "品牌管理",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270227,
                        "label": "SKU认领",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270228,
                        "label": "分类管理",
                        "children": null,
                        "data": 10
                    },
                ],
            }],
        }
    },
    methods: {
        refresh() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        handleChange(data) {
            console.log(data);
        }
    }
};
</script>
```
:::


### 基础列表
:::demo 当 `type` 为 `list`，`selectionMode` 为 `checkbox` 时，为多选列表
```html
<template>
    <div class="md-sidebar-demo">
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            type="list"
            :data="data"
            :loading="loading"
            @refresh="refresh"
            @change="handleChange"
        />
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            type="list"
            selectionMode="checkbox"
            :data="data"
            :loading="loading"
            @refresh="refresh"
            @change="handleChange"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            data: [{
                "id": 270437,
                "label": "统计统计统计统计统计统计统计统计统计统计统计统计统计统计",
                "data": 10
            },
            {
                "id": 270439,
                "label": "利润周报",
                "data": 10
            },
            {
                "id": 270440,
                "label": "利润月报1",
                "data": 10
            },
            {
                "id": 270441,
                "label": "销售统计1",
                "data": 10
            },
            {
                "id": 270449,
                "label": "利润月报2",
                "data": 10
            },
            {
                "id": 2704433,
                "label": "销售统计2",
                "data": 10
            }],
        }
    },
    methods: {
        refresh() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        handleChange(data) {
            console.log(data);
        }
    }
};
</script>
```
:::


### 按钮配置
:::demo `operations` 可配置操作按钮； `headerOperations` 可配置头部按钮； `footerOperations` 可配置底部按钮
```html
<template>
    <div>
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            :data="data"
            :loading="loading"
            :operations="operations"
            :headerOperations="headerOperations"
            :footerOperations="footerOperations"
            @refresh="refresh"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            operations: [
                {
                    icon: 'md-icon-edit-16',
                    text: '编辑',
                    handler: ({data, node}) => {
                        console.log('数据', data);
                        console.log('节点', node);
                    },
                    validator: ({data, node}) => node.isLeaf,
                    disabled: ({data, node}) => data.id === 270438
                },
                {
                    icon: 'md-icon-copy-16',
                    text: '复制',
                    handler: ({data, node}) => {
                        console.log('数据', data);
                        console.log('节点', node);
                    },
                    validator: ({data, node}) => node.isLeaf
                },
                {
                    icon: 'md-icon-delete-16',
                    text: '删除',
                    handler: ({data, node}) => {
                        console.log('数据', data);
                        console.log('节点', node);
                    },
                    validator: ({data, node}) => node.isLeaf,
                    disabled: ({data, node}) => data.id === 270438
                }
            ],
            headerOperations: [
                {
                    icon: 'md-icon-edit-16',
                    text: '编辑',
                    handler: (select, data) => {
                        console.log('选中数据', select);
                        console.log('全部数据', data);
                    }
                }
            ],
            footerOperations: [
                {
                    icon: 'md-icon-instructions-16',
                    text: '创建类型',
                    handler: (select, data) => {
                        console.log('选中数据', select);
                        console.log('全部数据', data);
                    }
                },
                {
                    icon: 'md-icon-instructions-16',
                    text: '创建类型',
                    handler: (select, data) => {
                        console.log('选中数据', select);
                        console.log('全部数据', data);
                    }
                },
                {
                    icon: 'md-icon-instructions-16',
                    text: '创建类型',
                    handler: (select, data) => {
                        console.log('选中数据', select);
                        console.log('全部数据', data);
                    }
                },
            ],
            loading: false,
            data: [{
                "id": 270437,
                "label": "统计",
                "children": [
                    {
                        "id": 270438,
                        "label": "利润日报利润日报利润日报利润日报利润日报利润日报",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270439,
                        "label": "利润周报",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270440,
                        "label": "利润月报",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270441,
                        "label": "销售统计",
                        "children": null,
                        "data": 10
                    }
                ],
                "menued": 0
            },
            {
                "id": 1,
                "label": "商品",
                "children": [
                    {
                        "id": 270226,
                        "label": "品牌管理",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270227,
                        "label": "SKU认领",
                        "children": null,
                        "data": 10
                    },
                    {
                        "id": 270228,
                        "label": "分类管理",
                        "children": null,
                        "data": 10
                    },
                ],
            }],
        }
    },
    methods: {
        refresh() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }
    }
};
</script>
```
:::

### 空数据
:::demo
```html
<template>
    <div>
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            :data="data"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [],
        }
    }
};
</script>
```
:::


### 严格不关联
:::demo `radioStrictly` 和 `checkStrictly` 分别控制单选多选时父级是否严格不关联
```html
<template>
    <div class="md-sidebar-demo">
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            radioStrictly
            :data="data"
            :loading="loading"
            :footerOperations="footerOperations"
            @refresh="refresh"
        />
        <md-sidebar
            style="width: 240px; height: 500px;"
            title="待打单统计"
            border
            checkStrictly
            selectionMode="checkbox"
            :data="data"
            :loading="loading"
            @refresh="refresh"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            footerOperations: [
                {
                    icon: 'md-icon-edit-16',
                    text: '编辑物流商',
                    handler: (data, node) => {
                        console.log('数据', data);
                        console.log('节点', node);
                    }
                },

            ],
            loading: false,
            data: [{
                "id": 270437,
                "label": "统计（设置了面板宽度setOptionWidth为300，文本内容超过下拉面板宽度就溢出了，并且还给出了提示！）",
                "children": [
                    {
                        "id": 270438,
                        "label": "利润日报",
                        "children": null,
                    },
                    {
                        "id": 270439,
                        "label": "利润周报",
                        "children": null,
                    },
                    {
                        "id": 270440,
                        "label": "利润月报",
                        "children": null,
                    },
                    {
                        "id": 270441,
                        "label": "销售统计",
                        "children": null,
                    }
                ],
                "menued": 0
            },
            {
                "id": 1,
                "label": "商品",
                "children": [
                    {
                        "id": 270226,
                        "label": "品牌管理",
                        "children": null,
                    },
                    {
                        "id": 270227,
                        "label": "SKU认领",
                        "children": null,
                    },
                    {
                        "id": 270228,
                        "label": "分类管理",
                        "children": null,
                    },
                ],
            }],
        }
    },
    methods: {
        refresh() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }
    }
};
</script>
```
:::



### Sidebar Attributes

| 参数 | 说明 | 类型 | 默认值 |
| -------- | ----------- |------ | ---- |
| border | 是否需要边框 | Boolean | false |
| title | 标题 | String | '' |
| refresh | 是否需要刷新按钮 | Boolean | true |
| fold | 是否需要折叠按钮（仅在树形类型下生效） | Boolean | true |
| placeholder | 输入框占位文本	 | String | '搜索' |
| data | 源数据	 | Array | [] |
| loading | 加载loading	 | Boolean | false |
| selectionMode | 单选或多选模式，'radio' 'checkbox' | String | 'radio' |
| type | 树或列表类型，'tree' 或 'list' | String | 'tree' |
| radioStrictly | 在单选的情况下，是否严格的遵循父子不互相关联的做法，默认为 false | Boolean | false |
| headerOperations | 头部操作按钮 | Array | [] |
| operations | 行操作按钮 | Array | [] |
| footerOperations | 底部操作按钮 | Array | [] |
其余配置支持 el-tree 透传

### Props

| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| label | 指定节点标签为节点对象的某个属性值 |string | 'label' |
| children | 指定子树为节点对象的某个属性值 |string | 'children' |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值 |Boolean | 'disabled' |
| isLeaf | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 |boolean | 'isLeaf' |
| count | 指定节点标签数量为节点对象的某个属性值 |boolean | 'data' |

### operations

| 字段名称   | 说明                                                  | 类型 |是否必须     |默认值     |
| ---------- | ----------------------------------------------------- | ------------ |------------ |----|
| text      | 操作项名称                                      | String  | 是 |             - |
| icon       | 操作项图标icon类名                                 | String     | 是 |-|
| validator       | 是否隐藏操作项                      | Function({data, node})   | 否 | -|
| disable       | 是否禁用操作项，函数                      | Function({data, node})   | 否 | -|
| handler       | 点击该操作时触发的函数                      | Function({data, node})   | 否 |-|

### Sidebar Slot

| name | 说明 |
| -------- | ----------- |
| default | 树节点默认插槽 |
| empty | 空数据插槽 |

### Sidebar Event

| 参数 | 说明 | 回调参数 |
| -------- | ----------- |------ |
| refresh | 刷新按钮点击触发事件 | - |
| change | 选中节点时触发 | - |

