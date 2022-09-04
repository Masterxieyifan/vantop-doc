## Vue 编写、项目文件命名规范
参考[阿里云风格指南](https://developer.aliyun.com/article/645697)

- 组件使用**PascalCase**(大写驼峰)命名法

  - 组件需加上name,且使用**PascalCase**（大驼峰）命名法；

- 页面使用**kebab-case**命名法

  - 页面需加上name,使用**kebab-case**命名法；

- 根目录维护业务逻辑代码

  - components（组件）
  - i18n（多语言）
  - mixin（注入）
  - util （全局工具）
  - const（常用常量）
    - module （业务模块）
      - children module / components / minxs / const / i18
        - index .vue / components / minxs / const / util / detail.vue

- 不维护util在业务模块，除非强耦合业务

- 编写util时考虑通用性，优先抽离到util库或者全局util目录下

- Vue组件props规范

  - **在声明 props 的时候，其命名应该始终使用 camelCase（小驼峰），而在模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中应该始终使用 kebab-case。**

    我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

  - **Prop 定义应该尽量详细**
    
- **在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型**
  
- Vue组件编写顺序规范：

  - **全局感知**
    - `name`
    - **模板依赖**
      - `components`
      - `directives`
      - `filters`
    - **组合**
      - `extends`
      - `mixins`
    - **接口** (组件的接口)
      - `props`
    - **本地状态**
      - `data`
      - `computed`
    - **事件** (通过响应式事件触发的回调)
      - `watch`
      - `生命周期钩子 (按照它们被调用的顺序)`
        - `beforeCreate`
        - `created`
        - `beforeMount`
        - `mounted`
        - `beforeUpdate`
        - `updated`
        - `activated`
        - `deactivated`
        - `beforeDestroy`
        - `destroyed`
    - **非响应式的 property** (不依赖响应系统的实例 property)
      - `methods`


```js
  export default {
    name: 'app',

    // dependencies
    components: {},
    directives: {},
    filters: {},

    // combines
    extends: [],
    mixins: [],

    // interfaces
    props: {},

    // local status
    data() {
        return {};
    },
    computed: {},

    // events
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    beforeUpdated() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {},
    destroyed() {},

    // methods
    methods: {},

  };

```