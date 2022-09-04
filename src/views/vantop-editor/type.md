## 场景配置

### 完整模式
::: demo 当 `type` 属性为 `default`（默认值），提供完整模式
```html
<template>
  <vantop-editor
    v-model="content"
    style="height: 200px"
    class="vantop-editor"
  />
</template>

<script>
  export default {
    data() {
      return {
        content: "",
      };
    },
  };
</script>
```
:::


### 精简模式
::: demo 当 `type` 属性为 `simple` 时，默认提供完整模式
```html
<template>
  <vantop-editor
    v-model="content"
    style="height: 200px"
    type="simple"
    class="vantop-editor"
  />
</template>

<script>
  export default {
    data() {
      return {
        content: "",
      };
    },
  };
</script>
```
:::
