<!--
 * @Author: lingyong.zeng
 * @Date: 2021-01-08 16:13:15
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:06:35
 * @Description: 
 * @FilePath: /nextop-docs/src/views/code-style/enum.md
-->
## 业务状态/枚举类型：

针对常见类型(状态)判断和数据回显等场景，所进行的数据字典声明及使用方法规范。

### 解决痛点
1. 前端枚举判断；
2. 前端回显后端值（其它取值场景，如取得对应 icon 样式类）；
3. 多种取值场景需重复声明多种格式数据

### 不够好的数据字典
#### 1. 为回显而建
```js
const STATUS = {
    1: '已处理',
    2: '待处理',
};

const status = 1;
STATUS[status];
// => '已处理'
```

#### 2. 为下拉选框而建
```js
const STATUS = [
    {value: 1, label: '已处理'},
    {value: 2, label: '待处理'},
];

<el-select>
    <el-option 
        v-for="{value, label} in STATUS"
        :key="value"
        :label="label"
        :value="value"
    >
    </el-option>
</el-selct>
```

#### 3. 为枚举而建
```js
const STATUS = {
    DONE: 1,
    WAIT: 2,
};

const status = 1;
switch(status) {
    case STATUS.WAIT:
        // 待处理
    break;
    case STATUS.DONE:
        // 已处理
    break;
}
```

以上总共建了三个数据对象，支持回显后端数据、下拉选框数据源、枚举数据源等。这三个数据对象所表示的数据映射关系相同，仅数据格式不同。

这种声明方式存在问题：
1. 需浏览三个数据声明对象，才可获取全部字段内容；
2. 代码过于冗余，维护成本较大；
3. 后续需要有其它取值方式的话，扩展相当不便

本着 "write less, do more" 的风格，更推荐以下用法，仅维护一份根源数据（数据字典），其它数据格式通过自执行函数完成遍历赋值，衍生出所需格式的数据对象。

### 推荐的数据字典
#### 统一声明
使用文件中声明或在 `const` 目录文件中声明
```js
import { mapMetaData } from '@master_vantop/vantop-util';

// 根源数据（所有状态数据均在该对象维护）
const STATUS_BASE_DATA = [
    {
        value: 1,
        label: '已处理',
        enumKey: 'DONE',
        iconClass: 'success',
    },
    {
        value: 2,
        label: '未处理',
        enumKey: 'WAIT',
        iconClass: 'danger',
    }
];

const {
    STATUS_ENUM,            // 枚举对象
    STATUS_DESC,            // 回显对象
    STATUS_ICONCLASS,       // icon类对象
} = mapMetaData(
    STATUS_BASE_DATA,
    [
        ['STATUS_ENUM', 'enumKey', 'value'],  // 对象名 ｜ 键名 ｜ 值名（多个可用数组）    
        ['STATUS_DESC', 'value', 'label'],
        ['STATUS_ICONCLASS', 'value', 'iconClass']
    ]
);

export {
  STATUS_ENUM,
  STATUS_DESC,
  STATUS_ICONCLASS
}
```

### 使用

#### 1. 枚举使用
```js
const status = 1;

switch(status) {
    case STATUS_ENUM.WAIT:
        // 待处理
    break;
    case STATUS_ENUM.DONE:
        // 已处理
    break;
}
```

#### 2. 回显使用
```js
const status = 1;

STATUS_DESC[status];
// => '已处理'
```
#### 3. 其它取值场景
```js
const status = 1;

// 其它取值场景（获得对应icon类）
STATUS_ICONCLASS[status];
// => 'success'
```

优化后的声明方式所带来的好处：
1. 唯一数据字典维护，快速浏览可获知全部字段内容；
2. 方便扩展，如需增加取值方式，通过新增数据对象，并参与遍历赋值即可；
4. 仅一次遍历即可衍生回显数据对象，取值回显时无需频繁遍历