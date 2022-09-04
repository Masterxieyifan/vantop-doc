## TAB 切换场景配置

需要 TAB 切换场景：对应 TAB 下筛选条件，表格列字段均不统一的场景时使用。如果都统一，应考虑使用 `pageConfig` 配置 `filterStatus` 来实现。

采用 `md-page-list` 嵌套的方式，因此我们会将功能进行如下拆分：

1. 入口页面（父级）, 配置 `pageConfig` 公有配置，如标题/TAB/更新时间等，需引入 `tabPageMain` 的 mixin

2. TAB1页面（子级），配置筛选条件，表格列配置等，操作按钮等，需引入 `tabPageChild` 的 mixin

3. TAB2页面...

4. 以此类推

**注意：为优化性能，TAB 页面其它组件需使用 `v-if="active"`， 类似弹窗组件等**

### 详细代码案例

#### 1. 入口页面

```html
<template>
    <!-- eslint-disable vue/no-use-v-if-with-v-for -->
    <md-page-list :pageConfig="pageConfig">
        <component
            v-for="{ value, pageComponent } in pageConfig.pageTab.tabs"
            v-if="tab.pageTab == value ? true : isInitOrDone.includes(value)"
            v-show="tab.pageTab === value"
            :key="value"
            :ref="`tab_${value}`"
            :is="pageComponent"
            :active="tab.pageTab === value"
            @initDone="() => initTabDone(value)"
        >
        </component>
    </md-page-list>
</template>

<script>
/*
 * 将不同tab下不同的（条件/表格）组合一起放到独立的组件中去，如 tab1/tab2
 */
import { operateStorage, tabPageMain } from '@nextop/nextop-mixins';
import { isEmpty, formatDate } from '@master_vantop/vantop-util';
import tab1 from './tab1.vue';
import tab2 from './tab2.vue';

export default {
    name: 'tab-main',
    mixins: [operateStorage, tabPageMain],
    components: {
        tab1,
        tab2
    },
    data() {
        return {
            tab: {
                pageTab: '2'
            },
            pageConfig: {
                skeleton: false,
                pageTitle: 'Tab切换',
                pageUpdateTime: formatDate(new Date(), 'MM-DD hh:mm:ss'),
                pageTab: {
                    prop: 'pageTab',
                    tabs: [
                        {
                            label: '现有生活',
                            value: '1',             // TAB 值使用 String 类型（Element最终会转成String)
                            pageComponent: tab1,
                        },
                        {
                            label: '重新生活',
                            value: '2',
                            pageComponent: tab2,
                        },
                    ],
                    tabClick: tab => this.handleTabClick(tab),
                },
            },
        };
    },
    mounted() {
        // 开始加载默认 tab
        this.startLoadTab(null, this.tab.pageTab, false);
    },
    methods: {
        handleTabClick(tab) {
            // 加载选中的 tab
            this.startLoadTab(this.tab.pageTab, tab.name, true);
            this.tab.pageTab = tab.name;
        },
        // 右上角操作按钮事件
        handle(e) {
            console.log(e);
        },
    }
};
</script>
```

#### 2. TAB1 页面 
```html
<template>
    <md-page-list :pageConfig="pageConfig" ref="pageListTemplate">
        <template #search>
            <md-advanced-search
                ref="advancedSearch"
                :data="filterConditions"
                :storageKey="`${$route.path}_search_tab1`"
                :origin="originQuery"
                :query="query"
                @search="toQuery"
            >
            </md-advanced-search>
        </template>
        <template #table>
            <md-list-table
                ref="listTable"
                apiFn="getTestList1"
                :storageKey="`${$route.path}_table_tab1`"
                :selections.sync="selections"
                :columns="columns"
            >
            </md-list-table>
        </template>
    </md-page-list>
</template>

<script>
// 高级搜索｜表格使用了远程存储，因此在与各自 tab 对应，需设置不同兼值，防止冲突
import { operateStorage, tabPageChild } from '@nextop/nextop-mixins';
import { isEmpty } from '@master_vantop/vantop-util';

export default {
    name: 'tab1',
    mixins: [operateStorage, tabPageChild],
    data() {
        return {
            selections: [],
            extraQuery: {
                status: '',
            },
            pageConfig: {
                padding: 0,
                skeleton: true,
                operationBtns: [
                    {
                        text: '新 增',
                        key: 'add',
                        click: () => this.handle(),
                    },
                    {
                        icon: 'nt-icon-generate-16',
                        text: '转为生产',
                        key: 'discard',
                        click: () => this.handle(),
                        disabled: () => isEmpty(this.selections)
                    },
                ],
                filterStatus: {
                    prop: 'status',
                    tabs: [
                        {
                            label: '全部',
                            value: '',
                        },
                        {
                            label: '启用',
                            value: 1,
                        },
                        {
                            label: '禁用',
                            value: 2,
                        },
                        {
                            label: '待补全',
                            value: 3,
                        },
                    ],
                },
            },
            filterConditions: [
                {
                    label: '姓名',
                    prop: 'name',
                    value: '',
                    status: 'fixed',
                    render: {
                        type: 'Input',
                    }
                },
                {
                    label: '年龄',
                    value: '',
                    prop: 'age',
                    render: {
                        type: 'Input',
                    }
                },
            ],
            columns: [
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
        };
    },
    async mounted() {
        // 一些初始化任务
        let queryParams;
        try {
            ([queryParams] = await Promise.all([
                // 获取异步数据（如左侧树形菜单、filterStatus由后端返回等）
                this.$refs.advancedSearch.init(),       // 搜索初始化（会返回条件参数对象）
                this.$refs.listTable.init(),        // 表格初始化
            ]));
        } catch (e) {
            console.log(e);
        }

        // await new Promise((resolve) => setTimeout(resolve, 3000));

        // 隐藏骨架屏
        this.$set(this.pageConfig, 'skeleton', false);
        this.$emit('initDone');

        // 调用查询
        this.active && this.toQuery(queryParams);
    },
    methods: {
        // 列表查询
        toQuery(queryParams) {
            // 参数预处理
            const params = this.preHandleParams(queryParams,
                {
                    filterEmpty: true   // 过滤掉空值属性
                }
            );
            console.log('查询了:', params);
            this.$nextTick(() => {
                this.$refs['listTable'].queryTable(params);
            });
        },
        // 右上角操作按钮事件
        handle(e) {
            console.log(e);
        }
    }
};
</script>
```

