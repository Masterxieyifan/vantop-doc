## Nextop FE库发包流程

### 蓝盾流水线发包

为了减少发包成本，开发者均可在蓝盾流水线中执行发包操作。

- [前端库蓝盾流水线：FE-library ](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-8b80a4c5670a44a79bec7738bc577f2a/history)

### 流水线变量说明
| 变量名称 | 说明               | 选项 | 默认值 |
| -------- | ------------------ | ---- | ---- |
| library  | 需要发版本的目标库 | master-design / vantop-util / vanlement / vantop-editor/ van-table | master-design |
| branch  | 目标分支，若为 `master` 分支则默认发布正式版本，其他分支都将发布测试版本 | - | develop |
| process  | 执行进程（`NPM` 表示执行NPM发包，`CDN` 表示执行CDN更新，`ALL` 表示两者都执行） | ALL、CDN、NPM | ALL |
| version_update | 是否需要更新版本，若为 `true`，则流水线自动根据目前版本进行更新；若为 `false` 则取package.json中的版本号，不执行更新操作 | true / false | true |
| notice | 是否进行钉钉通知（master分支下该选项无效）| true / false | true |
| notice_name | 钉钉通知 @人 | 前端成员 | - |
| preid | 版本前缀标识，只在测试版本中有效（若为 hotfix 则需要审核） | - | alpha |

### 发包流程
**测试版本**

1. **开发人员需要发布测试版本，进入[流水线](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-8b80a4c5670a44a79bec7738bc577f2a/history)**

2. **选择需要发布的包，例如 `master-design`**
3. **填写分支名称，例如 `feature/20210725-cyc-test`**
4. **选择执行流程，`NPM` 表示执行NPM发包，`CDN` 表示执行CDN更新，`ALL` 表示两者都执行**
5. **确定是否需要更新版本号，若为 `true`，则流水线自动根据目前版本进行更新；若为 `false` 则取package.json中的版本号，不执行更新操作**
6. **填写测试版本前缀标识，推荐使用默认的 `alpha` 前缀，若出现版本号重复的构建错误，可以通过填写自定义前缀来解决**
7. **选择是否进行钉钉通知，选择钉钉需要 @ 的相关人员（该条步骤非必需）**
8. **点击执行按钮**
9. **流水线构建成功后，进入[nextop npm](http://npm.nextop.cc/)官网查看版本是否更新成功**

**hotfix 版本**

1. **开发人员需要发布正式版本，进入[流水线](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-8b80a4c5670a44a79bec7738bc577f2a/history)**

2. **选择需要发布的包，例如 `master-design`**
3. **填写分支名称，例如 `hotfix/20210725-cyc-test`**
4. **选择执行流程，`NPM` 表示执行NPM发包，`CDN` 表示执行CDN更新，`ALL` 表示两者都执行**
5. **确定是否需要更新版本号，若为 `true`，则流水线自动根据目前版本进行更新；若为 `false` 则取package.json中的版本号，不执行更新操作**
6. **填写版本前缀标识 `hotfix`**
7. **点击执行按钮**
8. **通知 `@蔡远程` 或 `@肖名骠` 进行流水线审核操作**
9. **流水线构建成功后，进入[nextop npm](http://npm.nextop.cc/)官网查看版本是否更新成功**
10. **正式版发布成功后会触发钉钉智能机器人自动在Nextop FE Lab 群组发消息通知**
11. **通知对应相关人员**

**正式版本**

1. **开发人员需要发布正式版本，进入[流水线](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-8b80a4c5670a44a79bec7738bc577f2a/history)**

2. **选择需要发布的包，例如 `master-design`**
3. **填写分支名称 `master`**
4. **选择执行流程，`NPM` 表示执行NPM发包，`CDN` 表示执行CDN更新，`ALL` 表示两者都执行**
5. **确定是否需要更新版本号，若为 `true`，则流水线自动根据目前版本进行更新；若为 `false` 则取package.json中的版本号，不执行更新操作**
6. **点击执行按钮**
7. **通知 `@蔡远程` 或 `@肖名骠` 进行流水线审核操作**
8. **流水线构建成功后，进入[nextop npm](http://npm.nextop.cc/)官网查看版本是否更新成功**
9. **正式版发布成功后会触发钉钉智能机器人自动在Nextop FE Lab 群组发消息通知**
10. **通知对应相关人员**

### 常见问题
**Q1: 需要重新单独执行 `NPM版本发布` 或者 `CDN发布` 流程，该如何操作？**

A1: 进入对应的流水线，点击执行，点击 `process` 下拉框，选择需要执行的流程值，默认值为ALL，最后执行即可。

process值对应的操作

- ALL：执行NPM版本发布、CDN发布流程；

- NPM：只单独进行NPM发布；

- CDN：只单独进行CDN发布操作

**Q2: 流水线构建时，版本号重复导致的报错怎么解决？**

A2: 
- 解决一：在失败的流水线中，点击重试按钮，重新更新版本号，直到版本号不重复（不推荐）。

- 解决二：在代码中直接修改 `package.json` 版本号，保证版本号不重复之后重新构建流水线，注意流水线构建配置勾选不更新版本号（推荐）。

- 解决三：填写流水线变量 `preid` 为自定义的标识（例如填写值为 `cyc-20211028`，则版本号将更新为 `10.0.1-cyc-20211028.0`），避免版本号不重复，然后重新构建流水线。



有任何问题请@蔡远程