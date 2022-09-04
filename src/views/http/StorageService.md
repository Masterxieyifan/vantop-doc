<!--
 * @Author: lingyong.zeng
 * @Date: 2021-12-17 10:19:52
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:06:53
 * @Description: 
 * @FilePath: /nextop-docs/src/views/http/StorageService.md
-->
## 用户存储

::: tip
StorageService: 跟随每个用户设定，远端存储数据，相当于用户的数据存储容器
:::

```js
import { StorageService } from '@master_vantop/nextop-http';
```

应用场景：

1. 高级搜索集成的自定义条件设置（跟随每个用户设定）；

2. 表格集成的显隐列设置（跟随每个用户设定）；

3. 其它需要存储的业务需要


### 获取存储

::: tip 
StorageService.getItem(key: string): promise
:::

```js
let userInfo = await StorageService.getItem('userInfo');
// 如果值是JSON字符串，需自行解析
userInfo = userInfo && JSON.parse(userInfo);
```

### 添加存储

::: tip 
StorageService.setItem(key: string, value: string): promise
:::

```js
const userInfo = {
    name: 'ZLY',
    job: 'Developer'
};
StorageService.setItem('userInfo', JSON.stringify(userInfo));
```

### 更新存储

::: tip 
StorageService.updateItem(key: string, value: string): promise
:::

```js
const userInfo = {
    name: 'ZLY',
    job: 'Developer'
};
StorageService.updateItem('userInfo', JSON.stringify(userInfo));
```

### 删除存储

::: tip 
StorageService.removeItem(key: string): promise
:::

```js
StorageService.removeItem('userInfo');
```

### 方法参数

| 参数  | 说明  | 类型 
| -- | -- | -- 
| key | 存储标识（随意设置） | String
| value | 存储值 | String