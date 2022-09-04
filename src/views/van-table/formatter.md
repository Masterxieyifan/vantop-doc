## 格式化内容

### 使用方式

- 将格式化方法名当成 `formatter` 属性的值直接使用
```js
<vxe-table-column
    field="time"
    title="时间"
    formatter="formatDate"
/>
```

- 需要传参的 `formatter` 的使用方式
```js
<vxe-table-column
    field="time"
    title="时间"
    :formatter="['formatDate', 'yyyy年MM月dd日']"
/>
```

### 全局格式化方法
| 方法名 | 说明 | 参数 |
| ----- | ---  | ----- |
| formatDate | 日期格式化 | (format = 'yyyy-MM-dd HH:mm:ss',  emptyText = '-') |
| formatEmptyContent | 空值格式化 | (emptyText = '-') |
| formatBankcard | 格式化银行卡，默认每4位空格隔开 | (emptyText = '-') |
| formatAmount | 四舍五入金额，每隔3位逗号分隔，默认2位数 | (digits = 2, emptyText = '-') |
| formatFixedNumber | 四舍五入，默认两位数 | (digits = 2, emptyText = '-') |
| formatCutNumber | 向下舍入，默认两位数 | (digits = 2, emptyText = '-') |
| formatPercent | 内容百分比 | (digits = 2, emptyText = '-') |
| formatDuration | 毫秒数格式化时长 | (emptyText = '-') |