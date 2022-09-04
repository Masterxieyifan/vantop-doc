<!--
 * @Author: your name
 * @Date: 2021-01-28 18:21:36
 * @LastEditTime: 2021-07-13 18:46:49
 * @LastEditors: 蔡远程
 * @Description: In User Settings Edit
 * @FilePath: /vantop/docs/vantop-util/browser/CookieHelper.md
-->
## CookieHelper
::: tip 常规用法
此工具用来操作浏览器cookie
:::

### CookieHelper 方法列表

| 方法名称        | 说明               | 返回值 | 
| :------------- |:-----------------|:--------|
| set()         | 设置cookie    | - |
| get()         | 获取cookie     | cookieValue  |
| remove()        | 移除cookie     | -  |

### set 参数列表
| 参数名称        | 说明               | 类型 |  是否必须  |
| :------------- |:-----------------|:--------|:------|
| name   | cookie键名   | String | 是 |
| value   | cookie值   | Any | 是 |
| time   | 过期时间（当前时间往后推迟天数，1代表一天）   | Number | 是 |

### get 参数列表
| 参数名称        | 说明               | 类型 |  是否必须  |
| :------------- |:-----------------|:--------|:------|
| name   | cookie键名   | String | 是 |

### remove 参数列表
| 参数名称        | 说明               | 类型 |  是否必须  |
| :------------- |:-----------------|:--------|:------|
| name   | cookie键名   | String | 是 |

### 使用实例

```js
import { CookieHelper, } from '@master_vantop/vantop-util';

CookieHelper.set('name','caiyuancheng',1);
let value = CookieHelper.get('name');
console.log(value);
// ----> 'caiyuancheng'


CookieHelper.remove('name');
value = CookieHelper.get('name');
console.log(value);
// ----> ''

```