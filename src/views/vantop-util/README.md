## Nextop FE 工具库
vantop-util 是一个为 Nextop FE 解决常见业务问题的工具库
<!-- <version module="vantop-util" /> -->

### 安装
```shell
$ npm config set registry http://npm.nextop.cc
$ npm i --save @master_vantop/vantop-util
```

### CDN
```html
<!-- 引入工具库 -->
<script src="//nextop-web-lib-pro.oss-accelerate.aliyuncs.com/vantop-util/x.xx.xx/index.js"></script>
```


### 按需加载
**方法一：**

`vantop-util` 默认提供es版本，支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { getType } from '@master_vantop/vantop-util'` 就会有按需加载的效果。
（若要使用 tree-shaking，请保证项目webpack ≥ @2.x）

**方法二：**

如若某些原因，项目不支持 tree shaking 或者不生效，我们可以借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 `babel-plugin-import`
```shell
npm install babel-plugin-import --save-dev
```

然后，将 `babel.config.js` 修改为
```js
module.exports = {
    presets: [
        // 项目presets配置
        ...
    ],
    plugins: [
        // 项目其他plugin配置
        ...,
        // babel-plugin-import配置
        [
            'import',
            {
                'libraryName': '@master_vantop/vantop-util',
                'camel2DashComponentName': false,
                'customName': (name) => {
                    let matchName = '';
                    switch (name) {
                        case 'CookieHelper':
                            matchName = '@master_vantop/vantop-util/lib/cookie';
                            break;
                        case 'UA':
                            matchName = '@master_vantop/vantop-util/lib/userAgent';
                            break;
                        default:
                            matchName = `@master_vantop/vantop-util/lib/${name}`;
                            break;
                    }
                    return matchName;
                },
            }
        ]
    ],
};
```
接下来就可以在项目中使用 `vantop-util` 了
```js
import { formatDate } from '@master_vantop/vantop-util'
```
最终打包后babel会将代码编译成
```js
var formatDate = require ('@master_vantop/vantop-util/lib/formatDate');
```
这样就达到了按需引入的目的