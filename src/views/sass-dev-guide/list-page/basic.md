<!--
 * @Author: lingyong.zeng
 * @Date: 2021-08-16 18:40:28
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:07:22
 * @Description: 
 * @FilePath: /nextop-docs/src/views/sass-dev-guide/list-page/basic.md
-->

## 列表页面配置

### 三大组件使用
| 效用 | 组件 | 说明 |
| -- | -- | -- |
| 页面框架 | md-page-list | 页面布局配置 |
| 搜索栏 | md-advanced-search | 搜索栏配置 |
| 列表表格 | md-list-table | 表格配置 |

1. md-page-list 的配置请参照组件文档指引

2. md-advanced-search/md-list-table 可直接参照左侧菜单文档指引


### 注意事项

1. 表格数据接口统一配置 `{ _repeatCancel: true }`

```js
export const getOrderList = params => http.post('oms/order/page', params, { _repeatCancel: true });
```


### 其它案例参考
* [列表页面 md-table 替换](http://git.nextop.cc/nextop-web-erp/md-gamma-finance/blob/develop/src/views/accounting-Inventory-synthesis.vue)
* [列表页面有左侧菜单替换](http://git.nextop.cc/nextop-web-erp/md-gamma-finance/blob/develop/src/views/accounting-expense-item.vue)
