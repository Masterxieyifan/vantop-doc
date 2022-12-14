## Nextop CLI 🛠️

::: tip
Nextop CLI 是为了方便开发者使用 Nextop 平台的各种功能而开发的命令行工具，旨在规范和缩短开发流程。

使用前，请确保 `Node >= @14.0.0`。
:::

### 主要功能
**业务开发：**

*创建微前端子应用*

**基础建设开发：**

*Master Design 快捷开发*
- 在对应目录下快速生成新组件文件并注册
- 在对应目录下快速生成组件样式文件
- 在对应目录下快速生成测试用例文件
- 检查组件名称是否符合规范
- 检查是否已经存在该组件
- 自动引入组件样式文件
- 自动导出组件文件

*Vantop Util 快捷开发*
- 检查方法名称是否符合规范
- 检查是否已经存在该方法
- 在对应目录下创建新工具方法文件
- 在对应目录下生成测试用例文件
- 自动导出工具方法文件

### 使用方法

**1、执行 `npm init nextop`（在对应项目根目录下执行效果更佳哟~😁 ）**
```shell
$ cd master-design
$ npm init nextop
  Need to install the following packages:
  create-nextop
  Ok to proceed? (y)
```
第一次使用时，会出现是否安装附带包的提示，这些包是需要的，所以需要输入 `y` 并回车确认。

**2、进入 CLI 界面，选择要使用的功能**
```shell
 __  _  ___ __   __ _____  __   ___      ___  ___
|  \| || __|\ \_/ /|_   _|/__\ | _,\    | __|| __|
| | ' || _|  > , <   | | | \/ || v_/    | _| | _|
|_|\__||___|/_/ \_\  |_|  \__/ |_|      |_|  |___|

? 请选择项目： (Use arrow keys)
  --- 业务开发 ---
❯ Micro App
  --- 基础建设 ---
  Master Design
  Vantop Util
```

**3、选择要使用的功能，并按照提示完成填写**

<img style="width: 700px" src="@img/cli.png"/>




### TODO
- 业务开发功能拓展
- 缩小 CLI 体积
- 按需请求模板文件

有任何问题请 @蔡远程