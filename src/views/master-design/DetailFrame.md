## DetailFrame 详情页模版


### 基础用法 - 自定义标题
:::demo

```html
<template>
    <div class="detail-frame-demo">
        <nav class="detail-frame-demo--nav">我是顶部菜单栏</nav>
        <div class="detail-frame-demo--block">
            <md-detail-frame :pageConfig="pageConfig">
                <!-- 模块盒子组件使用 -->
                <md-module-card title="基础信息">
                    <!-- 描述组件使用 -->
                    <el-descriptions :column="2" border>
                        <el-descriptions-item label="分类">分类一</el-descriptions-item>
                        <el-descriptions-item label="中文名称">中文</el-descriptions-item>
                        <el-descriptions-item label="英文名称">英文</el-descriptions-item>
                        <el-descriptions-item label="型号">型号一</el-descriptions-item>
                        <el-descriptions-item label="开发人员">开发A</el-descriptions-item>
                        <el-descriptions-item label="采购员">采购A</el-descriptions-item>
                        <el-descriptions-item label="单位">单位一</el-descriptions-item>
                        <el-descriptions-item label="存货类别">类别一</el-descriptions-item>
                    </el-descriptions>
                </md-module-card>
                <md-module-card title="属性信息">
                    <!-- 描述组件使用 -->
                    <el-descriptions :column="2" border>
                        <el-descriptions-item label="分类">分类一</el-descriptions-item>
                        <el-descriptions-item label="中文名称">中文</el-descriptions-item>
                        <el-descriptions-item label="英文名称">英文</el-descriptions-item>
                        <el-descriptions-item label="型号">型号一</el-descriptions-item>
                        <el-descriptions-item label="开发人员">开发A</el-descriptions-item>
                        <el-descriptions-item label="采购员">采购A</el-descriptions-item>
                        <el-descriptions-item label="单位" :span="2">单位一</el-descriptions-item>
                    </el-descriptions>
                </md-module-card>
                <md-module-card title="属性信息">
                    <!-- 描述组件使用 -->
                    <el-descriptions :column="2" border>
                        <el-descriptions-item label="分类">分类一</el-descriptions-item>
                        <el-descriptions-item label="中文名称">中文</el-descriptions-item>
                        <el-descriptions-item label="英文名称">英文</el-descriptions-item>
                        <el-descriptions-item label="型号">型号一</el-descriptions-item>
                        <el-descriptions-item label="开发人员">开发A</el-descriptions-item>
                        <el-descriptions-item label="采购员">采购A</el-descriptions-item>
                        <el-descriptions-item label="单位" :span="2">单位一</el-descriptions-item>
                    </el-descriptions>
                </md-module-card>
                <md-module-card title="属性信息">
                    <!-- 描述组件使用 -->
                    <el-descriptions :column="2" border>
                        <el-descriptions-item label="分类">分类一</el-descriptions-item>
                        <el-descriptions-item label="中文名称">中文</el-descriptions-item>
                        <el-descriptions-item label="英文名称">英文</el-descriptions-item>
                        <el-descriptions-item label="型号">型号一</el-descriptions-item>
                        <el-descriptions-item label="开发人员">开发A</el-descriptions-item>
                        <el-descriptions-item label="采购员">采购A</el-descriptions-item>
                        <el-descriptions-item label="单位" :span="2">单位一</el-descriptions-item>
                    </el-descriptions>
                </md-module-card>
            </md-detail-frame>
        </div>
    </div>
</template>

<script>
    import {DetailPageParent} from './mixins/detailPage.js';
    export default {
        mixins: [DetailPageParent],
        data() {
            return {
                pageConfig: {       // 页面配置数据对象
                    type: 'view',
                    tag: '',        // 面包屑栏的标题
                    col: 3,         // 页面布局多少列
                    loading: true,  // loading 标识
                    head: () => {   // 头部自定义渲染
                        const createTime = new Date();

                        return (
                            <div>
                                <div class="global-title-inner">
                                    <span>测试标题</span>
                                </div>
                                <div style="margin-top: 8px">
                                    创建人：测试人
                                    <el-divider direction="vertical"/>
                                    创建时间：{ createTime }
                                </div>
                            </div>
                        );
                    },
                    operations: [    // 按钮配置(与列表配置方式一致)
                        {
                            text: '审核不通过',
                            key: 'refuse',
                            icon: 'nt-icon-fail-16',
                            click: Function.prototype,
                        },
                        {
                            text: '审核通过',
                            key: 'pass',
                            icon: 'nt-icon-pass-16',
                            type: 'primary',
                            click: Function.prototype,
                        },
                    ]
                },
            }
        },
        mounted(){
            this.setPageConfig(this.pageConfig);

            setTimeout(() => {
                this.pageConfig.loading = false;
            }, 2000)
        },
    }
</script>
```
:::
