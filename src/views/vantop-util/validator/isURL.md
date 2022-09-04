## isURL 方法
::: tip 常规用法
isURL(value): boolean 

若value值为正确的URL，则返回true，否则返回false。
:::


### isURL 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证是否为URL的值     | string       | -      |

#### 例子

```js
isURL('www.nextop.cc')
// --> true

isURL('http://www.nextop.cc')
// --> true

isURL('https://www.nextop.cc')
// --> true
```
