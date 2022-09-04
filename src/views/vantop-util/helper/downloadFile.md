## downloadFile 方法
::: tip 常规用法
downloadFile(url)

触发a标签点击事件，下载附件
:::


### downloadFile 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| url         | 附件url     | String       | 必填      |
| fileName         |  文件名称(跨域不起作用)    | String      | -     |

#### 例子
```js
downloadFile('http://vantop-nextop-test.oss-cn-shenzhen.aliyuncs.com/upload/1607336384730/20210817/179006669873745920.xlsx');
```

