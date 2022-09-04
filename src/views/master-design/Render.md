## Render 组件

### render 写法
:::demo 配置 `render` 函数来渲染决定组件渲染内容

```html
<template>
    <md-render :render="renderFunc"/>
</template>
<script>
export default {
    methods: {
        renderFunc(h) {
            return h('h3',
                Array.from({ length: 5 }).map((item, index) => {
                    return h('p', `hi render${index}`)
                })
            )
        }
    }
};
</script>
```
:::

### jsx写法
:::demo 配置 `render` 函数来渲染决定组件渲染内容

```html
<template>
    <md-render :render="renderFunc"/>
</template>
<script>
export default {
    methods: {
        renderFunc() {
            const arr = Array.from({ length: 5 })
                .map((item, index) => (<p>hi jsx{index}</p>))

            return (<h3>{arr}</h3>)
        }
    }
};
</script>
```
:::



### Render Attributes

| 参数 | 说明 | 类型 | 默认值 |
| -------- | ----------- |------ | ---- |
| render | 渲染函数 |function (h) | - |