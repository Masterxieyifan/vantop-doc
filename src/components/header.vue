<template>
    <div class="nextop-docs--header">
        <div class="nextop-docs--header__wrap">
            <div class="nextop-docs--header__left">
                <router-link class="nextop-docs--header__logo" to="/">NEXTOP FE DOCS</router-link>
                <i class="nextop-docs--header__line"/>
                <el-autocomplete
                    placeholder="command + K"
                    v-model="search"
                    popper-class="nextop-docs--search__popper"
                    size="mini"
                    highlight-first-item
                    :fetch-suggestions="querySearch"
                    :trigger-on-focus="false"
                    @select="handleSelect"
                    ref="search"
                    class="nextop-docs--search__input"
                >
                    <i slot="prefix" class="el-input__icon vl-icon-search-16"/>
                    <template slot-scope="{ item }">
                        <div class="title">{{ item.title }}</div>
                        <span class="path">{{ item.path.slice(1) }}</span>
                    </template>
                </el-autocomplete>
            </div>
                <el-menu
                    router
                    :default-active="activeIndex"
                    class="nextop-docs--header__menu"
                    mode="horizontal">
                    <template v-for="({title, children, path}, index) in HEADER_CONFIG">
                        <template v-if="children && children.length > 0">
                            <el-submenu
                                :key="title"
                                class="nextop-docs-header__submenu"
                                :index="title+index">
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
        </div>
    </div>
</template>

<script>
import HEADER_CONFIG from '@/config/header.js';
import { routes, } from '@/router';

function formatQuery(val, prefix) {
    if (!val) return '';

    const startIndex = prefix ? 2 : 0;

    return val.split(' ').join('').split('-').join('').slice(startIndex);
}

export default {
    name: 'Header',
    data() {
        return {
            HEADER_CONFIG,
            search: '',
        };
    },
    computed: {
        activeIndex() {
            return this.$route.path.split('/').slice(0, 2).join('/') || '';
        },
    },
    methods: {
        querySearch(queryString, cb) {
            let prefix;
            if (queryString.startsWith('el-')) prefix = '/vanlement-ui';
            if (queryString.startsWith('md-')) prefix = '/master-design';
            queryString = formatQuery(queryString, prefix);
            let results = queryString || prefix ? routes.filter((route) => {
                if (!route.title) return null;
                let title = formatQuery(route.title);
                if (prefix) {
                    return route.path.startsWith(prefix) && title.toLowerCase().indexOf(queryString.toLowerCase()) >= 0;
                }
                return title.toLowerCase().indexOf(queryString.toLowerCase()) >= 0;
            }) : [];
            cb(results);
        },
        handleSelect({ path = null, }) {
            path && this.$router.push(path);
        },
    },
    mounted() {
        // 监听 command + K 快捷键
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 75 && e.metaKey) {
                this.$refs.search.focus();
            }
        });
    },
};
</script>

<style scoped lang="scss">
.nextop-docs--header {
    position: relative;
    z-index: 500;
    width: 100%;
    .nextop-docs--header__wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #e6e6e6;
        box-shadow: 0 2px 8px #f0f1f2;
        padding-left: 60px;
    }
    .nextop-docs--header__left {
        display: flex;
        align-items: center
    }
    .nextop-docs--header__menu {
        margin-left: 20px;
        padding-right: 40px;
        border: none;
    }
    .nextop-docs--search__input {
        width: 125px;
    }
    .nextop-docs--header__line {
        margin: 0 25px 0 45px;
        height: 30px;
        width: 1px;
        background-color: #e6e6e6;
        display: inline-block;
    }
    .nextop-docs--header__logo {
        user-select: none;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        z-index: 2;
        border: 0;
        background: none;
        text-transform: uppercase;
        color: #2c3e50;
        font-weight: bold;
        outline: none;
        padding: 10px 20px;
        box-sizing: border-box;
        transition: color .5s ease-out;
        &:hover{
            color: #4361ee;;
        }
    }

    .nextop-docs--header__logo::before, .nextop-docs--header__logo::after {
        box-sizing: inherit;
        position: absolute;
        content: '';
        border: 2px solid transparent;
        width: 0;
        height: 0;
    }

    .nextop-docs--header__logo::after {
        bottom: 0;
        right: 0;
    }

    .nextop-docs--header__logo::before {
        top: 0;
        left: 0;
    }

    .nextop-docs--header__logo:hover::before, a:hover::after {
        width: 100%;
        height: 100%;
    }
    .nextop-docs--header__logo:hover::before {
        border-top-color: #4361ee;
        border-right-color: #4361ee;
        transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
    }

    .nextop-docs--header__logo:hover::after {
        border-bottom-color: #4361ee;
        border-left-color: #4361ee;
        transition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s, height 0.15s ease-out 0.5s;
    }

}
</style>
<style lang="scss">
.el-menu--horizontal .el-menu.el-menu--popup {
    min-width: 150px;
}
.nextop-docs--search__popper {
    width: 250px !important;
    li {
        padding-top: 7px;
        padding-bottom: 7px;
        line-height: normal;
    }
    .title {
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .path {
        font-size: 12px;
        color: #b4b4b4;
    }
}
</style>