## 条件栏配置 md-advanced-search

1. 条件栏统一使用，不再区分普通搜索/高级搜索；

2. “自定义条件” 按钮隐藏逻辑：所有条件都设为固定条件 `status: 'fixed'` 时隐藏 （如想实现之前 ERP 非高级搜索的布局）；

3. 条件少于等于 3 个时，所有条件会自动变为固定条件，即全显示；

4. 固定条件在“自定义条件”弹窗不可切换为不显示

### 功能概要
1. 统一收拢表单组件触发 `search` 方法，开发者不再对单独的表单组件绑定 `change/enter` 事件；

2. 统一控制 **“清除条件”**（重置），恢复初始值，并触发 `search` 方法（“清除条件” 按钮不是**置空**，而是**恢复**默认值）；

3. 使用 schema 数据模型配置方式，不再采用逐个组件代码开发的方式；

4. 增加地址栏 urlHash 参数存储与初始化，刷新页面时如果 url 中有 hash 参数，会自动映射到对应表单值；

5. 可根据用户配置自定义显示条件，开发者声明了所有条件，但只有**显示条件会作为属性参与接口查询**；

6. 固定条件优先级高于用户已配置的条件，这里的优先级不是指顺序的优先级，而是指假设限定显示条件为 10 个，之前用户配置了 10 个条件（不全是固定条件），开发新增了两个固定条件，会在已显示条件尾部**移除**非固定条件，将新增的固定条件**增加**到可显示条件尾部；

7. “自定条件”按钮不显示时，即全条件显示，因此不会进行远程存储

    7.1 `storageKey` 默认是 `this.$route.path + '_search'` 
    
    7.2 目前多系统 `token` 未统一导致远程存储接口异常，可先配置 `storage: false` 切换为本地存储方案

### 配置简介
```js
// 条件 schema 配置
[
    {
        label: '订单编号',       // 标签设置 [String|Function]
        prop: 'orderQueryNo',   // 数据键值(类似 el-form-item 的 prop)
        value: '',              // 初始化默认值（必须配置该属性，否则“清除条件”功能异常）
        status: 'fixed',        // 固定条件
        render: {               // 渲染类型 [Object|Function(JSX)]
            type: 'Input',      // 组件类型 [String]
        }
    },
    {
        label: '订单来源',
        prop: 'orderSource',
        value: '',
        render: {
            type: 'Select',
            labelKey: 'name',   // options 中 value|label 映射（默认是 value|label)
            valueKey: 'code',   
            options: () => [{coce: 'amazon', name: '亚马逊'}]
            multiple: true,     // 其他属性的支持
        }
    }
]
```

| 属性 | 介绍 | 类型 |
| -- | -- | -- |
| label | 标签文案 | String｜Function
| prop | query 数据对象对应的属性名，`'-'` 连接多个参数可拆分，<br> 如日期范围 `'startTime-endTime'`, <br> 最终会拆解为 `{startTime: '', endTime: ''}` | String
| value | 默认值（根据组件类型支持） | String｜Number｜Array｜Null
| status | 状态配置， `status: 'fixed'` 为固定条件  | String 
| render | 渲染配置 | Object｜Function(返回JSX/响应式对象)
| changeCall | 变更回调 | 值变更会触发该回调，于 toQuery 前执行， 可用于处理联动等场景


### render 配置
#### 1. Object 类型
```js
{
    label: '客户姓名',
    prop: 'name',
    render: {
        type: 'Input'
    }
}
```

#### 2. Function 类型（返回响应式对象）
render 为 Object 类型时，是静态属性渲染，若其属性值变更并不触发更新。如果需要动态属性，需如下声明：

```js
{
    label: '客户姓名',
    prop: 'name',
    render: () => ({         
        type: 'Input',
        placeholder: this.dyamicText
    })
}
```

与 `render` 为 `Object` 类型区别是 `render` 变为函数，`this.dyamicText` 变更时会实时更新渲染，`this.dyamicText` 为开发自行定义的数据。


