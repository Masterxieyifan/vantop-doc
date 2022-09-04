## CostomTarget 组件

### 基本用法
:::demo 配置 `max` 设置最大数量。搜索可过滤 `label` 对应的数据。

```html
<template>
    <md-custom-target 
        v-model="targets"
        :data="targetList"
        style="max-width: 1000px; height: 600px; padding: 20px"
    />
</template>
<script>
export default {
    data() {
        return {
            targets: [],
            targetList: [
                {
                    name: '销售',
                    children: [
                        {
                            label: '销量',
                            value: 'saleNum'
                        },
                        {
                            label: '销量CVR',
                            value: 'saleCVR'
                        },
                        {
                            label: '订单CVR',
                            value: 'orderCVR'
                        },
                        {
                            label:
                                '销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额',
                            value: 'money'
                        }
                    ]
                },
                {
                    name: '流量',
                    children: [
                        {
                            label: 'PV',
                            value: 'PV'
                        },
                        {
                            label:
                                '长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本',
                            value: 'long'
                        }
                    ]
                }
            ]
        }
    }
};
</script>
```
:::

### Group用法
注意: 
- <font color=red>treeListArray每一层级都需要value。value要避免重复。</font>
:::demo 配置 `isGroup` 参数为 `true` 开启，

```html
<template>
    <md-custom-target 
        v-model="targets"
        :data="targetList"
        :max="3"
        :isGroup="true"
        style="max-width: 1000px; height: 600px; padding: 20px"
    />
</template>
<script>
export default {
    data() {
        return {
            targets: [],
            targetList: [
                {
                    name: '销售',
                    value: 'sale',
                    children: [
                        {
                            label: '销量',
                            value: 'saleNum'
                        },
                        {
                            label: '销量CVR',
                            value: 'saleCVR'
                        },
                        {
                            label: '订单CVR',
                            value: 'orderCVR'
                        },
                        {
                            label:
                                '销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额销售额',
                            value: 'money'
                        }
                    ]
                },
                {
                    name: '流量',
                    value: 'flow',
                    children: [
                        {
                            label: 'PV',
                            value: 'PV'
                        },
                        {
                            label:
                                '长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本',
                            value: 'long'
                        }
                    ]
                }
            ]
        }
    }
};
</script>
```
:::



### CustomTarget Attributes

| 参数 | 说明 | 类型 | 是否必须 |默认值 |
| -------- | ----------- |------ | ---- | ---- |
| targets | 选中指标 | Array | 是 | - |
| targetList | 指标列表 | Array | 是 | - |
| max | 最大指标数量 | Number | 否 | 6 |
| name | 指标名称 | String | 否 | 指标 |
| props | 自定义对应label，key索引 | Object | 否 | {'children': 'children', 'label': 'label', 'value': 'value', 'title': 'name' } |