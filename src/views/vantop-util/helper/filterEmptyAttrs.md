## filterEmptyAttrs 方法
::: tip 常规用法
filterEmptyAttrs(obj): object

过滤对象属性值为空的属性，并返回一个新的对象
:::


### filterEmptyAttrs 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| obj         | 需要进行过滤处理的对象     | Object       | 必填      |
| isDeep         |  是否递归处理对象    | Boolean      | false     |

#### 例子
```js
const obj = {
    name: '李四',
    id: '',
    age: 18,
    sex: {
        man: true,
        women: ''
    }
};
filterEmptyAttrs(arr);
// -->  {
//     name: '李四',
//     age: 18,
//     sex: {
//         man: true,
//         women: ''
//     }
// }
```
::: warning 注意
`filterEmptyAttrs` 方法默认只过滤对象中第一层值为空的属性

若设置 `isDeep` 为 true，则会递归过滤对象中的所有值为空的属性
:::

过滤对象中对象属性值为空的属性
```js
const obj = {
    name: '李四',
    id: '',
    age: 18,
    sex: {
        man: true,
        women: ''
    }
};
filterEmptyAttrs(obj, true)
// -->  {
//     name: '李四',
//     age: 18,
//     sex: {
//         man: true,
//     }
// }
```
