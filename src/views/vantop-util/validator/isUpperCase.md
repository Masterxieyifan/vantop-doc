## isUpperCase 方法
::: tip 常规用法
isUpperCase(value): boolean 

若value值为大写字母，则返回true，否则返回false。
:::


### isUpperCase 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证是否为大写字母的值     | string       | -      |

#### 例子

```js
isUpperCase('UPPER CASE')
// --> true

isUpperCase('Upper Case')
// --> false
```
