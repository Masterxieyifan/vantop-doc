## Master Design库开发文档

**1. 找到 @肖名骠 或 @蔡远程 开通 Master-Design 项目git权限。**

**2. 拉取master-design代码。**
```shell
git clone http://git.nextop.cc/FE-Lab/master-design.git 
```

**3. 从开发分支（一般为 `develop`，详情见[分支管理](/library/standard#分支管理)）切出新的功能分支，推荐使用 `git-flow`。**

**4. 安装依赖包。**
```shell
npm install
```

**5.开始进行开发。**

方法一：
  - 执行 `npm init nextop`。
  - 选择基础建设下的 `Master Design`，接下来按步骤填写组件名和选择需要的功能，即可完成初始化。

方法二：
- 组件源码放在 `package` 目录中。
- 组件样式文件在 `styles` 目录中，并确保在 `module.scss` 中引入。

**6. 执行 `npm run serve` 运行测试服务器。**


**7. 组件编写好后请进入 `example` 目录写测试用例，测试用例支持 `.vue` 或者 `.markdown` 格式文件。**

**8. 提交代码。**

**9. 去 `vantop-docs` 项目，编写组件文档，具体见[文档开发](/library/docs)。**

**10. 发起pr审核，并通知维护者进行发布。**
