## PageFrame 页模版
基于PageList开发的页面组件, 最大宽1728px, 最小宽1216px, 剔除#aside、#table


### 基础用法 - 自定义标题
:::demo

```html
<template>
    <div class="md-page-frame-example">
        <md-page-frame
            :pageConfig="pageConfig"
        >
            <md-module-card v-for="item in 3" :key="item" title="数据列表"></md-module-card>
        </md-page-frame>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageConfig: {
                    // padding: 0, // 页面 padding
                    pageTitle: `
                        <i class="md-icon-export-16" style="font-weight: normal;"></i>
                        <span style="margin: 0 8px;">页面标题</span>
                        <el-tag class="el-tag el-tag--info" style="font-weight: normal;">副标题</el-tag>
                    `, // 页面 title
                    pageUpdateTime: '', // 页面 更新时间
                    pageHandbook: `
                        <h4>库存数据同步说明: </h4>
                        <ol>
                            <li>海外仓在途/海外仓可用/本地可用/待检量/待交付/采购计划实时更新</li>
                            <li>FBA库存/FBA在途与系统FBA库存/FBA货件同步更新</li>
                            <li>数据每日凌晨自动更新：销量数据/断货时间/可售库存预测/销量预测/建议发货量/建议采购量只更新30天内销量大于0的ASIN/MSKU</li>
                            <li>立即更新并计算断货时间/可售库存预测/销量预测/建议发货量/建议采购量请勾选商品并点击【同步数据】</li>
                            <li>当前FBA在途计算方式：按shipments已标记发货，未接收的数量计算</li>
                            <li>当前本地库存FNSKU计算方式：本地库存包含未绑定FNSKU的库存</li>
                        </ol>
                    `,
                },
            };
        },
        mounted(){
            setTimeout(() => {
                // 手动修改示例：由于组件内部用的 computed，会将属性默认值和传进来的 pageConfig 进行合并
                this.pageConfig.skeleton = false; // 需要手动 修改骨架屏 状态
                this.pageConfig.pageUpdateTime = new Date();
            }, 2000)
        },
    }
</script>
```
:::

### 页面头部slot + 搜索slot
:::demo

```html
<template>
    <div class="md-page-frame-example">
        <md-page-frame
            :pageConfig="pageConfig"
        >
            <!-- 页面模版 pageTab 插槽 -->
            <template #pageTab>
                我是 pageTab 插槽内容
            </template>
            <!-- 页面模版 header 插槽 -->
            <template #header>
                <el-dropdown trigger="click" placement="bottom">
                    <span style="cursor: pointer;">
                        <i class="md-icon-export-16"></i> 导出日志
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>导出选中数据</el-dropdown-item>
                        <el-dropdown-item>导出筛选数据</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </template>
            <!-- 页面模版 搜索 插槽 -->
            <template #search>
                <md-select-input/>
            </template>
            <md-module-card v-for="item in 3" :key="item" title="数据列表"></md-module-card>
        </md-page-frame>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageConfig: {
                    skeleton: true, // 默认为true，可不配置
                    // padding: 0, // 页面 padding
                    pageTitle: '页面标题', // 页面 title
                    pageUpdateTime: '', // 页面 更新时间
                },
                // search
                searchForm: {
                    name: '',
                    status: '',
                },
            };
        },
        mounted(){
            setTimeout(() => {
                // 手动修改示例：由于组件内部用的 computed，将属性默认值和传进来的 pageConfig 进行合并
                this.pageConfig.skeleton = false; // 需要手动 修改骨架屏 状态
                this.pageConfig.pageUpdateTime = new Date();
            }, 3000)
        },
    }
</script>
```
:::

### 搜索slot + 页面按钮 + inline一行 配置
:::demo

