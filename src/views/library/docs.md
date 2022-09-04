## 文档编写

**1. 找到 @肖名骠 或 @蔡远程 开通 docs 项目git权限。**

**2. 拉取 `vantop-docs` 代码。**
```shell
git clone http://git.nextop.cc/FE-Lab/vantop-docs
```

**3. 从开发分支 `develop` 切出新的功能分支。**

**4. 安装依赖包。**
```shell
npm install
```

**5. 执行 `npm run serve` 启动项目。**

**6. 添加路由**
- 在 `router` 文件夹中创建对应的路由文件，若需要显示侧边导航组则需要在 `modules` 目录中创建路由文件，并导出你的路由数组。
- 若为单个路由，无需显示侧边栏导航，则直接在 `global.js` 添加路由信息即可。

**7. 在 `header.js` 添加顶部页面入口**

**8. 开始进行文档编写。**
    - 可直接在 `.md` 文件中使用组件，具体使用语法可参考 `/views/master-design/` 中的使用方法。

**9. 提交代码。**

**10. 发起pr审核，并通知维护者进行发布。**
