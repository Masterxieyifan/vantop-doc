<!--
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2022-04-02 11:00:58
 * @LastEditTime: 2022-04-02 18:01:06
 * @LastEditors: 蔡远程
-->
## Fullscreen 组件

- 请保证 `vanlement` 版本 `>=@10.0.11`

### 基础用法
:::demo 通过 `v-model` 来控制全屏展示
```html
<template>
    <md-fullscreen v-model="fullscreen" fullClass="fullscreen-block">
        <md-module-card title="全屏组件">
            <template #operations>
                <el-button @click="fullscreen = !fullscreen">
                    全屏
                </el-button>
            </template>
            <p v-for="o in 10" :key="o">
                {{'列表内容 ' + o }}
            </p>
        </md-module-card>
    </md-fullscreen>
</template>
<script>
export default {
    data() {
        return {
            fullscreen: false,
        }
    },
    methods: {
    }
};
</script>
```
:::


### 插在body元素下面
:::demo `appendToBody` 为 `true` 时，会将元素插在body下面
```html
<template>
    <md-fullscreen v-model="fullscreen" fullClass="fullscreen-block" appendToBody>
        <el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
            <template slot="extra">
                <el-button @click="fullscreen = !fullscreen">
                    全屏
                </el-button>
            </template>
            <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
            <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
            <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </el-descriptions>
    </md-fullscreen>
</template>

<script>
    export default {
        data() {
            return {
                fullscreen: false,
            };
        },
    }
</script>
```
:::

### 全屏/非全屏状态样式
:::demo 通过 `fullClass` 和 `normalClass` ，来控制全屏和非全屏状态下的样式
```html
<template>
    <md-fullscreen v-model="fullscreen" fullClass="fullscreen-full" normalClass="fullscreen-normal" appendToBody>
        <el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
            <template slot="extra">
                <el-button @click="fullscreen = !fullscreen">
                    全屏
                </el-button>
            </template>
            <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
            <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
            <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </el-descriptions>
    </md-fullscreen>
</template>

<script>
    export default {
        data() {
            return {
                fullscreen: false,
            };
        },
    }
</script>
```
:::

### Fullscreen Attributes

| 参数 | 说明 | 类型 | 默认值 |
| -------- | ----------- |------ | ---- |
| v-model | 是否激活全屏 | Boolean | false |
| fullClass | 全屏状态下类名 | String | - |
| normalClass | 非全屏状态下类名 | String | - |
| appendToBody | 是否插入至 body 元素上 | Boolean | false |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog | Boolean | true |

### Fullscreen Slot

| name | 说明 |
| -------- | ----------- |
| - | 默认插槽 |

### Fullscreen Event

| 参数 | 说明 | 回调参数 |
| -------- | ----------- |------ |
| full | 激活全屏回调 | - |
| exit | 退出全屏回调 | - |

