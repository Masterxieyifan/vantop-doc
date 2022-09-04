## mapMetaData 方法
::: tip 常规用法
mapMetaData(arrObj, arr): obj 

映射元数据，自定义元数据的映射方法。
:::

针对数据集合对象，开发需要根据某个属性值，匹配该对象的其他值，如根据 `value` 获取到对应的 `label` 值，每次都遍历查找难免耗性能。
使用该方法，可预先转化需要的映射数据，且仅需一次遍历、可完成多种模式的映射关系。


### mapMetaData 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------ |:-----------------| :--------| :--------|
| mapData       | 进行映射处理的元数据     | array       | -      |
| mapCfgs       | 映射关系配置         | array | - |

#### 例子
```js
// 元数据（可供下拉选项使用）
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
    STATUS_ENUM,        // 枚举对象
    STATUS_DESC,        // 回显对象
    STATUS_CUSTOM,      // 复合对象
} = mapMetaData(
    STATUS_BASE_DATA,
    [
        ['STATUS_ENUM', 'enumKey', 'value'],  // 对象名 ｜ 键名 ｜ 值名（多个可用数组）    
        ['STATUS_DESC', 'value', 'label'],
        ['STATUS_CUSTOM', 'value', ['label', 'enumKey']]
    ]
);

/*
// 处理结果
STATUS_ENUM ==> { DONE: 1, WAIT: 2 }
STATUS_DESC ==> { '1': '已处理', '2': '未处理' }
STATUS_CUSTOM ==> {
  '1': { label: '已处理', enumKey: 'DONE' },
  '2': { label: '未处理', enumKey: 'WAIT' }
}
*/
```