#### 3. Function 类型（返回JSX)
```js
{
    label: '客户姓名',
    prop: 'name',
    value: '',
    render: () => {
        return (
            <el-input
                label="客户姓名"
                prop="name"        // 自实现JSX记得要手动绑定prop和label
                vModel={this.query['name']}
            >
            </el-input>
        )
    }
}
```
**注意：采用 Function 方式 返回 jsx 组件需手动绑定 prop 和 label**

#### 3. Object 类型属性说明

| 属性 | 介绍 | 类型 | 默认值 
| -- | -- | -- | -- 
| type | 组件类型，支持基础组件如下：<br> Input/MultiInput/Select/TimePicker/DatePicker <br> Cascader/InputNumber/SelectInput/SelectDate/Autocomplete  | String | - 
| width | 宽度 | String | 240px 
| clearable | 是否可清除 | Boolean | true 
| options | 需要选项数据的组件 | Array｜Function(Promise/Normal)｜Promise |  - 
| valueKey | 下拉框使用 value 映射属性名 | String | value |
| lableKey | 下拉框使用 label 映射属性名 | String | label |
| attrType | 原组件 type 属性替换名称 | String | - |
| 其他属性(如placeholder...)| 基础组件支持的属性均已透传 | - |  - 

**注意：**

**1. 像日期范围组件使用 `type="daterange"` ，需使用 `attrType: 'daterange'` 来避免属性冲突；**

**2. 像 `Select` 组件解析的 `options` 中 `value/label` 可能对应不同属性，可通过 `valueKey` 和 `labelKey` 配置映射；**

**3. 像需要缓解后端查询压力，固定时间范围作为筛选条件，需将该条件设置为固定条件且不可清空 `clearable: false`**

**4. 针对需要 `options` 数据的组件，提供了 `Array/Promise/Function` 类型，这里的 `Function` 可以是有返回数据的普通函数，或是返回 `Promise` 的函数**

```js
// options 是 Promise
const options = new Promise((resolve) => {
    const list = [{value: '1', label: '男', value: '2', label: '女'}];
    resolve(list);
})

// options 是 Function(Normal)
const options = () => {
    const list = [{value: '1', label: '男', value: '2', label: '女'}];
    return list
}

// options 是 Function(Promise)
const options = () => {
    return new Promise((resolve) => {
        const list = [{value: '1', label: '男', value: '2', label: '女'}];
        resolve(list);
    })
}
```

#### 4. 支持 SelectInput 组件（原有业务迁移需要）

```js
{
    label: '快捷搜索',
    prop: 'type-val',       // '下拉框参数名-文本框参数名' (后端需要的参数键名)
    status: 'fixed',
    value: ['1', ''],       // [下拉框值，文本框值]
    render: {
        type: 'SelectInput',
        options: [
            {
                value: '0',
                label: '亚马逊',
            },
            {
                value: '1',
                label: '沃尔玛',
            }
        ],
    },
}
```

快捷搜索最终值转换到 `toQuery(params)` 时，会转换成 `{type: '下拉框值', val: '文本框值', ...}`, `type` 和 `val` 可自行命名

#### 5. 支持 SelectDate 组件（原有业务迁移需要）
```js
{
    label: '日期',
    prop: 'queryDateType-startTime-endTime', // '下拉框参数名-日期开始参数名-日期结束参数名' (后端需要的参数键名)
    value: ['1'],
    render: {
        type: 'SelectDate',
        options: [
            {
                label: '调整日期',
                value: '1',
            },
            {
                label: '创建日期',
                value: '2',
            }
        ],
        selectWidth: '100px',
        attrType: 'daterange',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        defaultTime: ['00:00:00', '23:59:59'],
        valueFormat: 'timestamp',
        dateReset: false,       // 下拉选项变更是否清空日期值，false 为不清空，默认为 true 清空
        // SelectDate 具体属性请参照 MasterDesign 中的 SelectDate 组件
    }
},
```

日期最终值转换到 `toQuery(params)` 时，会转换成 `{queryDateType: '日期下拉框值', startTime: '开始日期值', endTime: '结束日期值'}`

#### 6. 支持 MultiInput 组件（原有业务迁移需要）

