<script>
  import bus from './bus';
  const varMap = {
    '$--box-shadow-lighter': 'boxShadowLighter',
    '$--box-shadow-base': 'boxShadowBase',
    '$--box-shadow-medium': 'boxShadowMedium',
    '$--box-shadow-large': 'boxShadowLarge',
    '$--box-shadow-dark': 'boxShadowDark',
    '$--box-shadow-light': 'boxShadowLight',
    '$--border-radius-base': 'borderRadiusBase',
    '$--border-radius-small': 'borderRadiusSmall'
  };
  const original = {
    boxShadowLighter: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    boxShadowBase: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    boxShadowMedium: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
    boxShadowLarge: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
    boxShadowDark: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
    boxShadowLight: '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
    borderRadiusBase: '4px',
    borderRadiusSmall: '2px'
  }
  export default {
    created() {
      bus.$on('ELEMENT_THEME_USER_CONFIG_UPDATE', this.setGlobal);
    },
    mounted() {
      this.setGlobal();
    },
    methods: {
      setGlobal() {
        if (window.userThemeConfig) {
          this.global = window.userThemeConfig.global;
        }
      }
    },
    data() {
      return {
        global: {},
        boxShadowLight: '',
        boxShadowBase: '',
        borderRadiusBase: '',
        borderRadiusSmall: ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          Object.keys(varMap).forEach((c) => {
            if (value[c]) {
              this[varMap[c]] = value[c]
            } else {
              this[varMap[c]] = original[varMap[c]]
            }
          });
        }
      }
    }
  }
</script>

## Border 边框

我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。

### 边框

我们提供了以下几种边框样式，以供选择。

<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">名称</td>
      <td class="text">粗细</td>
      <td class="line">举例</td>
    </tr>
    <tr>
      <td class="text">实线</td>
      <td class="text">1px</td>
      <td class="line">
        <div></div>
      </td>
    </tr>
    <tr>
      <td class="text">虚线</td>
      <td class="text">2px</td>
      <td class="line">
        <div class="dashed"></div>
      </td>
    </tr>
  </tbody>
</table>

### 圆角

我们提供了以下几种圆角样式，以供选择。

<el-row :gutter="12" class="demo-radius">
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">无圆角</div>
    <div class="value">border-radius: 0px</div>
    <div class="radius"></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">小圆角</div>
    <div class="value">border-radius: {{borderRadiusSmall}}</div>
    <div 
      class="radius" 
      :style="{ borderRadius: borderRadiusSmall }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">大圆角</div>
    <div class="value">border-radius: {{borderRadiusBase}}</div>
    <div 
      class="radius"
      :style="{ borderRadius: borderRadiusBase }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">圆形圆角</div>
    <div class="value">border-radius: 30px</div>
    <div class="radius radius-30"></div>
  </el-col>
</el-row>

### 投影

我们提供了以下几种投影样式，以供选择。
<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowLighter }"
></div>
<span class="demo-shadow-text">lighter(sm) box-shadow: {{boxShadowLighter}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowBase }"
></div>
<span class="demo-shadow-text">base(默认) box-shadow: {{boxShadowBase}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowMedium }"
></div>
<span class="demo-shadow-text">medium(md) box-shadow: {{boxShadowMedium}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowLarge }"
></div>
<span class="demo-shadow-text">large(lg) box-shadow: {{boxShadowLarge}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowDark }"
></div>
<span class="demo-shadow-text">dark(xl) box-shadow: {{boxShadowDark}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowLight }"
></div>
<span class="demo-shadow-text">light(2xl) box-shadow: {{boxShadowLight}}</span>
