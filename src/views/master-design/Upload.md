## Upload 导入导出弹窗组件

基于 el-upload、el-dialog 二次封装

### 使用前提

-   使用 @master_vantop/nextop-core 中的 { LocalStorage } 方法设置用户信息(推荐使用)

```js
import { LocalStorage } from '@master_vantop/nextop-core';
const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwidGVuYW50SWQiOiIxNTk2ODcwNjY5Mjc4Iiwic3ViIjoiTW96aWxsYVwvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0XC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWVcLzkyLjAuNDUxNS4xNTkgU2FmYXJpXC81MzcuMzYiLCJleHAiOjE2MzAwNjMyODgsInJlZnJlc2hUaW1lIjoxNjMwMDYyMDg4fQ.JqVyalU_WYsPWYX8ZMD2lZMox5FrUtihwB1pZXy7tPw';

const userInfo = {
    id: '1',
    defaultTenantId: '1596870669278'
};

LocalStorage.setToken(token);
LocalStorage.setUserInfo(userInfo);
```

-   使用 window.localStorage 方法设置用户信息

```js
// 为了不再另外安装 @master_vantop/nextop-core 设置用户信息的写法
const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwidGVuYW50SWQiOiIxNTk2ODcwNjY5Mjc4Iiwic3ViIjoiTW96aWxsYVwvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0XC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWVcLzkyLjAuNDUxNS4xNTkgU2FmYXJpXC81MzcuMzYiLCJleHAiOjE2MzAwNDc0MDYsInJlZnJlc2hUaW1lIjoxNjMwMDQ2MjA2fQ.uhA1OTNVHf0q5ZSG8-h_94tR8NA0BXiogaB2Q4ge9mk';
const userInfo = {
    id: '1',
    defaultTenantId: '1596870669278'
};
localStorage.setItem('nextop-micro:TOKEN', token);
localStorage.setItem('nextop-micro:USER_INFO', JSON.stringify(userInfo));
```

:::demo

```html
<div class="upload-demo-token">
    <el-input
        v-model="token"
        clearable
        class="token-input"
        style="margin-bottom: 16px;"
    ></el-input>
    <el-button type="primary" size="small" @click="handleClick"
        >设置 token</el-button
    >
</div>
<script>
    export default {
        data() {
            return {
                token:
                    'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwidGVuYW50SWQiOiIxNTk2ODcwNjY5Mjc4Iiwic3ViIjoiTW96aWxsYVwvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0XC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWVcLzkyLjAuNDUxNS4xNTkgU2FmYXJpXC81MzcuMzYiLCJleHAiOjE2MzAzMTYyNzAsInJlZnJlc2hUaW1lIjoxNjMwMzE1MDcwfQ.UnMPYeKZiqEaUnpym3_-OtyMGtZNE8XMJolBKJ5djUU'
            };
        },
        methods: {
            handleClick() {
                localStorage.setItem(
                    'nextop-micro:TOKEN',
                    JSON.stringify(this.token)
                );
                this.$router.go(0);
            }
        }
    };
</script>
<!-- <style lang="scss" scoped>
    .upload-demo-token {
    }
    /deep/ .token-input {
        margin-bottom: 16px;
    }
</style> -->
```

:::

### 上传按钮

:::demo 使用 `v-model` 进行双向绑定数据，使用 `#import-button` 具名插槽方式即可

```html
<template>
    <div class="vantop-upload-wrapper">
        <md-upload
            v-model="fileList"
            :sceneId="sceneId"
            accept=".xlsx"
            :suffixList="['.xlsx']"
        >
            <template #import-button>
                <el-button class="item" size="small" type="primary"
                    >上传按钮</el-button
                >
            </template>
        </md-upload>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 业务场景 id
                sceneId: 'IMPORT_EXPORT_ORDER_IMPORT',
                // 文件列表
                fileList: [
                    {
                        fileId:
                            'upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx',
                        name: '备货计划初始化.xlsx',
                        url:
                            'http://nextop-import.oss-cn-shenzhen.aliyuncs.com/upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx'
                    },
                    {
                        fileId:
                            'upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx',
                        name: '备货计划初始化.xlsx',
                        url:
                            'http://nextop-import.oss-cn-shenzhen.aliyuncs.com/upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx'
                    }
                ]
            };
        },
        mounted() {
            // 为了不再另外安装 @master_vantop/nextop-core 设置用户信息的写法
            // const token =
            //     'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwidGVuYW50SWQiOiIxNTk2ODcwNjY5Mjc4Iiwic3ViIjoiTW96aWxsYVwvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0XC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWVcLzkyLjAuNDUxNS4xNTkgU2FmYXJpXC81MzcuMzYiLCJleHAiOjE2MzAwNDc0MDYsInJlZnJlc2hUaW1lIjoxNjMwMDQ2MjA2fQ.uhA1OTNVHf0q5ZSG8-h_94tR8NA0BXiogaB2Q4ge9mk';
            // const userInfo = {
            //     id: 1,
            //     defaultTenantId: '1596870669278'
            // };
            // NextopCore.LocalStorage.setToken(token);
            // NextopCore.LocalStorage.setUserInfo(userInfo);
        },
        methods: {
            success(success) {
                // consoloe.log(success);
            },
            error(error) {
                // consoloe.log(error);
            }
        }
    };
</script>
```

:::

### 上传弹窗

:::demo 使用 `v-model` 进行双向绑定数据，使用 `#import-dialog` 具名插槽方式即可

