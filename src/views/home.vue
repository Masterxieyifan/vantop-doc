<!--
 * @Descripttion: 首页
 * @Author: 蔡远程
 * @Date: 2021-07-12 14:49:33
 * @LastEditTime: 2022-04-26 10:42:41
 * @LastEditors: 蔡远程
-->
<template>
    <div class="nextop-docs--home">
        <h1>Nextop FE Documentations</h1>
        <el-card
            v-loading="loading"
            class="box-card">
            <div slot="header" class="clearfix">
                <span>版本管理（实时更新）</span>
            </div>
            <template v-if="isEmpty(version)">
                <md-empty/>
            </template>
            <template v-else>
                <div
                    v-for="item in version"
                    :key="item.name"
                    class="version">
                    <el-link
                        :href="`http://npm.nextop.cc/-/web/detail/${item.name}`"
                        target="_blank"
                        class="package-name"
                        type="primary">
                        {{packages[item.name]}} :
                    </el-link>
                    <div class="version-box">
                        <div class="version-box--item">
                            正式：<version-tag class="version-tag" :text="item.latest || '暂无版本'"/>
                        </div>
                        <div class="version-box--item">
                            hotfix：<version-tag class="version-tag" :text="item.hotfix || '暂无版本'" color="#F97316"/>
                        </div>
                        <div class="version-box--item">
                            测试：<version-tag class="version-tag" :text="item.beta || '暂无版本'" color="#4f46e5"/>
                        </div>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
import VersionTag from '@/components/version-tag.vue';
import { isEmpty, } from '@master_vantop/vantop-util';
export default {
    name: 'Home',
    components: {
        VersionTag,
    },
    data() {
        return {
            loading: false,
            version: [],
            packages: {
                'master-design': 'master-design',
                'element-ui': 'vanlement-ui',
                '@master_vantop/vantop-util': 'vantop-util',
                '@master_vantop/nextop-core': 'nextop-core',
                '@nextop/nextop-mixins':'nextop-mixins',
                '@master_vantop/nextop-http': 'nextop-http',
                'vxe-table': 'van-table',
                'vantop-editor': 'vantop-editor',
            },
        };
    },
    mounted() {
        this.loading = true;
        const packages = Object.keys(this.packages);
        axios.post('/api/version', {
            packages: packages,
        }).then(res => {
            if (res.data.success) {
                this.version = res.data.data;
            } else {
                this.$message.error(res.data.msg);
            }
        }).catch( error => {
            this.$message.error(error);
        }).finally(()=>{
            this.loading=false;
        });
    },
    methods: {
        isEmpty,
    },
};
</script>

<style scoped lang="scss">
.nextop-docs--home {
    margin: 0 auto;
    max-width: 1000px;
    h1 {
        text-align: center;
        margin-top: 100px;
        font-size: 50px;
    }
    .box-card {
        min-height: 300px;
    }
    .version {
        margin-bottom: 20px;
        .package-name {
            margin-bottom: 10px;
            display: block;
            :deep(.el-link--inner) {
                font-size: 25px;
            }
        }
        .version-box {
            display: flex;
            align-items: center;
            font-size: 16px;
            &--item {
                display: flex;
                align-items: center;
                width: 350px;
            }
            .version-tag {
                margin-right: 10px;
            }
        }
    }
}
</style>
