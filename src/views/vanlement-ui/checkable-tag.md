## CheckableTag 可选标签

基于 `tag` 组件实现类似 `checkbox` 的可选标签组件。

### 基础用法

:::demo 由`type`属性来选择 `checkableTag` 的类型, `effect` 控制 `checkableTag` 的主题。

```html
<template>
    <div
        style="margin-bottom: 15px;"
        v-for="effect in effects"
        :key="effect.value"
    >
        <el-checkable-tag
            v-for="type in types"
            :key="type.value"
            :type="type.value"
            size="small"
            icon="vl-icon-user-avatar-24"
            :effect="effect.value"    
        >{{effect.label + type.label}}</el-checkable-tag>
        <el-checkable-tag
            :effect="effect.value"
            size="small"
            icon="vl-icon-user-avatar-24"
            disabled
        >禁用</el-checkable-tag>
        <el-checkable-tag
            :effect="effect.value"
            size="small"
            v-model="selectDisabled"
            icon="vl-icon-user-avatar-24"
            disabled
        >默认选中禁用</el-checkable-tag>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectDisabled: true,
            effects: [
                {
                    label: '明亮',
                    value: 'light'
                },
                {
                    label: '暗夜',
                    value: 'dark'
                },
                {
                    label: '朴素',
                    value: 'plain'
                },
            ],
            types: [
                {
                    label: '默认',
                    value: 'info'
                },
                {
                    label: '成功',
                    value: 'success'
                },
                {
                    label: '警告',
                    value: 'warning'
                },
                {
                    label: '危险',
                    value: 'danger'
                },
                {
                    label: '进行',
                    value: 'ongoing'
                },
                {
                    label: '崭新',
                    value: 'fresh'
                },
                
            ],
        }
    },
}
</script>
```
:::

### 尺寸大小

:::demo 

```html
<el-checkable-tag type="ongoing" size="large" >大型标签</el-checkable-tag>
<el-checkable-tag type="ongoing" size="medium" >中等标签</el-checkable-tag>
<el-checkable-tag type="ongoing" size="small" >小型标签</el-checkable-tag>
<el-checkable-tag type="ongoing" size="mini">默认标签</el-checkable-tag>
```
:::



### 值绑定

:::demo 提供 `v-model` 实现双向绑定

```html
<template>
    <div style="margin-bottom: 15px;">
        <el-checkable-tag v-model="checkableTag1" type="ongoing" @change="handleChange">默认值标签</el-checkable-tag>
        <p>标签值：{{checkableTag1}}</p>
    </div>
    <div style="margin-bottom: 15px;">
        <el-checkable-tag v-model="checkableTag2" :true-label="1" :false-label="0" type="ongoing" @change="handleChange">自定义值标签</el-checkable-tag>
        <p>标签值：{{checkableTag2}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checkableTag1: true, 
                checkableTag2: 1, 
            };
        },
        methods: {
            handleChange(val) {
                const msg = JSON.stringify(val);
                this.$message(msg)
            }
        }
    }
</script>
```
:::

### 可选标签组

:::demo

```html
<template>
    <el-checkable-tag-group v-model="group" type="ongoing">
        <el-checkable-tag label="深圳">深圳市</el-checkable-tag>
        <el-checkable-tag label="广州">广州市</el-checkable-tag>
        <el-checkable-tag label="上海">上海市</el-checkable-tag>
        <el-checkable-tag label="北京">北京市</el-checkable-tag>
    </el-checkable-tag-group>
    <p style="margin-top:20px">已选中：{{group.join('、')}}</p>
</template>
<script>
    export default {
        data() {
            return {
                group: ['深圳'], 
            };
        }
    }
</script>
```
:::

### 可选数量

:::demo `min` 和 `max` 可以控制可选数量

```html
<template>
    <el-checkable-tag-group v-model="group" :max="3" :min="1" type="ongoing" @change="handleChange">
        <el-checkable-tag label="深圳">深圳市</el-checkable-tag>
        <el-checkable-tag label="广州">广州市</el-checkable-tag>
        <el-checkable-tag label="上海">上海市</el-checkable-tag>
        <el-checkable-tag label="北京">北京市</el-checkable-tag>
    </el-checkable-tag-group>
</template>
<script>
    export default {
        data() {
            return {
                group: ['深圳'], 
            };
        },
        methods: {
            handleChange(val) {
                const msg = JSON.stringify(val);
                this.$message(msg)
            }
        }
    }
</script>
```
:::


### CheckableTag Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | 选中状态的值（只有在`checkable-tag-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| type | 类型 | string | success/info/warning/danger/fresh/onging | — |
| size | 尺寸 | string | large / medium / small / mini | — |
| effect | 主题 | string | dark / light / plain | light |
| disabled  | 是否禁用    | boolean   |  — | false   |

### CheckableTag Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### CheckableTagGroup Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| type | 类型 | string | success/info/warning/danger/fresh/onging | — |
| size | 尺寸 | string | large / medium / small / mini | — |
| effect | 主题 | string | dark / light / plain | light |
| disabled  | 是否禁用    | boolean   |  — | false   |
| min     | 可被勾选的 checkableTag 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkableTag 的最大数量   | number    |       —        |     —    |

### CheckableTagGroup Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |