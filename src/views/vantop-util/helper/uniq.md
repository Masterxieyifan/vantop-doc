## uniq 方法
::: tip 常规用法
uniq(arr): array 

返回去重处理后的数组。
:::


### uniq 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| arr         | 需要进行去重处理的数组     | arr       | -      |

#### 例子
去除arr中重复出现的数据。
```js
const arr = [ 1, 1, 'true', 'true', true, true, undefined, undefined, null, null, NaN, NaN, 'NaN'];
uniq(arr, 'name')
// --> [1, 'true', true, undefined, null, NaN, 'NaN']
```

::: warning 注意
uniq方法采用Set实现去重，所以无法对引用类型进行去重。
:::

```js
const arr = [{a:1}, {a:1}, [1,2], [1,2]];
uniq(arr)
// -->  [{a:1}, {a:1}, [1,2], [1,2]]
```