## 列表案例配置

1. 引入 `operateStorage` 的 mixin；

2. `filterConditions` 条件配置 `prop` 与接口参数属性尽量相同，会自动生成对应的 `query` 对象；

3. 非 `filterConditions` 配置的查询条件，如状态栏/左侧菜单栏或其它参与查询的参数，需配置 `extraQuery: { status: '', ... }`，最终会合并到 `query` 对象，页码页数已默认生成 `{current: 1, size: 20}`；

4. 必须提供 `toQuery` 函数
    - 4.1 接受高级搜索传入的参数；

    - 4.2 调用 mixin 预处理函数 `this.preHandleParams` ;

    - 4.3 `preHandleParams` 方法第二个参数： 

    ```js
    this.preHandleParams(queryParams, {
        filterEmpty: true,   // 过滤掉空值属性（默认false)
        trimString: true     // 去除字符串值前后空格（默认true)
        joinProps: ['store'] // 需要将数组 [] 转换成 ',' 链接字符串的参数名
    })
    ```

    - 4.4 如需处理接口数据格式，请在 `toQuery` 函数 `preHandleParams` 之后作处理；
    
    - 4.5 在该函数中调用 `md-list-table` 更新方法，并将参数传入 `this.$refs['listTable'].queryTable(params)`

5. 默认启用了 hash 参数存储，如果想禁用的话，在引用 `operateStorage` mixin 的组件设置属性 `enableHash: false` 

