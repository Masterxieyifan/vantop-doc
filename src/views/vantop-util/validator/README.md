## 验证类

### 使用方法（按需引入）
```js
import { getType } from '@master_vantop/vantop-util';
isObjDeepEqual();
```
### 方法列表
| 方法          | 说明                 | 返回值     |
| :------------ |:-------------------| :----------|
| [isObjDeepEqual(value, other, skipFunc, log)](/vantop-util/validator/isObjDeepEqual)| 验证value和other值是否相等   | boolean      |
| [isEmpty(value)](/vantop-util/validator/isEmpty)| 验证是否为空值(null、undefined、'')| boolean |
| [isMobile(value)](/vantop-util/validator/isMobile)| 验证是否为手机号| boolean |
| [isPhone(value)](/vantop-util/validator/isPhone)| 验证是否为座机号码| boolean |
| [isURL(value)](/vantop-util/validator/isURL)| 验证是否为URL| boolean |
| [isEmail(value)](/vantop-util/validator/isEmail)| 验证是否为邮箱地址| boolean |
| [isString(value)](/vantop-util/validator/isString)| 验证是否为字符串类型| boolean |
| [isNumber(value)](/vantop-util/validator/isNumber)| 验证是否为数字类型| boolean |
| [isObject(value)](/vantop-util/validator/isObject)| 验证是否为obj类型| boolean |
| [isFunction(value)](/vantop-util/validator/isFunction)| 验证是否为方法| boolean |
| [isBoolean(value)](/vantop-util/validator/isBoolean)| 验证是否为布尔值| boolean |
| [isSymbol(value)](/vantop-util/validator/isSymbol)| 验证是否为symbol类型| boolean |
| [isArray(value)](/vantop-util/validator/isArray)| 验证是否为数组| boolean |
| [isDate(value)](/vantop-util/validator/isDate)| 验证是否为Date类型| boolean |
| [isUpperCase(value)](/vantop-util/validator/isUpperCase)| 验证是否为字母| boolean |
| [isLowerCase(value)](/vantop-util/validator/isLowerCase)| 验证是否为小写字母| boolean |
| [isAlphabets(value)](/vantop-util/validator/isAlphabets)| 验证是否为大写字母| boolean |
| [isNumCombineLetter(value)](/vantop-util/validator/isNumCombineLetter)| 验证是否为字母或数字| boolean |

