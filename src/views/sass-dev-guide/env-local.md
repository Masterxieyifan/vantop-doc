<!--
 * @Author: 陈建中
 * @Date: 2021-11-23 16:23:41
 * @LastEditTime: 2022-03-01 14:07:12
 * @LastEditors: 蔡远程
 * @Description: 本地联调
 * @FilePath: /nextop-docs/src/views/sass-dev-guide/env-local.md
-->

### 本地联调
修改 `@master_vantop/nextop-http` 库 `baseURL`, 增加 `.env.local` 配置文件。

### 修改 `/src/core/life-cycle.js`

<img src="/img/env-local-01.png" width="100%" height="auto" alt="本地联调" />

增加如下代码:      

```javascript
import BasicHTTP, { comonDownLoadInstance, comonUpLoadInstance, } from '@master_vantop/nextop-http';
const { NODE_ENV, VUE_APP_BASE_API_GW, VUE_APP_RUNTIME } = process.env;
if (NODE_ENV
    && NODE_ENV!== 'production'
    && VUE_APP_BASE_API_GW
    && VUE_APP_RUNTIME
    && VUE_APP_RUNTIME === 'local') {
    BasicHTTP.__http__.defaults.baseURL = VUE_APP_BASE_API_GW;
    comonDownLoadInstance.defaults.baseURL = VUE_APP_BASE_API_GW;
    comonUpLoadInstance.defaults.baseURL = VUE_APP_BASE_API_GW;
}
```

### 修改 `vue.config.js`
<img src="/img/env-local-02.png" width="100%" height="auto" alt="本地联调" />   

```javascript
const VUE_APP_LOCAL_URL = `//${getIPAddress()}`;

module.exports = {
    publicPath: dev ? `${VUE_APP_LOCAL_URL}:${port}` : '//子应用域名',
    //...
}
function getIPAddress(){
    const interfaces = require('os').networkInterfaces();
    const ips = [];
    for (let devName in interfaces){
        let iface = interfaces[devName];
        for (let i=0; i<iface.length; i++){
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                ips.push(alias.address);
            }
        }
    }
    return ips.sort()[0];
}
```


### `.env.local` 文件
在项目根目录下新增 `.env.local` 文件
```javascript
NODE_ENV = 'development'
VUE_APP_RUNTIME = 'local'
VUE_APP_BASE_API_GW = '/gw'

VUE_APP_NAME = nextop-web-logistics 改为对应的子应用项目名
VUE_APP_BASE_DEVELOPMENT_PORT = 11002 改为对应的子应用端口
```

### `package.json`
增加 `scripts`
```json
"scripts": {
    "local": "node expose.router.js && vue-cli-service serve --mode local",
},
```
### 开始联调
1. 修改 `main` 应用 `.env.local` 的 `VUE_APP_PROXY_URL` 为对应后端地址   
2. `main` 应用和需要联调的子应用执行 `yarn local`