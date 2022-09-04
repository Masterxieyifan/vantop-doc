## syncDelay 方法
::: tip 常规用法
syncDelay(timeout): Promise

返回一个延时 resolve 的 promise
:::


### chunk 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------ |:-----------------| :--------| :--------|
| timeout       | 延迟毫秒数     | number       | 0      |

#### 例子

```js
await syncDelay(3000);
console.log('延时3秒后输出');
```

