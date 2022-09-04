<template>
    <el-scrollbar>
        <el-menu
            router
            style="margin-right: 10px"
            :default-openeds="defaultOpends"
            :default-active="currentPath">
            <template v-for="{children, path, title} in menuList">
                <template v-if="children && children.length > 0">
                    <el-submenu
                        :key="path"
                        :index="title">
                        <template slot="title">{{title}}</template>
                        <el-menu-item
                            v-for="{title, path} in children"
                            :index="path"
                            :key="path">{{title}}</el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item
                        :key="path"
                        :index="path">{{title}}</el-menu-item>
                </template>
            </template>
        </el-menu>
    </el-scrollbar>
</template>
<script>
export default {
    title: 'NavBar',
    props: {
        menuList: {
            type: Array,
            default: ()=>[],
        },
        defaultOpends: {
            type: Array,
            default: ()=>[],
        },
    },
    computed: {
        currentPath() {
            return this.$route.path;
        },
    },
};
</script>