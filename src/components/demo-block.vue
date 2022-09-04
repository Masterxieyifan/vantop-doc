<template>
    <div
        class="demo-block"
        :class="[blockClass, { hover: hovering }]"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <div class="source">
            <slot name="source"></slot>
        </div>
        <template v-if="$slots.default">
            <el-divider content-position="left">Tips <i class="nd-icon-tips"/></el-divider>
            <div class="description">
                <slot></slot>
            </div>
        </template>
        <div
            class="demo-block-bar"
            :style="isExpanded ? 'border-bottom: 1px dashed #eaeefb;' : ''"
        >
            <el-button
                iconed
                type="info"
                icon="nd-icon-display-code"
                hint="显示代码"
                @click="isExpanded = !isExpanded"
            />
            <el-button
                iconed
                type="info"
                icon="nd-icon-copy"
                hint="复制代码"
                @click="copyCode"
            />
            <el-button
                iconed
                type="info"
                icon="nd-icon-codepen"
                hint="在线编程"
                @click.native="handleCode"
            />
            <el-button
                iconed
                type="info"
                icon="nd-icon-gitlab"
                hint="查看源码"
                @click.native="openCode"
            />
        </div>
        <div class="meta" ref="meta">
            <div class="highlight">
                <slot name="highlight"></slot>
            </div>
        </div>
        <div
            class="demo-block-control"
            ref="control"
            v-show="isExpanded"
            :class="{ 'is-fixed': isExpanded }"
            @click="isExpanded = !isExpanded"
        >
            <transition name="arrow-slide">
                <i :class="[iconClass, { hovering: hovering }]"></i>
            </transition>
            <transition name="text-slide">
                <span v-show="hovering">{{ controlText }}</span>
            </transition>
        </div>
    </div>
</template>
<script type="text/babel">
export default {
    data() {
        return {
            codepen: {
                script: '',
                html: '',
                style: '',
            },
            hovering: false,
            isExpanded: false,
        };
    },

    computed: {
        blockClass() {
            return `demo-${this.$router.currentRoute.path.split('/').pop()}`;
        },
        iconClass() {
            return this.isExpanded
                ? 'el-icon-caret-top'
                : 'el-icon-caret-bottom';
        },

        controlText() {
            return this.isExpanded ? '隐藏代码' : '显示代码';
        },

        codeArea() {
            return this.$el.getElementsByClassName('meta')[0];
        },

        codeAreaHeight() {
            if (this.$el.getElementsByClassName('description').length > 0) {
                return (
                    this.$el.getElementsByClassName('description')[0]
                        .clientHeight +
                    this.$el.getElementsByClassName('highlight')[0]
                        .clientHeight +
                    20
                );
            }
            return this.$el.getElementsByClassName('highlight')[0].clientHeight;
        },
    },

    watch: {
        isExpanded(val) {
            this.codeArea.style.height = val
                ? `${this.codeAreaHeight + 1}px`
                : '0';
        },
    },

    created() {
        const highlight = this.$slots.highlight;
        if (highlight && highlight[0]) {
            let cur = highlight[0];
            if (cur.tag === 'pre' && cur.children && cur.children[0]) {
                cur = cur.children[0];
            }
        }
    },

    mounted() {
        this.$nextTick(() => {
            let highlight = this.$el.getElementsByClassName('highlight')[0];
            if (this.$el.getElementsByClassName('description').length === 0) {
                highlight.style.width = '100%';
                highlight.borderRight = 'none';
            }
        });
    },
    methods: {
        handleCode() {
            event.stopPropagation();
            const elm = this.$refs.meta;
            const target = elm && elm.querySelector('.nextop-demo-copy-wrapper');

            if (target && target.previousSibling.textContent) {
                localStorage.setItem('DOCS_DEMO_CODE', target.previousSibling.textContent);
                this.$router.push('/example?from=demo');
            } else {
                this.$message.error('sorry，出错了！');
            }
        },
        copyCode() {
            const elm = this.$refs.meta;
            const target = elm && elm.querySelector('.nextop-demo-copy-wrapper');

            if (target && target.previousSibling.textContent) {
                window._copy(target.previousSibling.textContent).then(() => {
                    this.$message.success('代码已复制到剪贴板');
                });
            }
        },
        openCode() {
            const route = this.$route.path;
            if (route.indexOf('master-design') > -1) {
                window.open(`https://git.nextop.cc/FE-Lab/master-design/-/tree/master/packages/${route.split('/')[2]}`);
            } else if (route.indexOf('vanlement-ui') > -1) {
                window.open(`https://git.nextop.cc/FE-Lab/vanlement/-/tree/master/packages/${route.split('/')[2]}`);
            } else if (route.indexOf('van-table') > -1) {
                window.open('https://git.nextop.cc/FE-Lab/van-table/-/tree/master/packages');
            } else if (route.indexOf('vantop-editor') > -1) {
                window.open('https://git.nextop.cc/FE-Lab/vantop-editor/-/tree/master/packages');
            } else {
                window.open('https://git.nextop.cc/FE-Lab');
            }
        },
    },
};
</script>


<style lang="scss">
.demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: 0.2s;

    // &.hover {
    //     box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    //         0 2px 4px 0 rgba(232, 237, 250, 0.5);
    // }

    code {
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    .demo-button {
        float: right;
    }

    .source {
        padding: 24px;
    }

    .meta {
        background-color: #fafafa;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;
    }

    .description {
        padding: 0 20px 20px;
        box-sizing: border-box;
        // border-top: solid 1px #ebebeb;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        // margin: 10px;
        background-color: #fff;

        p {
            margin: 0;
            line-height: 26px;
        }

        code {
            color: #5e6d82;
            background-color: #e6effb;
            margin: 0 4px;
            display: inline-block;
            padding: 1px 5px;
            font-size: 12px;
            border-radius: 3px;
            height: 18px;
            line-height: 18px;
        }
    }

    .highlight {
        pre {
            margin: 0;
            padding: 20px;
        }

        code.hljs {
            padding: 0;
            margin: 0;
            border: none;
            max-height: none;
            border-radius: 0;

            &::before {
                content: none;
            }
        }
    }
    .demo-block-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        border-top: 1px dashed #eaeefb;
    }

    .demo-block-control {
        border-top: solid 1px #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;
        &.is-fixed {
            // position: fixed;
            // bottom: 0;
            // width: 868px;
            position: sticky;
            bottom: 0;
        }

        i {
            font-size: 16px;
            line-height: 44px;
            transition: 0.3s;
            &.hovering {
                transform: translateX(-40px);
            }
        }

        > span {
            position: absolute;
            transform: translateX(-30px);
            font-size: 14px;
            line-height: 44px;
            transition: 0.3s;
            display: inline-block;
        }

        &:hover {
            color: #409eff;
            background-color: #f9fafc;
        }

        & .text-slide-enter,
        & .text-slide-leave-active {
            opacity: 0;
            transform: translateX(10px);
        }

        .control-button {
            line-height: 26px;
            position: absolute;
            top: 0;
            right: 0;
            font-size: 14px;
            padding-left: 5px;
            padding-right: 25px;
        }
    }
}
</style>