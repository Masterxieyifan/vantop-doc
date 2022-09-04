<!--
 * @Author: 陈建中
 * @Date: 2021-08-17 11:50:31
 * @LastEditTime: 2022-04-07 18:11:46
 * @LastEditors: lingyong.zeng
 * @FilePath: /vantop-docs/src/views/sass-dev-guide/vuedraggable-page.md
-->
## 拖拽组件配置
为了确保拖拽交互效果一致性，在开发业务组件例如 ( `vantop-table` , `advanced-search` ) 使用到第三方拖拽库 `vuedraggable` 需要增加的默认配置

### 1.引入 `mixin`
引入默认拖拽混入 `draggableOptions`
```html
<script>
  // 使用了 draggable
  import draggable from 'vuedraggable';
  // 需要引入 draggableOptions mixin 
  import { draggableOptions, } from '@nextop/nextop-mixins';
  export default {
    mixins: [ draggableOptions ],
  };
</script>
```
### 2.设置属性
增加如下 `animation` 和 `ghost-class` 属性值即可
```html
<draggable
    :animation="animation"
    :ghost-class="ghostClass">
</draggable>
```

> 注意避免命名冲突