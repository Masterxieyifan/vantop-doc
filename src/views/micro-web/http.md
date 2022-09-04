## 新HTTP说明及使用
> 后端系统进行了重构，接口返回重新做了统一规范，请求参数格式和响应格式都有所变化，所以前端需要进行统一的规范和适配，因此编写此文档同步新HTTP网络请求的说明及使用。 2021-08-27

### 请求说明

#### 约定

- 基础请求的所有查询条件参数放入`param`中传递
- 每个请求需要携带约定好的固定参数，参数待定

- 瀑布流分页请求必传参数 `pageCursor`

- 分页请求必须分页参数：

  ```json
  {
  	currentPage: 1,
  	pageSize: 20,
  	orderColumn: 'orderTime',
  	desc: true,
  }
  ```

#### 示例

- 常规请求参数示例

  ```json
  {
    language: 'zh-CN',   // 固定参数
    region: 'shenzhen',  // 固定参数
    ...
    param: {            // 请求查询条件
      id: 'XXXX',
    }
  }
  ```

- 分页请求参数示例

  ``` json
  {
    language: 'zh-CN',          // 固定参数
    region: 'shenzhen',         // 固定参数
    ...
    currentPage: 1,             // 分页参数
    pageSize: 20,               // 分页参数
    orderColumn: 'orderTime',   // 分页参数
    desc: true,                 // 分页参数
    param: {                    // 请求查询条件
      id: 'XXXX',
    }
  }
  ```

- 瀑布流分页请求参数示例

  ``` json
  {
    language: 'zh-CN',          // 固定参数
    region: 'shenzhen',         // 固定参数
    ...
    pageCursor: 2,              // 分页参数
    param: {                    // 请求查询条件
      id: 'XXXX',
    }
  }
  ```

### 响应说明

#### 约定

- 响应码：`responseCode`，只有如下几种：
  - 10000：操作成功
  - 30000：请求参数错误
  - 40000：业务异常
  - 40001：未登陆或登陆过期
  - 40003：访问拒绝无权限
  - 50000：服务器异常
- `data`字段只放响应数据
- 登录超时跳转登录页面
- responseCode !== '10000' 的返回，默认提示 message，并reject 整个 response，业务可在 catch 中处理异常和业务异常
- responseCode === '10000' 的返回，表示接口正常返回，返回整个 response，业务自行取数据

#### 示例

- 基础响应结构示例

  ``` json
  {
    requestId: '123456',      // 请求id，默认会有，暂时不用管
    responseCode: '10000',    // 响应码
    message: '操作成功'，       // 响应消息
    data: 'hello'             // 响应数据
  }
  ```

- 分页请求响应结构示例

  ``` json
  {
    requestId: '123456',      // 请求id，默认会有，暂时不用管
    responseCode: '10000',    // 响应码
    message: '操作成功'，       // 响应消息
    total: 100,               // 分页数据总条数
    data: [                   // 分页数据
    	....
    ]             
  }
  ```

- 瀑布流分页请求响应示例

  ``` json
  {
    requestId: '123456',      // 请求id，默认会有，暂时不用管
    responseCode: '10000',    // 响应码
    message: '操作成功'，       // 响应消息
    pageCursor: 2,            // 分页标识
    data: [                   // 列表数据
    	....
    ]             
  }
  ```

- 业务异常返回示例

  ``` json
  {
    requestId: '123456',      // 请求id，默认会有，暂时不用管
    responseCode: '40000',    // 响应码
    message: '操作错误'，       // 响应消息
    subErrorCode: 'B0999',    // 业务错误码
    data: {}                  // 返回数据
  }
  ```



### 新HTTP方法使用

- 使用方式

  ``` javascript
  // /api/http.js
  import { httpRequest, httpRequestInstance } from '@master_vantop/nextop-http';
  
  const { NODE_ENV, VUE_APP_BASE_API_GW } = process.env;
  if (NODE_ENV && NODE_ENV !== 'production' && VUE_APP_BASE_API_GW) {
      httpRequestInstance.defaults.baseURL = VUE_APP_BASE_API_GW;
  }
  
  export { httpRequest as http };
  ```

- 接口定义示例

  ``` javascript
  import { http, } from '@/api/http';
  const commonUrl = '/auth';
  export const loginByPhone = params => http.post(`${commonUrl}/login`, params);
  ```

- 使用中遇到问题 @廖红东

