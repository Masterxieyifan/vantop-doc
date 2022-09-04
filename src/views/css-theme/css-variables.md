<script>
import VariableSearch from './components/variable-search.vue';
// const VariableSearch = import('./components/variable-search.vue').default
export default {
    components: {
        VariableSearch
    }
}
</script>

## CSS 主题变量
### 前言

SAAS 主题切换方案目前采用 CSS 变量切换方案，因此与主题相关的颜色值需要变更为 CSS 变量，并且为了变量的使用统一与规范，编写此文档及声明如下变量表。

### 主题变量表

点击表中变量后的复制按钮，即可复制 css 变量值，在项目中快速使用。

<VariableSearch/>

### 注意

- 若找不到对应色值，请联系 @蔡远程 或 @周杰。

- 具体用法及原理，可查看 [CSS 变量教程](https://www.ruanyifeng.com/blog/2017/05/css-variables.html)。


- 应用中，原则上 SCSS 变量和 CSS 变量可共用，但为日后维护统一，主题相关的样式请使用上述 CSS 变量表中变量，各应用可自行管理和声明自己独有的 scss 变量。