```html
<template>
    <div class="md-page-frame-example">
        <md-page-frame
            :pageConfig="pageConfig"
        >
            <!-- 页面模版 搜索 插槽 -->
            <template #search>
                <md-select-input/>
            </template>
            <md-module-card v-for="item in 3" :key="item" title="数据列表"></md-module-card>
            <!-- 自定义的页面弹窗，统一放在默认插槽里 -->
            <!-- <el-dialog
                dialogVisible="false"
            ></el-dialog> -->
        </md-page-frame>
    </div>
</template>

<script>
    export default {
        isPage: true,
        data() {
            return {
                // url 上的 query 参数
                query: {
                    status: 1,
                    orderNo: '',
                },
                pageConfig: {
                    skeleton: true, // 默认为true，可不配置
                    // padding: 0, // 页面 padding
                    pageTitle: '页面标题', // 页面 title
                    pageUpdateTime: new Date(), // 页面 更新时间
                    // 页面 操作 按钮，布局
                    operationBtnsLayout: 'inline',
                    // 页面 操作 按钮
                    operationBtns: [
                        {
                            type: 'Render', // Render JXS
                            render: () => (
                                <MdUpload
                                    v-model={this.fileList}
                                    sceneId="IMPORT_EXPORT_ORDER_IMPORT"
                                    on-success={this.uploadSuccess}
                                    on-error={this.uploadError}
                                >
                                    <template slot="import-dialog">
                                        <el-button type="primary" size="small" style="margin-right: 8px;">打开上传弹窗</el-button>
                                    </template>
                                </MdUpload>
                            ),
                        },
                        {
                            icon: 'vl-icon-add-new-16',
                            text: '新增',
                            key: 'add',
                            disabled: false, // 布尔值（场景：不需要改变）
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'vl-icon-time-light-16',
                            text: '审核',
                            key: 'check',
                            disabled: () => this.disabled, // 函数（场景：需要动态改变）
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'vl-icon-clear-16',
                            text: '作废',
                            key: 'discard',
                            disabled: () => this.disabled, // 函数（场景：需要动态改变）
                            click: item => this.handle(item),
                        },
                        {
                            type: 'Render', // Render JXS
                            divided: true, // 分割线
                            render: () => (
                                <MdUpload
                                    v-model={this.fileList}
                                    sceneId="IMPORT_EXPORT_ORDER_IMPORT"
                                    on-success={this.uploadSuccess}
                                    on-error={this.uploadError}
                                >
                                    <template slot="import-dialog">
                                        <el-button
                                            icon="md-icon-export-16"
                                            style={{ marginLeft: '8px', }}
                                        >打开上传弹窗</el-button>
                                    </template>
                                </MdUpload>
                            ),
                        }
                    ],
                },
                disabled: true,
                // 上传列表
                fileList: [
                    {
                        fileId: 'upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx',
                        name: '备货计划初始化.xlsx',
                        url: 'http://nextop-import.oss-cn-shenzhen.aliyuncs.com/upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx'
                    },
                ],
            };
        },
        mounted(){
            // 动态 改变按钮状态
            setTimeout(() => {
                this.pageConfig.skeleton = false; // 需要手动 修改骨架屏 状态
                this.disabled = false;
            }, 4000);
        },
        methods: {
            handle(item){
                console.log(item);
            },
            // 上传成功回调
            uploadSuccess(result){
                console.log(result);
            },
            // 上传失败回调
            uploadError(result){
                console.log(result);
            },
        }
    }
</script>
```
:::

### 状态筛选 + 页面按钮 配置
:::demo

