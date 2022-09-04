<!--
 * @Author: your name
 * @Date: 2021-02-02 11:39:27
 * @LastEditTime: 2021-07-13 18:49:41
 * @LastEditors: 蔡远程
 * @Description: In User Settings Edit
 * @FilePath: /vantop/docs/vantop-util/helper/throttle.md
-->
## throttle 方法
### throttle参数列表

| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| func         | 防抖的函数     | function       | -      |
| wait    | 防抖时间 | number | 0 |

#### 例子

```js
import { throttle, } from '@master_vantop/vantop-util'

export default {
    mounted() {
        window.addEventListener('scroll', throttle(this.scroll, 300));
    },
    methods: {
        scroll(){
            console.log(11)
        }
    }
}
```