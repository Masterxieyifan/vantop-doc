## NavMenu 导航菜单

为网站提供导航功能的菜单。目前只适用默认颜色，自定义颜色需要后续去匹配。

### 顶栏

适用广泛的基础用法。

:::demo 导航菜单默认为垂直模式，通过`mode`属性可以使导航菜单变更为水平模式。另外，在菜单中通过`submenu`组件可以生成二级菜单。Menu 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

```html
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a >订单管理</a></el-menu-item>
</el-menu>
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### 侧栏

垂直菜单，可内嵌子菜单。

:::demo 通过`el-menu-item-group`组件可以实现菜单进行分组，分组名可以通过`title`属性直接设定，也可以通过具名 slot 来设定。
```html
<el-row class="tac">
  <el-col :span="12">
    <h5>默认颜色</h5>
    <div class="menu-box">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-box"></i>
        <span slot="title">物料管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-truck"></i>
        <span slot="title">物料审核</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-receiving"></i>
        <span slot="title">SKU认领</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-files"></i>
        <span slot="title">渠道SKU</span>
      </el-menu-item>
      <div class="group-title">
          分组菜单
      </div>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-toilet-paper"></i>
          <span>下拉菜单</span>
        </template>
        <el-menu-item index="5-1">下拉菜单1</el-menu-item>
        <el-menu-item index="5-2">下拉菜单1</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-toilet-paper"></i>
          <span>下拉菜单</span>
        </template>
        <el-menu-item index="6-1">二级菜单</el-menu-item>
        <el-submenu index="6-2">
            <template slot="title">
                <span>二级菜单2</span>
            </template>
            <el-menu-item index="6-2-1">三级菜单1</el-menu-item>
            <el-menu-item index="6-2-2">三级菜单2</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    </div>
  </el-col>
  <el-col :span="12">
    <h5>自定义颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
<style>
  .group-title {
    font-size: 12px;
    color: #6B7280;
    padding: 14px 8px 6px;
  }
  .menu-box {
      display: inline-block;
      padding: 0 6px;
      border-right: 1px solid #e6e6e6;
  }
</style>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### 折叠