### 详细代码案例
```html
<template>
    <md-page-list :pageConfig="pageConfig">
        <template #search>
            <md-advanced-search
                ref="advancedSearch"
                :data="filterConditions"
                :origin="originQuery"
                :query="query"
                @search="toQuery"
            >
            </md-advanced-search>
        </template>
        <template #table>
            <md-list-table
                ref="listTable"
                :apiFn="$api.getOrderList"
                :selections.sync="selections"
                :columns="columns"
                :operations="operations"
            >
            </md-list-table>
        </template>
    </md-page-list>
</template>

<script>
import { isEmpty, isArray, formatDate } from '@master_vantop/vantop-util';
import { operateStorage } from '@nextop/nextop-mixins';
import { comonDownLoad, } from '@master_vantop/nextop-http';

export default {
    // enableHash: false,                                                   // 禁用 urlHash 存储
    mixins: [operateStorage],
    data() {
        return {
            selections: [],                                                 // 表格勾选项
            extraQuery: {                                                   // 除条件配置内又需要参与接口查询在此配置
                orderStatus: '20',      // 订单状态
                // size: 20, current: 1 [已默认配置]
            },
            pageConfig: {
                skeleton: true,                         
                pageTitle: this.$route.name,                                // 页面标题
                pageUpdateTime: formatDate(new Date(), 'MM-DD hh:mm:ss'),   // 更新时间（如产品需要在此配置，不需要不用配置）
                filterStatus: {                                             // 状态栏配置
                    prop: 'orderStatus',
                    tabs: [
                        {
                            label: '待审核',
                            value: '10',
                        },
                        {
                            label: '已审核',
                            value: '20',
                        },
                        {
                            label: '已完成',
                            value: '30',
                        },
                        {
                            label: '已取消',
                            value: '40',
                        },
                    ],
                },
                operationBtns: [                                            // 右上角按钮配置（原表格内左下角按钮均移到这里配置）
                    {
                        text: '创建',
                        key: 'add',
                        click: item => this.handle(item),
                    },
                    {
                        text: '导出',
                        key: 'export',
                        icon: 'nt-icon-export-16',
                        click: this.handleExport,
                        loading: () => this.exportLoading,
                    },
                    {
                        icon: 'van-fail-16',
                        text: '反审生产',
                        key: 'check',
                        click: item => this.handle(item),
                        disabled: () => isEmpty(this.selections)
                    },
                ],
            },
            filterConditions: [
                {
                    label: () => '订单编号',
                    // label: '订单编号',
                    // 函数动态配置 -> label: () => this.getLable()
                    prop: 'orderQueryNo',
                    status: 'fixed',
                    value: '',
                    render: {
                        type: 'Input',
                    }
                },
                {
                    label: '下单时间',
                    prop: 'orderCreateStartTime-orderCreateEndTime',
                    status: 'fixed',
                    value: [],
                    render: {
                        type: 'DatePicker',
                        attrType: 'datetimerange',
                        width: '420px',
                        editable: false,
                        clearable: false,
                        format: 'yyyy-MM-dd HH:mm:ss',
                        valueFormat: 'timestamp',
                    }
                },
                {
                    label: '订单类型',
                    prop: 'orderType',
                    value: '',
                    render: {
                        type: 'Select',
                        options: [
                            { code: 'AAA', name: '亚马逊' },
                            { code: 'BBB', name: '沃尔玛' },
                        ],
                        labelKey: 'name',       // 默认为 label
                        valueKey: 'code'        // 默认我 code
                    },
                },
                {
                    label: '订单来源',
                    prop: 'orderSource',
                    value: [],
                    render: {
                        type: 'Select',
                        options: this.getOrderSourceOptions,
                        multiple: true,
                    },
                },
            ],
            columns: [                  // 表格列配置
                {
                    prop: 'a1',
                    label: 'A1'
                },
                {
                    prop: 'a2',
                    label: 'A2'
                },
                {
                    prop: 'a3',
                    label: 'A3'
                }
            ],
            operations: [               // 表格操作按钮配置
                {
                    text: '查看',
                    key: 'view',
                    icon: 'nt-icon-view-16',
                    handler: row => this.handleRow('view', row),
                },
                {
                    text: '编辑',
                    key: 'eidt',
                    icon: 'nt-icon-edit-16',
                    handler: row => this.handleRow('edit', row),
                },
            ],
            exportParams: null,         // 需要导出功能时用于存储查询参数
        };
    },
    /*
     * 1. 条件参数默认值（异步）在此设置
     * 2. 完成高级搜索/表格初始化
     * 3. 隐藏骨架屏
     * 4. 触发搜索
     */
    async mounted() {
        /*
         * 默认值设置(query/tab/head)，针对需要从后端异步获取默认值场景
         * this.setDefault([['query', 'name', 'xx'], ['query', 'age', 18]]);
         */
        const orderCreateTime = this.getTimeFn();
        this.setDefault([['query', 'orderCreateStartTime-orderCreateEndTime', orderCreateTime]]);

        // 一些初始化任务
        const queryParams = await this.$refs.advancedSearch.init();
        
        // let queryParams;
        // try {
        //     ([
        //         queryParams
        //     ] = await Promise.all([
        //         // 获取异步数据（如左侧树形菜单、filterStatus由后端返回等）
        //         this.$refs.advancedSearch.init(),       // 搜索初始化（会返回条件参数对象）
        //         this.$refs.listTable.init(),        // 表格初始化
        //     ]));
        // } catch (e) {
        //     console.log(e);
        // }

        // 隐藏骨架屏
        this.pageConfig.skeleton = false;
        // this.$set(this.pageConfig, 'skeleton', false);
        // 调用查询
        this.toQuery(queryParams);
    },
    methods: {
        // 模拟从后端获取订单来源选项
        getOrderSourceOptions() {
            return new Promise((resolve) => {
                const options = [
                    {
                        value: '10',
                        label: '手动新增',
                    },
                    {
                        value: '11',
                        label: 'API同步',
                    },
                    {
                        value: '12',
                        label: '手动导入',
                    }
                ];
                setTimeout(() => resolve({ records: options }), 1500);
            });
        },
        // 列表查询 filterEmpty (去除属性值为空的属性)
        async toQuery(queryParams) {
            // 参数预处理
            const {
                current: pageNo,
                size: pageSize,
                ...params
            } = this.preHandleParams(queryParams,
                {
                    filterEmpty: true,           // 过滤掉空值属性
                    joinProps: ['addReason']     // 需要将数组转成','连接的字符串 prop 名
                }
            );

            // 为应对接口特殊处理（格式化参数）
            params.pageNo = pageNo;
            params.pageSize = pageSize;

            this.exportParams = params;          // 将参数存储，用于导出时使用

            // 调用表格组件查询方法，并将查询参数传入
            this.$refs['listTable'].queryTable(params);
        },
        handle(item) {
            //...
        },
        handleRow(type, row) {
            //...
        },
        getTimeFn() {
            const end = new Date();
            const start = new Date();
            start.setHours(23, 59, 59);
            end.setHours(23, 59, 59);
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 61 + 1000);
            this.orderCreateTime = [start, end];
            const orderCreateStartTime = new Date(formatDate(start).toString().replace(/-/g, '/').replace(/T/gi, ' ')).getTime(); //兼容safari浏览器
            const orderCreateEndTime = new Date(formatDate(end).toString().replace(/-/g, '/').replace(/T/gi, ' ')).getTime(); //兼容safari浏览器
            return [orderCreateStartTime, orderCreateEndTime];
        },
        handleExport() {
            this.exportLoading = true;
            const params = JSON.parse(JSON.stringify(this.exportParams));
            const { selections } = this;

            if (isArray(selections) && isEmpty(selections)) {
                params.ids = selections.map(({ id }) => id);
            }

            comonDownLoad(
                'post', 
                '/finance/accounting/adjustment/download',
                () => this.exportLoading = false,
                params
            )
        },
    }
};
</script>

<style lang="scss">
</style>
```

