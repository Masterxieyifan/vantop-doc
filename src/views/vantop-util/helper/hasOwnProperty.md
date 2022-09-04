## hasOwnProperty 方法
::: tip 常规用法
hasOwnProperty(obj, key): boolean

返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
:::


### hasOwnProperty 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| obj         | 要检测的对象     | object       | -      |
| key         | 要检测的属性的 String 字符串形式表示的名称     | string       | -      |

#### 例子
基本类型
```js
const obj = {
    name: 'liaohongdong'
}
hasOwnProperty(obj, 'name')
// --> true

hasOwnProperty(obj, 'age')
// --> false
```
