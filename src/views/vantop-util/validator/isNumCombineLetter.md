## isNumCombineLetter 方法
::: tip 常规用法
isNumCombineLetter(value): boolean 

若value值为字母或者数字，则返回true，否则返回false。
:::


### isNumCombineLetter 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证的值     | string       | -      |

#### 例子

```js
isNumCombineLetter('aaaAAA111')
// --> true

isNumCombineLetter('aaaAAA一一一')
// --> false
```
