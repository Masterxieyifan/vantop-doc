## 基础表格

### 基础用法

:::demo 
```html
<template>
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="allAlign = 'left'">居左</vxe-button>
        <vxe-button @click="allAlign = 'center'">居中</vxe-button>
        <vxe-button @click="allAlign = 'right'">居右</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      :align="allAlign"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      allAlign: null,
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


### 行高亮

:::demo 使用`highlight-hover-row`属性启用 hover 行高亮
```html
<template>
    <vxe-table
      border
      show-header-overflow
      show-overflow
      @row-hover="handleRowHover"
      @row-leave="handleRowLeave"
      highlight-hover-row
      :align="allAlign"
      :data="tableData">
      <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name" width="200"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex" width="200"></vxe-table-column>
      <vxe-table-column field="age" title="Age" width="200"></vxe-table-column>
      <vxe-table-column field="address" title="Address" width="200"></vxe-table-column>
      <vxe-table-column field="address1" title="Address" width="200"></vxe-table-column>
      <vxe-table-column field="address2" title="Address" width="200"></vxe-table-column>
      <vxe-table-column field="address3" title="Address" width="200"></vxe-table-column>
      <vxe-table-column field="address4" title="Address" width="200"></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ],
    }
  },
  methods: {
    handleRowHover () {
      // console.log('entry')
    },
    handleRowLeave () {
      // console.log('leave')
    }
  }
}
</script>
```
:::


### 根据条件筛选后行高亮

:::demo 使用`highlight-row`属性，根据条件筛选后行高亮
```html
<template>
    <vxe-table
      border
      show-header-overflow
      show-overflow
      :highlight-row="handleHighLightRow"
      :align="allAlign"
      :data="tableData">
      <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ],
    }
  },
  methods: {
    handleHighLightRow (row) {
      return row.name === 'Test4'
    },
  }
}
</script>
```
:::


### 显示边框

:::demo 设置`border`属性为`full` ，显示边框
```html
<template>
    <vxe-table
      border="full"
      show-header-overflow
      show-overflow
      :align="allAlign"
      :data="tableData">
      <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ],
    }
  },
}
</script>
```
:::

### 显示状态

:::demo 设置`successRow` 属性，显示成功状态；`warningRow` 属性，显示警告状态；`dangerRow` 属性，显示危险状态
```html
<template>
    <vxe-table
      border="full"
      show-header-overflow
      show-overflow
      :successRow="row => row.id === 10001"
      :warningRow=" row => row.id === 10002"
      :dangerRow=" row => row.id === 10003"
      :align="allAlign"
      :data="tableData">
      <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table>
</template>
<script>

export default {
  data () {
    return {
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ],
    }
  },
}
</script>
```
:::