<!--
 * @Author: lingyong.zeng
 * @Date: 2021-12-20 16:14:48
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:06:38
 * @Description: 
 * @FilePath: /nextop-docs/src/views/faq/local-debug-npm.md
-->

## ERP本地如何调试组件/工具库等

* nextop-core
* nextop-mixins
* master-design
* 其它...

像以上这些包，比较耦合业务，调试时可能需结合ERP系统一起调试。

可采用本地打包，然后在 main 应用指定引入本地文件的方式，实现不发包版本调试。

以下我们以 master-design 为例：

### 本地管理跟打包

1. 从远程仓库克隆 master-design 到本地

```
git clone git@git.nextop.cc:FE-Lab/master-design.git
```

2. 安装依赖，切换新功能分支，进行代码修改，修改完成进行打包（此处省略安装、切分支等步骤）

```
yarn build
```

3. 复制打包后文件路径，为软链接做准备（pwd 查看当前目录路径）

```
pwd 
```

<img src="@img/local-debug-npm-01.png"/>   


### main 应用建立软链接，使 main 应用可读取到本地打包文件

cd 进入到 main 应用的 public 目录下，建立软链接，使 main 的 public 目录可以访问到 master-design/lib

注意：这里要替换成你本地真实路径

```
ln -s /Users/cenglingyong/vfile/tmp/master-design/lib master-design
```

<img src="@img/local-debug-npm-02.png"/>   


### main 应用修改 vue.external.js 并重启服务

<img src="@img/local-debug-npm-03.png"/>   


至此，本地调试配置已完成。

master-design 修改后直接 `yarn build`，浏览器强制刷新，即可实时看到 master-design 变更后在 ERP 的应用，进行调试。

调试完成后 main 应用的更改不作 git 提交。