:::demo
```html
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<div>
<div class="menu-box">
<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      >
      <el-menu-item index="1">
        <i class="nt-icon-nav-finance"></i>
        <span slot="title">管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="nt-icon-nav-administrator"></i>
        <span slot="title">审核</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="nt-icon-nav-notice"></i>
        <span slot="title">SKU</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="nt-icon-nav-property"></i>
        <span slot="title">渠道</span>
      </el-menu-item>
        <el-divider v-if="isCollapse"  class="group-line"></el-divider>
        <div v-else class="group-title">
            分组菜单
        </div>
      <el-submenu index="5" popTitle="下拉菜单标题">
        <template slot="title">
          <i class="nt-icon-nav-report"></i>
          <span>下拉</span>
        </template>
        <el-menu-item index="5-1">二级菜单1</el-menu-item>
        <el-menu-item index="5-2">二级菜单2</el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="nt-icon-nav-report"></i>
          <span>下拉</span>
        </template>

        <template slot="adaptation">
            <!-- 一个 adaptation-item 相当于 2个 el-menu-item 的高度-->
            <!-- 默认一列 15 个 el-menu-item 的高度 -->
            <div class="adaptation-item">
                <div index="6-1">二级菜单 一</div>
                <el-menu-item index="6-1-1">三级菜单1</el-menu-item>
                <el-menu-item index="6-1-2">三级菜单2</el-menu-item>
                <el-menu-item index="6-1-3">三级菜单3</el-menu-item>
                <el-menu-item index="6-1-4">三级菜单4</el-menu-item>
                <el-menu-item index="6-1-5">三级菜单5</el-menu-item>
                <el-menu-item index="6-1-6">三级菜单6</el-menu-item>
            </div>
        </template>

        <template>
            <el-menu-item index="6-1-1">三级菜单1</el-menu-item>
            <el-menu-item index="6-1-2">三级菜单2</el-menu-item>
            <el-menu-item index="6-1-3">三级菜单3</el-menu-item>
            <el-menu-item index="6-1-4">三级菜单4</el-menu-item>
            <el-menu-item index="6-1-5">三级菜单5</el-menu-item>
            <el-menu-item index="6-1-6">三级菜单6</el-menu-item>
        </template>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="nt-icon-nav-report"></i>
          <span>下拉</span>
        </template>

        <template slot="adaptation">
            <div class="adaptation-item">
                <div index="7-1">二级菜单 一</div>
                <el-menu-item index="7-1-1">三级菜单2</el-menu-item>
                <el-menu-item index="7-1-2">三级菜单2</el-menu-item>
                <el-menu-item index="7-1-3">三级菜单2</el-menu-item>
                <el-menu-item index="7-1-4">三级菜单2</el-menu-item>
                <el-menu-item index="7-1-5">三级菜单2</el-menu-item>
            </div>
            <div class="adaptation-item">
                <div index="7-2">二级菜单 一</div>
                <el-menu-item index="7-2-1">三级菜单2</el-menu-item>
                <el-menu-item index="7-2-2">三级菜单2</el-menu-item>
                <el-menu-item index="7-2-3">三级菜单2</el-menu-item>
                <el-menu-item index="7-2-4">三级菜单2</el-menu-item>
                <el-menu-item index="7-2-5">三级菜单2</el-menu-item>
            </div>

            <div class="adaptation-item">
                <div index="7-3">二级菜单 二</div>
                <el-menu-item index="7-3-1">三级菜单2</el-menu-item>
                <el-menu-item index="7-3-2">三级菜单2</el-menu-item>
                <el-menu-item index="7-3-3">三级菜单2</el-menu-item>
                <el-menu-item index="7-3-4">三级菜单2</el-menu-item>
                <el-menu-item index="7-3-5">三级菜单2</el-menu-item>
                <el-menu-item index="7-3-6">三级菜单2</el-menu-item>
                <el-menu-item index="7-3-7">三级菜单2</el-menu-item>
                <el-menu-item index="7-3-8">三级菜单2</el-menu-item>
            </div>

            <div class="adaptation-item">
                <div index="7-4">二级菜单 三</div>
                <el-menu-item index="7-4-1">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-2">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-3">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-4">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-5">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-6">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-7">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-8">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-9">三级菜单2</el-menu-item>
                <el-menu-item index="7-4-10">三级菜单2</el-menu-item>
            </div>

        </template>

        <template>
            <el-menu-item index="7-1-1">三级菜单1</el-menu-item>
            <el-menu-item index="7-1-2">三级菜单2</el-menu-item>
            <el-menu-item index="7-1-3">三级菜单3</el-menu-item>
            <el-menu-item index="7-1-4">三级菜单4</el-menu-item>
        </template>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="nt-icon-nav-report"></i>
          <span>下拉</span>
        </template>

        <template slot="adaptation">
            <div class="adaptation-item">
                <div index="8-1">二级菜单 一</div>
                <el-menu-item index="8-1-1">三级菜单1</el-menu-item>
                <el-menu-item index="8-1-2">三级菜单2</el-menu-item>
                <el-menu-item index="8-1-3">三级菜单3</el-menu-item>
                <el-menu-item index="8-1-4">三级菜单4</el-menu-item>
                <el-menu-item index="8-1-5">三级菜单4</el-menu-item>
            </div>

            <div class="adaptation-item">
                <div index="8-2">二级菜单 二</div>
                <el-menu-item index="8-2-1">三级菜单2</el-menu-item>
                <el-menu-item index="8-2-2">三级菜单2</el-menu-item>
                <el-menu-item index="8-2-3">三级菜单2</el-menu-item>
                <el-menu-item index="8-2-4">三级菜单2</el-menu-item>
                <el-menu-item index="8-2-5">三级菜单2</el-menu-item>
            </div>

            <div class="adaptation-item">
                <div index="8-3">二级菜单 二</div>
                <el-menu-item index="8-3-1">三级菜单2</el-menu-item>
                <el-menu-item index="8-3-3">三级菜单3</el-menu-item>
                <el-menu-item index="8-3-3">三级菜单3</el-menu-item>
                <el-menu-item index="8-3-4">三级菜单3</el-menu-item>
                <el-menu-item index="8-3-5">三级菜单3</el-menu-item>
            </div>
        </template>

        <template>
            <el-menu-item index="8-1-1">三级菜单1</el-menu-item>
            <el-menu-item index="8-1-2">三级菜单2</el-menu-item>
            <el-menu-item index="8-1-3">三级菜单3</el-menu-item>
            <el-menu-item index="8-1-4">三级菜单4</el-menu-item>
        </template>
      </el-submenu>

    </el-menu>
</div>
</div>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.menu-box {
    display: inline-block;
    padding: 0 6px;
    border-right: 1px solid #e6e6e6;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>
```
:::

### Menu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 模式   | string  |   horizontal / vertical   | vertical |
| collapse  | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）| boolean  |   —   | false |
| background-color  | 菜单的背景色（仅支持 hex 格式） | string |   —   | #ffffff |
| text-color  | 菜单的文字颜色（仅支持 hex 格式） | string |   —   | #303133 |
| active-text-color  | 当前激活菜单的文字颜色（仅支持 hex 格式） | string |   —   | #409EFF |
| default-active | 当前激活菜单的 index | string    | — | — |
| default-openeds | 当前打开的 sub-menu 的 index 的数组 | Array    | — | — |
| unique-opened  | 是否只保持一个子菜单的展开 | boolean   | — | false   |
| menu-trigger  | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string   | hover / click | hover |
| router  | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean   | — | false   |
| collapse-transition  | 是否开启折叠动画 | boolean   | — | true   |
| show-horizontal-bottom-line | 是否显示 bottom 的线条 | boolean | — | true |

### Menu Methods
| 方法名称      | 说明    | 参数      |
|---------- |-------- |---------- |
| open  | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close  | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

### Menu Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| select  | 菜单激活回调 | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path  |
| open  | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path  |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path  |

### SubMenu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string/null  | — | null |
| popper-class | 弹出菜单的自定义类名 | string | — | — |
| show-timeout | 展开 sub-menu 的延时 | number | — | 300 |
| hide-timeout | 收起 sub-menu 的延时 | number | — | 300 |
| disabled  | 是否禁用 | boolean | — | false |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean | — | 一级子菜单：true / 非一级子菜单：false |
| pop-title | 弹出菜单的标题 | string | — | — |

### Menu-Item Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |
| route     | Vue Router 路径对象 | Object | — | — |
| disabled  | 是否禁用 | boolean | — | false |

### Menu-Group Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题   | string  | — | — |
