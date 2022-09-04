<!--
 * @Author: lingyong.zeng
 * @Date: 2021-08-10 11:47:03
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:07:01
 * @Description:
 * @FilePath: /nextop-docs/src/components/AdvancedSearchDemo.vue
-->

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

<script lang="jsx">
import { operateStorage, } from '@/mixins';

const statusOptions = [
    {
        value: '0',
        label: '已发货',
    },
    {
        value: '1',
        label: '待发货',
    },
    {
        value: '2',
        label: '待退款',
    },
    {
        value: '3',
        label: '已退款',
    }
];

const logisticsOptions = [
    {
        code: 'A',
        name: '申通',
    },
    {
        code: 'B',
        name: '顺丰',
    },
    {
        code: 'C',
        name: '圆通',
    },
    {
        code: 'D',
        name: '德邦',
    }
];

export default {
    mixins: [operateStorage],
    data() {
        return {
            query: {
                orderNo: '',
                orderAddress: '',
                orderStatus: '',
                orderDate: new Date(),          // 这里指定默认值，那么条件选项需配置 status: 'fixed'
                orderLogistics: '',
            },
            filterConditions: [
                {
                    label: '订单编号',
                    prop: 'orderNo',
                    status: 'fixed',
                    trim: true,
                    render: {                   // 对象类型的render
                        type: 'Input',          // 文本框
                        clear: false,
                    },
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
                    },
                },
                {
                    label: '发货快递',
                    prop: 'orderLogistics',
                    render: {
                        type: 'Select',
                        options: logisticsOptions,
                        valueKey: 'code',       // 指定选项数据 value 映射（默认:value)
                        labelKey: 'name',        // 指定选项数据 label 映射（默认:label)
                    },
                },
                {
                    label: '订单时间',
                    prop: 'orderDate',
                    status: 'fixed',
                    render: {
                        type: 'DatePicker',     // 日期类型
                        clearable: false,
                    },
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
                    ),
                }
            ],
        };
    },
    methods: {
        toQuery(params) {
            // 参数的属性只包括显示条件
            console.log('触发查询，参数为：', params);
        },
    },
};
</script>
