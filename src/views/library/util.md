## 工具库开发文档

**1. 找到 @肖名骠 或者 @蔡远程 开通 vantop-util 项目git权限。**

**2. 拉取Nextop代码。**
```shell
   git clone http://git.nextop.cc/FE-Lab/vantop-util.git 
```

**3. 从开发分支（一般为 `develop`，详情见[分支管理](/library/standard#分支管理)）切出新的功能分支，推荐使用 `git-flow`。**


**4. 安装依赖包。**
```shell
npm install
```

**5. 开始进行开发。**

方法一：
  - 执行 `npm init nextop`。
  - 选择基础建设下的 `Vantop Util`，接下来按步骤填写方法名和选择需要的功能，即可完成初始化。

方法二：
  - 工具库源码放在 `src` 目录下，在正确的分类文件下进行工具函数的编写。
  - 确保在最外层 `index.ts` 中导出编写的工具函数文件。
  - 工具类开发好之后在 `test` 目录下编写单元测试，相关语法见 [chaijs](https://www.chaijs.com/api/assert/)。

**6. 运行函数调试服务器，可边调试边开发。**
```shell
npm run serve
```

**7. 执行测试用例，确保测试通过。**
- 运行 `npm run test` 命令，执行所有测试用例文件，该命令会生成所有测试用例覆盖率报告页面。
- 运行 `npm run test ${yourfileName}`（输入测试用例文件名即可，无需输入后缀）命令，执行单个测试用例文件，该命令只会在终端输出单个测试用例对应的覆盖率报告

**8. 执行测试用例后，确保测试用例报告的覆盖率结果达到 90% 以上。**

覆盖率指标解释
- Statement：语句覆盖率，所有语句的执行率
- Branch：分支覆盖率，所有代码分支如 if、三目运算的执行率
- Functions：函数覆盖率，所有函数被调用率
- Lines：行覆盖率，所有有效代码行的执行率，和语句类似
- Uncovered Lines：未覆盖行，所有未被覆盖的代码行

**9. 提交代码。**

**10. 去 `vantop-docs` 项目，编写工具文档，具体见[文档开发](/library/docs)。**

**11. 发起pr审核，并通知维护者进行发布。**
