<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2022-04-22 16:43:39
 * @LastEditTime: 2022-04-22 17:54:22
 * @LastEditors: 蔡远程
-->
## toFixed 方法
::: tip 常规用法
toFixed(num: number, digits: number): string

返回一个四舍五入后，且格式化后的字符串（同 Number.prototype.toFixed()，解决了浮点数精度缺失问题）。
:::


### toFixed 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| num         | 目标值     | number | -|
| digits         | 保留几位小数     | number | 0 |

#### 例子
`Number.prototype.toFixed` 与 `VantopUtil.toFixed` 的区别
```js
(2.55).toFixed(1)
❎ // --> "2.5"

toFixed(2.55, 1)
✅ // --> "2.6" 
```

```js
toFixed(3.00099, 2)
// --> "3.00"

toFixed(0.145, 2)
// --> "0.15"

toFixed(0.145, 5)
// --> "0.14500"

```
