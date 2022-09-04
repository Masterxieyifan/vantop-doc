<!--
 * @Author: lingyong.zeng
 * @Date: 2021-12-17 11:54:35
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:06:50
 * @Description: 
 * @FilePath: /nextop-docs/src/views/http/ComonUpload.md
-->
## 公共下载

::: tip
comonUpload: 公共上传，前端用于上传等，统一对接后端接口请求

```ts
comonDownLoad(
    url: String, 
    params: FormData
): Promise
```

:::

### 使用方法
```html
<template>
    <el-upload
        :http-request="doUpload"
    >
    </el-upload>
</template>

<script>
import { comonUpload } from '@master_vantop/nextop-http';

export default {
    methods: {
        async doUpload(file) {
            let param = new FormData();
            param.append('file', file.file);
            const { data } = await comonUpLoad(
                '/mail/mail/send/attachment',
                param
            );
        }
    }
}
</script>
```


### 方法参数

| 参数  | 说明  | 类型 | 默认值
| -- | -- | -- | -- |
| url | 接口地址 | String | -
| param | 文件数据 | FormData | -

