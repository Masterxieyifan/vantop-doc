<!--
 * @Author: hongdong.liao
 * @Date: 2022-05-24 17:40:09
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2022-05-24 18:08:30
 * @FilePath: /vantop-docs/src/views/micro-web/vuex.md
-->
## 微前端项目里面 `Vuex` 使用指南


#### 场景：`main` 应用使用 `vuex`
基础的 `vuex` 使用方式足以


#### 场景：各子应用使用 `vuex`
基础的 `vuex` 使用方式足以


#### <font style="color: red;">场景：子应用修改/使用 `main` 应用的 `state`</font>
`this.$parentStore` 是所有子应用都有的这个变量、是 `main` 应用的 `Vuex` 实例引用传递到所有子应用当中。
当然也有局限性，子应用取 `main` 应用的值的时候无法在 `computed` 中直接使用
```javascript
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    ...mapGetters([
      'xxx',
      // ...
    ])
  }
}
```
而是需要使用
```javascript
import { mapParentGetters } from '@master_vantop/nextop-core';
export default {
  // ...
  computed: {
    ...mapParentGetters([
      'xxx',
      // ...
    ])
  }
}
```
那么子应用修改 `main` 应用的值可以使用例如：
```javascript
this.$parentStore.dispatch('tags/deleteTag',this.$parentStore?.state?.tags?.tag);
```
或者
```javascript
this.$parentStore.commit('xxx', xxx);
```
我们无法在项目里面使用 `mapActions` 但是可以使用 `dispatch` 去进行修改




#### 场景: `main` 应用修改/使用子应用的 `state`
因项目没有适用场景暂不实现此种功能


#### 场景: 子应用修改/使用其他子应用 `state`
因项目没有适用场景暂不实现此种功能
