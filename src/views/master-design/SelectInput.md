## Select Input 搜索输入框

### 基础用法
:::demo 默认不带下拉选项

```html
<template>
    <md-select-input/>
</template>
```
:::


### 开启下拉选项
:::demo 设置`select`为`true`

```html
<template>
    <md-select-input
        select
        :options="options"/>
</template>
<script>
export default {
    data() {
        return {
            options: [
                {
                    label: 'Option A',
                    value: 'a',
                },
                {
                    label: 'Option B',
                    value: 'b',
                },
                {
                    label: 'Option C',
                    value: 'c',
                },
            ],
        };
    }
};
</script>
```
:::


### 下拉框初始值
:::demo 设置`defaultSelectVal`

```html
<template>
    <md-select-input
        select
        defaultSelectVal="a"
        :options="options"/>
</template>
<script>
export default {
    data() {
        return {
            options: [
                {
                    label: 'Option A',
                    value: 'a',
                },
                {
                    label: 'Option B',
                    value: 'b',
                },
                {
                    label: 'Option C',
                    value: 'c',
                },
            ],
        };
    }
};
</script>
```
:::

### SelectInput Attributes
基于el-input实现，使用了$attr, $listener 进行透明传参

| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| select | 是否显示下拉框 |Boolean | false |
| options | 下拉框列表 |Array | [] |
| defaultSelectVal | 下拉框初始值 |[String, Number] | '' |
| placeholder | 输入框placeholder |String | '请输入内容' |
| hasConfirmBtn | 是否拥有搜索按钮 |Boolean | true |
| emptyAutoSearch | 清空是否触发search事件 |Boolean | false |
| selectPlaceholder | 下拉框placeholder |String | '请选择' |
| selectWidth | 下拉框寬度 |Number | 120 |
| selectStyle | 下拉框样式 |Object | { width: 120px } |
| isNumInput | 是否为数字输入框 |Boolean | false |
| trimable | input事件接收的值是否进行trim处理 |Boolean | false |
| showWordLimit | 是否展示计数 |Boolean | false |

### SelectInput Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| search      | 搜索按钮被点击时                                 | function(inputVal, selectVal?) |
| input       | 文本框输入时                              | function(inputVal) |
| select       | 下拉框选择时                              | function(selectVal) |
| empty       | 文本框输入值为空时                              | function() |

### SelectInput Methods

| 事件名称   | 说明                                                  | 参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| clear      | 清空全部值                                 | function() |
| clearInput       | 清空文本框                             | function() |
| clearSelect       | 清空下拉框                              | function() |
| setInputVal       | 设置文本框值(谨慎使用)                            | function(val) |
| setSelectVal       | 设置下拉框的值(谨慎使用)                            | function(select) |



### 使用该组件实现全表查询
- 引入`DataHandler`函数

```javascript
import DataHandler from '@/util/DataHandler';

handleSelectInput(val) {
    const newList = DataHandler.searchListAllByVal(val, this.data);
    console.log(newList);
},
```

### DataHandler 参数列表

| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| value | 被检索的值 |String | - |
| list | 需要检索的列表 |Array | - |
| keys | 需要检索的字段名 |Array | list的第一个下标对象的所有key |