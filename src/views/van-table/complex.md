## 复杂表格

### 合计

:::demo 
```html
<template>
    <vxe-table
      border="full"
      resizable
      show-footer
      is-group-body
      :scroll-y="{enabled: false}"
      :span-method="mergeRowMethod"
      :footer-method="footerMethod"
      :data="tableData">
      <vxe-table-column field="name" title="名称"></vxe-table-column>
      <vxe-table-column field="product" title="类别"></vxe-table-column>
      <vxe-table-column field="items" title="数据项"></vxe-table-column>
      <vxe-table-column field="january" title="一月"></vxe-table-column>
      <vxe-table-column field="june" title="六月"></vxe-table-column>
      <vxe-table-column field="december" title="十二月"></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      allAlign: null,
      tableData: [
        { id: 10001, name: '亚马逊', product: '投影仪9QW14', items: '销量', january: 12.453, june: 12.453, december: 12.453 },
        { id: 10002, name: '亚马逊', product: '投影仪9QW14', items: '发货实绩', january: 12.453, june: 12.453, december: 12.453 },
        { id: 10003, name: '亚马逊', product: '投影仪9QW14', items: '客单价', january: 12.453, june: 12.453, december: 12.453 },
        { id: 10004, name: '亚马逊', product: '投影仪9QW14', items: '销售量占比', january: '12.4%', june: '52.4%', december: '12.4%' }
      ],
    }
  },
  methods: {
    mergeRowMethod ({ row, _rowIndex, column, visibleData }) {
      const fields = ['name', 'product']
      const cellValue = XEUtils.get(row, column.property)
      if (cellValue && fields.includes(column.property)) {
        const prevRow = visibleData[_rowIndex - 1]
        let nextRow = visibleData[_rowIndex + 1]
        if (prevRow && XEUtils.get(prevRow, column.property) === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && XEUtils.get(nextRow, column.property) === cellValue) {
            nextRow = visibleData[++countRowspan + _rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    },
    footerMethod ({ columns, data }) {
      const footerData = [
        columns.map((column) => {
          if (['name', 'product'].includes(column.property)) {
            return null
          }
          if (['items'].includes(column.property)) {
            return '合计'
          }
          const total = data.reduce((init, item) => {
            if (isNaN(item[column.property])) return init
            return (init += item[column.property])
          }, 0)
          return `${total}`.slice(0, 6)
        })
      ]
      return footerData
    },
  }
}
</script>
```
:::


### 可编辑

:::demo 可编辑，此处input只做演示，后续会和el-input打通
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
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name" width="80">
        <template v-slot="{ row }" >
           <vxe-input v-model="row.name" placeholder="演示用"></vxe-input>
        </template>
      </vxe-table-column>
      <vxe-table-column field="role" title="Role" :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex" :edit-render="{name: '$select', options: sexList}"></vxe-table-column>
      <vxe-table-column field="sex1" title="多选下拉" :edit-render="{name: '$select', options: sexList, props: {multiple: true}}"></vxe-table-column>
      <vxe-table-column field="num" title="Number" :edit-render="{name: '$input', props: {type: 'number'}}"></vxe-table-column>
      <vxe-table-column field="date2" title="Date" :edit-render="{name: '$input', props: {type: 'date'}}"></vxe-table-column>
      <vxe-table-column field="date1" title="Week" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
      <vxe-table-column field="address" title="Address" :edit-render="{name: 'textarea'}"></vxe-table-column>
      <vxe-table-column title="操作" width="160">
        <template v-slot="{ row }">
          <template v-if="$refs.xTable.isActiveByRow(row)">
            <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
            <vxe-button @click="cancelRowEvent(row)">取消</vxe-button>
          </template>
          <template v-else>
            <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
          </template>
        </template>
      </vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      allAlign: null,
      loading: false,
      sexList: [
        {
            "label": "",
            "spell": "",
            "value": "",
            "value2": null,
            "val": ""
        },
        {
            "label": "男",
            "spell": "nan",
            "value": "1",
            "value2": 1,
            "val": "x"
        },
        {
            "label": "女",
            "spell": "nv",
            "value": "0",
            "value2": 0,
            "val": "o"
        }
      ],
      tableData: [
        {
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
        },
      ],
    }
  },
  methods: {
    editRowEvent (row) {
      this.$refs.xTable.setActiveRow(row)
    },
    saveRowEvent (row) {
      this.$refs.xTable.clearActived().then(() => {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$XModal.message({ message: '保存成功！', status: 'success' })
        }, 300)
      })
    },
    cancelRowEvent (row) {
      const xTable = this.$refs.xTable
      xTable.clearActived().then(() => {
        // 还原行数据
        xTable.revertData(row)
      })
    }
  }
}
</script>
```
:::