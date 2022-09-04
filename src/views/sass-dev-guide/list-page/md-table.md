<!--
 * @Author: lingyong.zeng
 * @Date: 2021-10-25 18:12:03
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:07:29
 * @Description: 
 * @FilePath: /nextop-docs/src/views/sass-dev-guide/list-page/md-table.md
-->

## md-table 被指样式不对
列表页面原则上建议使用 `md-list-table`，因为 `md-list-table` 预设了 UI 要求的一些通用样式，如斑马线、高度设置、样式等。

列表页面如果使用了 `md-table`，则需采用以下错误修复样式不统一问题：

```js
<template>
    <md-table
        ref="listTable"
        v-bind="listTableConfig"
    >
    </md-table>
</templage>

<script>
import { mapParentGetters, } from '@master_vantop/nextop-core';

export default {
    computed: {
        ...mapParentGetters(['listTableConfig']),
    },
}
</script>
```

listTableConfig 维护在 main 的 store/appstore.js 中

```js
listTableConfig: {
    border: 'header',
    height: 'auto',
    stripe:  true,
    highlightCurrentRow: false,
    checkboxConfig: {
        highlight: true,
        borderShow: true
    },
}
```



## md-table 列表页面使用案例
* [列表页面 md-table 替换](http://git.nextop.cc/nextop-web-erp/md-gamma-finance/blob/develop/src/views/accounting-Inventory-synthesis.vue)