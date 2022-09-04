<!--
 * @Author: lingyong.zeng
 * @Date: 2021-10-25 18:34:44
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:07:26
 * @Description: 
 * @FilePath: /nextop-docs/src/views/sass-dev-guide/list-page/get-table-data.md
-->
## 获取表格数据（监听表格查询完成）
### 1. 想在表格查询后获取数据或处理
```js
async toQuery(queryParams) {
    const params = this.preHandleParams(queryParams, { filterEmpty: true });
    const { records, total } = await this.$refs['listTable'].queryTable(params);
}
```

### 2. 想获取表格数据
1. 可通过 1 自行维护;

2. 通过实例获取：

```js
this.$refs['list-table'].tableData;     // records
this.$refs['list-table'].total;         // total
```
