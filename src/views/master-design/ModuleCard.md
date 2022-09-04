## ModuleCard 模块盒子

基于 el-card 二次封装

### 不带右侧按钮

:::demo

```html
<template>
    <md-module-card title="标题">
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </md-module-card>
</template>

<script>

</script>

<style lang="scss" scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>
```
:::

### 带右侧按钮
:::demo

```html
<template>
    <md-module-card title="标题">
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </md-module-card>
</template>

<script>

</script>

<style lang="scss" scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>
```
:::


### 自定义标题
:::demo
```html
<template>
    <md-module-card>
        <template slot="title">
            <span>自定义标题</span>
            <i class="md-icon-copy-light-16"/>
        </template>
        <template #operations>
            <el-button type="primary">
                审核
            </el-button>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </md-module-card>
</template>

<script>

</script>

<style lang="scss" scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>
```
:::


### ModuleCard Attribute

| 参数            | 说明                   | 类型   | 是否必须 | 默认值 |
| --------------- | ---------------------- | ------ | -------- | ------ |
| title | 标题 | String | 是 | - |
### ModuleCard Slots
| 参数            | 说明                   |
| --------------- | ---------------------- |
| title | 标题插槽 |
| operations | 操作栏插槽 |

