## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```html
<el-badge :value="12" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <el-button size="small">回复</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      评论
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      回复
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 最大值
可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```html
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 自定义内容
可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```html
<el-badge value="new" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 小红点
以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`is-dot`属性，它接受一个`Boolean`。

```html
<el-badge is-dot class="item">数据查询</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 状态点
用于表示状态的小圆点。
:::demo 可以设置`status`属性，它可以是`primary`、`success`、`danger`、`info`、`warning`，表示状态的小圆点。

```html
<el-badge status="primary" />
<el-badge status="success" />
<el-badge status="danger" />
<el-badge status="info" />
<el-badge status="warning" />
<br />
<el-badge is-processing status="primary" text="Primary" class="status"/>
<el-badge status="success" text="Success" class="status"/>
<el-badge status="danger" text="Danger" class="status"/>
<el-badge status="info" text="Info" class="status"/>
<el-badge status="warning" text="Warning" class="status"/>

<style>
.status {
  display: block;
}
</style>
```
:::

### 多彩徽标
属性 color 可以设置更多预设的状态点颜色，或者自定义颜色。

:::demo 除了`status`属性外，还可以设置自定义设置`color`属性，它可以是预设颜色，也可以是自定义颜色值。

```html
<div>
  <strong>预设:</strong>
  <br>
  <el-badge color="blue" text="blue" class="status"/>
  <el-badge color="green" text="green" class="status"/>
  <el-badge color="red" text="red" class="status"/>
  <el-badge color="yellow" text="yellow" class="status"/>
  <el-badge color="pink" text="pink" class="status"/>
  <el-badge color="magenta" text="magenta" class="status"/>
  <el-badge color="orange" text="orange" class="status"/>
  <el-badge color="gold" text="gold" class="status"/>
  <el-badge color="lime" text="lime" class="status"/>
  <el-badge color="cyan" text="cyan" class="status"/>
  <el-badge color="purple" text="purple" class="status"/>
  <br>
  <br>
  <strong>自定义:</strong>
  <br>
  <el-badge color="#2db7f5" text="#2db7f5" class="status"/>
  <el-badge color="#f50" text="#f50" class="status"/>
</div>

<style>
.status {
  display: flex;
}
</style>
```
:::

### 动态变化
属性 processing 可以设置更多状态点动态变化。

:::demo 还可以设置设置`processing`属性，它可以将状态点动态变化。

```html
<div>
  <el-badge is-processing color="blue" text="blue" class="status"/>
  <br>
  <el-badge is-processing color="gold" text="gold" class="status"/>
  <br>
  <el-badge is-processing color="cyan" text="cyan" class="status"/>
</div>

<style>
.status {
  display: flex;
}
</style>
```
:::


### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| value        | 显示值           | string, number  |          —            |    —    |
| max          | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| is-dot       | 小圆点           | boolean         |         —             |  false  |
| hidden       | 隐藏 badge       | boolean         |         —             |  false  |
| type         | 类型             | string          | primary / success / warning / danger / info |    —    |
| type         | 类型（使用预设的颜色）            | string          | primary / success / warning / danger / info |    —    |
| status        | 设置 Badge 为状态点   | string  | primary / success / warning / danger / info  |    —    |
| text        | 自定义内容，如果设置了 status，则为状态点的文本 | string  |          -           |    —    |
| color        | 设置更多状态点的颜色或自定义颜色  | string  |          —            |    —    |
| is-processing        | 是否动态变化展示效果  | boolean  |          —            |    false    |