## 开发流程规范
### 分支管理

| 分支名称 | 说明               |
| -------- | ------------------ |
| master  | 线上正式版本分支 |
| develop  | 代码 base 分支 |
| fix/*  | 修复开发分支 |
| feature/*  | 功能开发分支 |
### 初始化步骤（第一次开发时的操作）

**1、安装 `git-flow` ([安装教程](https://github.com/petervanderdoes/gitflow-avh/wiki#installing-git-flow))**

**2、执行 `git flow init` 命令进行初始化操作**

```shell
$ git flow init
Initialized empty Git repository in /Users/tobi/acme-website/.git/
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
```

所有配置项都使用默认选项，直接回车即可。

### 开发步骤（每次开发新需求时的操作）

**1、切换到develop分支（大部分都基于develop分支进行开发，具体分支详情见[分支管理](/library/standard#分支管理)）**

**2、执行 git flow feature start ${date}-${yourName}-${businessUnit} 命令来创建 feature分支。**

``` shell
$ git flow feature start 20210222-cyc-develop-markdown
Switched to a new branch '20210222-cyc-develop-markdown'

Summary of actions:
- A new branch '20210222-cyc-develop-markdown' was created, based on 'develop'
- You are now on branch '20210222-cyc-develop-markdown'
```

分支命名规范：时间-开发者-功能名称（例：20210222-cyc-develop-markdown）

**3、进行需求的开发**

各项目具体开发流程见文档：[master-design](/library/ui)、[vantop-util](/library/util)


**4、开发完成，使用cz提交代码，规范 commit 信息。文档项目(vantop-docs)无须使用cz，可直接使用 git commit 提交代码**

```shell
$ git add .
$ npm run commit
npm run git-cz
cz-cli@4.2.3, cz-customizable@6.3.0

All lines except first will be wrapped after 100 characters.
? 请选择提交类型(Select the type of change that you're committing): 
? 选择影响范围(Denote the SCOPE of this change.): 
? 请写下修改摘要(Write a SHORT, IMPERATIVE tense description of the change):
? 请写下修改详情，使用"|"进行换行(Provide a LONGER description of the change (optional). Use "|" to break new line):
? 写下所有不兼容修改(可选)(List any BREAKING CHANGES (optional):
? 修复的蝉道bug号(可选)(List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:)

###--------------------------------------------------------###
feat(master-design): add test example
###--------------------------------------------------------###

? 确定提交？(Are you sure you want to proceed with the commit above?) Yes
husky > pre-commit (node v14.15.1)
⚠ Some of your tasks use `git add` command. Please remove it from the config since all modifications made by tasks will be automatically added to the git commit index.

✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
husky > commit-msg (node v14.15.1)
[develop 7909eb8] feat(master-design): add test example
 1 file changed, 1 insertion(+)
✨  Done in 30.79s.

$ git push
```

执行 `npm run commit` 命令后务必选择正确的提交类型、影响范围，和填写修改摘要，以保证 `changelog` 的正确生成。

**5、发起 pull request 合并审批**

- a) 打开 `GitLab` 项目地址(例如：http://git.nextop.cc/FE-Lab/master-design)

- b) 点击左侧菜单栏 `Merge Requests` 选项

- c) 点击 `New merge request` 按钮，开始创建pr

- d) 左侧 `Source branch` 选择你的开发分支，右侧 `Target branch` 选择 `develop` 分支，选择好后点击 `Compare branches and continue` 按钮进入下一步的分支比较页面。

- e) 填写好 pr 的 `Title` 和 `Description` 内容，`Assignee` 选项选择 @蔡远程 ，确认提交信息无误后点击 `Submit merge request` 按钮提交pr。

- d) 复制创建好的 pr 网页地址发送到 FE Lab 钉钉群组，通知蔡远程和需求有关人进行代码审核，代码审核通过后，项目维护者进行合并 pr 操作。

**6、版本发布**

项目维护者进行版本发布工作