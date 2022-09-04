## 表格排序
1. 列表表格排序（使用后端接口排序），需配置 vxe-table 属性 `sort-config="{ remote: true }"`；

2. 支持排序的字段需配置 `sortable: true`；

3. 点击表格字段进行排序时会自动调用 `toQuery`, `toQuery(queryParams)` 中 `queryParams` 会提供两个属性: 

    3.1 `orderByField` [String] 正在排序的字段 `prop`

    3.2 `isAsc` [Boolean] : 升降序（`true`升序｜`false`降序)

4. 如果有初始默认值排序，则需要额外配置 `extraQuery` 和 `sortConfig`，请看以下例子

### 无初始默认排序
```html
<md-list-table
    ref="listTable"
    :apiFn="$customerApi['getMailInboxList']"
    :selections.sync="selections"
    :columns="columns"
    :sort-config="{ remote: true }"
>
</md-list-table>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    label: 'ID',
                    prop: 'serviceId',
                    minWidth: 180
                },
                {
                    label: '未回复时长(H)',
                    prop: 'unreplyHours',
                    minWidth: 140,
                    sortable: true          // 启用该列排序功能
                },
                //...
            ]
        }
    }
    methods() {
        async toQuery(queryParams) {
            const params = this.preHandleParams(queryParams, { filterEmpty: true });
            // 假设已经点击过字段排序
            console.log(params.orderByField);   // unreplyHours
            console.log(params.isAsc)           // true|false
    }
}
</script>
```

### 有初始默认排序

```html
<!-- 留意 sort-config | extraQuery 配置 -->
<md-list-table
    ref="listTable"
    :apiFn="$customerApi['getMailInboxList']"
    :selections.sync="selections"
    :columns="columns"
    :sort-config="{ 
        remote: true, 
        defaultSort: {
            field: 'respRate24',
            order: 'asc'
        } 
    }"
>
</md-list-table>

<script>
export default {
    data() {
        return {
            extraQuery: {                   // 初始默认排序设置
                orderByField: 'respRate24',
                isAsc: true
            },
            columns: [
                {
                    label: 'ID',
                    prop: 'serviceId',
                    minWidth: 180
                },
                {
                    label: '未回复时长(H)',
                    prop: 'unreplyHours',
                    minWidth: 140,
                    sortable: true          // 启用该列排序功能
                },
                {
                    label: '响应时间(H)',
                    prop: 'respRate24',
                    minWidth: 140,
                    sortable: true          // 启用该列排序功能
                },
                //...
            ]
        }
    }
    methods() {
        async toQuery(queryParams) {
            const params = this.preHandleParams(queryParams, { filterEmpty: true });
            // 假设已经点击过字段排序或有初始默认值
            console.log(params.orderByField);   // respRate24|unreplyHours
            console.log(params.isAsc)           // true|false
    }
}
</script>
```
