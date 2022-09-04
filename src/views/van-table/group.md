## 多级表头

### 基础用法
:::demo 
```html
<template>
    <vxe-table
      border="full"
      height="400"
      :data="tableData">
      <vxe-table-colgroup title="基本信息">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
      </vxe-table-colgroup>
      <vxe-table-colgroup title="更多信息">
        <vxe-table-column field="role" title="Role"></vxe-table-column>
        <vxe-table-colgroup title="详细信息">
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table-colgroup>
      </vxe-table-colgroup>
      <vxe-table-colgroup title="分类信息">
        <vxe-table-column field="date3" title="Date"></vxe-table-column>
      </vxe-table-colgroup>
      <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ],
    }
  }
}
</script>
```
:::


### 合并行
:::demo 合并行，使用`span-method`合并，同时设置`is-group-body`属性值为`true`
```html
<template>
    <vxe-table
        border="full"
        resizable
        height="300"
        is-group-body
        :scroll-y="{enabled: false}"
        :span-method="mergeRowMethod"
        :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="key" title="Key"></vxe-table-column>
        <vxe-table-column field="content" title="Translate"></vxe-table-column>
        <vxe-table-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN' }, {label: 'English', value: 'en_US'}]"></vxe-table-column>
      </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      tableData: [
        { id: 10001, key: 'app.label.name', content: '名称', language: 'zh_CN' },
        { id: 10002, key: 'app.label.name', content: 'Name', language: 'en_US' },
        { id: 10003, key: 'app.label.sex', content: '性别', language: 'zh_CN' },
        { id: 10004, key: 'app.label.sex', content: 'Sex', language: 'en_US' },
        { id: 10005, key: 'app.label.age', content: '年龄', language: 'zh_CN' },
        { id: 10006, key: 'app.label.age', content: 'Age', language: 'en_US' },
        { id: 10007, key: 'app.label.role', content: '角色', language: 'zh_CN' },
        { id: 10008, key: 'app.label.role', content: 'Role', language: 'en_US' },
        { id: 10009, key: 'app.label.address', content: '地址', language: 'zh_CN' },
        { id: 10010, key: 'app.label.address', content: 'Address', language: 'en_US' },
        { id: 10011, key: 'app.label.nickname', content: '昵称', language: 'zh_CN' },
        { id: 10012, key: 'app.label.nickname', content: 'Nickname', language: 'en_US' }
      ],
    }
  },
  methods: {
    mergeRowMethod ({ row, _rowIndex, column, visibleData }) {
      const fields = ['key']
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
    }
  }
}
</script>
```
:::