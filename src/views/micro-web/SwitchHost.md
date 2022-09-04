## Switch Host使用指南

为了配合运维部署微前端单个域名的方案，开发人员需要切换**host**绑定的**ip**来达到切换环境。

以下是针对**SwitchHost**软件的使用指南，你也可以使用其他软件来达到切换**host**的效果。



- [下载地址](https://github.com/oldj/SwitchHosts/releases)



### 配置新环境

由于我们采用了一套域名的形式，所以连调、日常、预发、线上采用的是相同的域名。



#### 日常、预发

预发、日常配置相同，仅配置的**ip不同**

以日常环境ip为例

安装好软件后点击左边侧边栏上方加号，新建**日常**环境

配置如下

```bash
172.24.14.70 saas.nextop.com
172.24.14.70 web-login.nextop.com
172.24.14.70 web-warehouse.nextop.com
172.24.14.70 web-goods.nextop.com
172.24.14.70 web-finance.nextop.com
172.24.14.70 web-customer.nextop.com
172.24.14.70 web-purchase.nextop.com
172.24.14.70 web-demand.nextop.com
172.24.14.70 web-system.nextop.com
172.24.14.70 web-logistics.nextop.com
172.24.14.70 web-sales.nextop.com
172.24.14.70  web-ocr.nextop.com
172.24.14.70 api.nextop.com
```

预发请新建后修改为对应ip



#### 联调环境

联调环境是在日常的基础下更换单个/多个业务模块绑定的**ip**

以下拿**finance**模块举例，ip地址请以具体联调暴露出来的为准

修改`web-finance.nextop.com`以及`api.nextop.com`绑定的域名为联调ip

```bash
172.24.14.70 saas.nextop.com
172.24.14.70 web-login.nextop.com
172.24.14.70 web-warehouse.nextop.com
172.24.14.70 web-goods.nextop.com
172.12.14.32 web-finance.nextop.com // 修改为联调ip
172.24.14.70 web-customer.nextop.com
172.24.14.70 web-purchase.nextop.com
172.24.14.70 web-demand.nextop.com
172.24.14.70 web-system.nextop.com
172.24.14.70 web-logistics.nextop.com
172.24.14.70 web-sales.nextop.com
172.24.14.70 web-ocr.nextop.com
172.12.14.32 api.nextop.com // 修改为联调ip
```

联调ip在蓝盾打包暴露

如果有多个业务模块同时联调，请同时修改对应模块





#### 线上环境

请禁用SwitchHosts的配置，让域名由远端DNS服务器解析便可

