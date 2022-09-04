## 快速上手

### 基础用法
::: demo
```html
<template>
  <vantop-editor
    v-model="content"
    style="height: 200px"
    :setting="setting"
    @input="handlerEditor"
    class="vantop-editor"
  ></vantop-editor>
</template>

<script>
  export default {
    data() {
      return {
        content: "",
        setting: {
          // toolbar: [],
          // plugins: [],
          // images_upload_handler: (blobInfo, succFun, failFun) => {},
          // ...
        },
      };
    },
    methods: {
      handlerEditor(content) {
        content;
        // console.log(editorContent);
      },
    },
  };
</script>
```
:::

### VantopEditor Attributes

使用了 attr, listener 进行透明传参,更多参数及实现请参考[tinymce](http://tinymce.ax-z.cn/)

| 参数    | 说明             | 类型   | 是否必须 | 默认值 |
| ------- | ---------------- | ------ | -------- | ------ |
| v-model / value | 绑定的值 | String | 否       | -      |
| setting | 编辑器完整配置项 | Object | 否       | -      |
| type | 模式（完整模式、精简模式） | String | 否       | default      |
| waitTime | input 防抖时间 | Number | 否       | 1000      |

### VantopEditor Events

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| input    | 编辑器内容改变时触发 | content  |
