## calcDuration 方法
::: tip 常规用法
calcDuration(ms): string

返回一个表示时长的字符串(hour'min''sec)。
:::

### calcDuration 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| ms         | 毫秒     |  number      | -      |
| options         | 配置     |  object      | {h,m,s}      |


### options 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| h         | 小时符号     |  string      | '      |
| m         | 分钟符号     |  string      | '      |
| s         | 秒钟符号     |  string      | ''      |


#### 例子

```js
calcDuration(7482220)
// --> 2'4'42''


calcDuration(7482220, {h: ':'})
// --> 2:4'42''

```
