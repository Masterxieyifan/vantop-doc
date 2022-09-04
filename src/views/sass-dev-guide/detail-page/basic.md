<!--
 * @Author: lingyong.zeng
 * @Date: 2021-11-02 10:59:25
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-05-12 14:34:54
 * @Description: 
 * @FilePath: /vantop-docs/src/views/sass-dev-guide/detail-page.md
-->
### 背景
1. 新版 UI 改版要求 “编辑/查看” 呈现两种不同布局页面，因此在原有基础上，需要增加 “查看” 页面；
2. 部分 “创建/编辑/查看” 弹窗需修改为页面级别打开

### 路由配置

以采购模块 “BOM管理“ 为例：

1. 列表页面入口：`/bom-manage/index`

2. 详情页统一入口配置，在各自业务项目中 `/src/router/index.js` 中配置

```js
{
    path: '/bom-manage/:operateType',   // operateType 约定 view/add/edit/copy...
    name: '操作BOM',
    meta: {},
    component: () => import(/* webpackChunkName: "listingWalmart" */ '@/views/bom-manage/operate.vue'),
}
```

### 页面文件结构
![avatar](/img/detailPage.png)

### operate.vue 文件

1. `ModifyPage` : 创建/修改/复制等需要录入的配置页面；
2. `ViewPage`: 查看(无需录入的页面)；
3. `DetailPageParent` 的 mixins 引入；
4. `isView/isModify` 根据路由参数 `operateType` 判定

```html
<template>
    <!-- 详情页框架组件使用 (这里的 pageConfig 由 ModifyPage/ViewPage 提供)-->
    <md-detail-frame :pageConfig="pageConfig">
        <modify-page v-if="isModify"/>
        <view-page v-if="isView"/>
    </md-detail-frame>
</template>

<script>
import { DetailPageParent } from '@nextop/nextop-mixins';
import ModifyPage from './page/ModifyPage';
import ViewPage from './page/ViewPage';

export default {
    mixins: [ DetailPageParent ],
    components: {
        ModifyPage,
        ViewPage,
    }
};
</script>

<style lang="scss" scoped>
</style>
```

### viewPage.vue 文件

```html
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
    </div>
</template>

<script>
import { DetailPageChild } from '@nextop/nextop-mixins';
import { isArray, isEmpty, formatDate } from '@master_vantop/vantop-util';

export default {
    mixins: [ DetailPageChild ],    // 子级页面 mixin 引入
    data() {
        return {
            pageConfig: {           // 页面配置数据对象
                tag: '',            // 面包屑栏的标题
                col: 2,             // 页面布局多少列
                loading: true,      // loading 标识
                head: () => {       // 头部自定义渲染（仅查看页生效）
                    const { bom, versionNum, createName, createTime } = this.detailData;
                    // __detail-title-inner | __detail-info-inner 可直接使用，已声明
                    return (
                        <div>
                            <div class="__detail-title-inner">
                                <span>{ bom }</span>
                                <el-tag>{ versionNum }</el-tag>
                            </div>
                            <div class="__detail-info-inner">
                                创建人：{ createName }
                                <el-divider direction="vertical"/>
                                创建时间：{ createTime ? formatDate(createTime) : '-' }
                            </div>
                        </div>
                    );
                },
                // 查看页默认按钮布局在右上角
                operations: [    
                    /*
                     * 按钮配置(与列表配置方式一致)
                     * 支持 element 按钮属性：[type, icon, loading, disabled]
                     * 如果需要其它属性，如 plain, round 或其它个性化渲染，请使用 render
                     */
                    {
                        text: '编辑',
                        key: 'edit',
                        icon: 'nt-icon-edit-16',
                        click: () => this.handleEdit()
                    },
                    {
                        text: '复制',
                        key: 'copy',
                        icon: 'nt-icon-copy-16',
                        click: () => this.handleCopy()
                    },
                    {                                       // 自定义按钮渲染
                        type: 'render',
                        text: '自定义',
                        key: 'custom',
                        render: () => {
                            // <el-button type="info" plain on-click={this.handleCopy} ></el-button>
                            <MdUpload
                                v-model={this.fileList}
                                sceneId="IMPORT_EXPORT_ORDER_IMPORT"
                                on-success={this.uploadSuccess}
                                on-error={this.uploadError}
                            >
                                <template slot="import-dialog">
                                    <el-button type="primary" size="small" style="margin-right: 8px;">打开上传弹窗</el-button>
                                </template>
                            </MdUpload>
                        }
                    },
                ]
            }
        };
    },
    created() {
        this.pageConfig.tag = TAG_DESC.get(this.$route.params.operateType);
    },
    mounted() {
        const { id } = this.$route.query;
        this.initData(id);
    },
    methods: {
        // 加载查看数据
        async initData(id) {
            if (!id) {
                window.history.replaceState(null, null, '/404');
                return;
            }

            this.pageConfig.loading = true;

            let data = {};
            try {
                data = await this.$goodsApi.getBomById({ id });
            } catch {
                data = {};
            }

            this.detailData = data;

            this.pageConfig.loading = false;
        },
        // 跳转编辑页面
        handleEdit() {
            this.$router.push({
                path: '/bom-manage/edit',
                query: {
                    id: this.$route.query.id
                }
            });
        },
        // 跳转复制页面
        handleCopy() {
            this.$router.push({
                path: '/bom-manage/copy',
                query: {
                    id: this.$route.query.id
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
```

