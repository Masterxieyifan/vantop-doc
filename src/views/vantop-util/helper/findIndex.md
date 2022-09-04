## findIndex 方法
::: tip 常规用法
findIndex(array, predicate, [fromIndex=0]): number

返回第一个 predicate 判断为真值的元素的索引值 index，而不是元素本身。
:::

### findIndex 参数列表
|   参数         | 说明          | 类型                  | 默认值  |
| ---           | ---          | ---                   | ---    |
| array         | 要搜索的数组   | Array                    | -      |
| predicate     | 匹配规则      | Function/String/Number | -      |
| fromIndex     | 开始索引      | Number             | 0      |

### 返回值 
number: 返回找到元素的 索引值 index，否则返回 -1

### 例子
```js
const users = [
    { user: 'Ken', active: true },
    { user: 'Lili', active: true },
    { user: 'Tom', active: true },
]

findIndex(users, ({active} => active === true));
// => 1

const skills = ['HTML', 'JavaScript', 'CSS'];
findIndex(skills, 'HTML');
// => 0
```


::: warning 注意
暂不支持类似lodash以下用法，如有需要可@加上

:::

```js
_.findIndex(users, { user: 'Lili', active: true });
// => 1

_.findIndex(users, [active, false]);
// => 0
 
_.findIndex(users, active);
// => 0
```
