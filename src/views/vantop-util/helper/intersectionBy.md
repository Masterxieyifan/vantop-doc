## intersectionBy 方法
::: tip 常规用法
intersectionBy([arrays], iteratee): array

这个方法类似 intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。
:::

### 参数列表
| 参数          | 说明          | 类型         | 默认值   |
| :------------ |:------------ | :--------    | :--------|
| [arrays]      | 要检查的数组  | (...Array) | - |
| iteratee      | 调用每一个元素的迭代函数。  | String / Function | - |

### 返回值 
array: 返回一个包含所有传入数组交集元素的新数组。

### 例子
```js
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]
 
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```
