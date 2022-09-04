## getType 方法
::: tip 常规用法
getType(target): string 

返回一个表示target类型的字符串。
:::


### getType 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| target         | 需要获取类型的值。     | any       | -      |

#### 例子
基本类型
```js
getType(111)
// --> 'number'

getType('String')
// --> 'string'

getType(true)
// --> 'boolean'

getType(null)
// --> 'null'

getType(undefined)
// --> 'undefined'
```
复杂类型
```js
getType({a:1})
// --> 'object'

getType([1,2,3])
// --> 'array'

getType(function(){})
// --> 'function'

getType(Symbol())
// --> 'symbol'

getType(new Map())
// --> 'map'

getType(new Set())
// --> 'set'

getType(new Date())
// --> 'date'

```

::: warning 注意
getType方法无法判断person是Person类的实例，如若需要可以使用instanceof操作符来进行判断
:::

```js
function Person() {
    //...
}
var person = new Person();
getType(person);
// --> 'object'
```
```js
console.log(person instanceof Person); 
// --->true
```
