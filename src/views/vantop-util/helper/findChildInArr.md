## findChildInArr方法
::: tip 常规用法
findChildInArr(array,value,key,likeCompare,childrenKey): object 

返回匹配到的对象`{root:根对象，item: 子对象}`若没有匹配到则返回`{root:null，item: null}`。
:::
::: warning 注意！
array必须为数组，value不能为null。
:::



### findChildInArr 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| array         | 需要处理的数组     | Array       | -      |
| value         | 需要匹配的值      | String    | - |
| key          | 根据key值来匹配        | String | 'id' |
| likeCompare | 是否模糊匹配 | Boolean | false |
| childrenKey | 子集的取值键名 | String | 'children' |

#### 例子
```js
const arr = [
    {
        "icon": "iconfont icon-sidebar-commodity",
        "id": 1,
        "name": "商品",
        "path": "/goods",
        "children": [
            {
                "icon": "iconfont iconicon_secret",
                "id": 270228,
                "name": "分类管理",
                "path": "/goods/Categories/Categories"
            },
            {
                "icon": "iconfont iconicon_QRcode",
                "id": 270229,
                "name": "属性管理",
                "path": "/goods/attribute/attributeList"
            },
        ]
    },
     {
        "icon": "iconfont icon-sidebar-purchase",
        "id": 270289,
        "name": "采购",
        "path": "/purchase",
        "children": [
            {
                "icon": "iconfont icon-purchase",
                "id": 270290,
                "name": "供应商管理",
                "path": "/purchase/supplier/index",
            },
            {
                "icon": "iconfont iconicon_dispose",
                "id": 270293,
                "name": "供应商SKU管理",
                "path": "/purchase/supplierSku/index"
            },
        ]
    }
];
findChildInArr(arr, '/goods/Categories/Categories', 'path');
/*
{
    root: {
        icon: 'iconfont icon-sidebar-commodity',
        id: 1,
        name: '商品',
        path: '/goods',
        children: [
            {
                'icon': 'iconfoiconicon_secret',
                'id': 270228,
                'name': '分类管理',
                'path': '/goods/CategoriCategories',
            },
            {
                'icon': 'iconfoiconicon_QRcode',
                'id': 270229,
                'name': '属性管理',
                'path': '/goods/attribuattributeList',
            }],
    },
    item: {
        icon: 'iconfont iconicon_QRcode',
        id: 270229,
        name: '属性管理',
        path: '/goods/attribute/attributeList',
    },
}
*/
```
