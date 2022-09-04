## 蓝盾CI、CD 相关问题

### 如何部署
 - 步骤1：新建流水线,选择从模板新建；
 - 步骤2：nextop-web 前端工程模板，输入自定义流水线名称，且选择约束模式，点击新建；
 - 步骤3：选择最新的模板版本，填写相对应的流水线变量，`gitAddr`：项目git地址, `serviceName`: 项目名称，`branch`:分支名称, `server_env`: 同后端联调的联调标签（由后端同学提供）
 > 注意`serviceName`就是你的应用名称，不允许修改；因为运维脚本会读取此字段作为域名配置。

###  开发完成应当如何提测？
> 当前开发时没有正在进行中的多个应用依赖的情况下，在蓝盾部署当前提测的应用，把蓝盾暴露出的IP进行替换，以 `finance`模块为例：
修改web-finance.nextop.com以及api.nextop.com绑定的域名为联调ip即可。

### 多个应用提测且相互依赖应当如何给到测试？

> 如果相互依赖的应用也是正在提测，需要保证前后端依赖应用部署时联调标签的统一，同一个联调标签最后生成的IP地址是同一个。

 ####  例如：`goods、purchase、warehouse、`三个应用在本期提测时相互依赖,找到后端同学，让其统一联调标签进行重新部署，部署完成之后给到测试相对应的测试地址为：
    172.24.14.70 saas.nextop.com
    172.24.14.70 web-login.nextop.com
    172.24.14.131 web-warehouse.nextop.com
    172.24.14.131 web-goods.nextop.com
    172.24.14.70 web-finance.nextop.com
    172.24.14.70 web-customer.nextop.com
    172.24.14.131 web-purchase.nextop.com
    172.24.14.70 web-demand.nextop.com
    172.24.14.70 web-system.nextop.com
    172.24.14.70 web-logistics.nextop.com
    172.24.14.70 web-sales.nextop.com
    172.24.14.131 api.nextop.com

### 部署常见错误解决办法
> 注意：因服务器内存资源问题，一次性同时部署不要超过4个，否则会导致打包过慢。
-  健康检测失败 
    -   可以选择重试，如果还是失败找运维同学 @胡景光
-  分支检测失败 
    -   检查自己填写的代码分支名是否正确
- 编译失败
    - 查看具体的失败原因，有可能是`eslint`校验未通过导致打包失败，请检查代码是否有问题，如若无问题，请选择重试；
    - `node_modules`依赖包报错，在拉取依赖失败，可以选择重试来解决
    
> 如有其他疑问，请找`肖名骠`
    

