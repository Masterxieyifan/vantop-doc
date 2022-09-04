<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2022-04-22 16:43:39
 * @LastEditTime: 2022-04-22 17:54:13
 * @LastEditors: 蔡远程
-->
## add 方法
::: tip 常规用法
add(addend: number, augend: number): number

加法运算，解决精度问题。
:::


### add 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| addend         | 加数     | number | -|
| augend         | 被加数     | number | - |

#### 例子
```js
add(0.1, 0.2)
// --> 0.3

add(0.4598, 5.024666)
// --> 5.484466

```
