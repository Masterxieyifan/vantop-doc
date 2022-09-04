## memoize 方法
::: tip 常规用法
memoize(func, [resolver])

创建一个函数，用于记忆 func 的结果。如果提供了 resolver，则将 resolver 的执行结果作为缓存结果对应的键，func/resolver 接收的参数相同。
不提供 resolver 情况下，默认使用 func 的第一个参数作为缓存结果的键，多参数时需自行 resolver 处理键的问题。

作用：多次使用相同参数调用函数时，从缓存中返回存储的计算值，避免函数重复进行计算（针对一些复杂计算场景下作性能优化）

注意：缓存可作为 cache 属性公开，支持 clear/delete/get/has/set 等类似 Map 的接口和方法。

:::

### 参数列表
| 参数            | 说明                 | 类型     | 默认值   |
| :------------- | :-----------------  | :-------- | :--------|
| func           | 真实计算的函数（原函数） | Function | -      |
| resolver       | 处理缓存键的函数 | Function |  |

### 返回值 
(Function): 返回一个带有缓存功能的新函数

### 例子
```js
let object = { 'a': 1, 'b': 2 };
let other = { 'c': 3, 'd': 4 };
 
var values = memoize(Object.values);
values(object);
// => [1, 2]
 
values(other);
// => [3, 4]
 
object.a = 2;   // 虽然对象属性修改，但缓存根据之前的参数进行存储，并未同步
values(object);
// => [1, 2]
 
// 直接设置 cache
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']

// 多参函数使用
const getSum = (a, b) => {
    console.log(a, b);
    return a + b;
}

const getSumWithMemoize = (getSum, (..args) => args.join('-'));

getSumWithMemoize(1, 2);   // 返回：3，打印：'1, 2' 执行
getSumWithMemoize(1, 2);   // 返回：3
getSumWithMemoize(1, 2);   // 返回：3
getSumWithMemoize(2, 2);   // 返回：4，打印：'2, 2' 执行

getSumWithMemoize.cache.size;           // 2
getSumWithMemoize.cache.get('1-2');     // 3
getSumWithMemoize.cache.has('1-2');     // true;
getSumWithMemoize.cache.delete('1-2');  // 删除对应键缓存
getSumWithMemoize.cache.clear();        // 清空所有缓存
```
