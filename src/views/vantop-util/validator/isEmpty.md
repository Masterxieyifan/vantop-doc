## isEmpty 方法
::: tip 常规用法
isEmpty(value): boolean 

若value值为null、undefined、''、{} 或者长度为0的数组，则返回true，否则返回false。
:::


### isEmpty 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证是否为空的值     | any       | -      |

#### 例子

```js
isEmpty(false)
// --> false

isEmpty(0)
// --> false
```
排除了值为false或者0时的干扰。
```js
isEmpty([])
// --> true

isEmpty({})
// --> true

isEmpty('')
// --> true

isEmpty(null)
// --> true


isEmpty(undefined)
// --> true

```
