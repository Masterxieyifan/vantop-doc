## Transfer 穿梭框

### 基础用法
:::demo 监听 `change` 事件，会将分隔好的数组返回。

```html
<template>
  <div class="container">
    <md-transfer
        :data="transferData"
        :props="props"
        ref="Transfer"
        @change="getData"
        :checkedData="selectData"
    >
    </md-transfer>
  </div>
</template>
<script>
export default {
    data() {
        return {
            props: {
                label: 'address',
                key: 'id',
            },
            transferData: [
                {
                  "id": "61570595812618240",
                  "name": "kevinbq101",
                  "address": "kevinbq101@gmail.com"
                },
                {
                  "id": "61852545044717568",
                  "name": "stone9137",
                  "address": "stone9137@163.com"
                },
                {
                  "id": "67998275967139840",
                  "name": "yuan1347036974",
                  "address": "yuan1347036974@outlook.com"
                },
                {
                  "id": "1331409200736698369",
                  "name": "21212",
                  "address": "21212@qq.COM"
                },
                {
                  "id": "1331557052662599682",
                  "name": "kevin_aliyun",
                  "address": "kevin.wen@vantopgroup.com"
                },
                {
                  "id": "68066621264310272",
                  "name": "deadline2498",
                  "address": "deadline2498@gmail.com"
                },
                {
                  "id": "60773422553071616",
                  "name": "zhoulei",
                  "address": "zhoulei9137@outlook.com"
                },
                {
                  "id": "1334784474693222401",
                  "name": "1250899347",
                  "address": "1250899347@qq.com"
                },
                {
                  "id": "1334786053722849282",
                  "name": "18676776729",
                  "address": "18676776729"
                },
                {
                  "id": "1338331614984990721",
                  "name": "deng3lili",
                  "address": "deng3lili@outlook.com"
                },
                {
                  "id": "1338408008268050434",
                  "name": "bqtesting",
                  "address": "bqtesting@163.com"
                },
                {
                  "id": "1338437789280497666",
                  "name": "support.es",
                  "address": "support.es@vivilink.com"
                },
                {
                  "id": "1339197389465116673",
                  "name": "werwer",
                  "address": "werwer"
                },
                {
                  "id": "61568546517626880",
                  "name": "yuan1347036974",
                  "address": "yuan1347036974@gmail.com"
                },
                {
                  "id": "1335117592193249282",
                  "name": "lili.deng",
                  "address": "lili.deng@vantopgroup.com"
                },
                {
                  "id": "1326366036480053250",
                  "name": "deng3lili",
                  "address": "deng3lili@gmail.com"
                },
                {
                  "id": "1342325846996148226",
                  "name": "wulivm",
                  "address": "wulivm@gmail.com"
                }
            ],
            selectData: [{
                "id": "61570595812618240",
                "name": "kevinbq101",
                "address": "kevinbq101@gmail.com"
              },
              {
                "id": "61852545044717568",
                "name": "stone9137",
                "address": "stone9137@163.com"
              },
              {
                "id": "67998275967139840",
                "name": "yuan1347036974",
                "address": "yuan1347036974@outlook.com"
              },
              {
                "id": "1331409200736698369",
                "name": "21212",
                "address": "21212@qq.COM"
              },
              {
                "id": "1331557052662599682",
                "name": "kevin_aliyun",
                "address": "kevin.wen@vantopgroup.com"
              },
              {
                "id": "68066621264310272",
                "name": "deadline2498",
                "address": "deadline2498@gmail.com"
              },
              {
                "id": "60773422553071616",
                "name": "zhoulei",
                "address": "zhoulei9137@outlook.com"
              },
              {
                "id": "1334784474693222401",
                "name": "1250899347",
                "address": "1250899347@qq.com"
              },
              {
                "id": "1334786053722849282",
                "name": "18676776729",
                "address": "18676776729"
              },
              {
                "id": "1338331614984990721",
                "name": "deng3lili",
                "address": "deng3lili@outlook.com"
              },
              {
                "id": "1338408008268050434",
                "name": "bqtesting",
                "address": "bqtesting@163.com"
              },
              {
                "id": "1338437789280497666",
                "name": "support.es",
                "address": "support.es@vivilink.com"
              },
              {
                "id": "1339197389465116673",
                "name": "werwer",
                "address": "werwer"
              },
              {
                "id": "61568546517626880",
                "name": "yuan1347036974",
                "address": "yuan1347036974@gmail.com"
              },
              {
                "id": "1335117592193249282",
                "name": "lili.deng",
                "address": "lili.deng@vantopgroup.com"
              },
              {
                "id": "1326366036480053250",
                "name": "deng3lili",
                "address": "deng3lili@gmail.com"
              },
              {
                "id": "1342325846996148226",
                "name": "wulivm",
                "address": "wulivm@gmail.com"
              }],
        }
    },
    methods: {
        getData(data) {
            console.log('choosed data', data);
        },
    },
};
</script>

```
:::

### Transfer Attributes

| 参数名称 | 说明                    |类型               | 默认值 |
| -------- | ----------------------| -------- |-------- |
| data      | transfer的数据 | Array        |-      |
| checkedData | 状态按钮配置 | Array       | []    |
| props | 数据源的字段别名 | Object | {key: 'id', label: 'label'} |
| leftPlaceholder | 自定义左侧列表输入框提示文案 | String | 请输入关键字 |
| rightPlaceholder | 自定义右侧列表输入框提示文案 | String | 请输入关键字 |
| removeAllPrompt | 自定义全部移除按钮提示 | String | 是否确定移除所有选中数据？ |
| removeAllTitle | 自定义全部移除按钮标题 | String | 批量移除 |
| rightHeadLeft | 自定义右侧列表头部左边文案 | String | 已选 |
| rightHeadRight | 自定义右侧列表题头部全部移除按钮文案 | String | 全部移除 |
| target-order | 右侧列表元素的排序策略：若为 `original`，则保持与数据源相同的顺序；若为 `push`，则新加入的元素排在最后；若为 `unshift`，则新加入的元素排在最前（original / push / unshift） | String | original |

### Transfer Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| change      | 选中数据发生改变时触发 | -        |


