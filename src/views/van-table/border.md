## 表格边框

### 默认边框
:::demo 通过设置 `border` 为 `false | default` 默认显示边框
```html
<template>
<vxe-table
    :border="false"
    height="200"
    show-footer
    :data="tableData"
    :footer-method="footerMethod">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex"></vxe-table-column>
    <vxe-table-column field="age" title="Age"></vxe-table-column>
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
        },
        methods: {
            sumNum (list, field) {
                let count = 0
                list.forEach(item => {
                    count += Number(item[field])
                })
                return count
            },
            footerMethod ({ columns, data }) {
                const sums = []
                columns.forEach((column, columnIndex) => {
                    if (columnIndex === 0) {
                    sums.push('和值')
                    } else {
                    sums.push(this.sumNum(data, column.property))
                    }
                })
                // 返回一个二维数组的表尾合计
                return [sums]
            }
        }
    }
</script>
```
:::

### 完整边框
:::demo 通过设置 `border` 为 `true | full` 显示完整边框
```html
<template>
<vxe-table
    border
    height="200"
    show-footer
    :data="tableData"
    :footer-method="footerMethod">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex"></vxe-table-column>
    <vxe-table-column field="age" title="Age"></vxe-table-column>
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
        },
        methods: {
            sumNum (list, field) {
                let count = 0
                list.forEach(item => {
                    count += Number(item[field])
                })
                return count
            },
            footerMethod ({ columns, data }) {
                const sums = []
                columns.forEach((column, columnIndex) => {
                    if (columnIndex === 0) {
                    sums.push('和值')
                    } else {
                    sums.push(this.sumNum(data, column.property))
                    }
                })
                // 返回一个二维数组的表尾合计
                return [sums]
            }
        }
    }
</script>
```
:::

### 外边框
:::demo 通过设置 `border` 为 `outer` 显示外边框
```html
<template>
<vxe-table
    border="outer"
    height="200"
    show-footer
    :data="tableData"
    :footer-method="footerMethod">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex"></vxe-table-column>
    <vxe-table-column field="age" title="Age"></vxe-table-column>
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
        },
        methods: {
            sumNum (list, field) {
                let count = 0
                list.forEach(item => {
                    count += Number(item[field])
                })
                return count
            },
            footerMethod ({ columns, data }) {
                const sums = []
                columns.forEach((column, columnIndex) => {
                    if (columnIndex === 0) {
                    sums.push('和值')
                    } else {
                    sums.push(this.sumNum(data, column.property))
                    }
                })
                // 返回一个二维数组的表尾合计
                return [sums]
            }
        }
    }
</script>
```
:::

### 内边框
:::demo 通过设置 `border` 为 `inner` 显示内边框
```html
<template>
<vxe-table
    border="inner"
    height="200"
    show-footer
    :data="tableData"
    :footer-method="footerMethod">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex"></vxe-table-column>
    <vxe-table-column field="age" title="Age"></vxe-table-column>
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
        },
        methods: {
            sumNum (list, field) {
                let count = 0
                list.forEach(item => {
                    count += Number(item[field])
                })
                return count
            },
            footerMethod ({ columns, data }) {
                const sums = []
                columns.forEach((column, columnIndex) => {
                    if (columnIndex === 0) {
                    sums.push('和值')
                    } else {
                    sums.push(this.sumNum(data, column.property))
                    }
                })
                // 返回一个二维数组的表尾合计
                return [sums]
            }
        }
    }
</script>
```
:::

### 表头底部边框
:::demo 通过设置 `border` 为 `header` 显示表头底部边框
```html
<template>
<vxe-table
    border="header"
    height="200"
    show-footer
    :data="tableData"
    :footer-method="footerMethod">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex"></vxe-table-column>
    <vxe-table-column field="age" title="Age"></vxe-table-column>
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
        },
        methods: {
            sumNum (list, field) {
                let count = 0
                list.forEach(item => {
                    count += Number(item[field])
                })
                return count
            },
            footerMethod ({ columns, data }) {
                const sums = []
                columns.forEach((column, columnIndex) => {
                    if (columnIndex === 0) {
                    sums.push('和值')
                    } else {
                    sums.push(this.sumNum(data, column.property))
                    }
                })
                // 返回一个二维数组的表尾合计
                return [sums]
            }
        }
    }
</script>
```
:::

### 无边框
:::demo 通过设置 `border` 为 `none` 取代所有边框
```html
<template>
<vxe-table
    border="none"
    height="200"
    show-footer
    :data="tableData"
    :footer-method="footerMethod">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex"></vxe-table-column>
    <vxe-table-column field="age" title="Age"></vxe-table-column>
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
        },
        methods: {
            sumNum (list, field) {
                let count = 0
                list.forEach(item => {
                    count += Number(item[field])
                })
                return count
            },
            footerMethod ({ columns, data }) {
                const sums = []
                columns.forEach((column, columnIndex) => {
                    if (columnIndex === 0) {
                    sums.push('和值')
                    } else {
                    sums.push(this.sumNum(data, column.property))
                    }
                })
                // 返回一个二维数组的表尾合计
                return [sums]
            }
        }
    }
</script>
```
:::