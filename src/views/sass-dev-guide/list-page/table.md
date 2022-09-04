<!--
 * @Author: lingyong.zeng
 * @Date: 2021-10-25 18:44:45
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:07:32
 * @Description: 
 * @FilePath: /nextop-docs/src/views/sass-dev-guide/list-page/table.md
-->
## 表格配置 md-list-table

```html
<!-- 普通使用 -->
<md-list-table
    ref="listTable"
    apiFn="getOrderList"
    :selections.sync="selections"
    :columns="columns"
    :operations="operations"
>
</md-list-table>

<!-- 自定义 vxe-template 使用 -->
<md-list-table
    ref="listTable"
    :apiFn="$logisticsApi.customClearanceBill"
    :hasSelection="false"
    :columns="columns"
>
    <template #default="{ storageColumns }">
        <template v-for="item in storageColumns">
            <vxe-table-column
                :field="item.prop"
                :key="item.label"
                :title="item.label"
                :min-width="item.minWidth">
                <template v-slot="scope">
                    <!-- -->
                </template>
            </vxe-table-column>
        </template>
    </template>
</md-list-table>
```

`md-list-table` 延用了 `md-table` 的属性，会将属性透传给 `md-table`，基本配置跟使用 `md-table` 类似。
### 功能概要
1. 自封装了分页/排序引起的接口查询，并存储至 urHash 参数的逻辑；

2. 自封装了勾选赋值逻辑，同步更新 `selections`；

3. 默认指定 `storage: true` / `storageKey: this.$route.path+'_table'` 等属性值；

4. `columns/operations` 等其它属性沿用 `md-table` 的用法；

5. `apiFn` 数据来源，支持函数/字符串
    - 5.1 String: `apiFn="apiFnName"` 映射为 this.$api.函数名；(已弃用)

    - 5.2 Function（Promise/Normal): `:apiFn="apiFnName"` 传入为函数 （后续规范建议采用这种用法）；

6. 触发表格查询请使用 `this.$refs['listTable'].queryTable(params)`，会自动调用 apiFn 进行接口请求及数据刷新

### 链接列/图片列/状态列配置

#### 1. 链接列
表格可点击列（如点击单号弹窗或新开页）统一使用 <el-link type="link"></el-link>，且权限同步于操作列按钮

```js
columns: [
    {
        label: '预付款单号',
        prop: 'advancePaymentNo',
        render: (h, { row }) => (
            <el-link
                type="link"
                onClick={this.toDetail}
                disabled={!this.buttonValidator(row, 'view')}
            >
                {row.advancePaymentNo}
            </el-link>
        ),
        minWidth: 200,
    },
]
```

#### 2. 图片列
表格状态列统一使用 `md-preview`

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



#### 3. 状态列
表格状态列统一使用 `el-badge`

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

### 文本超出省略号
配置 `minWidth` 和 `hoverable: true` 即可


```js
columns: [
    {
        label: '姓名',
        prop: 'name',
        minWidth: 80,
        hoverable: true
    },
    //...
]
```

### 表格标题 ？指引弹窗
统一配置 `titleHelp` 实现（支持换行），特殊设计需自行 `renderHeader` 实现。

```js
columns: [
    {
        label: '姓名',
        prop: 'name',
        minWidth: 80,
        hoverable: true,
        titleHelp: {
            message: '当 title-help.message 配置为字符串时\n会直接展示 message 文本'
        }
    },
    //...
]
```

### 操作列按钮顺序

| 顺序 | 按钮 | icon 
| -- | -- | -- |
| 1 | 编辑（最前）| nt-icon-edit-16
| 2 | 查看 | nt-icon-view-16
| 3 | 其它 | -
| 4 | 删除（最后） | nt-icon-delete-16


