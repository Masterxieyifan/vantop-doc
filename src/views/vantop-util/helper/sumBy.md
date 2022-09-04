## sumBy 方法
::: tip 常规用法
sumBy(array, [iteratee]): number|string|undefind

返回对数组项求和结果
:::

### 参数列表
| 参数          | 说明          | 类型         | 默认值   |
| :------------ |:------------ | :--------    | :--------|
| array         | 对象数组       | \<Object\>Array | -      |
| iteratee      | 匹配规则          | String\|Function | - |

### 返回值
(number|string|undefind)：返回求和结果值

### 例子
```js
const objects = [{ 'n': 4, }, { 'n': 2, }, { 'n': 8, }, { 'n': 6, }];

sumBy([])
// => 0

sumBy(objects, 'n');
// => 20

sumBy(objects, ({ n }) => n);
// => 20

sumBy([[1, 2, 3], [1, 2]], 'length';
// => 5

sumBy([{ name: 'Yao', }, { name: 'Ming', }], 'name')
// => YaoMing

sumBy(objects, 'x')
// => undefined
```
