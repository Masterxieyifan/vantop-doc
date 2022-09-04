## Charts 图表

基于 echarts 二次封装,只需要配置 options 后即可使用

[echarts 官网](https://echarts.apache.org/zh/index.html)

:::demo

```html
<template>
    <md-charts
        id="myChart"
        :options="options"
        @click="chartClick"
        @init="chartInit"
        height="500px"
    >
        <md-empty
            title=""
            description=""
            image="https://nextop-saas-web-static-prod.oss-cn-shenzhen.aliyuncs.com/nextop-erp-micro/saas/empty/empty-bi.svg"
            class="md-empty"
        />
    </md-charts>
</template>

<script>
    export default {
        data() {
            return {
                options: null,
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                setTimeout(() => {
                    this.options = {
                        xAxis: {
                            type: 'category',
                            data: [
                                'Mon',
                                'Tue',
                                'Wed',
                                'Thu',
                                'Fri',
                                'Sat',
                                'Sun',
                            ],
                        },
                        yAxis: {
                            type: 'value',
                        },
                        series: [
                            {
                                data: [150, 230, 224, 218, 135, 147, 260],
                                type: 'line',
                            },
                        ],
                    };
                }, 1000);
            },
            chartClick(params) {
                console.log(params);
            },
            chartInit(charts) {
                console.log(charts);
            }
        },
    };
</script>
```

:::

### Charts Attribute

| 参数    | 说明                  | 类型   | 是否必须 | 默认值 |
| ------- | --------------------- | ------ | -------- | ------ |
| id      | 保存当前 echarts 实例 | String | 否       | -      |
| options | 当前 echarts 实例配置 | Object | 是       | -      |
| height  | 高度                  | String | 否       | 100%   |
| width   | 宽度                  | String | 否       | 100%   |

### Charts Events

| 事件名称 | 说明     | 回调参数                       |
| -------- | -------- | ------------------------------ |
| init    | 渲染完成事件 | echarts 实例 |
| click    | 点击事件 | echarts 点击事件的 params 参数 |

### Charts Slots

| 参数  | 说明           |
| ----- | -------------- |
| empty | 无数据时的展示 |
