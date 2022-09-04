## Collapse 折叠面板

### 基础用法
:::demo 可以通过设置`title`来展示折叠面板标题

```html
<template>
    <md-collapse title="标题"/>
</template>
```
:::

### 按钮显隐
:::demo 可以通过设置`showButton`来决定是否显示按钮

```html
<template>
    <md-collapse title="不显示按钮" :showButton="false"/>
    <md-collapse title="显示按钮"  :showButton="true"/>
</template>
```
:::


### 展开/收起控制
:::demo 可以通过方法`open` `close`控制是否显示内容

```html
<template>
    <div>
        <md-collapse title="标题一" ref="collapse">
            <el-form inline size="small" class="vantop-collapse--form">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="输入1">
                            <el-input size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="输入2">
                            <el-input size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="输入3">
                            <el-input size="small"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </md-collapse>
        <el-button plain @click="open" size="small">展开</el-button>
        <el-button plain @click="close" size="small">收起</el-button>
    </div>
</template>
<script>
export default {
    methods: {
        open() {
            this.$refs.collapse.open();
        },
        close() {
            this.$refs.collapse.close();
        }
    }
}
</script>
```
:::


### 纯展示内容
:::demo 还可以通过`isPure`控制是否是纯展示内容，若为`true`，面板内表单的样式将自动应用详情页样式标准。

```html
<template>
    <div>
        <md-collapse title="标题" :isPure="true" class="vantop-collapse--form">
            <el-form inline size="small">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="分类：">
                            <div>服装表演</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="分类：">
                            <div>服装表演</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="分类：">
                            <div>服装表演</div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="分类：">
                            <div>服装表演</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="分类：">
                            <div>服装表演</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="分类：">
                            <div>服装表演</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </md-collapse>
    </div>
</template>
```
:::


### Collapse Attributes
| 参数 | 说明 | 类型 |是否必须| 默认值 |
|  ----  | ----  |---- | ---| ---- |
| title | 标题文字 |String|否 | '详情'|
| showButton | 是否显示展开收起按钮 |String|否 | true|
| defaultShow | 是否默认展开详情 | Boolean | 否| true|
| isPure | 是否纯展示内容 |Boolean|否 | false |
| showTitle | 是否展示标题 |Boolean|否 | true |
| icon | iconfont类名 |String|否 | - |
| showText | 内容收起时右侧按钮文字   |String|否 | ’展开‘ |
| hiddenText | 内容展开时右侧按钮文字 |String|否 | ‘收起’ |
| showButtonText | 是否展示按钮文字 |Boolean|否 | true |


### Collapse Events

| 事件名称   | 说明                                | 回调参数     |
| ---------- | --------------------------------- | ------------ |
| change      | 当面板展开收起值发生变化时触发            | status,title |

### Collapse Methods

| 事件名称   | 说明                                | 回调参数     |
| ---------- | --------------------------------- | ------------ |
| open      | 用于展开当前详情            | - |
| close      | 用于收起当前详情            | - |


### Collapse Slots

| slot名称   | 说明                   | 参数     |
| ---------- | --------------------------- | ------------ |
| default      | 面板的内容     | - |
| title      | 头部左侧标题内容     | - |
| button      | 头部右侧按钮内容     | - |
| content      | 头部中间区域内容     | - |


