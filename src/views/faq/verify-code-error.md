<!--
 * @Author: lingyong.zeng
 * @Date: 2021-12-20 16:07:53
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:06:41
 * @Description: 
 * @FilePath: /nextop-docs/src/views/faq/verify-code-error.md
-->

## ERP登陆页加载验证码图片失败

打开控制台查看报错信息，如果显示接口请求跨域错误，可能原因：
1. HOST 配置错误

2. 后端提供的联调标签未部署 gateway 服务

### 问题排查
:::tip
1. 检查 api.nextop.com 的 host 配置是否正确

2. 如果 host 配置正确时，咨询后端所提供的联调标签，是否未部署 gateway 服务
:::

### 沟通文案
:::tip
XXX，提供的联调标签，是否未部署 gateway 服务？
:::