## number2Byte 方法
::: tip 常规用法
number2Byte(num): string 

返回转化后的存储单位字符串。
:::


### number2Byte 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| num         | 需要转换的数值（字节单位）     | number ｜ string      | -      |

#### 例子

```js
number2Byte(1)
// --> '1B'
```

```js
number2Byte(1024)
// --> '1KB'
```

```js
number2Byte(23341122)
// --> '22.26MB'
```
最大转化单位为TB
```js
number2Byte(1024000000000)
// --> '0.93TB'
```