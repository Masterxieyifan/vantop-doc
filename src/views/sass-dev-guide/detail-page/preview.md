### 介绍
- 为方便开发详情页弹窗时，避免重复写详情页面，组件库提供全局 `$DetailPreview(views, options)` 方法，只需将详情页面组件作为第一个参数传入，即可直接以弹窗方式打开详情页面。
- 同时为了配合 UI 设计的新版本详情页，在原来 `DetailFrame` 组件的基础上开发出新的 `DetailFrameV2` 组件，拓展了 `pageConfig` 配置参数，和布局的变更。

### 预览弹窗使用

```js
<template>
    <div>
        <el-button @click="preview">preview</el-button>
    </div>
</template>

<script>
import operate from './operate.vue'
export default {
    methods: {
        open() {
            // 全局方法，可以在任意组件中调用
            this.$DetailPreview(operate, {
                initParams: 'id', // 初始化参数，若 operate 文件中有 _initPreview 方法，则会传入此参数
                pageConfig: {
                    type: 'view'
                },
                dialogProps: {
                    //...预览弹窗穿透属性
                },
                close: () => {
                    // 关闭弹窗回调
                }
            });
        },
        close() {
            this.$DetailPreview.close();
            // 关闭弹窗方法，会触发 close 回调
        },
    }
}
</script>
```


### 新版 operate.vue 页面
新版详情页请使用 `md-detail-frame-v2` 组件
```js
<template>
    <md-detail-frame-v2 :pageConfig="pageConfig">
        <view-page></view-page>
    </md-detail-frame-v2>
</template>

<script>
import { DetailPageParent } from '@nextop/nextop-mixins';
import ViewPage from './page/ViewPage';

export default {
    mixins: [DetailPageParent],
    components: {
        ViewPage
    },
    methods: {
        _initPreview(initParams) {
            // 初始化方法，当打开预览弹窗的时候会调用此方法
            console.log(initParams);
        }
    }
}
</script>
```


### 新版 view-page.vue 页面
用法同旧版本差别不大，只新增了一些 pageConifg 配置属性、侧边栏插槽和底部插槽。
```js
<template>
    <div class="bom-manage-view">
        <!-- 模块盒子组件使用 -->
        <md-module-card title="主件信息">
            <!-- 描述组件使用 -->
            <el-descriptions :column="2" border :labelStyle="{ width: '200px' }">
                <el-descriptions-item label="物料SKU">
                    -
                </el-descriptions-item>
                <el-descriptions-item label="物料名称">
                    -
                </el-descriptions-item>
                <el-descriptions-item label="物料规格">
                    -
                </el-descriptions-item>
                <el-descriptions-item label="型号">
                    -
                </el-descriptions-item>
                <el-descriptions-item label="研发物料">
                    -
                </el-descriptions-item>
                <el-descriptions-item label="物料单位">
                    -
                </el-descriptions-item>
            </el-descriptions>
        </md-module-card>
        <md-module-card title="子件信息">
            <!-- 模块内容 -->
        </md-module-card>

        <md-portal to="detail-frame-aside">
            <!-- pageConfig.hasAside 必须为 true -->
            <!-- 侧边栏模块内容 -->
        </md-portal>

        <md-portal to="detail-frame-footer">
            <!-- pageConfig.hasFooter 必须为 true -->
            <!-- 底部模块内容 -->
        </md-portal>
    </div>
</template>

<script>
import { DetailPageChild } from '@nextop/nextop-mixins';

export default {
    mixins: [DetailPageChild],
    data() {
        return {
            pageConfig: {           // 页面配置数据对象
                loading: true,      // loading 标识
                hasFooter: true,    // 是否启用底部插槽
                hasAside: true,     // 是否启用侧边栏插槽
                href: 'www.baidu.com', // 跳转详情页链接，可以是一个函数
                head: () => {},     // 头部自定义渲染
                subHead: () => {},  // 头部小标题自定义渲染
                subExtension: () => {}, // 头部小标题自定义渲染
                operations: [],     // 按钮配置，配置同旧版本配置使用方式一致
            }
        };
    },
}
</script>
```