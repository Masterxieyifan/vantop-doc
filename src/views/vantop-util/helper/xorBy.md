## xorBy 方法
::: tip 常规用法
xorBy([arrays], iteratee): array

这个方法类似 xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数：(value).
:::

### 参数列表
| 参数          | 说明          | 类型         | 默认值   |
| :------------ |:------------ | :--------    | :--------|
| [arrays]      | 要检查的数组  | (...Array) | - |
| iteratee      | 调用每一个元素的迭代函数。  | String / Function | - |

### 返回值 
array: 返回一个过滤值后的新数组。

### 例子
```js
xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
 
// The `_.property` iteratee shorthand.
xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```
