## 上传图片、word 文件


### 基础用法
:::demo 需要实现 images_upload_handler 方法 [实现图片上传](http://tinymce.ax-z.cn/general/upload-images.php)
```html
<template>
  <vantop-editor
    v-model="content"
    style="height: 200px"
    :setting="setting"
    :input="handleContent"
    class="vantop-editor"
  ></vantop-editor>
</template>

<script>
  export default {
    data() {
      return {
        content: "",
        setting: {
          // 注意：需要等图片、word 等文件全部上传完成后再提交到服务器，否则会有内容丢失的问题
          images_upload_handler: (blobInfo, succFun, failFun) => {
            var xhr, formData;
            var file = blobInfo.blob(); //转化为易于理解的file对象
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open("POST", "/demo/upimg.php");
            xhr.onload = function() {
              var json;
              if (xhr.status != 200) {
                failFun("HTTP Error: " + xhr.status);
                return;
              }
              json = JSON.parse(xhr.responseText);
              if (!json || typeof json.location != "string") {
                failFun("Invalid JSON: " + xhr.responseText);
                return;
              }
              succFun(json.location);
            };
            formData = new FormData();
            formData.append("file", file, file.name); //此处与源文档不一样
            xhr.send(formData);
          },
        },
      };
    },
    methods: {
      handleContent(content) {
        content;
        // console.log(content);
      },
    },
  };
</script>
```
:::