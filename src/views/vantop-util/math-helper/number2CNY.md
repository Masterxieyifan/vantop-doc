## number2CNY 方法
::: tip 常规用法
number2CNY(num, isUpper): string 

返回一个表示金额的中文字符串。
:::


### number2CNY 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| num         | 需要转换的金额（最大值不超过999999999999.99）     | number ｜ string      | -      |
| isUpper     | 是否转换成大写中文     | boolean      | false     |

#### 例子
默认转化成小写中文金额
```js
number2CNY(12300.23),
// --> '一万二千三百元二角三分'
```

当isUpper为true时转化成大写的中文金额
```js
number2CNY(12300.23, true),
// --> '壹万贰仟叁佰元贰角叁分'
```

当金额为整数时
```js
number2CNY(12300, true),
// --> '壹万贰仟叁佰元整'
```