#### 3. TAB2页面
```html
<template>
    <md-page-list :pageConfig="pageConfig" ref="pageListTemplate">
        <template #search>
            <md-advanced-search
                ref="advancedSearch"
                :data="filterConditions"
                :storageKey="`${$route.path}_search_tab2`"
                :origin="originQuery"
                :query="query"
                @search="toQuery"
            >
            </md-advanced-search>
        </template>
        <template #table>
            <md-list-table
                ref="listTable"
                apiFn="getTestList2"
                :storageKey="`${$route.path}_table_tab2`"
                :selections.sync="selections"
                :columns="columns"
            >
            </md-list-table>
        </template>
    </md-page-list>
</template>

<script>
import { operateStorage, tabPageChild } from '@nextop/nextop-mixins';
import { isEmpty } from '@master_vantop/vantop-util';

export default {
    name: 'tab2',
    mixins: [operateStorage, tabPageChild],
    data() {
        return {
            selections: [],
            pageConfig: {
                padding: 0,
                skeleton: true,
                operationBtns: [
                    {
                        text: '反审生产',
                        key: 'check',
                        click: () => this.handle(),
                        disabled: () => isEmpty(this.selections)
                    },
                    {
                        text: '撤回审核',
                        key: 'cancel',
                        click: () => this.handle(),
                        disabled: () => isEmpty(this.selections)
                    },
                ],
            },
            filterConditions: [
                {
                    label: '性别',
                    prop: 'sex',
                    value: '',
                    status: 'fixed',
                    render: {
                        type: 'Input',
                    }
                },
                {
                    label: '地址',
                    prop: 'address',
                    value: '',
                    render: {
                        type: 'Input',
                    }
                },
            ],
            columns: [
                {
                    prop: 'b1',
                    label: 'B1'
                },
                {
                    prop: 'b2',
                    label: 'B2'
                },
                {
                    prop: 'b3',
                    label: 'B3'
                }
            ],
        };
    },
    async mounted() {
        // 一些初始化任务
        let queryParams;
        try {
            ([queryParams] = await Promise.all([
                // 获取异步数据（如左侧树形菜单、filterStatus由后端返回等）
                this.$refs.advancedSearch.init(),       // 搜索初始化（会返回条件参数对象）
                this.$refs.listTable.init(),            // 表格初始化
            ]));
        } catch (e) {
            console.log(e);
        }

        // await new Promise((resolve) => setTimeout(resolve, 5000));

        // 隐藏骨架屏
        this.$set(this.pageConfig, 'skeleton', false);
        this.$emit('initDone');

        // 调用查询
        this.active && this.toQuery(queryParams);
    },
    methods: {
        // 列表查询
        toQuery(queryParams) {
            // 参数预处理
            const params = this.preHandleParams(
                queryParams,
                {
                    filterEmpty: true   // 过滤掉空值属性
                }
            );
            console.log('查询了:', params);
            this.$nextTick(() => {
                this.$refs['listTable'].queryTable(params);
            });
        },
        // 右上角操作按钮事件
        handle(e) {
            console.log(e);
        }
    }
};
</script>
```




