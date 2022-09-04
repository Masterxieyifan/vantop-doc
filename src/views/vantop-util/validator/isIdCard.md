## isIdCard 方法
::: tip 常规用法
isIdCard(value): boolean 

若value值为正确的身份证号码，则返回true，否则返回false。
:::


### isIdCard 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证是否为身份证号码的值     | string       | -      |

#### 例子

```js
isIdCard('11010119900307627X')
// --> true
```
