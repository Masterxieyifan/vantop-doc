## isObjDeepEqual 方法
::: tip 常规用法
isObjDeepEqual(value, other, skipFunc, log): boolean 

如果两个值完全相同，那么返回 true，否则返回 false。
:::


### isObjDeepEqual 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-------------------| :--------| :--------|
| value         | 用来比较的值。       | any       | -      |
| other         | 另一个用来比较的值。  | any      | -      |
| skipFunc      | 是否跳过Function（函数）类型比较。| boolean  | false  |
| log           | 是否在控制台打印比较错误信息<br>（生产环境上不生效）。| boolean  | false  |

#### 例子

可以进行基本类型的比较
```js
isObjDeepEqual(11, 11)
// --> true
isObjDeepEqual('11', '11')
// --> true
```

还可以比较Date类型
```js 
const date1 = new Date(1606462059689);
const date2 = new Date(1606462059689);
isObjDeepEqual(date1, date2);
// --> true
```

同时也可以比较对象
```js
isObjDeepEqual(
    {a:'test',b:1, c:[1,2,3]},
    {a:'test',b:1, c:[1,2,3]}
);
// --> true
```

也可以比较数组类型（深比较）
```js
isObjDeepEqual(
    [1, 2, true, date1, '4', {a:'test',b:1}, [1,2], function a(){}],
    [1, 2, true, date2, '4', {a:'test',b:1}, [1,2], function a(){}]
);
// --> true
```

当参数skipFunc值为true时，可跳过Function类型的比较
```js
isObjDeepEqual(
    {a: function fun1(){}, b: [1, 2 , 3]},
    {a: function fun2(){}, b: [1, 2 , 3]},
    true,
);
// --> true
```

当参数log值为true时，可在控制台打印出比较的错误信息（生产环境下不生效）
```js
isObjDeepEqual('value', 'other', false, true);
// -->  false
// console.warn(The type of own is unequal……);
```
