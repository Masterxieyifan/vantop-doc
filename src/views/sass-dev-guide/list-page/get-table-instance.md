## 获取表格实例

```js
// list-table 实例
this.$refs['list-table'];

// md-table 实例
this.$refs['listTable'].__getTableInstance();

// vxe-table 实例
this.$refs['listTable'].__getTableInstance().$refs['tableInstance']; 
```