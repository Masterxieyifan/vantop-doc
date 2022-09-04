## Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法
简单的步骤条，文本默认居中显示。系统主色表示为当前状态；灰色表示为默认状态；绿色表示为成功状态；红色表示为错误状态；橙色表示为警示状态。

:::demo
```html
<div :style="{height:direction === 'vertical' ? '300px' : null}">
  <el-steps :active="active" finish-status="success" :align-center="align" :direction="direction">
    <el-step title="步骤1" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤2" description="步骤2描述信息"></el-step>
    <el-step title="步骤3" description="步骤3描述信息"></el-step>
  </el-steps>
</div>

<div style="margin-top: 12px;">
  <el-button @click="next">点击下一步体验 steps 的变化</el-button>
  <el-button @click="align = !align">点击居中显示</el-button>
  <el-select v-model="direction">
    <el-option label="水平方向" value="horizontal"/>
    <el-option label="垂直方向" value="vertical"/>
  </el-select>
</div>

<script>
  export default {
    data() {
      return {
        active: 0,
        align: false,
        direction: 'horizontal'
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::


### 自动计算激活步骤
若 `active` 值为空时，会根据当前所有 step 组件的 `status` 值自动计算当前激活步骤

:::demo
```html
<el-steps finish-status="success">
    <el-step title="步骤1" status="success"></el-step>
    <el-step title="步骤2" status="success"></el-step>
    <el-step title="步骤3" status="process"></el-step>
    <el-step title="步骤4" status="wait"></el-step>
</el-steps>

