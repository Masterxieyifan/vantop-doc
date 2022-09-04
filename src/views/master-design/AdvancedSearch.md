<script>
    import AdvancedSearchDemo from './components/AdvancedSearchDemo.vue';
    export default {
        components: {
            AdvancedSearchDemo
        }
    }
</script>
## AdvancedSearch 高级筛选

### 功能说明
1. 自行收集各组件表单值（url参数存储），收拢查询触发机制
2. 自行控制条件显示逻辑（默认最多显示10个），不显示的条件不作为接口参数参与请求
3. 重置自行恢复初始化值（默认值）
4. 条件变更：自定义显示/重置/条件值变更(回车/选中)统一触发查询 `search` 方法
5. 有默认值的条件（非空）必须作为固定条件，需配置 `status: fixed`
6. `render` 为 `Object` 类型时，默认属性 `clearable: true`，若为应对接口压力需求（指定时间），需配置 `clearable: false` 且预设默认值
7. 自定义 `render` 函数时，表单组件需配置 `prop` 属性，非基础组件需实现如基础组件的 `dispatch` 方法，基础组件如 `select/input` 已集成

### 基础用法
**（列表页面完整功能: nextop-web-business/web-main-business master 分支进行查看）**

<advanced-search-demo/>

<br>

```html
<template>
    <div class="demo-block">
        <div class="source">
            <md-advanced-search
                ref="advancedSearch"
                :data="filterConditions"
                :storage="false"
                :origin="originQuery"
                :query="query"
                @search="toQuery"
            >
            </md-advanced-search>
        </div>
    </div>
</template>

<script>
import { operateStorage } from '@/mixins';

const statusOptions = [
    {value: '0', label: '已发货'},
    {value: '1', label: '待发货'},
    {value: '2', label: '待退款'},
    {value: '3', label: '已退款'}
];

const logisticsOptions = [
    {code: 'A', name: '申通'},
    {code: 'B', name: '顺丰'},
    {code: 'C', name: '圆通'},
    {code: 'D', name: '德邦'}
]

export default {
    isPage: true,                               // 必须在页面组件指定该属性，一般为引入 operateStorage 地方
    mixins: [operateStorage],
    data() {
        return {
            query: {
                orderNo: '',
                orderAddress: '',
                orderStatus: '',               
                orderDate: new Date(),          // 这里指定默认值，那么条件选项需配置 status: 'fixed'
                orderLogistics: ''
            },
            filterConditions: [
                {
                    label: '订单编号',
                    prop: 'orderNo',
                    status: 'fixed',
                    trim: true,                 // 对值进行前后去除空格处理
                    render: {                   // 对象类型的render
                        type: 'Input',          // 文本框
                        clear: false
                    }
                },
                {
                    label: '订单状态',
                    prop: 'orderStatus',
                    render: {
                        type: 'Select',         // 下拉框
                        options: statusOptions,
                        /*
                        multiple: true,         // 是否多选
                        clearable: true,        // 是否清除
                        */
                    }
                },
                {
                    label: '发货快递',
                    prop: 'orderLogistics',
                    render: {
                        type: 'Select',
                        options: logisticsOptions,
                        valueKey: 'code',       // 指定选项数据 value 映射（默认:value)
                        labelKey: 'name'        // 指定选项数据 label 映射（默认:label)
                    }
                },
                {
                    label: '订单时间',          
                    prop: 'orderDate',
                    status: 'fixed',
                    render: {
                        type: 'DatePicker',     // 日期类型
                        clearable: false,       
                    }
                },

                {
                    label: '订单地址',
                    prop: 'orderAddress',
                    render: () => (             // 自定义函数jsx渲染（复杂场景）
                        <div style="width: 240px; display: inline-block">
                            <el-input
                                prop="orderAddress" 
                                label="订单地址"
                                vModel={this.query['orderAddress']}
                            >
                            </el-input>
                        </div>
                    )
                },
            ]
        }
    },
    methods: {
        toQuery(params) {
            // 参数的属性只包括显示条件
            console.log('触发查询，参数为：', params);
        }
    }
}
</script>

```

### AdvancedSearch Attributes

| 参数          | 说明                    | 类型           | 默认值        |
| ------------- | ----------------------- | -------------- | ------------- |
| title         | 自定义条件弹层标题        | String         | 自定义条件     |
| width         | 自定义条件弹层宽度        | String/Number | —             |
| customIcon    | 筛选图标                | String         | md-icon-assembly-16 |
| filterTitle   | 筛选文案                | String         | 自定义条件     |
| resetIcon     | 重置图标                | String         | md-icon-eliminate-16 |
| resetTitle    | 重置文案                | String         | 重置          |
| filterMaxLen  | 最多显示条件数量         | Number         | 10            |
| data          | 条件数据源              | Array          | —             |
| storage       | 远程存储是否开启(不开启将以本地存储) | Boolean | true       |
| storageKey    | 存储标识                | String         | location.pathname + '_search' |

### AdvancedSearch Methods

| 参数         | 说明             | 参数 |
| ------------ | ---------------- | ---- |
| search   | 自定义/重置条件/表单值变更会触发 | 条件参数值（Object) |

### data Attributes

| 参数   | 说明                             | 类型         | 默认值 |
| ------ | ------------------------------  | ------------ | ------ |
| label  | 控件名称                         | String/Function | — |
| prop   | 唯一标识                         | String/Function | - |
| status | 值为fixed固定不允许删除           | String         | -  |
| trim | 是否对值进行前后去除空格处理      | Boolean | false      |
| render | 自定义渲染(函数时需返回JSX)      | Object/Function | —      |
