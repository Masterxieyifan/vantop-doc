<!--
 * @Author: 陈建中
 * @Date: 2021-11-23 16:23:41
 * @LastEditTime: 2022-03-01 14:07:05
 * @LastEditors: 蔡远程
 * @Description: 本地联调
 * @FilePath: /nextop-docs/src/views/sass-dev-guide/common-share.md
-->

### 背景

微前端架构拆分后，各个业务模块都是一个独立的子应用。

但因业务需要，要求子应用能共享部分代码（强业务耦合），提供给其它子应用使用，如组件、mixins、常量、方法等。


以下用 **“大数据模块”** 共享代码给 **“订单模块”** 使用为例：

1. 共享者【大数据】： md-gamma-bigdata 
2. 使用者【订单】： md-gamma-sales 

### 共享者配置

:::tip
共享者：md-gamma-bigdata
:::

切换到 md-gamma-bigdata 项目目录，新建文件 src/bigdataShare/index.js

以此类推，如果是商品模块 md-gamma-goods，则可新建文件 src/goodsShare/index.js

```js
// file: src/bigdataShare/index.js

// components
import BigdataPieLine from '@/components/business/BigdataPieLine';
import BigdataPieTable from '@/components/business/BigdataPieTable';
import PageFrame from '@/components/global-components/PageFrame';

// const
import * as chartDefaultSetting from '@/const/chartDefaultSetting';

// mixins
import pieTable from '../mixins/pieTable';
import pieLine from '../mixins/pieLine';

export default {
    components: {               // 要共享给其他应用的组件
        BigdataPieLine,
        BigdataPieTable,
        PageFrame,
    },
    constant: {                 // 要共享给其他应用的常量
        chartDefaultSetting,    
    },
    mixins: {                   // 要共享给其他应用的mixins
        pieTable,
        pieLine
    }
};
```

### 终端 reuse 脚本打包

<img src="@img/common-share-01.png"/>   

1. 切换项目目录到 md-gamma-web

2. 执行 md-gamma-web 目录下的 reuse 脚本文件，打包子应用要共享的代码

3. 终端执行: `./reuse [params1] [params2] [params3] [params4]`

    3.1 params1: 最外层项目地址，为 md-gamma-web 路径，如：/Users/cenglingyong/vfile/mvp/md-gamma-web

    3.2 params2: 要打包编译的子应用名称，如：md-gamma-bigdata

    3.3 params3: 要打包编译的代码相对目录，如：src/bigdataShare/index.js（指 md-gamma-bigdata/src/bigdataShare/index.js)

    3.4 params4: 最终打包编译输出的文件名称，如：BigdataShare.min.js 

    3.5 最终执行类似这段代码：**(相关路径自行替换为自己的路径)**
    
    ```js
    ./reuse /Users/cenglingyong/vfile/mvp/md-gamma-web md-gamma-bigdata src/bigdataShare/index.js BigdataShare.min.js
    ```

4. 执行 reuse 后打包的文件，会生成文件输出到 md-gamma-main/public/common 下面

<img src="@img/common-share-02.png"/>   

###  主应用配置
:::tip
md-gamma-main
:::

vue.externals.js 文件配置 commonExternals

<img src="@img/common-share-03.png"/>   

### 使用者配置

:::tip
使用者：md-gamma-sales
:::
1. vue.config.js 配置 externals 

<img src="@img/common-share-04.png"/>   

2. 项目中使用

<img src="@img/common-share-05.png"/>   



