<!--
 * @Author: your name
 * @Date: 2021-02-02 11:30:05
 * @LastEditTime: 2022-03-21 15:44:11
 * @LastEditors: 蔡远程
 * @Description: In User Settings Edit
 * @FilePath: /vantop-docs/src/views/vantop-util/helper/README.md
-->
## 助手类
### 使用方法（按需引入）
```js
import { getType } from '@master_vantop/vantop-util';
getType;
```
### 方法列表
| 方法          | 说明                 | 返回值     |
| :------------ |:-------------------| :----------|
| [getType(target)](/vantop-util/helper/getType) | 获取target的类型  | String    |
| [copyText(text)](/vantop-util/helper/copyText) | 复制文本方法  | Promise    |
| [cloneDeep(obj)](/vantop-util/helper/cloneDeep) | 深拷贝一个对象 | Array/Object |
| [filterEmptyAttrs(obj)](/vantop-util/helper/filterEmptyAttrs) | 过滤对象属性值为空的属性，并返回一个新的对象 | Object |
| [downloadFile(string)](/vantop-util/helper/downloadFile) | 下载附件方法 | Null |
| [debounce(func, wait)](/vantop-util/helper/debounce) | 函数防抖 |  - |
| [throttle(func, wait)](/vantop-util/helper/throttle) | 函数节流 |  - |
| [findIndex(arr, predicate, [fromIndex])](/vantop-util/helper/findIndex)| 在数组中寻找第一个匹配项索引 | Number
| [findLastIndex(arr, predicate, [fromIndex])](/vantop-util/helper/findLastIndex)| 在数组中寻找最后一个匹配项索引| Number
| [removeInvisibleCharacter(string)](/vantop-util/helper/removeInvisibleCharacter) | 去除字符串中不可见字符 | String |
| [hasOwnProperty(obj, key)](/vantop-util/helper/hasOwnProperty) | 检测对象是否具有指定的属性 | Boolean |
| [mapMetaData(obj, arr)](/vantop-util/helper/mapMetaData) | 映射元数据，自定义元数据的映射方法 | Object |
| [chunk(arr, number)](/vantop-util/helper/chunk) | 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组 | Array |
| [findChildInArr(arr, value, key, isCompare, ChildrenKey)](/vantop-util/helper/findChildInArr) | 在数组里寻找对应子集  | Object    |
| [changeUrlPar(url, key, value)](/vantop-util/helper/changeUrlPar) | 修改url地址query值  | String    |
| [serialize(obj)](/vantop-util/helper/serialize) | 表单对象序列化  | String    |
| [uniencode(str)](/vantop-util/helper/uniencode) | 对str进行特殊编码处理  | String    |
| [memoize(func, resolver)](/vantop-util/helper/memoize) | 将函数转化为带缓存功能的函数 | Function |
| [sumBy(arr, string\|function)](/vantop-util/helper/sumBy) | 对对象数组的属性值求和 | Number |
| [countBy(arr, [string\|function])](/vantop-util/helper/countBy) | 对数组项聚合统计 | Object |
| [uniq(arr)](/vantop-util/helper/uniq) | 数组去重  | Array    |
| [uniqBy(arr, string\|function)](/vantop-util/helper/uniqBy) | 根据iteratee进行数组去重  | Array    |
| [union(array，[values])](/vantop-util/helper/union) | 数组并集  | Array    |
| [unionBy([arrays], iteratee)](/vantop-util/helper/unionBy) | 数组并集，迭代器版本  | Array    |
| [difference(array, [values])](/vantop-util/helper/difference) | 排除目标数组中给定数组中的值  | Array    |
| [differenceBy([arrays], iteratee)](/vantop-util/helper/differenceBy) | 排除目标数组中给定数组中的值，迭代器版本  | Array    |
| [xor(array, [values])](/vantop-util/helper/xor) | 数组差集  | Array    |
| [xorBy([arrays], iteratee)](/vantop-util/helper/xorBy) | 数组差集，迭代器版本  | Array    |
| [intersection(array, [values])](/vantop-util/helper/intersection) | 数组交集  | Array    |
| [intersectionBy([arrays], iteratee)](/vantop-util/helper/intersectionBy) | 数组交集，迭代器版本  | Array    |
| [syncDelay(timeout)](/vantop-util/helper/syncDelay) | 同步延时 | Promise |