```js
{
    label: '快捷多项搜索',
    prop: 'multipleKey-multipleVal',    // '下拉框参数名-文本框参数名' - 后端需要的参数键名
    status: 'fixed',
    value: ['shipmentCodes', []],       // [下拉框值，文本框值]
    render: {
        type: 'MultiInput',
        selectWidth: '120px',
        selectOptions: [
            {
                label: '货件编号',
                value: 'shipmentCodes'
            },
            {
                label: '出货订单编号',
                value: 'nums'
            },
            {
                label: '提货计划编号',
                value: 'takeCargoPlanNums',
                multiple: false
            },
            {
                label: '仓库订单编号',
                value: 'warehouseOrderNums'
            },
            {
                label: '物流订单编号',
                value: 'logisticsOrderNums'
            }
        ],
    },
}
```

快捷多项搜索最终值转换到 `toQuery(params)` 时，会转换成 `{multipleKey: '下拉框值', multipleVal: '文本框值', ...}`

#### 7. 支持 InputNumber 组件（原有业务迁移需要）

```js
{
    label: '快捷多项搜索',
    prop: 'selType-mixNum-maxNum',       // '下拉框参数名-起始值参数名-结束值参数名' - 后端需要的参数键名
    value: ['shipmentCodes'],            //
    render: {
        type: 'InputNumber',
        attrType: 'range',               // 若需要数字范围，传这个参数，则绑定的值为 [selectVal, startVal, endVal]
        selectWidth: '200px',
        options: [
            {
                label: '货件编号',
                value: 'shipmentCodes'
            },
            {
                label: '出货订单编号',
                value: 'nums'
            },
            {
                label: '提货计划编号',
                value: 'takeCargoPlanNums',
            },
            {
                label: '仓库订单编号',
                value: 'warehouseOrderNums'
            },
            {
                label: '物流订单编号',
                value: 'logisticsOrderNums'
            }
        ],
        placeholder: '请输入',
        width: '420px',
        clearable: true,
    },
}
```


#### 8. 支持 ElAutoComplete 组件
```js
{
    label: '境内发货人',
    prop: 'precinctName',
    value: '',
    render: () => ({
        type: 'Autocomplete',
        placeholder: '请输入内容',
        fetchSuggestions: (query, cb) => this.querySearchAsync(query, cb, 'precinctName'),
    }),
},
```


### 条件联动

对于有关联的条件选项，必须全部声明为固定条件。

假设三个条件选框：省、市、区，这三个条件必须声明为固定条件

使用 `changeCall` 来实现条件联动，以下两个方法来自 operateStorage 的 mixin：

1. `setQueryValue`: 批量设置其他条件值，并同步 urlHash

2. `getQueryRef`: 获取条件框的 ref，可用于修改 schema 数据对象，例如选框的 `options` 等其它属性


```js
[
    {
        label: '省',
        prop: 'provinces',
        value: '',
        status: 'fixed',
        render: {
            type: 'Select',
            options: []
        },
        changeCall: (value) => {
            // 联动清空市、区值
            this.setQueryValue([
                {
                    prop: 'city',
                    value: ''
                },
                {
                    prop: 'area',
                    value: ''
                }
            ]);

            // 获取城市选项，尽量不使用 await 同步，因为会阻塞 toQuery 的执行
            // 像更新 select options 的这种，是可以延后到 toQuery 执行的

            /* eq.
            const cityRef = this.getQueryRef('city');
            this.$api.getCityOptions({ provice: value })
                .then(res => {
                    const cityOptions = res.records;
                    cityRef.render.options = cityOptions
                })
            */

        }
    },
    {
        label: '市',
        prop: 'city',
        value: '',
        status: 'fixed',
        render: {
            type: 'Select',
            options: [],
        },
        changeCall: (value) => {
            // 联动清空区值
            this.setQueryValue([
                {
                    prop: 'area',
                    value: ''
                }
            ]);

            // 联动改变区的选项
            const areaRef = this.getQueryRef('area');
            /* eq.
            const areaRef = this.getQueryRef('area');
            this.$api.getAreaOptions({ city: value })
                .then(res => {
                    const areaOptions = res.records;
                    areaRef.render.options = areaOptions
                })
            */
        }
    },
    {
        label: '区',
        prop: 'area',
        value: '',
        status: 'fixed',
        render: {
            type: 'Select',
            options: []
        },
    },
]
```