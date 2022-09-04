## isAlphabets 方法
::: tip 常规用法
isAlphabets(value): boolean 

若value值为字母，则返回true，否则返回false。
:::


### isAlphabets 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证是否为字母的值     | string       | -      |

#### 例子

```js
isAlphabets('Alphabets')
// --> true

isAlphabets('alphabets')
// --> true

isAlphabets('ALPHABETS')
// --> true
```
