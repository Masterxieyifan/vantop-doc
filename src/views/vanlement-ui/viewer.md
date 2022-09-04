## Viewer 图片查看器

### 基础用法

:::demo 可通过 `$viewer` 开启预览大图的功能。
```html
<div class="demo-image__preview">
  <el-button @click="preview">preview</el-button>
</div>

<script>
  export default {
    data() {
      return {
        srcList: [
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    },
    methods: {
        preview() {
          this.$viewer({
            urlList: this.srcList,
            onSwitch: ()=>{
              console.log('switch')
            },
            onClose: ()=>{
              console.log('close')
            },
            initialIndex: 1
          })
        }
    }
  }
</script>
```
:::


### 全局方法

Element 为 Vue.prototype 添加了全局方法 $ImageViewer。因此在 vue instance 中可以采用本页面中的方式调用 `Viewer`。

### 单独引用

单独引入 `Viewer`：

```javascript
import { Viewer } from 'element-ui';
```

此时调用方法为 `Viewer(options)`，并且可以调用 `Viewer.close()` 手动关闭所有实例。


### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| urlList | 图片列表 | Array | — | [] |
| initialIndex | 默认展示的图片下标索引 | Number | — | 0 |
| z-index | 设置图片预览的 z-index | Number | — | 2000 |
| onSwitch | 切换图片时执行函数回调 | Fucntion | — | - |
| onClose | 关闭图片时执行函数回调 | Fucntion | — | - |
| maskClosable | 点击遮罩层是否关闭查看器 | Boolean | — | true |


### 方法
调用 `Viewer` 或 `this.$viewer` 会返回当前 Viewer 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Viewer |
