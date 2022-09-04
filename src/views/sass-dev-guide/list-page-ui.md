<!--
 * @Author: lingyong.zeng
 * @Date: 2021-09-28 15:45:29
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:07:17
 * @Description: 
 * @FilePath: /nextop-docs/src/views/sass-dev-guide/list-page-ui.md
-->
### 图标 ICON 匹配文档
需要查找图标 ICON 请在该文档查找，找不到的 [@周杰]()

[>> 系统图标库](https://puddle-wildcat-d36.notion.site/84fc001539de454997c3ac5bbf2b6399)

### 双字按钮中间留空格
业务方无需处理，已在 vanlement-ui 中的 `el-button` 组件自动处理

### 页面状态栏配置
筛选条件有状态筛选的（且单选）场景下，应配置成状态栏

### 页面右上角按钮

#### 1. 按钮顺序

**除“创建”按钮以外，其它按钮均需要 ICON**

| 顺序 | 按钮 | icon 
| -- | -- | -- |
| 1 | 创建（最前）| 不需要
| 2 | 导入 | nt-icon-import-16
| 3 | 导出 | nt-icon-download-16
| 3 | 其它 | -
| 4 | 删除（最后） | nt-icon-delete-16

#### 2. 按钮文案

“新增”/“添加” 按钮文案统一更改为 “创建”，对应弹窗文案统一为 “创建...“，且不需要图标

#### 3. 条件栏与按钮一行显示

筛选条件少于等于 3 个时，需配置按钮布局一行显示

```js
pageConfig: {
    //...
    operationBtnsLayout: 'inline',  // 配置一行显示
    operationBtns: [
        //...
    ],
    //...
}
```

#### 4. 按钮权限配置

权限配置在 `disabled` 属性上配置，同时按钮支持 `loading` 属性

```js
pageConfig: {
    //...
    operationBtns: [
        {
            text: '创建',
            key: 'add',
            disabled: this.hasPermission('purchase:plan:add'),
            loading: () => this.addLoading,
            click: this.add,
        },
    ]
    //...
}
```

#### 5. 首个按钮样式特殊

 第一个按钮默认为 `type="primary"`，业务方无需手动处理


### 表格列渲染

#### 1. 链接字段配置
统一使用 `el-link` 组件，如果是打开跳转页面，建议使用 `href`
```js
columns: [
    {
        prop: 'planCode',
        label: '计划编号',
        minWidth: 200,
        render: (h, { row }) => (
            <el-link
                type="link"
                onClick={() => this.toDetails(row)}
                disabled={this.hasPermission('purchase:plan:detail')}  // 权限配置
            >
                {row.planCode}
            </el-link>
        )
    },
    //...
]
```

#### 2. 状态字段配置
统一使用 `el-badge` 组件

```js
const STATUS_MAP = new Map([
    [1, { desc: '待提交', theme: 'warning'}],
    [2, { desc: '待审批', theme: 'warning' }],
    [3, { desc: '已下单', theme: 'primary' }],
    [4, { desc: '部分送货', theme: 'primary'}],
    [5, { desc: '已完成', theme: 'success' }],
    [6, {desc: '已作废', theme: 'info'}]
]);

columns: [
    {
        label: '状态',
        prop: 'orderStatus',
        minWidth: 80,
        render: (h, { row: { orderStatus } }) => {
            const status = +orderStatus;
            if (STATUS_MAP.has(status)) {
                const statusSet = STATUS_MAP.get(status);
                return <el-badge status={statusSet['theme']} text={statusSet['desc']}/>;
            } else if (orderStatus) {
                return <span>{orderStatus}</span>;
            }
            return <span>-</span>;
        }
    },
    //...
]
```

#### 3. 图片字段配置
统一使用 `md-preview` 组件

```js
columns: [
    {
        label: '图片',
        prop: 'picUrl',
        minWidth: 80,
        render: (h, { row }) => {
            return <md-preview url={row.picUrl} />;
        },
    },
    //...
]
```

#### 4. 文本默认一行展示，超出省略号

配置 `minWidth` 和 `hoverable: true` 即可

### 表格操作列按钮顺序

| 顺序 | 按钮 | icon 
| -- | -- | -- |
| 1 | 编辑（最前）| nt-icon-edit-16
| 2 | 查看 | nt-icon-view-16
| 3 | 其它 | -
| 4 | 删除（最后） | nt-icon-delete-16


### 弹窗取消按钮

弹窗取消按钮统一配置为 `type="info"`

```html
<el-button type="info" @click="closed" size="small">取消</el-button>
```

### UI 的其它一些规范（后续需求遵守）
1. 默认点击编号、名称、单号等元素查看详情，去掉右侧操作的查看按钮（如有权限控制，处理为 Disabled 状态）

2. 操作栏，状态字段默认不展示数字（有数字展示的去掉）

3. 表格字段为纯文本的，默认1行展示，超出省略
