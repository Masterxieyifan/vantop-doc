## Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

### 基础用法

适用广泛的基础用法。

:::demo 在`el-breadcrumb`中使用`el-breadcrumb-item`标签表示从首页开始的每一级。Element 提供了一个`separator`属性，在`el-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`。

```html
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item :active="true">活动列表</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动详情</a></el-breadcrumb-item>
</el-breadcrumb>
```
:::

### 图标分隔符

:::demo 通过设置 `separator-class` 可使用相应的 `icon` 作为分隔符，注意这将使 `separator` 设置失效

```html
<el-breadcrumb separator-class="vl-icon-right-light-16">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理<i class="vl-icon-danger-fill-24" style="font-size: 16px;"></i></el-breadcrumb-item>
  <el-breadcrumb-item><i class="vl-icon-danger-fill-24" style="color: red; font-size: 16px;"></i>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item :active="true">激活状态</el-breadcrumb-item>
</el-breadcrumb>
```
:::

### 最大宽度 & 提示
:::demo
```html
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :active="true">活动管理</el-breadcrumb-item>
  <el-tooltip class="item" effect="dark" content="活动列表活动列表活动列表活动列表 tooltip" placement="top" >
    <el-breadcrumb-item max-width="100px">活动列表活动列表</el-breadcrumb-item>
  </el-tooltip>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
```
:::

### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |
| separator-class | 图标分隔符 class | string | — | - |

### Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
