## 冻结列

### 冻结列基础用法
:::demo 
```html
<template>
    <vxe-table
      border
      resizable
      show-overflow
      keep-source
      ref="xTable"
      :loading="loading"
      :data="tableData"
      :edit-config="{trigger: 'manual', mode: 'row'}">
      <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
      <vxe-table-column field="name" title="Name" width="200">
        <template slot="header">
          <div>Title <i class="vl-icon-star-on-16" @click="handleFreeze('name')"></i></div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="role" width="200" title="Role"></vxe-table-column>
      <vxe-table-column field="sex" width="200" title="Sex"></vxe-table-column>
      <vxe-table-column field="sex1" width="200" title="多选下拉"></vxe-table-column>
      <vxe-table-column field="num6" width="200" title="Number"></vxe-table-column>
      <vxe-table-column field="date12" width="200" title="Date"></vxe-table-column>
      <vxe-table-column field="date13" width="200" title="Week"></vxe-table-column>
      <vxe-table-column field="address" width="200" title="Address"></vxe-table-column>
      <vxe-table-column field="address1" width="200" title="Address"></vxe-table-column>
      <vxe-table-column field="address2" width="200" title="Address"></vxe-table-column>
      <vxe-table-column field="address3" width="200" title="Address"></vxe-table-column>
      <vxe-table-column field="address4" width="200" title="Address"></vxe-table-column>
      <vxe-table-column field="address5" width="200" title="Address"></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      loading: false,
      tableData: [{
            "id": 1000000,
            "name": "cc0",
            "role": "前端",
            "date1": "2021-07-14T09:24:25.730Z",
            "date2": "2021-07-14",
            "num": "0",
            "sex": "0",
            "sex1": [
                "0"
            ],
            "address": "vxe-table 从入门到放弃 - 0",
        },
        {
            "id": 1000001,
            "name": "UU1",
            "role": "项目经理",
            "date2": "",
            "date1": "",
            "num": "0",
            "address": "vxe-table 从入门到放弃 - 1",
            "sex": "1",
            "sex1": [
                "1"
            ],
        },
        {
            "id": 1000002,
            "name": "TT2",
            "role": "项目经理",
            "date2": "",
            "date1": "",
            "num": "0",
            "sex": "1",
            "sex1": [
                "1"
            ],
            "address": "vxe-table 从入门到放弃 - 2",
        },],
    }
  },
  methods: {
    handleFreeze (prop) {
      this.$refs.xTable.getColumns().some(col => {
        if (col.property === prop) {
          // 取消冻结则改成null
          col.fixed = 'left'
        }
      })
      this.$refs.xTable.refreshColumn()
    }
  },
}
</script>
```
:::