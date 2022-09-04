## AdvancedFilter 高级筛选

### 基础用法
:::demo 对外暴露三个事件`trigger`（点击文字按钮时触发）,`search`（点击搜索按钮时触发）,`reset`(点击重置按钮时触发)

```html
<template>
    <md-advanced-filter @search="onSearch" @reset="onReset" @trigger="onTrigger"/>
</template>

<script>
    export default {
        methods: {
            onSearch() {
                this.$message.success('Clicked the Search button!');
            },
            onReset() {
                this.$message.info('Clicked the Reset button!');
            },
            onTrigger() {
                this.$message.info('Clicked the Trigger button!');
            },
        }
    }
</script>
```
:::

### 显示数量
:::demo 传入`searchContionNum`，展示筛选数量

```html
<template>
    <md-advanced-filter :searchConditionNum="searchConditionNum"/>
</template>

<script>
    export default {
        data() {
            return {
                searchConditionNum: 12,
            }
        }
    }
</script>
```
:::


### AdvancedFilter Attributes
| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| triggerText | 触发按钮的显示文字 |String | '高级筛选' |
| footer | 是否显示底部按钮 |Boolean | true |
| searchConditionNum | 搜索条件显示的个数(大于0时才会显示) |Number | 0 |

### AdvancedFilter Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| trigger      | 触发按钮被点击时                                 | - |
| search       | 查询按钮被点击时                              | - |
| reset       | 重置按钮被点击时(需重置所有的表单项，包含非高级筛选的)                              | - |



### AdvancedFilter Slots

| slot名称   | 说明                                                  | 参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| default      | 表格列的渲染                                 | { data, columns } |
| operations       | 表格列操作列表的渲染                              |{row，column}|
| footer-btn       | 底部按钮列表                              |{selections}|


