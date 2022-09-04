## fixedNumber 方法
::: tip 常规用法
fixedNumber(num, decimal, digits, zero): string 

返回一个四舍五入后保留指定位数的字符串。
:::


### fixedNumber 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| num         |   数值   | number ｜ string      | -      |
| decimal     | 保留几位小数     | number      | 2     |
| digits     | 限制整数长度，若值小于0则不限制     | number      | -1     |
| zero     | 是否补零     | boolean      | true     |

#### 例子
默认会去除非数字的字符串
```js
fixedNumber('123dasdsa00.2'),
// --> '12300.20'
```

默认保留两位小数且自动补零
```js
fixedNumber(12300.2),
// --> '12300.20'
```
保留四位小数
```js
fixedNumber(12300.23456, 4),
// --> '12300.2346'
```

限制整数长度为3
```js
fixedNumber(12300.2, 4, 3),
// --> '123.2000'
```

当zero为false时不补零
```js
fixedNumber(12300.2, 4, 3, false),
// --> '123.2'
```
