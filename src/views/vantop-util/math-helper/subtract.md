<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2022-04-22 16:43:39
 * @LastEditTime: 2022-04-22 17:54:10
 * @LastEditors: 蔡远程
-->
## subtract 方法
::: tip 常规用法
subtract(subtrahend: number, minuend: number): number

减法运算，解决精度问题。
:::


### subtract 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| subtrahend         | 减数     | number | -|
| minuend         | 被减数     | number | - |

#### 例子
```js
subtract(0.3, 0.1)
// --> 0.2

subtract(324253.1, 23559.9)
// --> 300693.2

```
