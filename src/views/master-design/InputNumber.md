## InputNumber 数组输入框

可配置的数字输入框组件

### 基础用法

:::demo 使用 `v-model` 进行双向绑定数据，并限制整数长度限制为7，小数长度限制为4，并且自动补零的数字输入框

```html
<template>
    <md-input-number
        class="w-200"
        zeroize
        clearable
        v-model="price"
        :precision="4"
        :intLength="7"
        suffix-icon="el-icon-coin"
        placeholder="请输入您的价格"
        @input.native="handleInput"
        @change="handleChange"
        @enter="handleEnter"
    />
</template>

<script>
    export default {
        data() {
            return {
                price: '',
            };
        },
        methods: {
            handleEnter() {
                console.log('enter', this.price);
            },
            handleInput() {
                console.log('input:', this.price);
            },
            handleChange(val) {
                console.log('change', val);
            }
        }
    }
</script>
```
:::

### 整数输入框

:::demo 当参数 `precision` 为0时，只能输入整数

```html
<template>
    <md-input-number
        class="w-200"
        v-model="price"
        :precision="0"
        placeholder="请输入整数价格"
        size="small"/>
</template>

<script>
    export default {
        data() {
            return {
                price: '',
            };
        }
    }
</script>
```
:::

### 正数输入框

:::demo 当参数 `negative` 为 `false` 时，无法输入负号。

```html
<template>
    <md-input-number
        class="w-200"
        v-model="price"
        :negative="false"
        placeholder="请输入"
        size="small"
        @enter="handleEnter"
    />
</template>

<script>
    export default {
        data() {
            return {
                price: '',
            };
        },
        methods: {
            handleEnter() {
                console.log('...')
            }
        }
    }
</script>
```
:::
### 内嵌标签

:::demo 使用 `label` 作为类名即可得到一个字体为主色的内嵌标签

```html
<template>
    <div>
        <md-input-number
            class="w-200"
            v-model="price"
            :negative="false"
            placeholder="请输入"
            size="small"
            label="内嵌标签"
        />
        <br/>
        <br/>
        <md-input-number
            class="w-200"
            v-model="priceRange"
            type="range"
            placeholder="请输入"
            size="small"
            clearable
            label="内嵌标签"
            :negative="false"
        >
        </md-input-number>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: '',
                priceRange: []
            }
        }
    }
</script>
```
:::


### 区间范围输入框

:::demo 当参数 `type` 为 `range` 时，为区间范围输入（暂不支持前后缀图标等）

```html
<template>
    <div>
        <md-input-number
            class="w-200"
            v-model="value1"
            type="range"
            :hasSeperator="true"
            startDisabled
            placeholder="请输入"
            size="small"
            clearable
            @enter="handleEnter"
            @clear="handleClear"
        >
        </md-input-number>
        <br/>
        <br/>
        <md-input-number
            class="w-200"
            v-model="value2"
            type="range"
            size="small"
            clearable
            :min="6"
            :max="10"
            :negative="false"
            :startPlaceholder="startPlaceholder"
            :endPlaceholder="endPlaceholder"
            rangeSeparator="~"
        >
        </md-input-number>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: [2],
                value2: [],
                startPlaceholder: 'Min：6',
                endPlaceholder: 'Max：10',
            };
        },
        methods: {
            handleEnter() {
                console.log('enter:', this.value1)
            },
            handleChange() {
                console.log('change:', this.value1)
            },
            handleClear() {
                console.log('clear:', this.value1)
            }
        }
    }
</script>
```
:::

### InputNumber Attributes

| 参数名称 | 说明                    |类型               | 默认值 |
| -------- | ----------------------| -------- |-------- |
| v-model / value      | 绑定的值 | String｜Number        |-      |
| intLength | 整数部分允许输入的最大长度 | Number | 7 |
| precision | 小数部分允许输入的最大长度 | Number | 2 |
| negative | 是否允许输入负号 | Boolean | true |
| zeroize | 是否自动补零 | Boolean | false |
| hasSeperator | 是否开启千位分割符 |  Boolean |false |
| seperatorSign | 千位分隔符("."除外的特殊字符) |  String | "," |
| max | 允许输入的最大值 | Number | - |
| min | 允许输入的最小值 | Number | - |
| type | 显示类型（为 range 时为区间范围输入框）| String | - |
| label | 内嵌标签 | String | - |
| startPlaceholder | 区间范围开始输入框提示文本 | String | - |
| endPlaceholder | 区间范围结束输入框提示文本 | String | - |
| startDisabled | 区间范围开始输入框禁用 | Boolean | false |
| endDisabled | 区间范围结束输入框禁用 | Boolean | false |
| ...... | 兼容[el-input](https://element.eleme.cn/#/zh-CN/component/input#input-attributes)组件的参数 | - |

### InputNumber Slots
| 参数名称 | 说明                    |
| -------- | ----------------------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
支持和兼容[el-input slots](https://element.eleme.cn/#/zh-CN/component/input#input-slots)的用法
### InputNumber Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| input  | 在 Input 值改变时触发	 | (value: string) |
| change  | 仅在输入框失去焦点或用户按下回车时触发 | (value: string) |
| focus  | 在 InputNumber 获得焦点时触发 | (event: Event) |
| blur  | 在 InputNumber 失去焦点时触发	 | (event: Event) |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发 | - |
| enter | 在回车时触发 | - |


### InputNumber Methods

| 事件名称 | 说明               | 参数 |
| -------- | ------------------ | -------- |
| select  | 选中 InputNumber 中的文字 | - |
| focus  | 使 InputNumber 获取焦点 | - |
| blur  | 使 InputNumber 失去焦点	 | - |