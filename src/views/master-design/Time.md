## Time 时间
时间格式化组件

### 相对时间

:::demo `type` 为 `relative` 时，展示相对时间

```html
<template>
    <md-time :time="time" type="relative" :interval="1"/>
</template>

<script>
    export default {
        data() {
            return {
                time: new Date(),
            };
        },
    }
</script>
```
:::

### 默认时间

:::demo `type` 为 `date` , `time` 有值时，展示默认时间

```html
<template>
    <md-time :time="time" type="date" format="第Q季度 YYYY-MM-DD W hh:mm:ss"/>
</template>

<script>
    export default {
        data() {
            return {
                time: 1613965910659,
            };
        },
    }
</script>
```
:::


### 当前时间

:::demo `type` 为 `date` 时，`current` 为 `true`时，展示当前时间

```html
<template>
    <md-time current type="date" format="W hh:mm:ss" :interval="1"/>
</template>

<script>
    export default {
    }
</script>
```
:::

### 倒计时

:::demo `countdown` 为 `true`时，展示倒计时

```html
<template>
    <md-time countdown :time="time" :interval="1"/>
</template>

<script>
    export default {
        data() {
            return {
                time: new Date('2050-12-31'),
            };
        },
    }
</script>
```
:::