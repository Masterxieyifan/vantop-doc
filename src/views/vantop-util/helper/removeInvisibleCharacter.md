## removeInvisibleCharacter 方法
::: tip 常规用法
removeInvisibleCharacter(value: String): String

去除字符串不可见字符

:::

### 参数列表
| 参数          | 说明          | 类型         | 默认值   |
| :------------ |:------------ | :--------    | :--------|
| value         | 需要处理的字符串       | String | -      |

### 返回值 
(string): 返回去除不可见字符后的新字符串

### 例子
```js
// @后是一个不可见字符（可拷贝到word文档或终端查看）
const str = 'djerrahian@​gmail.com';

const newStr = removeInvisibleCharacter(str);

console.log(str === newStr);    // => false
```
