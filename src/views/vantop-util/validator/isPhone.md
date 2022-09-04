## isPhone 方法
::: tip 常规用法
isPhone(value): boolean 

若value值为正确的座机号码，则返回true，否则返回false。
:::


### isPhone 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证是否为座机号码的值     | string       | -      |

#### 例子

```js
isPhone('0755-27611110')
// --> true

isPhone('010-2761111')
// --> true
```
