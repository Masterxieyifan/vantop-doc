## cloneDeep 方法
::: tip 常规用法
cloneDeep(value: Array|Object): Array|Object

递归考本 value （也叫深拷贝）

:::

### 参数列表
value(*): 要拷贝的值

### 返回值 
(*): 返回拷贝后的值

### 例子
```js
const objects = [{ 'a': 1 }, { 'b': 2 }];
 
const deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
