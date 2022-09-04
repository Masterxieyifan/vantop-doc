<!--
 * @Author: huangxiaomin
 * @Date: 2021-02-24 18:21:36
 * @LastEditTime: 2021-07-13 18:46:41
 * @LastEditors: 蔡远程
 * @Description: In User Settings Edit
 * @FilePath: /vantop/docs/vantop-util/browser/CookieHelper.md
-->

## LocalStorage 方法列表
::: tip 常规用法
此工具用来做浏览器localStorage存储
:::

### LocalStorage 方法列表
| 方法名称        | 说明              | 返回值    |
| :------------- |:-----------------|:---------|
| set()      | 保存数据项         | true / false   |
| get()      | 读取数据项         | storageValue / null |
| remove()   | 移除数据项         | true / false   |
| clear()        | 清空数据           | -        |

### setItem 参数列表
| 参数名称        | 说明               | 类型    | 是否必须  |
| :------------- |:------------------|:-------|:---------|
| key            | 键名               | String | 是       |
| value          | 值                 | Any    | 是       |
| expires        | 有效时长（毫秒数）    | Number | 否       |

### getItem 
| 参数名称        | 说明               | 类型    | 是否必须  |
| :------------- |:------------------|:-------|:---------|
| key           | 键名               | String  | 是       |

### removeItem
| 参数名称        | 说明               | 类型    | 是否必须  |
| :------------- |:------------------|:-------|:---------|
| key           | 键名               | String  | 是       |

### clear
| 参数名称        | 说明               | 类型    | 是否必须  |
| :------------- |:------------------|:-------|:---------|
| 无           |

### 使用实例
```js
import { LocalStorage, } from '@master_vantop/vantop-util';

LocalStorage.set('name', 'xm', 3000); //设置有效时长为3秒
console.log(LocalStorage.get('name'));
// ---> 'xm'

setTimeout(() => {
    console.log('5秒后', LocalStorage.get('name'));
}, 5000);
// ---> 5秒后 null
