# VantopEditor
vantop-editor 是一个基于 tinymce 二次封装的编辑器

### 安装

```shell
npm config set registry http://npm.nextop.cc
npm i vantop-editor --save
```
### 使用
```js
import 'vantop-editor/lib/vantop-editor.css';
import VantopEditor from 'vantop-editor';
Vue.component('vantop-editor', VantopEditor);
```


### 功能列表
- 基础富文本编辑器功能
- 支持图片粘贴上传
- 支持导入 wrod 文件上传
- 支持格式刷
- 支持表格拖拽

