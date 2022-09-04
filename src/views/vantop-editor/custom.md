## 自定义插件配置

### 禁用 quickbars 快速工具栏 & 单独禁用 image 示例

:::demo
```html
<template>
  <vantop-editor
    ref="vantopEditor"
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
        // customSettting:{
        //     // 禁用 quickbars 快速工具栏
        //     quickbars_insert_toolbar: '',
        //     // 单独禁用 image & code
        //     toolbar:`
        //         undo redo formatpainter removeformat |
        //         formatselect fontselect fontsizeselect |
        //         bold italic strikethrough underline forecolor backcolor |
        //         subscript superscript link unlink |
        //         indent outdent align numlist bullist | 
        //         pagebreak hr emoticons importword insertdatetime charmap media |
        //         table |
        //         fullscreen |
        //      `
        // }
      };
    },
    mounted () {
        // 禁用图片
       this.$refs.vantopEditor.editorSetting.toolbar = this.$refs.vantopEditor.editorSetting.toolbar.replace('image','')
        // 禁用 quickbars 快速工具栏
       this.$refs.vantopEditor.editorSetting.quickbars_insert_toolbar = ''
    },
  };
</script>
```
:::
