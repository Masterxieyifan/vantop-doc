## Master Design
此文档用来解释目前业务项目中拥有的组件库


### 安装
```shell
$ npm config set registry http://npm.nextop.cc
$ npm i --save master-design
```
### CDN

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="//nextop-web-lib-pro.oss-accelerate.aliyuncs.com/master-design/x.xx.xx/index.css">
<!-- 引入组件库 -->
<script src="//nextop-web-lib-pro.oss-accelerate.aliyuncs.com/master-design/x.xx.xx/index.umd.min.js"></script>
```


### 使用
```js
//默认全局注册组件
import Vue from 'Vue';
import MasterDesign from 'master-design';
Vue.use(MasterDesign);
```