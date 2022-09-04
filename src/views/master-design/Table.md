## Table 表格
__基于 [van-table](http://van-table.nextop.cc/#/table/start/install) 二次封装，适用于 **nextop-fe** 使用__


### 常用按钮
查看：<i class="nt-icon-view-16"/> nt-icon-view-16</br>
编辑：<i class="nt-icon-edit-16"/> nt-icon-edit-16</br>
删除：<i class="nt-icon-delete-16"/> nt-icon-delete-16</br>
通过：<i class="nt-icon-pass-16"/> nt-icon-pass-16</br>
拒绝：<i class="nt-icon-fail-16"/> nt-icon-fail-16</br>
复制：<i class="nt-icon-copy-16"/> nt-icon-copy-16</br>
禁用：<i class="nt-icon-disable-16"/> nt-icon-disable-16</br>
启用：<i class="nt-icon-enable-16"/> nt-icon-enable-16</br>
移除：<i class="nt-icon-form-remove-16"/> nt-icon-form-remove-16</br>
### 空数据
:::demo
```html
<template>
    <md-table
        height="400px"
        :columns="columns"
        :data="data"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                        hoverable: true,
                        width: 100
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [],
            };
        }
    }
</script>
```
:::


### 基础用法
:::demo

```html
<template>
    <md-table 
        :operations="operations"
        border="header"
        height="400px"
        :columns="columns"
        :data="data"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                        cancellable: false
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [],
                operations: [
                    {
                        text: '编辑',
                        key: '编辑',
                        icon: 'nt-icon-edit-16',
                        disableHandler: (row)=>{
                            return row.name === 'name0'
                        }
                    },
                    {
                        text: '查看',
                        key: '查看',
                        icon: 'nt-icon-view-16',
                    },
                    {
                        text: '删除',
                        key: '删除',
                        icon: 'nt-icon-delete-16',
                        handler: (row, column, obj) => {
                            console.log(row)
                            console.log(column)
                            console.log(obj)
                            
                        },
                    },
                    {
                        text: '通过',
                        key: '通过',
                        icon: 'nt-icon-pass-16',
                        handler: (row) => {
                            //
                        },
                    },
                    {
                        text: '拒绝',
                        key: '拒绝',
                        icon: 'nt-icon-fail-16',
                        handler: (row) => {
                            //
                        },
                    },
                    {
                        text: '复制',
                        key: '复制',
                        icon: 'nt-icon-copy-16',
                        handler: (row) => {
                            //
                        },
                    },
                    {
                        text: '移除',
                        key: '移除',
                        icon: 'nt-icon-form-remove-16',
                        handler: (row) => {
                            //
                        },
                    },
                    {
                        text: '禁用',
                        key: '禁用',
                        icon: 'nt-icon-disable-16',
                        handler: (row) => {
                            //
                        },
                    },
                    {
                        text: '启用',
                        key: '启用',
                        icon: 'nt-icon-enable-16',
                        handler: (row) => {
                            //
                        },
                    },
                ]
            };
        },
        created() {
            const data = [];
            for(let i = 0; i<100; i++) {
                data.push({
                    name: `name${i}`,
                    age: `age${i}`,
                    sex: i%2 === 0 ? '男' : '女'
                })
            }
            this.data = data
        },
    }
</script>
```
:::





### 操作列路由跳转
:::demo 为了方便开发减少简单路由跳转的处理，同时兼容浏览器右键菜单可以打开新链接， `operations` 提供 `href` 字段快速配置；`href` 可以接受路由字符串，也支持传一个返回值为字符串类型的函数。

```html
<template>
    <md-table 
        :operations="operations"
        border="header"
        :columns="columns"
        :data="data"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                        cancellable: false
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    }
                ],
                operations: [
                    {
                        text: 'popover',
                        key: 'popover',
                        href: (row) => {
                            return `/master-design/popover?name=${row.name}`
                        },
                        icon: 'nt-icon-edit-16',
                    },
                    {
                        text: 'basic-box',
                        key: 'basic-box',
                        href: '/master-design/basic-box',
                        icon: 'nt-icon-view-16',
                    },
                    {
                        text: 'input-number',
                        key: 'input-number',
                        href: '/master-design/input-number',
                        icon: 'nt-icon-delete-16',
                    }
                ]
            };
        },
    }
</script>
```
:::

### 单元格溢出省略
:::demo

```html
<template>
    <md-table
        stripe
        :columns="columns"
        :data="data"
        border="header"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '正常列，正常列，正常列，正常列，正常列，正常列',
                        hoverable: true,
                        minWidth: 100
                    },
                    {
                        prop: 'age',
                        label: '自定义列',
                        hoverable: (h, {row, column}) => {
                            return (
                                <div>
                                    <h1>{column.title}</h1>
                                    <span>{row.age}</span>
                                </div>
                            )
                        },
                        minWidth: 100,
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                        minWidth: 120
                    },
                ],
                data: [
                    {
                        name: '当hoverable为true时，超过长度的文本字段会自动省略，且hover时展示省略字段。',
                        age: '当hoverable为render函数或者jsx语法时，超过长度的文本字段会自动省略，且hover时展示自定义的内容。',
                        sex: '女',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    }
                ],
            };
        },
    }
</script>
```
:::



### 表头配置
:::demo `title-help` 可快速配置表头帮助，`title-help.icon` 默认为问号图标，开发可根据需要自行配置； `title.message` 可配置帮助文案，支持字符串或者 `render` 函数； `required` 可以快速配置表头必选星号；

```html
<template>
    <md-table
        stripe
        :columns="columns"
        :data="data"
        border="header"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '超长的名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字',
                        titleHelp: {
                            message: '当 title-help.message 配置为字符串时，会直接展示 message 文本'
                        },
                        required: true,
                        minWidth: 100
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                        titleHelp: {
                            message: (h, {column}) => {
                            return (
                                <div>
                                    <p style="color:red">1、当 title-help.message 配置为render函数或jsx语法时，会展示自定义的内容</p>
                                    <p>2、当 title-help.message 配置为render函数或jsx语法时，会展示自定义的内容</p>
                                    <p>3、当 title-help.message 配置为render函数或jsx语法时，会展示自定义的内容</p>
                                </div>
                            )
                        }
                        },
                        minWidth: 150,
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                        minWidth: 150
                    },
                ],
                data: [
                    {
                        name: 'name1',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: 'name2',
                        age: 13,
                        sex: '男',
                    },
                    {
                        name: 'name3',
                        age: 14,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 15,
                        sex: '女',
                    }
                ],
            };
        },
    }
</script>
```
:::
### 筛选配置
:::demo 具体配置用法可见 [van-table/filter](http://van-table.nextop.cc/#/table/base/filter) 文档

```html
<template>
    <md-table
        stripe
        height="300px"
        :columns="columns"
        :data="data"
        border="header"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名字',
                        minWidth: 100,
                        filters: [{data: ''}],
                        filterMethod: ({ option, row }) => {
                            return row.name === option.data
                        },
                        renderFilter: (h, {$panel, column, columnIndex})=>{
                            const input = column.filters.map((option, index)=>{
                                return <el-input
                                            vModel={option.data}
                                            placeholder="请输入"
                                            onInput={$panel.changeOption(option.data, !!option.data, option)}
                                        />
                            })
                            return (
                                <div>
                                    <span class="vxe-table--filter-template__title">这里是标题（输入框）</span>
                                    {input}
                                </div>
                            )
                        }
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                        minWidth: 100,
                        filters:[
                            {label: '年龄大于13', value: 13},
                            {label: '年龄大于14', value: 14}
                        ],
                        filterMethod: ({ value, row, column }) => {
                            return row.age > value
                        },
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                        minWidth: 120,
                        filters: [
                            {label: '男', value: '男'},
                            {label: '女', value: '女'}
                        ],
                        filterMultiple: false
                    },
                ],
                data: [
                    {
                        name: 'name1',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: 'name2',
                        age: 13,
                        sex: '男',
                    },
                    {
                        name: 'name3',
                        age: 14,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 15,
                        sex: '女',
                    }
                ],
            };
        },
    }
</script>
```
:::

### 排序配置
:::demo 具体配置用法可见 [van-table/sort](http://van-table.nextop.cc/#/table/base/sort) 文档

```html
<template>
    <md-table
        stripe
        height="300px"
        :columns="columns"
        :data="data"
        :sort-config="{defaultSort: {field: 'age', order: 'asc'}, selectDefault: true}"
        @sort-change="sortChangeEvent"
        border="header"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '个人信息',
                        minWidth: 100,
                        sortable: true,
                        sortOptions: [
                            {value: 'age', label: '年龄'},
                            {value: 'id', label: 'ID'}
                        ],
                        render: (h, {row, column}) => {
                            return (
                                <div>
                                    <p>姓名：{row.name}</p>
                                    <p>年龄：{row.age}</p>
                                    <p>ID：{row.id}</p>
                                </div>
                            )
                        },
                    },
                    {
                        prop: 'money',
                        label: '银行存款',
                        minWidth: 100,
                        sortable: true,
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                        minWidth: 120,
                    },
                ],
                data: [
                    {
                        name: 'name1',
                        id: 1,
                        age: 12,
                        sex: '男',
                        money: 1110
                    },
                    {
                        name: 'name2',
                        age: 13,
                        id: 2,
                        sex: '男',
                        money: 1112220
                    },
                    {
                        name: 'name3',
                        age: 14,
                        id: 3,
                        sex: '男',
                        money: 111232130
                    },
                    {
                        name: '123',
                        age: 15,
                        id: 4,
                        sex: '女',
                        money: 11103124354
                    }
                ],
            };
        },
        methods: {
            sortChangeEvent ({ property, order }) {
                this.$message(`property: ${property}, order: ${order}`)
            },
        }
    }
</script>
```
:::


### 表头分组
:::demo `columns` 中若有 `children` 字段，会自动处理成 `vxe-table-colgroup` 标签，该标签所有属性都支持透传，具体 API 见 [table.colgroup.api](http://van-table.nextop.cc/#/table-colgroup/api)

```html
<template>
    <md-table
        stripe
        :columns="columns"
        :data="data"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'info',
                        label: '基本信息',
                        fixed: 'left',
                        children: [
                            {
                                prop: 'id',
                                label: 'id',
                                width: 120
                            },
                            {
                                prop: 'name',
                                label: '名字',
                                required: true,
                                minWidth: 150
                            }
                        ]
                    },
                    {
                        prop: 'more',
                        label: '更多信息',
                        children: [
                            {
                                prop: 'role',
                                label: '岗位',
                                minWidth: 150
                            },
                            {
                                prop: 'detail',
                                label: '更多信息',
                                children: [
                                    {
                                        prop: 'sex',
                                        label: '性别',
                                        minWidth: 150,
                                    },
                                    {
                                        prop: 'age',
                                        label: '年龄',
                                        minWidth: 120
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        prop: 'tel',
                        label: '电话',
                        minWidth: 150,
                    },
                    {
                        prop: 'addr',
                        label: '住址',
                        minWidth: 250,
                    },
                ],
                data: [
                    {
                        name: 'name1',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: 'name2',
                        age: 13,
                        sex: '男',
                    },
                    {
                        name: 'name3',
                        age: 14,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 15,
                        sex: '女',
                    }
                ],
            };
        },
    }
</script>
```
:::



### 复杂聚合表格
:::warning
当表格为复杂聚合表格时，`rowId` 为必需且默认为 `id`，若需要使用其他字段作为 `rowId`，可以自行配置
:::
:::demo 当 `type` 为 `complex`, 表格为复杂聚合表格；`parentColumns` 控制父级列渲染，`columns` 控制子级列渲染；<br/><br/>若子级需要分页加载，组件通过父级 `total`（可通过 `childrenTotalProp` 属性配置）字段值和 `children`（可通过 `tree-config.children` 属性配置） 字段值数量比较来判断是否展示加载更多按钮；<br/>同时 `complexLoad:(row, resolve)=>{}` 属性配置点击加载更多按钮时触发的回调方法，通过 `resolve(data)` 来插入加载的数据。
```html
<template>
    <md-table 
        type="complex"
        height="700px"
        :operations="operations"
        :complexLoad="loadComplexData"
        :parentColumns="parentColumns"
        :columns="columns"
        :data="data"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'img',
                        label: '图片',
                        render: () => {
                            return (
                                <md-preview
                                    url="https://images-na.ssl-images-amazon.com/images/I/51Ws3JhgMYL.jpg"
                                />
                            )
                        },
                        width: 60,
                    },
                    {
                        prop: 'name',
                        label: '名称',
                        hoverable: true,
                        copiable: true,
                        width: 200,
                    },
                    {
                        prop: 'author',
                        label: '作者',
                        width: 150,
                    },
                    {
                        prop: 'price',
                        label: '售价',
                        width: 150,
                    },
                    {
                        prop: 'publish',
                        label: '出版社',
                        minWidth: 150,
                    },
                    {
                        prop: 'date',
                        label: '上架日期',
                        formatter: ['formatDate', 'yyyy-MM-dd'],
                        minWidth: 350,
                    },
                ],
                parentColumns: [
                    {
                        prop: 'type',
                        label: '类型',
                        showLabel: false
                    },
                    {
                        prop: 'status',
                        label: '状态',
                        render: (h,{row}) => {
                            const status = row.status;
                            return (
                                <el-tag
                                    type={['danger', 'warning', 'warning', ][status]}
                                    size="mini">
                                    {['畅销', '热卖', '热卖'][row.status]}
                                </el-tag>
                            )
                        },
                        showLabel: false
                    },
                    {
                        prop: 'shop',
                        label: '店铺',
                    },
                    {
                        prop: 'num',
                        label: '剩余数量',
                    },
                    {
                        prop: 'remark',
                        label: '备注',
                    }
                ],
                data: [],
                operations: [
                    {
                        text: '编辑',
                        key: '编辑',
                        icon: 'nt-icon-edit-16',
                        validator: (row)=>{
                            return !row.children
                        }
                    },
                    {
                        text: '查看',
                        key: '查看',
                        icon: 'nt-icon-view-16',
                        validator: (row)=>{
                            return !row.children
                        }
                    },
                    {
                        text: '删除',
                        key: '删除',
                        icon: 'nt-icon-delete-16',
                        validator: (row)=>{
                            return !row.children
                        }
                    },
                ]
            };
        },
        created() {
            this.data = new Array(20).fill(null).map((_, index)=>{
                const random = parseInt(Math.random()*3 ,10);
                return ({
                    id: this.generateUUID(),
                    type: ['前端开发', '后端开发', '运维开发'][random],
                    status: random,
                    remark: '有很多有很多有很多有很多',
                    num: random * 100,
                    total: (random + 1) * 5,
                    shop: ['淘宝', '京东', '当当'][random],
                    children: [
                        { id: this.generateUUID(), name: 'JavaScript 高级程序设计', price: '￥100', date: +new Date(), publish: '清华出版社', author: '里德' },
                        { id: this.generateUUID(), name: 'JavaScript权威指南', price: '￥100', date: +new Date(),publish: '清华出版社', author: '里德' },
                        { id: this.generateUUID(), name: 'Nestjs 企业实战', price: '￥99', date: +new Date(),publish: '清华出版社', author: '里德'},
                        { id: this.generateUUID(), name: 'vxe-table 从入门到放弃', price: null, date: +new Date(),publish: '清华出版社', author: '里德' },
                    ]
                })
            });
        },
        methods: {
            loadComplexData(row, resolve) {
                console.log(row);
                setTimeout(()=>{
                    resolve([{ id: this.generateUUID(), name: 'JavaScript 高级程序设计', price: '￥100', date: +new Date(), publish: '清华出版社', author: '里德' }]);
                }, 2000);
            },
            generateUUID() {
                let d = new Date().getTime();
                const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    const r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            },
        }
    }
</script>
```
:::


### 单元格复制功能
:::demo `columns` 提供 `copiable` 字段，快速配置复制功能；当 `copiable` 为 `true` 时，点击复制按钮默认复制的时 `row.prop` 的值，同时 `copiable` 也提供一个返回值为字符串的函数供开发自定义复制内容。（该配置与 `render` 不能共存）
```html
<template>
    <md-table
        :columns="columns"
        :data="data"
        border="header"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名字',
                        copiable: true,
                        minWidth: 100
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                        copiable: (row, column, {rowIndex})=>{
                            return `这是第${rowIndex+1}行`
                        },
                        minWidth: 100,
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                        minWidth: 120
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    }
                ],
            };
        },
    }
</script>
```
:::



### 单选模式
:::demo `selectionMode` 可以配置选择模式，`checkbox` 为多选模式，`radio` 为单选模式；默认值为 `checkbox`。

```html
<template>
    <md-table 
        selectionMode="radio"
        @select="select"
        border="header"
        height="400px"
        :columns="columns"
        :data="data"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                        cancellable: false
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [],
            };
        },
        created() {
            const data = [];
            for(let i = 0; i<100; i++) {
                data.push({
                    name: `name${i}`,
                    age: `age${i}`,
                    sex: i%2 === 0 ? '男' : '女'
                })
            }
            this.data = data
        },
        methods: {
            select(val) {
                this.$message(JSON.stringify(val))
            }
        }
    }
</script>
```
:::

### 表格配置
:::demo 设置`hasSelection`为`false`，隐藏多选；设置`hasToolbar`为`false`，隐藏显隐列；设置`hasPagination`为`false`，隐藏分页；设置`padding`为`true`，增加边距。

```html
<template>
    <p>隐藏多选</p>
    <md-table 
        :columns="columns"
        :data="data"
        :hasSelection="false"/>
    <p>隐藏显隐列</p>
    <md-table 
        :columns="columns"
        :data="data"
        :hasToolbar="false"/>
    <p>隐藏分页</p>
    <md-table 
        :columns="columns"
        :data="data"
        :hasPagination="false"/>
    <p>增加边距</p>
    <md-table 
        :columns="columns"
        :data="data"
        :padding="true"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                ],
            };
        }
    }
</script>
```
:::


### 自定义渲染（render函数渲染）
> 当采用自定义渲染时，本质上是破坏了组件内部的构造，所以会导致组件的功能部分失效，需要手动处理
:::demo 可以使用`render`函数或者`JSX`单独某列渲染。

```html
<template>
    <md-table 
        :columns="columns"
        :data="data"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                        // JSX
                        renderHeader: h => {
                            return (<div onClick={() => alert('abced')}>自定义渲染头</div>);
                        },
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                        // Render函数
                        render: (h, {row, column}) => {
                            return h('a', {
                                on: {
                                    click: () => alert('abced'),
                                },
                            }, row.name)
                        },
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                ],
            };
        }
    }
</script>
```
:::

### 自定义渲染（外部渲染）
> 此种情况下，部分组件功能失效
- 显隐列功能将会失效，需要手动监听`columns-change`维护columns的变化

- columns的`hoverable`属性失效，需要外部实现`popover`的功能
:::demo

```html
<template>
    <md-table 
        :columns="columns"
        @columns-change="handleColumnsChange"
        :data="data">
        <vxe-table-column
            v-for="{ label, prop} in showColumns"
            :field="prop"
            :title="label"
            :key="prop">
            <template #default="{row}">{{row[prop]}}</template>
        </vxe-table-column>
    </md-table>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                showColumns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: '男',
                    },
                ],
            };
        },
        methods: {
            handleColumnsChange(columns) {
                this.showColumns = columns;
            }
        }
    }
</script>
```
:::

### 远程存储
当需要记录用户行为时，可以使用`storage`开启表格的用户行为记忆功能
```html
<template>
    <md-table
        :data="data"
        :columns="columns"
        :ref="tableRefKey"
        :storage="true"
        storageKey="your-own-unique-key"
        :storageColumnProps="storageColumnProps"
        @storage-columns-change="storageHandleColumns"/>
</template>
<script>
// ref建议直接使用tableInstance或者将tableRefKey重写为你自己的值
// 从全局mixins中导入需要的mixin
import { tableStorage } from '@/mixins';
// 使用mixin
{
    ...
    mixins: [tableStorage],
    ...
}
</script>
```

### 更多配置信息

更多配置信息可通过 [van-table](http://van-table.nextop.cc/#/table/start/install) 官网查看


### Table Attributes
使用了attr, listener 进行透明传参,更多参数及实现请参考[van-table](http://van-table.nextop.cc/#/table/start/install)，支持直接通过 `ref` 操作 `vxe-table` (**tableInstance**)原生实例

| 参数 | 说明 | 类型 | 是否必须 | 默认值 |
| -------- | ----------- |------ | ---- | ---|
| type | 表格类型['normal', 'complex'] | String | 是 | 'normal' |
| data | 表格显示的列表 | Array | 是 | - |
| columns | 表格要显示的列   | Array | 是 | - |
| parentColumns | 复杂表格父级要显示的列   | Array | 否 | - |
| total | 表格数据总数   | Number | 是 | - |
| loading | 表格的加载状态   | Boolean | 否 | - |
| hasSelection | 表格是否能够被多选   | Boolean | 否 | true |
| selectionMode | 设置选择框模式  | String | 否 | checkbox |
| isFixedSelection | 表格多选框是否固定在左列   | Boolean | 否 | false |
| hasPagination | 是否有分页 | Boolean | 否 | true |
| hasToolbar | 是否有显隐列按钮 | Boolean | 否 | true |
| hasRefreshBtn | 是否有刷新按钮 | Boolean | 否 | false |
| sortable | 列是否可拖拽 | Boolean | 否 | true |
| storage | 是否采用远程存储记录用户列行为 | Boolean | 否 | false |
| storageKey | 存储在远程仓库的键值，租户唯一 | String | 是(当storage为true时) | - |
| padding | 表格是否有边距 | Boolean | 否 | false |
| cellClassName | 表格单元格类名 | String | 否 | - |
| headerRowClassName | 表头颜色 | String | 否 | gray(默认值)/white |
| operations | 行的操作列表  | Array | 否 | [] |
| operationWidth | 操作列的宽度  | [String, Number] | 否 | 90 |
| moreMutipleOperations | 更多批量操作按钮  | Array | 否 | [] |
| highlightHoverRow | 鼠标悬浮行时，是否要高亮显示  | Boolean | 否 | true |
| highlightCurrentRow | 鼠标点击行时，是否要高亮显示  | Boolean | 否 | true |
| showHeaderOverFlow | 设置表头所有内容过长时显示为省略号  | Boolean | 否 | true |
| pageSizes | 设置每页显示条目个数  | Array | 否 | [20,50,100,200] |
| complexLoad | 复杂聚合表格加载更多方法  | Function(row, resolve) | 否 | - |
| complexLoadText | 复杂聚合表格加载更多文案  | String | 否 | '更多产品' |
| childrenTotalProp | 复杂聚合表格子集数量属性值（加载更多的显示逻辑依据）  | String | 否 | 'total' |


### operations

| 字段名称   | 说明                                                  | 类型 |是否必须     |默认值     |
| ---------- | ----------------------------------------------------- | ------------ |------------ |----|
| text      | 操作项名称                                      | String  | 是 |             - |
| key       | 操作项key值，唯一                                   | String   | 是 |-|
| icon       | 操作项图标icon类名                                 | String     | 是 |-|
| validator       | 是否隐藏操作项                      | Function(row)   | 否 | -|
| disableHandler       | 是否禁用操作项，函数                      | Function(row)   | 否 | () => false|
| handler       | 点击该操作时触发的函数                      | Function(row, column, ...rest)   | 否 |-|
| href       | 跳转链接，它可以是一个字符串或者返回值为字符串的函数（若已存在 handler ，则该配置失效）     | String / Function(row) => String   | 否 |-|



### moreMutipleOperations
同 `operations` 在于函数的参数为**selections**

| 字段名称   | 说明                                                  | 类型 |是否必须     |默认值     |
| ---------- | ----------------------------------------------------- | ------------ |------------ |----|
| text      | 操作项名称                                      | String  | 是 |             - |
| key       | 操作项key值，唯一                                   | String   | 是 |-|
| icon       | 操作项图标icon类名                                 | String     | 否 |-|
| validator       | 是否隐藏操作项                      | Function(selections)   | 否 | -|
| disableHandler       | 是否禁用操作项，函数                      | Function(selections)   | 否 | () => false|
| handler       | 点击该操作时触发的函数                      | Function(selections)   | 否 |-|



### Columns
> render函数可采用JSX语法

| 字段名称   | 说明        | 类型 |是否必须     |默认值     |
| ---------- | ----------------- | ------------ |------------ |----------
| label      | 列名称                                      | String  | 是 | - |
| cancellable      | 是否可以取消显示                                      | Boolean  | 否 |  true |
| prop       | 列对应的key名称                                    | String   | 是 |-|
| minWidth       | 最小宽度                                 | Number     | 否 |-|
| width       | 列宽                                 | Number     | 否 |-|
| hoverable       | 超出宽度是否启用 tooltip，支持 render 函数/ JSX 写法          | Boolean / renderFunction     | 否 |-|
| render       | 内容渲染函数                                 | Function(h, { row, column, rowIndex, columnIndex })     | 否 |-|
| renderHeader       | 头部渲染函数                                 | Function(h, { column, rowIndex, columnIndex })     | 否 |-|
| renderFilter       | 头部筛选渲染函数                                 | Function(h, { column, $panel , columnIndex })     | 否 |-|
| copiable       | 复制功能                                 | Boolean /Function(row, column, ...rest })     | 否 |-|
| required       | 必填星号展示                                 | Boolean      | 否 |false|
| children       | 表头分组子表头                                 | Array      | 否 | - |


### ParentColumns
> 复杂聚合表格父级列配置

| 字段名称   | 说明        | 类型 |是否必须     |默认值     |
| ---------- | ----------------- | ------------ |------------ |----------
| label      | 列名称                                      | String  | 是 | - |
| prop       | 列对应的key名称                                    | String   | 是 |-|
| render       | 内容渲染函数                                 | Function(h, { row, column, rowIndex, columnIndex })     | 否 |-|


### Table Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| refresh      | 表格配置发生改变时触发                                 | pagination: { current, size, total } |
| select       | 表格选择项发生改变时触发                              | selections (所有被选中的行) |
| size-change       | 分页大小发生改变时触发                              | pagination: { current, size, total } |
| current-page-change       | 分页下标发生改变时触发                              | pagination: { current, size, total } |
| column-change       | 显示列发生改变时                              | columns |


### Table Methods

| 方法名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| getSelectedRow       | 获取表格选中的行                              | - |
| clearSelection      | 清除表格的选择项                                 | - |
| setPaginationSize       | 设置分页的大小                              | - |
| setCheckboxRow(selections, checked)       | 设置选中的行              | - |
| setPaginationCurrent       | 设置分页的下标                            | - |
| resetPagination       | 重置分页的配置                              | - |
| resetPaginationSize       | 重置分页的大小                            | - |
| resetPaginationCurrent       | 重置分页的下标                              | - |