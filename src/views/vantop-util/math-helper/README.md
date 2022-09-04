# 数学类
### 使用方法（按需引入）
```js
import { number2CNY } from '@master_vantop/vantop-util';
number2CNY();
```
### 方法列表
| 方法          | 说明                 | 返回值     |
| :------------ |:-------------------| :----------|
|  [fixedNumber(num, decimal, digits, zero)](/vantop-util/math-helper/fixedNumber)  | 数字的处理 | String |
|  [number2CNY(num,isUpper)](/vantop-util/math-helper/number2CNY)  | 将数字转化成中文金额| String |
|  [number2Byte(num)](/vantop-util/math-helper/number2Byte)  | 存储单位转换| String |
|  [splitNumByThou(num, sign)](/vantop-util/math-helper/splitNumByThou)  | 千分位分隔处理 | String |
|  [toNumber(val)](/vantop-util/math-helper/toNumber)  | 转 number 类型函数 | Number |
|  [toFixed(num, digits)](/vantop-util/math-helper/toFixed)  | 同 Number.prototype.toFixed 函数，解决精度问题 | String |
|  [round(num, digits)](/vantop-util/math-helper/round)  | 同 Math.round 函数，解决精度问题 | Number |
|  [add(addend, augend)](/vantop-util/math-helper/add)  | 加法运算，解决精度问题 | Number |
|  [subtract(subtrahend, minuend)](/vantop-util/math-helper/subtract)  | 减法运算，解决精度问题 | Number |
|  [multiply(num, digits)](/vantop-util/math-helper/multiply)  | 乘法运算，解决精度问题 | Number |
|  [divide(num, digits)](/vantop-util/math-helper/divide)  | 除法运算，解决精度问题 | Number |