## Select Date 下拉时间

### 基础用法
:::demo 若日期选择控件类型为`date` 或 `datetime`，则`v-model` 绑定的数组长度为 `2`，下标为 `0` 的元素值为下拉框值；下标为 `1` 的元素值为日期选择控件的值

```html
<template>
    <md-select-date
        v-model="value"
        :options="options"
        type="datetime"
        selectWidth="120px"
        placeholder="选择日期时间"
        @change="handleChange"
        :picker-options="pickerOptions"/>
</template>
<script>
    export default {
        data() {
            return {
                value: [],
                pickerOptions: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                        picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                },
                options: [
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
                    },
                    { 
                        label: '仓库订单编号',
                        value: 'warehouseOrderNums'
                    },
                    { 
                        label: '物流订单编号',
                        value: 'logisticsOrderNums'
                    }
                ]
            };
        },
        methods: {
            handleChange(val) {
                this.$message(`change: ${JSON.stringify(val)}`)
            },
        },
    };
</script>
```
:::

### 日期范围
:::demo 当日期选择控件类型为`daterange` 或 `datetimerange`时，则`v-model` 绑定的数组长度为 `3`，下标为 `0` 的元素值为下拉框值；下标为 `1` 和 `2` 的元素值分别代表时间控件的起始值和结束值。

```html
<template>
    <md-select-date
        v-model="value"
        :options="options"
        type="datetimerange"
        selectWidth="120px"
        dateWidth="300px"
        placeholder="选择日期时间"
        @change="handleChange"
        :picker-options="pickerOptions"/>
</template>
<script>
    export default {
        data() {
            return {
                value: [],
                pickerOptions: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                        picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                },
                options: [
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
                    },
                    { 
                        label: '仓库订单编号',
                        value: 'warehouseOrderNums'
                    },
                    { 
                        label: '物流订单编号',
                        value: 'logisticsOrderNums'
                    }
                ]
            };
        },
        methods: {
            handleChange(val) {
                this.$message(`change: ${JSON.stringify(val)}`)
            },
        },
    };
</script>
```
:::



### 默认值
:::demo

```html
<template>
    <md-select-date
        v-model="value"
        :options="options"
        type="datetimerange"
        selectWidth="120px"
        dateWidth="300px"
        value-format="timestamp"
        @change="handleChange"
        placeholder="选择日期时间"
        :picker-options="pickerOptions"/>
</template>
<script>
    export default {
        data() {
            return {
                value: ['shipmentCodes',1631635200000, 1634227200000 ],
                pickerOptions: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                        picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                },
                options: [
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
                    },
                    { 
                        label: '仓库订单编号',
                        value: 'warehouseOrderNums'
                    },
                    { 
                        label: '物流订单编号',
                        value: 'logisticsOrderNums'
                    }
                ]
            };
        },
        methods: {
            handleChange(val) {
                this.$message(`change: ${JSON.stringify(val)}`)
            },
        },
    };
</script>
```
:::


### 时间值不重置
:::demo 设置 `dateReset` 值为 `false` 时，下拉框的值改变不会重置时间值

```html
<template>
    <md-select-date
        v-model="value"
        :options="options"
        type="datetimerange"
        selectWidth="120px"
        dateWidth="300px"
        :dateReset="false"
        value-format="timestamp"
        @change="handleChange"
        placeholder="选择日期时间"
        :picker-options="pickerOptions"/>
</template>
<script>
    export default {
        data() {
            return {
                value: ['shipmentCodes',1631635200000, 1634227200000 ],
                pickerOptions: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                        picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                },
                options: [
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
                    },
                    { 
                        label: '仓库订单编号',
                        value: 'warehouseOrderNums'
                    },
                    { 
                        label: '物流订单编号',
                        value: 'logisticsOrderNums'
                    }
                ]
            };
        },
        methods: {
            handleChange(val) {
                this.$message(`change: ${JSON.stringify(val)}`)
            },
        },
    };
</script>
```
:::

### SelectInput Attributes
基于el-date-picker实现，使用了$attr, $listener 进行透明传参

| 参数 | 说明 | 类型 | 默认值 |
|  ----  | ----  |----  | ----  |
| vale/v-model | 绑定值 | Array | [] |
| options | 下拉框列表 |Array | [] |
| selectWidth | 下拉框寬度 | String | - |
| dateWidth | 时间控件宽度 | String | - |
| dateReset | 下拉值改变时是否重置时间控件 | Boolean | true |
| ... | el-date-picker 所有属性透穿 | - | - |

### SelectInput Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| change      | 下拉框值或者日期值改变时触发                 | function(val) |
| ... | el-date-picker 所有事件透穿 | - | - |

### SelectInput Methods

| 事件名称   | 说明                                                  | 参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| focus      | 日期控件获取焦点                                 | - |