```html
<template>
    <div class="vantop-upload-wrapper">
        <md-upload
            v-model="fileList"
            :sceneId="sceneId"
            @success="success"
            @error="error"
            accept=".xlsx"
            :suffixList="['.xlsx']"
        >
            <template #import-dialog>
                <el-button class="item" size="small" type="primary"
                    >打开上传弹窗</el-button
                >
            </template>
        </md-upload>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 业务场景 id
                sceneId: 'IMPORT_EXPORT_ORDER_IMPORT',
                // 文件列表
                fileList: [
                    // {
                    //     fileId:
                    //         'upload/1596870669278/20210826/1430832103027191810/2020110317165384.jpg',
                    //     name: '备货计划初始化.xlsx',
                    //     url:
                    //         'http://nextop-import.oss-cn-shenzhen.aliyuncs.com/upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx'
                    // },
                    // {
                    //     fileId:
                    //         'upload/1596870669278/20210826/1430832103027191810/2020110317165384.jpg',
                    //     name: '备货计划初始化.xlsx',
                    //     url:
                    //         'http://nextop-import.oss-cn-shenzhen.aliyuncs.com/upload/1596870669278/20210713/1414886496561512449/备货计划初始化.xlsx'
                    // }
                ]
            };
        },
        mounted() {
            // 为了不再另外安装 @master_vantop/nextop-core 设置用户信息的写法
            // const token =
            //     'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwidGVuYW50SWQiOiIxNTk2ODcwNjY5Mjc4Iiwic3ViIjoiTW96aWxsYVwvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0XC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWVcLzkyLjAuNDUxNS4xNTkgU2FmYXJpXC81MzcuMzYiLCJleHAiOjE2MzAwNDc0MDYsInJlZnJlc2hUaW1lIjoxNjMwMDQ2MjA2fQ.uhA1OTNVHf0q5ZSG8-h_94tR8NA0BXiogaB2Q4ge9mk';
            // const userInfo = {
            //     id: 1,
            //     defaultTenantId: '1596870669278'
            // };
            // NextopCore.LocalStorage.setToken(token);
            // NextopCore.LocalStorage.setUserInfo(userInfo);
        },
        methods: {
            success(success) {
                // consoloe.log(success);
            },
            error(error) {
                // consoloe.log(error);
            }
        }
    };
</script>
```

:::

### 导出弹窗

:::demo 使用 `v-model` 进行双向绑定数据，使用 `#export-data` 具名插槽方式即可

```html
<template>
    <div class="vantop-upload-wrapper">
        <md-upload
            :sceneId="sceneId"
            :exportCountForm="exportCountForm"
            accept=".xlsx"
            :suffixList="['.xlsx']"
        >
            <template #export-data>
                <el-button class="item" size="small" type="primary"
                    >打开导出数据弹窗</el-button
                >
            </template>
        </md-upload>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 业务场景 id
                sceneId: 'IMPORT_EXPORT_SYSTEM_LOG',
                // 导出数据(表单筛选参数)
                exportCountForm: {
                    conditionStr: {
                        amount: null,
                        name: '',
                        type: null,
                        storeId: 66000,
                        createTime: null
                    }
                }
            };
        },
        mounted() {
            // 为了不再另外安装 @master_vantop/nextop-core 设置用户信息的写法
            // const token =
            //     'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwidGVuYW50SWQiOiIxNTk2ODcwNjY5Mjc4Iiwic3ViIjoiTW96aWxsYVwvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0XC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWVcLzkyLjAuNDUxNS4xNTkgU2FmYXJpXC81MzcuMzYiLCJleHAiOjE2MzAwNDc0MDYsInJlZnJlc2hUaW1lIjoxNjMwMDQ2MjA2fQ.uhA1OTNVHf0q5ZSG8-h_94tR8NA0BXiogaB2Q4ge9mk';
            // const userInfo = {
            //     id: 1,
            //     defaultTenantId: '1596870669278'
            // };
            // NextopCore.LocalStorage.setToken(token);
            // NextopCore.LocalStorage.setUserInfo(userInfo);
        }
    };
</script>
```

:::

### Upload Attribute

| 参数            | 说明                         | 类型    | 是否必须 | 默认值    |
| --------------- | ---------------------------- | ------- | -------- | --------- |
| v-model / value | 文件列表                     | Array   | 是       | -         |
| sceneId         | 业务场景 id                  | String  | 是       | -         |
| exportCountForm | 导出数据(表单筛选参数)       | Object  | 否       | -         |
| suffixList      | 允许上传的文件后缀名列表     | Array   | 否       | ['.xlsx'] |
| fileSize        | 上传文件大小限制(MB)         | Number  | 否       | 20        |
| importBtn       | 导出数据弹窗是否显示导出按钮 | Boolean | 否       | true      |

### Upload Events

| 参数       | 说明                     | 回调函数          |
| ---------- | ------------------------ | ----------------- |
| success    | 文件上传成功时的钩子     | function(success) |
| error      | 文件上传失败时的钩子     | function(error)   |
| importFile | 点击导入功能按钮后的钩子 | function()        |
| exportData | 点击导出数据按钮后的钩子 | function()        |

### Upload Slots

| 参数          | 说明     |
| ------------- | -------- |
| import-button | 导入按钮 |
| import-dialog | 导入弹窗 |
| export-data   | 导出弹窗 |

### Upload Methods

| 方法名称                | 说明                     | 参数              |
| ----------------------- | ------------------------ | ----------------- |
| handleVisible           | 控制导入弹窗显是否示     | (visible:Boolean) |
| handleImportingVisible  | 控制正在导入弹窗显是否示 | (visible:Boolean) |
| handleExportDataVisible | 控制导出数据弹窗显是否示 | (visible:Boolean) |
