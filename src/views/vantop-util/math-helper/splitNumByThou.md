## splitNumByThou 方法
::: tip 常规用法
splitNumByThou(num: number | string, sign: string): string 

返回一个按sign千分位分隔后的字符串。
:::


### splitNumByThou 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| num         | 需要千分位分隔的数字     | number ｜ string | -|
| sign     | 分隔的样式     | string      | ,     |

#### 例子
默认使用英文逗号','进行分隔
```js
splitNumByThou(12300.2),
// --> '12,300.2'
```
也可以自定义分隔符
```js
splitNumByThou(12300.2, ' '),
// --> '12 300.2'
```
