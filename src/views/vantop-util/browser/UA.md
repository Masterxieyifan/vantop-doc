## UA
::: tip 常规用法
此工具用来检测浏览器信息
:::

::: warning 
兼容性查看 [caniuse](https://caniuse.com/?search=navigator.%20userAgent)
:::
### UA 方法列表
| 方法名称        | 说明                 |  返回值   |
| :------------- |:-----------------|:--------|
| isPc         | 是否pc端     | boolean | 
| isFirefox         | 是否Firefox浏览器     | boolean  | 
| isChrome         | 是否Chrome浏览器     | boolean  | 
| isOpera         | 是否Opera浏览器     | boolean  | 
| isIE         | 是否IE浏览器     | boolean  | 
| isMobile         | 是否移动端     | boolean  | 
| isIOS         | 是否IOS     | boolean  | 
| isAndroid         | 是否Android    | boolean  | 
| isWechat        | 是否微信浏览器环境     | boolean  | 

### 使用实例

```js
import { UA, } from '@master_vantop/vantop-util';

UA.isPc();
// true
UA.isMobile();
// false
```
