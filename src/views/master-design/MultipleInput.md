## MultipleInput 多项文本输入框
多项文本输入框，以逗号、回车分隔，以数组形式分隔返回。

### 基础用法
:::demo 监听 `change` 事件，会将分隔好的数组返回。

```html
<template>
    <div class="w-200">
        <md-multiple-input
            textareaPlaceholder="自定义文本域占位文本"
            placeholder="自定义占位文本"
            @clear="handleClear"
            @change="handleChange"
            @search="handleSearch"/>
    </div>
</template>

<script>
    export default {
        methods: {
            handleChange(val) {
                this.$message(`change: ${JSON.stringify(val)}`)
                // val默认返回分隔好的数组，若multiple为false，则val返回字符串
            },
            handleSearch(val) {
                this.$message(`search: ${JSON.stringify(val)}`)
            },
            handleClear() {
                this.$message('clear')
            }
        }
    }
</script>
```
:::

### 内嵌标签
:::demo 通过 `label` 属性可以设置内嵌标签

```html
<template>
    <div class="w-200">
        <md-multiple-input
            @clear="handleClear"
            @change="handleChange"
            label="内嵌标签"
            @search="handleSearch">
        </md-multiple-input>
    </div>
</template>

<script>
    export default {
        methods: {
            handleChange(val) {
                this.$message(`change: ${JSON.stringify(val)}`)
                // val默认返回分隔好的数组，若multiple为false，则val返回字符串
            },
            handleSearch(val) {
                this.$message(`search: ${JSON.stringify(val)}`)
            },
            handleClear() {
                this.$message('clear')
            }
        }
    }
</script>
```
:::

### 带下拉选项的输入框

:::demo `selectOptions` 参数可以给输入框增加下拉选项，若 `multiple` 为 `false`， 则为正常的文本输入框。

```html
<template>
    <div class="w-300">
        <md-multiple-input
            selectWidth="130px"
            @clear="handleClear"
            @change="handleChange"
            @search="handleSearch"
            :selectOptions="numOptions"
            selectDefault="shipmentCodes"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                numOptions:[
                    {
                        label: '货件编号', 
                        value: 'shipmentCodes'
                    },
                    { 
                        label: '出货订单编号',
                        value: 'nums'
                    },
                    { 
                        label: '提货计划编号',
                        value: 'takeCargoPlanNums',
                        multiple: false
                    },
                    { 
                        label: '仓库订单编号',
                        value: 'warehouseOrderNums'
                    },
                    { 
                        label: '物流订单编号',
                        value: 'logisticsOrderNums'
                    }
                ],
            };
        },
        methods: {
            handleChange(val) {
                this.$message(`change: ${JSON.stringify(val)}`)
                // val默认返回分隔好的数组，若multiple为false，则val返回字符串
            },
            handleSearch(val) {
                this.$message(`search: ${JSON.stringify(val)}`)
            },
            handleClear() {
                this.$message('clear')
            }
        }
    }
</script>
```
:::

### MultipleInput Attributes

| 参数名称 | 说明                    |类型               | 默认值 |
| -------- | ----------------------| -------- |-------- |
| selectOptions | 下拉框选项 | 由 option 组成的数组, 具体参数见 option 表格 | [] |
| selectDefault | 下拉框选项默认值 | string ｜ number | - |
| selectWidth | 下拉框宽度 | string | auto |
| label | 内嵌标签 | string | - |
| emptyAutoSearch | 清空自动搜索 | boolean | false |
| showFooter | 是否展示底部按钮 | boolean | true |
| showSearch | 是否展示搜索按钮 | boolean | true |
| placeholder | 输入框占位文本 | string | 搜索多项内容 |
| textareaPlaceholder | 文本域输入框占位文本 | string | 内容用逗号或换行区分，请避免空格 (Shift + 回车换行；回车立即搜索) |


### option Attributes
| 参数名称 | 说明                    |类型               | 默认值 |
| -------- | ----------------------| -------- |-------- |
| label | 选项名 | string | - |
| value | 选项值 | string｜number |  - |
| multiple | 是否使用多项输入，若为false则为正常的文本输入框 | boolean | true |

### MultipleInput Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| change  | 仅在输入框失去焦点,回调参数为输入框的值 | (value) |
| search  | 点击搜索时触发 | (value: {input, select}) |
| clear  | 在点击清空按钮时触发 | - |

### MultipleInput Methods

| 事件名称 | 说明               | 参数 |
| -------- | ------------------ | -------- |
| setInput  | 设置 input 初始值 | (arr) |

### MultipleInput Slots
| 参数名称 | 说明                    |
| -------- | ----------------------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
支持和兼容[el-input slots](https://element.eleme.cn/#/zh-CN/component/input#input-slots)的用法