```html
<template>
    <div class="md-page-frame-example">
        <md-page-frame
            ref="PageFrame"
            :pageConfig="pageConfig"
        >
            <!-- 页面模版 搜索 插槽 -->
            <template #search>
                <md-select-input/>
            </template>
            <!-- 页面模版 table 插槽 -->
            <template #table>
                <md-table
                    :columns="columns"
                    :data="data"
                >
                </md-table>
            </template>
        </md-page-frame>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // url 上的 query 参数
                query: {
                    status: '1',
                },
                pageConfig: {
                    skeleton: true, // 默认为true，可不配置
                    // padding: 0, // 页面 padding
                    pageTitle: '页面标题', // 页面 title
                    pageUpdateTime: new Date(), // 页面 更新时间
                    // 页面 状态 筛选
                    filterStatus: {
                        prop: 'status', // 对应 url 的 query 参数，拿到值后，会自动赋为默认值
                        tabs: [
                            {
                                label: '全部',
                                value: '',
                                // disabled: true, // 布尔值（场景：不需要改变）
                                hidden: false, // 状态权限 false 表示有权限
                            },
                            {
                                label: '待审核',
                                value: '1',
                                num: 6,
                                disabled: () => false, // 函数（场景：需要动态改变）
                                hidden: () => false, // 状态权限 false 表示有权限
                            },
                            {
                                label: '已审核',
                                value: '0',
                            },
                            {
                                label: '审核审核',
                                value: '2',
                            },
                            {
                                label: '审核审核',
                                value: '3',
                            },
                            {
                                label: '审核审核',
                                value: '4',
                            },
                            {
                                label: '审核审核',
                                value: '5',
                            },
                            {
                                label: '审核审核',
                                value: '6',
                            },
                            {
                                label: '审核审核',
                                value: '7',
                            },
                            {
                                label: '审核审核',
                                value: '8',
                            },
                            {
                                label: '审核审核',
                                value: '9',
                            },
                            {
                                label: '审核审核',
                                value: '10',
                            },
                        ],
                        tabClick: tab => this.handleTabClick(tab),
                    },
                    // 页面 操作 按钮
                    operationBtns: [
                        {
                            icon: 'vl-icon-add-new-16',
                            text: '新增',
                            key: 'add',
                            disabled: false, // 布尔值（场景：不需要改变）
                            loading: () => this.loading, // loading
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'vl-icon-time-light-16',
                            text: '审核',
                            key: 'check',
                            disabled: () => this.disabled, // 函数（场景：需要动态改变）
                            tooltip: '请至少选择10条数据', // 默认值：'请至少选择一条数据'
                            hidden: false, // 按钮权限 false 表示有权限
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'vl-icon-clear-16',
                            text: '作废',
                            key: 'discard',
                            hidden: () => this.hidden, // 按钮权限（可动态改变）
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'md-icon-export-16',
                            text: '导出筛选数据',
                            key: 'export-filter',
                            click: item => this.handle(item),
                        },
                    ],
                    // 页面 操作 按钮，只展示 1 个，其余的会折叠起来
                    displayBtnsNum: 1,
                },
                // search
                searchForm: {
                    name: '',
                    status: '',
                },
                // table
                columns: [
                    { prop: 'name', label: '名称', },
                    { prop: 'age', label: '年龄', },
                    { prop: 'sex', label: '性别', },
                ],
                data: [
                    { name: '123', age: 12, sex: 1, },
                ],
                disabled: false, // 按钮 是否可点击
                hidden: true, // 按钮权限 true 表示没权限
                loading: true, // 按钮 loading
            };
        },
        mounted(){
            // 动态 改变按钮状态
            setTimeout(() => {
                this.pageConfig.skeleton = false; // 需要手动 修改骨架屏 状态
                this.disabled = true;
                this.hidden = false;
                // 改变 loading
                setTimeout(() => {
                    this.loading = false;
                }, 3000);
            }, 5000);
        },
        methods: {
            // 修改 num 值
            handleTabClick(tab){
                // 方法一：自己 find 再修改
                // const { filterStatus: { tabs = [], } } = this.pageConfig;
                // let target = tabs.find(it => it.value === 1);
                // target.num += 1;

                // 方法二：通过 ref ，调用列表页组件 的 内部方法 修改
                // 两个参数: index, value
                this.query.status = tab.name;
                this.$refs.PageFrame.updateFilterStatusNum(1, 100); // 1 -> filterStatus.tabs 的索引，100 -> 值
            },
            handle(item){
                this.query.status = '';
                // 修改 filterStatus 的 默认赋值
                this.$refs.PageFrame.updateFilterStatusDefault();
            },
        }
    }
</script>
```
:::


### 状态插槽 + 页面按钮 配置
:::demo

```html
<template>
    <div class="md-page-frame-example">
        <md-page-frame
            ref="PageFrame"
            :pageConfig="pageConfig"
        >
            <!-- 页面模版 搜索 插槽 -->
            <template #search>
                <md-select-input/>
            </template>
            <template #filterStatus>
                <span>我是 filterStatus 插槽 内容</span>
            </template>
        </md-page-frame>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageConfig: {
                    skeleton: true, // 默认为true，可不配置
                    // padding: 0, // 页面 padding
                    pageTitle: '页面标题', // 页面 title
                    pageUpdateTime: new Date(), // 页面 更新时间
                    // 页面 操作 按钮
                    operationBtns: [
                        {
                            icon: 'vl-icon-add-new-16',
                            text: '新增',
                            key: 'add',
                            disabled: false, // 布尔值（场景：不需要改变）
                            loading: () => this.loading, // loading
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'vl-icon-time-light-16',
                            text: '审核',
                            key: 'check',
                            disabled: () => this.disabled, // 函数（场景：需要动态改变）
                            tooltip: '请至少选择10条数据', // 默认值：'请至少选择一条数据'
                            hidden: false, // 按钮权限 false 表示有权限
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'vl-icon-clear-16',
                            text: '作废',
                            key: 'discard',
                            hidden: () => this.hidden, // 按钮权限（可动态改变）
                            click: item => this.handle(item),
                        },
                        {
                            icon: 'md-icon-export-16',
                            text: '导出筛选数据',
                            key: 'export-filter',
                            click: item => this.handle(item),
                        },
                    ],
                },
                // search
                searchForm: {
                    name: '',
                },
                disabled: false, // 按钮 是否可点击
                hidden: true, // 按钮权限 true 表示没权限
                loading: true, // 按钮 loading
            };
        },
        mounted(){
            // 动态 改变按钮状态
            setTimeout(() => {
                this.pageConfig.skeleton = false; // 需要手动 修改骨架屏 状态
                this.disabled = true;
                this.hidden = false;
                // 改变 loading
                setTimeout(() => {
                    this.loading = false;
                }, 3000);
            }, 5000);
        },
        methods: {
            handle(item){
                console.log(item);
            },
        }
    }
</script>
```
:::


