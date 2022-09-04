## uniencode 方法
::: tip 常规用法
uniencode(str): string 

返回一个经过编码后的字符串。
:::


### uniencode 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| str         | 需要进行编码的值     | string       | -      |

#### 例子
uniencode方法主要用于回车的处理
```js
const text = `中文回车

编码`;

uniencode(text);
// --> '%u4E2D%u6587%u56DE%u8F66%0A%0A%u7F16%u780'
```