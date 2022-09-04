<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2022-04-22 16:43:39
 * @LastEditTime: 2022-04-22 17:35:26
 * @LastEditors: 蔡远程
-->
## toNumber 方法
::: tip 常规用法
toNumber(val: any): number

返回一个转换后的 number 类型数字，若值为非数字数值，则返回 0。
:::


### toNumber 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| val         | 需要进行 number 类型转换的目标值     | any | -|

#### 例子
```js
toNumber('123.33'),
// --> 123.33

toNumber(123.33),
// --> 123.33

toNumber(null),
// --> 0

toNumber(undefined),
// --> 0

toNumber(true),
// --> 0

```