### 嵌套使用（pageTab切换）

#### 注意：
- 1、<font color=red>只兼容嵌套一层（直接嵌套，或者间接嵌套）使用，不考虑多层级嵌套使用</font>
- 2、<font color=red>嵌套使用时，父级组件的 pageConfig，必须设置 skeleton: false</font>
- 3、<font color=blue>原理：父组件会寻找当前渲染的子组件，根据子组件的骨架屏状态，同步更新自己的骨架屏状态</font>


:::demo

```html
<template>
    <div class="md-page-frame-example">
        <md-page-frame :pageConfig="pageConfig">
            <template v-for="item in pageConfig.pageTab.tabs">
                <component
                    :key="item.value"
                    :ref="`tab_${item.value}`"
                    :is="item.pageComponent"
                    v-show="tab.pageTab === item.value"
                    :active="tab.pageTab === item.value"
                ></component>
            </template>
        </md-page-frame>
    </div>
</template>

<script>
    import Tab1 from './components/PageFrameTab1.vue';
    import Tab2 from './components/PageFrameTab2.vue';
    export default {
        components: {
            Tab1,
            Tab2,
        },
        data() {
            return {
                tab: {
                    pageTab: 1,
                },
                // 父组件 配置
                pageConfig: {
                    skeleton: false, // 父组件 skeleton 必须设为 false
                    // padding: 0, // 页面 padding
                    pageUpdateTime: new Date(), // 页面 更新时间
                    pageTab: {
                        prop: 'pageTab', // 对应 url 的 tab 参数，拿到值后，会自动赋为默认值
                        tabs: [
                            {
                                label: 'Tab1',
                                value: 1,
                                pageComponent: Tab1,
                            },
                            {
                                label: 'Tab2',
                                value: 2,
                                pageComponent: Tab2,
                            },
                        ],
                        tabClick: tab => this.handleTabClick(tab),
                    },
                    pageRefresh: () => {},
                },
            };
        },
        methods: {
            handleTabClick({ name, }){
                this.tab.pageTab = +name;
            },
        },
    }
</script>
```
:::


### PageFrame Attributes
> 所有配置参数，都在 pageConfig 对象里

| 参数名称             | 描述             | 类型     |是否必须 |默认值  |
| --------------------| ----------------| --------| -------| ------|
| skeleton            | 骨架屏           | Boolean |否      |false  |
| asideWidth          | 侧边栏宽度        | Number  |否      |240    |
| padding             | 左右padding      | Number  |否      |20     |
| pageTitle           | 页面 头部标题     | String  |否      |''     |
| pageHandbook        | 页面 操作手册     | String  |否      |-      |
| pageJumpHelpCenter  | 页面 跳转帮助中心  | Function|否      |-      |
| pageRefresh         | 页面 刷新        | Function|否      |-      |
| pageTab             | 页面 头部Tab     | Object  |否      |{}      |
| pageUpdateTime      | 页面 更新时间     | String  |否      |''      |
| filterStatus        | 页面 状态过滤     | Object  |否      |{}      |
| operationBtns       | 页面 操作按钮     | Array   |否      |[]      |
| operationBtnsLayout | 页面 操作按钮 布局 | String  |否      |'block‘ |
| displayBtnsNum      | 页面 操作按钮 个数 | Number  |否      |无      |

### pageTab/filterStatus Attributes
| 参数名称       | 说明                            |类型       | 默认值 |
| --------------| -------------------------------| ---------|-------|
| prop          | 对应url上 tab 或 query 参数的属性 | String   | -     |
| tabs          | tab集合                         | Array    | []    |
| tabClick      | tab的点击事件                    | Function | -     |

### tabs Attributes
| 参数名称       | 说明            | 类型            | 默认值 |
| --------------| ---------------| ---------------|-------|
| label         | tab的键名       | string         | -     |
| value         | tab的键值       | string｜number | -     |
| num           | tab状态筛选数值  | number         | -     |

### PageFrame Methods
| 组件内部实例，对外暴露的方法名       | 说明                                      | 参数                                |
| ------------------------------------| -----------------------------------------| -----------------------------------|
| updateFilterStatusDefault           | 修改 filterStatus 的默认选中               | 无                                  |
| updateFilterStatusNum(index, value) | 修改 filterStatus.tabs 数组里目标对象的 num | index -> tabs的索引，value -> num的值 |
