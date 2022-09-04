## 微前端常见问题解答



### 本地连接调试时，接口返回登录超时，然后跳回登录界面

如果你采用了最新的`nextop-http`包时，此问题便会出现。

> 原因是**http**采用了固定域名(api.nextop.com)，而后台所需要的数据由cookie传递，cookie无法跨域名，导致掉不通后台接口

- 解决方案

  在host文件中配置与`api.nextop.com`同1级域名映射至本地

  ```127.0.0.1 local.nextop.com```

  随后输入`local.nextop.com:9000`便可以正常访问后台接口了




### 本地连调，登录后报错，然后回到登陆界面

 日常开发时，由于Session过期，新的Session注入失败，所以导致了这个问题。



#### 解决方案

打开新的匿名窗口，让后端接口重新设置正确的`Cookie`，或者是关掉所有窗口。再重新打开浏览器

>只有匿名窗口唯一且新开时，此方法才生效
#### 检查方案
是否能正常进入页面


### 切换环境时(切换hosts)，浏览器没有使用最新的环境，数据还是老的

 当我们从日常的`api.nextop.com`切换到预发的`ip`时，浏览器往往会采用自身的DNS内存缓存来处理，也就是说：切换无效。



#### 解决方案

- 打开新的匿名窗口，让浏览器重新读取域名对应的DNS解析IP

  只有当无匿名窗口，并且是处于让浏览器“第一次”访问时，此方法才生效

- 使用谷歌内置工具清空DNS缓存

  >  此方法只针对谷歌浏览器有效

  1. 点击左侧菜单 `DNS` 或浏览器打开：`chrome://net-internals/#dns`，点击 `Clear host cache` 按钮

  2. 点击左侧菜单 `Sockets` 或浏览器打开：`chrome://net-internals/#sockets`，点击 `Flush socket pools` 按钮

  3. 刷新页面，浏览器便使用了最新的host绑定

  Tips: 打开`chrome://chrome-urls/`可查看谷歌浏览器所有配置页面



#### 检查方案
可以f12查看接口的`Remote Address`字段检查是否刷新hosts




### Http 库修改全局默认配置方法

> 由于 http 包直接返回了初始化好的实例，已有了一套默认配置，固定了接口地址：api.nextop.com , 联调中可能需要更改 api 地址或者超时时间等需求，可采取以下方式修改：

- 解决方案

  可以直接在全局api方法(core/life-cycle.js)引用前，引入 http 包，找到 axios 实例(通用上传、下载实例可按需导入)，修改默认配置即可：

  **需要在全局api引用之前配置!!!**
  ``` javascript
  import BasicHTTP, { comonDownLoadInstance, comonUpLoadInstance, } from '@master_vantop/nextop-http';
  BasicHTTP.__http__.defaults.baseURL = '//xxxxx.nextop.com';
  comonDownLoadInstance.defaults.baseURL = '//dowloadxxx.nextop.com';
  import apis from '@/api';
  ```

- 自定义拦截器等也是类似的方式。
- 各个子应用需要单独配置
- 更加详细默认配置请查看官方文档：[默认配置 | Axios Docs (axios-http.com)](https://axios-http.com/zh/docs/config_defaults) 
