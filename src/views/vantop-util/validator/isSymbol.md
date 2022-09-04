## isSymbol 方法
::: tip 常规用法
isSymbol(value): boolean 

若value为symbol类型，则返回true，否则返回false。
:::


### isSymbol 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证的值     | any       | -      |

#### 例子

```js
isSymbol(Symbol('test'))
// --> true
```
