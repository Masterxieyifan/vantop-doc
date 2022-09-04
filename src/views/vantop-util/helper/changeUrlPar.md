## changeUrlPar 方法
::: tip 常规用法
changeUrlPar(url, key, value): string 

返回修改后的url值。
:::


### changeUrlPar 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| url         | 需要处理的url值     | string       | -      |
| key         | query的key值     | string       | -      |
| value         | 替换query的value值     | string｜number｜boolean       | -      |

#### 例子

```js
changeUrlPar('www.nextop.cc', 'isLogin', false)
// --> 'www.nextop.cc?isLogin=false'
```

```js
changeUrlPar('www.nextop.cc?isLogin=false', 'from', 'search')
// --> 'www.nextop.cc?isLogin=false&from=search'
```

```js
changeUrlPar('www.nextop.cc?isLogin=false&from=search', 'isLogin', true)
// --> 'www.nextop.cc?isLogin=true&from=search'
```