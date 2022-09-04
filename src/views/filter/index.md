<!--
 * @Author: lingyong.zeng
 * @Date: 2021-11-10 10:44:02
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-06-24 17:36:06
 * @Description: 
 * @FilePath: /vantop-docs/src/views/sass-dev-guide/global-filters.md
-->

### 过滤器维护

全局过滤器统一在 main 主应用中维护 ，子应用可直接使用

路径：`src/filters/index.js`

### 过滤器汇总（原 VXETable 的格式化方法已同步为过滤器)

| 名称 | 功能 | 参数 |
| -- | -- | -- |
| empty | 空值格式化 '-' | (emptyText = '-') | 
| formatEmptyContent | 空值格式化 | (emptyText = '-') |
| formatDate | 日期格式化 | (format = 'yyyy-MM-dd HH:mm:ss',  emptyText = '-') |
| formatBankcard | 格式化银行卡，默认每4位空格隔开 | (emptyText = '-') |
| formatAmount | 四舍五入金额，每隔3位逗号分隔，默认2位数 | (digits = 2, emptyText = '-') |
| formatFixedNumber | 四舍五入，默认两位数 | (digits = 2, emptyText = '-') |
| formatCutNumber | 向下舍入，默认两位数 | (digits = 2, emptyText = '-') |
| formatPercent | 内容百分比 | (digits = 2, emptyText = '-') |
| formatDuration | 毫秒数格式化时长 | (emptyText = '-') |
