<template>
    <div id="app" class="is-component">
        <Header />
        <div class="nextop-docs--wrapper">
            <md-scrollbar class="page-component__scroll" @scroll="handleScroll">
                <div class="page-container page-component">
                    <Sidebar
                        v-if="navData.length > 0"
                        class="page-component__nav"
                        :menuList="navData"
                        :defaultOpends="defaultOpends"
                    />
                    <div
                        class="page-component__content"
                        :style="{
                            'padding-left': navData.length > 0 ? '310px' : null
                        }"
                    >
                        <router-view
                            :style="{
                                'width': catalogList.length > 0 ? 'calc(100% - 250px)': '',
                                'display': catalogList.length > 0 ? 'inline-block' : ''
                            }"
                            />
                        <Catalog
                            ref="catalog"
                            v-if="catalogList.length > 0"
                            style="margin-left: 30px"
                            :list="catalogList"/>
                    </div>
                </div>
            </md-scrollbar>
        </div>
        <el-backtop
            target=".nextop-docs--wrapper > .page-component__scroll > .md-scrollbar__wrap"
            :right="100"
            :bottom="150"
            :visibility-height="50"
        />
    </div>
</template>
<script>
import Sidebar from '@/components/sidebar.vue';
import Catalog from '@/components/catalog.vue';
import { sideBarConfig, } from '@/router';
import Header from '@/components/header.vue';
import { isEmpty, } from '@master_vantop/vantop-util';
export default {
    name: 'APP',
    components: {
        Header,
        Sidebar,
        Catalog,
    },
    data() {
        return {
            defaultOpends: [],
            navData: [],
            catalogList: [],
        };
    },
    watch: {
        '$route.meta.sideBar': {
            immediate: true,
            handler: function(val) {
                if (!isEmpty(val)) {
                    this.navData = sideBarConfig[val].children.filter((item) => item.title);
                    this.defaultOpends = [];
                    this.navData.forEach(item => {
                        if (item.collapse) this.defaultOpends.push(item.title);
                    });
                } else {
                    this.defaultOpends = [];
                    this.navData =[];
                }
            },
        },
        '$route.path': {
            immediate: true,
            handler: function(val) {
                if (val.includes('changelog/')) {
                    this.catalogList = [];
                    return;
                }
                this.initCatalog();
            },
        },
    },
    methods: {
        initCatalog() {
            this.$nextTick(()=>{
                let anchors = document.body.querySelectorAll('.nextop-docs--anchor');
                anchors = Array.from(anchors);
                this.catalogList = anchors.map( el => {
                    const parentElement = el.parentElement;
                    return {
                        level: parentElement.nodeName.slice(1),
                        target: el.attributes.href.value,
                        name: parentElement.textContent.slice(2),
                    };
                });
            });
        },
        handleScroll({ scrollTop, }) {
            if (this.catalogList.length <= 0 || this.isScrolling) return;
            let anchors = document.body.querySelectorAll('.nextop-docs--anchor');
            anchors = Array.from(anchors);
            for (let i = 0; i < anchors.length; i++) {
                const anchor = anchors[i];
                const nextAnchor = anchors[i + 1];
                let isActive, hash;
                if (i === 0 && scrollTop === 0) {
                    isActive = true;
                    hash = null;
                } else if (scrollTop < this.getAnchorTop(anchor)) {
                    isActive = false;
                    hash = null;
                } else if (!nextAnchor || scrollTop < this.getAnchorTop(nextAnchor)) {
                    isActive = true;
                    hash = decodeURIComponent(anchor.hash);
                }
                if (isActive) {
                    this.isScrolling = true;
                    this.$refs.catalog.setActive(hash);
                    this.isScrolling = false;
                    return;
                }
            }
        },
        getAnchorTop(anchor) {
            const pageOffset = document.querySelector('.nextop-docs--header').offsetHeight;
            try {
                return anchor.parentElement.offsetTop - pageOffset;
            } catch (e) {
                return 0;
            }
        },
    },
};
</script>

<style lang="scss">
.is-component {
    overflow-y: hidden;
    height: 100%;
}
.nextop-docs--wrapper {
    padding: 0;
    margin-top: 0;
    height: calc(100% - 60px);
    min-height: auto;
}
.page-container {
    .nextop-docs--anchor {
        color: #409EFF;
        text-decoration: none;
        &:hover {
            color: #3573FE;
        }
    }
    >, .page-component__content .element-doc > {
        h2 {
            font-size: 28px;
            color: #1f2d3d;
            margin: 0;
        }
        h3 {
            font-size: 22px;
        }
        h4 {
            font-size: 19px;
        }
        h5 {
            font-size: 15px;
        }
        h2,
        h3,
        h4,
        h5 {
            font-weight: normal;
            color: #1f2f3d;
        }

        p {
            font-size: 14px;
            color: #5e6d82;
            line-height: 1.5em;
        }

    }

    .tip {
        padding: 8px 16px;
        background-color: #ecf8ff;
        border-radius: 4px;
        border-left: #50bfff 5px solid;
        margin: 20px 0;

        code {
            background-color: rgba(255, 255, 255, 0.7);
            color: #445368;
        }
    }

    .warning {
        padding: 8px 16px;
        background-color: #fff6f7;
        border-radius: 4px;
        border-left: #fe6c6f 5px solid;
        margin: 20px 0;

        code {
            background-color: rgba(255, 255, 255, 0.7);
            color: #445368;
        }
    }
}
.page-component__scroll {
    height: 100%;
}
.page-component {
    box-sizing: border-box;

    &.page-container {
        padding: 0 40px;
    }

    .page-component__nav {
        width: 280px;
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 80px;
        border-right: 1px solid #E5E7EB;
        transition: padding-top 0.3s;

        > .el-scrollbar__wrap {
            height: 100%;
            overflow-x: auto;
        }

        &.is-extended {
            padding-top: 0;
        }
    }

    .side-nav {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 0;

        & > ul {
            padding-bottom: 50px;
        }
    }

    .page-component__content {
        padding-bottom: 100px;
        box-sizing: border-box;
    }

    .content {
        padding-top: 10px;
        padding-bottom: 50px;
        display: inline-block;
        > {
            h3 {
                margin: 55px 0 20px;
            }

            table {
                border-collapse: collapse;
                width: 100%;
                background-color: #fff;
                font-size: 14px;
                margin-bottom: 45px;
                line-height: 1.5em;

                strong {
                    font-weight: normal;
                }

                td,
                th {
                    border-bottom: 1px solid #dcdfe6;
                    padding: 15px;
                    max-width: 250px;
                }

                th {
                    text-align: left;
                    white-space: nowrap;
                    color: #909399;
                    font-weight: normal;
                }

                td {
                    color: #606266;
                }

                th:first-child,
                td:first-child {
                    padding-left: 10px;
                }
            }

            ul:not(.timeline) {
                margin: 10px 0;
                padding: 0 0 0 20px;
                font-size: 14px;
                color: #5e6d82;
                line-height: 2em;
            }
        }
    }
}

@media (max-width: 1000px) {
    .page-component {
        .element-doc {
            width: 100% !important;
        }
        .nextop-docs--catalog {
            display: none;
        }
        .page-component__nav {
            width: 100%;
            position: static;
            margin-top: 0;
        }
        .side-nav {
            padding-top: 0;
            padding-left: 50px;
        }
        .page-component__content {
            padding: 10px 40px !important;
        }
        .content {
            padding-top: 0;
        }
        .content > table {
            overflow: auto;
            display: block;
        }
    }
}
</style>
