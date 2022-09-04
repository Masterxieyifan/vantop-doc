## isMobile 方法
::: tip 常规用法
isMobile(value): boolean 

若value值为正确的手机号，则返回true，否则返回false。
:::


### isMobile 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| value         | 需要验证是否为手机号的值     | string       | -      |

#### 例子

```js
isMobile('13250321111')
// --> true

isMobile('132503211112')
// --> false
```
