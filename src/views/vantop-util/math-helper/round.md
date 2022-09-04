<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2022-04-22 16:43:39
 * @LastEditTime: 2022-04-22 17:54:17
 * @LastEditors: 蔡远程
-->
## round 方法
::: tip 常规用法
round(num: number, digits: number): number

返回一个四舍五入后的数字（同 Math.round()，解决了浮点数精度缺失问题）。
:::


### round 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| num         | 目标值     | number | -|
| digits         | 保留几位小数     | number | 0 |

#### 例子
`Math.round` 与 `VantopUtil.round` 的区别
```js
Math.round(-20.5)
❎ // --> -20

round(-20.5)
✅ // --> -21
```

```js
round(3.00099, 2)
// --> 3

round(0.145, 2)
// --> 0.15

round(0.145, 5)
// --> 0.14

```