### modifyPage.vue 文件

```html
<template>
    <div class="modify add-edit">
        <!-- 模块盒子组件使用 -->
        <md-module-card title="主件信息">
            <!-- 表单 -->
            <el-form
                ref="form"
                size="small"
                label-width="100px"
                :model="formData"
                :rules="formRule"
            >
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="物料SKU" prop="a1">
                            <el-input v-model="formData.a1"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="物料名称">
                            <el-input v-model="formData.a2"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="生产类型">
                            <el-input v-model="formData.a3"/>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </md-module-card>
        <md-module-card title="子件信息">
            <!-- 模块内容 -->
        </md-module-card>
    </div>
</template>

<script>
import { DetailPageChild } from '@nextop/nextop-mixins';
import { isArray, isEmpty } from '@master_vantop/vantop-util';
import { TAG_DESC } from '../const';

export default {
    mixins: [ DetailPageChild ],    // 子级页面 mixin 引入
    data() {
        return {
            pageConfig: {           // 页面配置数据对象
                tag: '',            // 面包屑栏的标题
                col: 3,             // 页面布局多少列
                loading: true,      // loading 标识
                // 如果页面类型不属于查看/编辑/复制/新增等类型的详情页，需手动指定operationsLayout按钮位置，支持top|bottom
                // operationsLayout: 'top',    
                // 新增/编辑/复制页默认按钮布局在右上角
                operations: [       // 按钮配置(与列表配置方式一致)
                    {
                        text: '取消',
                        key: 'cancel',
                        type: 'info',
                        click: () => this._goBack(),
                    },
                    {
                        text: '保存',
                        key: 'save',
                        type: 'primary',
                        loading: () => this.loading.save,
                        click: () => this.handleSave()
                    },
                ],
            },
            formData: {
                a1: '',
                a2: '',
                a3: ''
            },
            formRule: {
                a1: {
                    required: true,
                    message: '请选择SKU',
                    trigger: ['blur', 'change'],
                },
            },
            saveLoading: false,
        };
    },
    computed: {
        isAdd({ $route: { params: { operateType } } }) {
            return operateType === 'add';
        },
        isCopy({ $route: { params: { operateType } } }) {
            return operateType === 'copy';
        },
        isEdit({ $route: { params: { operateType } } }) {
            return operateType === 'edit';
        }
    },
    created() {
        // 设置面包屑栏的标题
        this.pageConfig.tag = TAG_DESC.get(this.$route.params.operateType);
    },
    mounted() {
        if (this.pageType === 'edit' || this.pageType === 'copy') {
            // 需要获取初始化数据
            const { id } = this.$route.query;
            this.initData(id);
        } else {
            // 无需获取初始化数据
            this.pageConfig.loading = false;
        }
    },
    methods: {
        // 加载编辑数据
        async initData(id) {
            if (!id) {
                window.history.replaceState(null, null, '/404');
                return;
            }

            this.pageConfig.loading = true;

            let data = {};
            try {
                data = await this.$goodsApi.getBomById({ id });
            } catch {
                data = {};
            }

            this.pageConfig.loading = false;
        },
        // 保存
        async handleSave() {
            this.saveLoading = true;

            await new Promise((resolve) => setTimeout(resolve, 3000);

            this.saveLoading = false;

            this.$message.success('保存流程成功');

            // 调用 goBack 可回退页面
            this._goBack();
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
```
