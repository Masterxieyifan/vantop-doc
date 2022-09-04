<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2022-04-22 16:43:39
 * @LastEditTime: 2022-04-22 17:57:34
 * @LastEditors: 蔡远程
-->
## divide 方法
::: tip 常规用法
divide(dividend: number, divisor: number): number

除法运算，解决精度问题。
:::


### divide 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| dividend         | 除数     | number | -|
| divisor         | 被除数     | number | - |

#### 例子
```js
divide(2.997, 0.9)
// --> 3.33

divide(182.967, 25.77)
// --> 7.1

divide(2, 0)
// --> Infinity

```
