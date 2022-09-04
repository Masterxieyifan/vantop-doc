## serialize 方法
::: tip 常规用法
serialize(obj): string 

返回表单序列化后的字符串。
:::


### serialize 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| obj         | 需要进行序列化的表单对象     | object       | -      |

#### 例子

```js
serialize({isEdit: true, canCancel: false,})
// --> 'isEdit=true&canCancel=false'
```