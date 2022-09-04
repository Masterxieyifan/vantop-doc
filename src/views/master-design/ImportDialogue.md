## Import Dialouge 导入弹窗
基于[el-dialogue](https://element.eleme.cn/#/zh-CN/component/dialog#events)和[el-upload](https://element.eleme.cn/#/zh-CN/component/upload#methods)开发

自定义导入按钮使用 slot

### 基础用法
:::demo 监听 `change` 事件，会将分隔好的数组返回。

```html
<template>
    <md-import-dialogue
        :hints="hints"
        :hasDownloadTemplate="true"
        uploadUrl="/gw/abc"
        :resultData="resultData"
        @import="handleImport"
        @downloadTemplate="handleDownloadTemplate"
        @downloadSingleFailedFile="handleDownloadSingleFailedFile"
        @downloadAllFailedFile="handleDownloadAllFailedFile"
    />
</template>

<script>
export default {
    data() {
        return {
            hints: [
                '1.表头1，2行格式不可修改。',
                '2.部分表格单选或多选数据可以在第二个SHEET页物料基础模板字段进行复制，此页面数据不能编辑，编辑会导致导入失败，也可以在此页面查看导入的分类和存货类型。',
                '3.店铺数据可以在第二个SHEET页面进行查看后复制到表格中。'
            ],
            resultData: [
                {
                    fileName: '11231asdasd12312323123123.xslx',
                    successedCo: 200,
                    failedCo: 300,
                    total: 500,
                    loading: true, // keep a slot for loading
                },
                {
                    fileName: '1231231231231sadasd213132.xslx',
                    // successedCo: 300,
                    text: 'xxx',
                    // failedCo: 0,
                    total: 400,
                }
            ],
        };
    },
    methods: {
        handleImport(done, fileList) {
            console.log(fileList);
            setTimeout(() => {
                done();
            }, 3000);
        },
        handleDownloadTemplate() {
            console.log('handleDownloadTemplate');
        },
        handleDownloadSingleFailedFile(result) {
            console.log(result);
        },
        handleDownloadAllFailedFile(resultData) {
            console.log(resultData);
        },
    },
};
</script>

```
:::

### 自定义显隐
:::demo `defaultTrigger` 为 `false` 时，可以隐藏默认按钮，通过 `visible` 来控制导入弹窗的显示和隐藏。

```html
<template>
    <md-import-dialogue
        :visible.sync="visible"
        :defaultTrigger="false"
        :hints="hints"
        :hasDownloadTemplate="true"
        uploadUrl="/gw/abc"
        :resultData="resultData"
        @import="handleImport"
        @downloadTemplate="handleDownloadTemplate"
        @downloadSingleFailedFile="handleDownloadSingleFailedFile"
        @downloadAllFailedFile="handleDownloadAllFailedFile"
    />
    <el-popconfirm
        title="想清楚了，你真的要导入吗?"
        confirm-button-text='导！'
        cancel-button-text='算了'
        @confirm="visible = !visible"
    >
        <el-button slot="reference">Trigger</el-button>
    </el-popconfirm>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            hints: [
                '1.表头1，2行格式不可修改。',
                '2.部分表格单选或多选数据可以在第二个SHEET页物料基础模板字段进行复制，此页面数据不能编辑，编辑会导致导入失败，也可以在此页面查看导入的分类和存货类型。',
                '3.店铺数据可以在第二个SHEET页面进行查看后复制到表格中。'
            ],
            resultData: [
                {
                    fileName: '11231asdasd12312323123123.xslx',
                    successedCo: 200,
                    failedCo: 300,
                    total: 500,
                    loading: true, // keep a slot for loading
                },
                {
                    fileName: '1231231231231sadasd213132.xslx',
                    // successedCo: 300,
                    text: 'xxx',
                    // failedCo: 0,
                    total: 400,
                }
            ],
        };
    },
    methods: {
        handleImport(done, fileList) {
            console.log(fileList);
            setTimeout(() => {
                done();
            }, 3000);
        },
        handleDownloadTemplate() {
            console.log('handleDownloadTemplate');
        },
        handleDownloadSingleFailedFile(result) {
            console.log(result);
        },
        handleDownloadAllFailedFile(resultData) {
            console.log(resultData);
        },
    },
};
</script>

```
:::

### ImportDialouge Attributes

| 参数 | 说明 | 类型 | 默认值 | 是否必须 |
|  ----  | ----  |----  | ----  |----|
| headerData | 上传头部数据(参考el-upload参数) |Object | {} |否|
| data | 上传时附带的额外参数 |Object | {} |否|
| uploadUrl | 上传文件的地址（若为空，则不进行自动上传） |String | '' |是|
| title | 弹窗标题 |String | '导入' |否|
| resultTitle | 结果弹窗标题 |String | '导入结果' |否|
| accept | 导入可接收的文件格式（参考el-upload参数） |String | '.xls, .xlsx' |否|
| acceptText | 导入弹窗提示文本 |String | '支持xlsx文件，文件不得大于2M，数据最多1000条' |否|
| size | 最大文件尺寸(单位为MB) |Number | 10 |否|
| limit | 最大文件数量 |Number | 10 |否|
| hasDownloadTemplate | 是否需要自定义下载模版 |Boolean | false |否|
| hints | 提示文本 |String[] | [] |否|
| resultData | 结果数组 |Result[] | [] |否|
| defaultTrigger | 使用默认触发按钮 |Boolean | true |否|
| visible | 导入弹窗显示隐藏控制，只有在 defaultTrigger 为 false 时生效 |Boolean | false |否|


### Result Data 对象解析
分两种判断情况：
- 当failedCo有值时，作为条数数据处理
- 当failedCo为null，读取text值作为显示文本

| 字段名 | 说明 | 类型 | 默认值 | 是否必须 |备注 |
|  ----  | ----  |----  | ----  |----|----|
| fileName | 文件名称 |String | - |是|- |
| successedCo | 成功文件数量 |Number | - |否|- |
| failedCo | 失败文件数量 |Number | - |否|- |
| total | 文件总数量 |Number | - |是|- |
| text | 显示文本 |String | - |否|- |

### ImportDialouge Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| cancel      | 取消按钮被点击时                                 | - |
| import       | 导入按钮被点击时，done函数接收一个error参数，error有值时只关闭loading层，否则关闭loading层以及打开结果弹层                             | function(done, fileList)) |
| downloadTemplate       | 下载模版按钮被点击时                              | - |
| uploadSucceeded       | 上传文件成功时回调                              | res.data(后台接口的返回) |
| uploadFailed       | 上传文件失败时回调                              | error(el-upload截获的报错信息) |
| downloadSingleFailedFile       | 下载单个失败文件图标按钮被点击时                              | - |
| downloadAllFailedFile       | 下载全部失败文件图标按钮被点击时                              | - |