<script>
  export default {
    data() {
      return {
        active: 0,
        align: false,
        direction: 'horizontal'
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::



### 带图标的步骤条
步骤条内可以启用各种自定义的图标。

:::demo 通过`icon`属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名`slot`来使用自定义的图标。
```html
<div :style="{height:direction === 'vertical' ? '300px' : null}">
  <el-steps :active="active" :align-center="align" :direction="direction">
    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
    <el-step title="步骤 2步骤 2" icon="el-icon-upload"></el-step>
    <el-step title="步骤 3" icon="el-icon-picture"></el-step>
  </el-steps>
</div>

<div style="margin-top: 12px;">
  <el-button @click="next">点击下一步体验 steps 的变化</el-button>
  <el-button @click="align = !align">点击居中显示</el-button>
  <el-select v-model="direction">
    <el-option label="水平方向" value="horizontal"/>
    <el-option label="垂直方向" value="vertical"/>
  </el-select>
</div>
<script>
  export default {
    data() {
      return {
        active: 0,
        align: false,
        direction: 'horizontal'
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::


### 默认图标

:::demo 配置 `useDefaultIcon` 为 `true` ，使用默认的图标
```html
<div :style="{height:direction === 'vertical' ? '300px' : null}">
  <el-steps :active="active" finish-status="success" :align-center="align" :direction="direction">
    <el-step title="步骤 1" useDefaultIcon></el-step>
    <el-step title="步骤 2" useDefaultIcon></el-step>
    <el-step title="步骤 3" useDefaultIcon></el-step>
  </el-steps>
</div>

<div style="margin-top: 12px;">
  <el-button @click="next">点击下一步体验 steps 的变化</el-button>
  <el-button @click="align = !align">点击居中显示</el-button>
  <el-select v-model="direction">
    <el-option label="水平方向" value="horizontal"/>
    <el-option label="垂直方向" value="vertical"/>
  </el-select>
</div>

<script>
  export default {
    data() {
      return {
        active: 0,
        align: false,
        direction: 'horizontal'
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::


### 图标悬浮弹出框
鼠标悬浮在图标上显示弹出框
:::demo 可以使用 `iconPopover` 参数或者插槽的方式来自定义悬浮时的弹出框，`iconPopoverProps` 可以穿透使用 el-popover 组件的 prop 值；
```html
<div :style="{height:direction === 'vertical' ? '300px' : null}">
  <el-steps :active="active" finish-status="success" :align-center="align" :direction="direction">
    <el-step title="步骤 1" iconPopover="hover 可以查看步骤 1 详细信息"/>
    <el-step title="步骤 2">
      <template slot="iconPopover">
        <p style="color: red">插槽的方式可以自定义弹出层信息</p>
      </template>
    </el-step>
    <el-step title="步骤 3" iconPopover="可以使用 el-popover 组件的属性" :iconPopoverProps="{placement: 'bottom'}"/>
  </el-steps>
</div>

<div style="margin-top: 12px;">
  <el-button @click="next">点击下一步体验 steps 的变化</el-button>
  <el-button @click="align = !align">点击居中显示</el-button>
  <el-select v-model="direction">
    <el-option label="水平方向" value="horizontal"/>
    <el-option label="垂直方向" value="vertical"/>
  </el-select>
</div>

<script>
  export default {
    data() {
      return {
        active: 0,
        align: false,
        direction: 'horizontal'
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::


### 描述信息弹出框

:::demo 可以使用 `descPopover` 参数或者插槽的方式来自定义悬浮时的弹出框，`descPopoverProps` 可以穿透使用 el-popover 组件的 prop 值；
```html
<div :style="{height:direction === 'vertical' ? '300px' : null}">
<el-steps :active="active" finish-status="success" :align-center="align" :direction="direction">
  <el-step title="步骤 1" descPopover="点击 可以查看步骤 1 详细信息" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字"/>
  <el-step title="步骤 2" description="步骤 2 详细的描述">
    <template slot="descPopover">
      <p style="color: red">插槽的方式可以自定义弹出层信息</p>
    </template>
  </el-step>
  <el-step title="步骤 3" description="步骤 3 详细的描述" descPopover="可以使用 el-popover 组件的属性" :descPopoverProps="{placement: 'top'}"/>
</el-steps>
</div>

<div style="margin-top: 12px;">
  <el-button @click="next">点击下一步体验 steps 的变化</el-button>
  <el-button @click="align = !align">点击居中显示</el-button>
  <el-select v-model="direction">
    <el-option label="水平方向" value="horizontal"/>
    <el-option label="垂直方向" value="vertical"/>
  </el-select>
</div>

<script>
  export default {
    data() {
      return {
        active: 0,
        align: false,
        direction: 'horizontal'
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::

### 简洁风格的步骤条
设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

:::demo
```html

<el-steps :active="active1" simple>
  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
  <el-step title="步骤 2" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next1">点击下一步体验 steps 的变化</el-button>

<el-steps :active="active2" finish-status="success" simple style="margin-top: 20px">
  <el-step title="步骤 1" ></el-step>
  <el-step title="步骤 2" ></el-step>
  <el-step title="步骤 3" ></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next2">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active1: 1,
        active2: 1,
      };
    },
    methods: {
      next1() {
        if (this.active1++ > 2) this.active1 = 0;
      },
      next2() {
        if (this.active2++ > 2) this.active2 = 0;
      },
    }
  }
</script>
```
:::

### 可选步骤箭头

:::demo 使用 `el-step-arrow` 组件可应用箭头，该条件下 `el-steps` 所有配置都将失效，同时提供 `v-model` 控制箭头的选中状态
```html
<el-steps v-model="active">
    <el-step-arrow :value="0" title="wait" status="wait"/>
    <el-step-arrow :value="1" title="process" status="process"/>
    <el-step-arrow :value="2" title="finish" status="finish"/>
    <el-step-arrow :value="3" title="success" status="success"/>
    <el-step-arrow :value="4" title="error" status="error"/>
    <el-step-arrow :value="5" title="disabled" disabled/>
</el-steps>
<br/>
<el-steps v-model="active2">
    <el-step-arrow :value="0" icon="vl-icon-set-up-16" title="wait" status="wait"/>
    <el-step-arrow :value="1" icon="vl-icon-set-up-16" title="process" status="process"/>
    <el-step-arrow :value="2" icon="vl-icon-set-up-16" title="finish" status="finish"/>
    <el-step-arrow :value="3" icon="vl-icon-set-up-16" title="success" status="success"/>
    <el-step-arrow :value="4" icon="vl-icon-set-up-16" title="error" status="error"/>
    <el-step-arrow :value="5" icon="vl-icon-set-up-16" title="disabled" disabled/>
</el-steps>

<script>
  export default {
    data() {
      return {
        active: 0,
        active2: 0,
      };
    },
  }
</script>
```
:::


### Steps Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model/value | 配合可选箭头使用 | number / string | — | — |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | — | — |
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤  | number | — | 0 |
| process-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process |
| finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish |
| align-center | 进行居中对齐 | boolean | - | false |
| simple | 是否应用简洁风格 | boolean | - | false |
| before-change | 切换步骤箭头之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(value, oldValue) | — | — |

### Steps Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |

### Step Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| icon | 图标 | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | — |
| useDefaultIcon | 使用默认图标模式（不能与icon共存） | boolean | — | false |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | — |
| iconClass | 包裹 icon 的元素类名显式传入 | string | — |
| iconPopover | 图标弹出层内容 | string | — |
| iconPopoverProps | 图标弹出层穿透属性 | Object | {} |
| descPopover | 描述弹出层内容 | string | — |
| descPopoverProps | 描述弹出层穿透属性 | Object | {} |

### Step Slot
| name | 说明  |
|----|----|
| icon | 自定义图标 |
| title | 自定义标题 |
| description | 自定义描述性文字 |
| iconPopover | 自定义图标悬浮弹出层内容 |
| descPopover | 自定义描述弹出层内容 |

### Step Arrow Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 当前步骤的值 | number | — | — |
| disabled | 是否禁用 | Boolean | — | — |
| title | 标题 | string | — | — |
| status | 设置当前步骤的状态 | wait / process / finish / error / success | — |
| icon | 图标 | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | — |

