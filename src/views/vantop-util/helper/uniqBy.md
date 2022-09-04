## uniqBy 方法
::: tip 常规用法
uniqBy(arr, iteratee): array 

返回根据iteratee进行去重处理后的arr数组。
:::


### uniqBy 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| arr         | 需要进行去重处理的数组     | arr       | -      |
| iteratee         |  匹配规则    | String\|Function      | -      |

#### 例子
```js
uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
```

去除arr中重复出现name为李四的数据。
```js
const arr = [
    { id:1, name: '李四', age:24,},
    { id:2, name: '李四', age:24,},
    { id:3, name: '张三', age:18,}
];
uniqBy(arr, 'name')
// --> [
//       { id:1, name: 'lisi', age:24,},
//       { id:3, name: 'zhangsan', age:18}
//     ]
```

::: warning 注意
uniqBy方法采用Set实现去重，所以无法对键值对为引用类型的数组进行去重。
:::

name为引用类型，去重失败。
```js
const arr = [
    { id:1, name: { first: '李', last: '四' }, age:24,},
    { id:2, name: { first: '李', last: '四' }, age:24,},
    { id:3, name: { first: '张', last: '三' }, age:18,}
];
uniqBy(arr, 'name')
// --> [
//       { id:1, name: { first: '李', last: '四' }, age:24,},
//       { id:1, name: { first: '李', last: '四' }, age:24,},
//       { id:3, name: { first: '张', last: '三' }, age:18,}
//     ]
```