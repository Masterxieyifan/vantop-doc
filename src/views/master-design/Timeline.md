## Timeline 日志时间线组件

### 空日志
:::demo
```html
<template>
    <md-timeline :data="[]"/>
</template>
```
:::

### 基础用法
:::demo 传入 `data` 即可，组件里做了假分页处理
```html
<template>
    <md-timeline :data="data"/>
</template>
<script>
    export default {
        data() {
            return {
                data:[],
            };
        },
        created() {
            const data = []
            for (let i = 0; i < 12; i++) {
                data.push({
                    time: +new Date() + (1000000*i),
                    operator: `用户${i+1}`,
                    content: `【用户${i+1}】新增了第${i+1}条信息`,
                    status: '工作中',
                })
            }
            this.data = data;
        },
    };
</script>
```
:::

### 属性变更日志
:::demo `attributeList` 字段为详细的属性变更日志，其中做了假分页
```html
<template>
    <md-timeline :data="data"/>
</template>
<script>
    export default {
        data() {
            return {
                data: [{
                    time: +new Date() + 10000,
                    operator: '测试用户',
                    content: `【测试用户】编辑了一条测试信息`,
                    status: '测试中',
                    attributeList :[{
                        "attributeName": "测试金额",
                        "oldValue": "2",
                        "newValue": "1"
                    },
                    {
                        "attributeName": "测试币种",
                        "oldValue": "人民币",
                        "newValue": "美元"
                    },
                    {
                        "attributeName": "测试币种",
                        "oldValue": "人民币",
                        "newValue": "美元"
                    },
                    {
                        "attributeName": "测试币种",
                        "oldValue": "人民币",
                        "newValue": "美元"
                    },
                    {
                        "attributeName": "测试币种",
                        "oldValue": "人民币",
                        "newValue": "美元"
                    },
                    {
                        "attributeName": "测试币种",
                        "oldValue": "人民币",
                        "newValue": "美元"
                    },
                    {
                        "attributeName": "测试币种",
                        "oldValue": "人民币",
                        "newValue": "美元"
                    },
                    ]
                },
                {
                    time: +new Date(),
                    operator: '测试用户',
                    content: `【测试用户】新增了一条测试信息`,
                    status: '测试中',
                }]
            }
        }
    }
</script>
```
:::

### 懒加载
:::demo 传入 `lazy` 开启懒加载，配合 `total` 和 `load` 进行数据的加载；
```html
<template>
    <md-timeline
        lazy
        :data="data"
        :total="6"
        @load="loadLog"
    />
</template>
<script>
    export default {
        data() {
            return {
                data: [{
                    time: +new Date(),
                    operator: '懒加载用户',
                    content: `【懒加载用户】新增了一条测试信息`,
                    status: '懒加载中',
                }]
            }
        },
        methods: {
            loadLog(done) { 
                // 模拟接口请求
                setTimeout(()=>{
                    const data = [];
                    for (let i = 0; i < 5; i++) {
                        data.push({
                            time: +new Date() + (1000000*i),
                            operator: '懒加载用户',
                            content: `【懒加载用户】这是第${i+2}条数据`,
                            status: '懒加载中',
                        });
                    }
                    this.data.push(...data);
                    // 执行 done()，通知组件接口请求已完成
                    done();
                }, 1000);

            }
        },
    };
</script>
```
:::

### 搜索区域
:::demo 提供 `search` 插槽，可以自定义搜索
```html
<template>
    <md-timeline
        :data="data"
        v-loading="loading"
    >
        <template v-slot:search>
            <el-input
                class="md-timeline--search__item"
                style="width: 200px;"
                label="操作人"
                clearable
                placeholder="请输入"
                @change="search"
                v-model="input"
            />
        </template>
    </md-timeline>
</template>
<script>
    export default {
        data() {
            return {
                data: [{
                    time: +new Date(),
                    operator: '搜索用户',
                    content: '【搜索用户】这是第 1 条数据',
                    status: '搜索中',
                },{
                    time: +new Date(),
                    operator: '搜索用户',
                    content: '【搜索用户】这是第 2 条数据',
                    status: '搜索中',
                }],
                input: '',
                loading: false,
            }
        },
        methods: {
            search(val) { 
                this.loading = true;
                // 模拟搜索接口
                setTimeout(()=>{
                    if (val) {
                        this.data = [{
                            time: +new Date(),
                            operator: '搜索用户',
                            content: '【搜索用户】这是第 1 条数据',
                            status: '搜索中',
                        }];
                    } else {
                        this.data = this.$options.data().data;
                    }
                    this.loading = false;
                }, 1000);

            }
        },
    };
</script>
```
:::


### 自定义数据结构
:::demo `props` 可以自定义 `data` 的数据结构
```html
<template>
    <md-timeline
        :data="data"
        :props="{
            status: 'myStatus',
            time: 'myTime',
            operator: 'myOperator',
            content: 'myContent',
            attributeList: 'myAttributeList',
            attributeName: 'myAttributeName',
            oldValue: 'myOldValue',
            newValue: 'myNewValue'
        }"
    />
</template>
<script>
export default {
    data() {
        return {
            data: [{
                myTime: +new Date() + 10000,
                myOperator: '测试用户',
                myContent: `【测试用户】编辑了一条测试信息`,
                myStatus: '测试中',
                myAttributeList :[{
                    "myAttributeName": "测试金额",
                    "myOldValue": "2",
                    "myNewValue": "1"
                }]
            }]
        }
    }
}
</script>
```
:::



### Timeline Attribute

| 参数            | 说明                   | 类型   | 是否必须 | 默认值 |
| --------------- | ---------------------- | ------ | -------- | ------ |
| data | 操作日志数据 | array | 是 | - |
| timeStamp | 操作时间格式化（若为false，则不进行格式化） | String / Boolean | 否 | 'YYYY-MM-DD hh:mm:ss' |
| size         | 点击展开更多时展开的条数（仅在非懒加载模式下有效，供组件做假分页使用）  | Number | 否       | 5      |
| lazy         | 是否开启懒加载            | Boolean | 否       | false      |
| total         | 操作日志总条数（仅在懒加载模式下有效）  | Number | 否       | 10      |
| maxHeight         | 最大高度(超出展示滚动条)            | Number | 否       | -      |
| props         | 数据结构字段配置，具体配置见下表          | Object | 否       | -      |

### Props Attribute
| 参数            | 说明                   | 类型   |  默认值 |
| --------------- | ---------------------- | ------ |  ------ |
| status | 指定状态属性的字段名 | string |  status |
| time | 指定时间属性的字段名 | String |  time |
| operator | 指定操作者属性的字段名 | String |  operator |
| phone | 指定电话属性的字段名 | String |  phone |
| content | 指定日志内容属性的字段名 | String |  content |
| attributeList | 指定变更属性列表字段名 | String |  attributeList |
| attributeName | 指定变更属性名的字段名 | String |  attributeName |
| oldValue | 指定变更属性旧值的字段名 | String |  oldValue |
| newValue | 指定变更属性新值的字段名 | String |  newValue |

### Timeline Event

| 参数            | 说明                   | 回调参数   |
| --------------- | ---------------------- | ------ |
| load | 懒加载模式下点击展开更多触发 | (done: Function) |
