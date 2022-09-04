## differenceBy 方法
::: tip 常规用法
differenceBy(array, [values], iteratee): array

这个方法类似 difference ，除了它接受一个 iteratee （注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。
:::

### 参数列表
| 参数          | 说明          | 类型         | 默认值   |
| :------------ |:------------ | :--------    | :--------|
| array      | 要检查的数组。   | Array | -      |
| [values]      | 排除的值  | (...Array) | - |
| iteratee      | iteratee 调用每个元素  | String / Function | - |

### 返回值 
array: 返回一个过滤值后的新数组。

### 例子
```js
differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
// The `_.property` iteratee shorthand.
differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]


```
