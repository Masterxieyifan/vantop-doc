<!--
 * @Author: lingyong.zeng
 * @Date: 2021-12-17 11:54:35
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:06:44
 * @Description: 
 * @FilePath: /nextop-docs/src/views/http/ComonDownload.md
-->
## 公共下载

::: tip
comonDownLoad: 公共下载，前端用于导出/下载文件等，统一对接后端接口请求

```ts
comonDownLoad(
    method: String,
    url: String, 
    cb: Function, 
    params: Object, 
    downFileName: String, 
    msg: String, 
    needResultMsg: Boolean = false
): Promise
```

:::

### 使用方法
```js
import { comonDownLoad } from '@master_vantop/nextop-http';

comonDownLoad(
    'post',
    '/dataAnalysis/advertisementAnalysis/report/export',
    null,
    this.exportParams
);
```


### 方法参数

| 参数  | 说明  | 类型 | 默认值
| -- | -- | -- | -- |
| method | 请求方法 | get/post | -
| url | 接口地址 | String | -
| cb | 后回调方法(成功/失败后) | Function | -
| params | 接口参数 | Object | -
| downFileName | 下载文件名 | String | 后端返回
| msg | 成功提示信息 | String | - |
| needResultMsg | 是否采用后端接口报错提示信息 | Boolean | false

