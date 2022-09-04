## getTimeInterval 方法
::: tip 常规用法
getTimeInterval(date): string 

返回距离现在时间的时间间隔（只返回最大单位，年>月>天>小时>分钟>秒），若时间比当前时间还晚，则返回空的字符串。
:::

### getTimeInterval 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :----------- |:-----------------| :--------| :--------|
| date         | 计算时间间隔的日期     | Date ｜ number      | -      |


#### 例子
data晚于当前时间，返回空字符串。(当前时间 2020-12-13 23:03)
```js
const date = new Date('Sun Dec 14 2020 22:09:19 GMT+0800 (中国标准时间)');
getTimeInterval(date)
// --> ''
```
最大单位为年时。(当前时间 2020-12-13 23:03:48)
```js
const date = new Date('Sun Dec 14 2019 22:09:19 GMT+0800 (中国标准时间)');
getTimeInterval(date)
// --> '1年前'
```
最大单位为月时。(当前时间 2020-12-13 23:03:48)
```js
const date = new Date('Sun Nov 10 2020 22:09:19 GMT+0800 (中国标准时间)');
getTimeInterval(date)
// --> '1月前'
```

最大单位为天。(当前时间 2020-12-13 23:03:48)
```js
const date = new Date('Sun Dec 02 2020 22:09:19 GMT+0800 (中国标准时间)');
getTimeInterval(date)
// --> '11天前'
```

最大单位为小时时。(当前时间 2020-12-13 23:03:48)
```js
const date = new Date('Sun Dec 13 2020 22:09:19 GMT+0800 (中国标准时间)');
getTimeInterval(date)
// --> '1小时前'
```

最大单位为分钟时。(当前时间 2020-12-13 23:03:48)
```js
const date = new Date('Sun Dec 13 2020 23:01:19 GMT+0800 (中国标准时间)');
getTimeInterval(date)
// --> '2分钟前'
```

最大单位为秒钟时。(当前时间 2020-12-13 23:03:48)
```js
const date = new Date('Sun Dec 13 2020 23:03:19 GMT+0800 (中国标准时间)');
getTimeInterval(date)
// --> '29秒前'
```