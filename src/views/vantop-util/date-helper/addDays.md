## addDays 方法
::: tip 常规用法
addDays(n, date): string 

返回一个表示增加或减少n天后的日期字符串。
:::


### addDays 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| n(可选)         | 增加的天数(若为负数则为减少的天数) |  number      | 0      |
| date(可选)         | 起始日期 |  Date｜number      |  今天      |

#### 例子

```js
const date = new Date('Sun Dec 12 2020 22:09:19 GMT+0800 (中国标准时间)');

addDays(2, date)
// --> '2020-12-14'

addDays(-2, date)
// --> '2020-12-10'
```
