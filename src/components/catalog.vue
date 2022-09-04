<!--
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2021-11-15 10:51:20
 * @LastEditTime: 2022-02-16 16:08:49
 * @LastEditors: 蔡远程
-->
<template>
    <ul ref="list" class="nextop-docs--catalog">
        <span
            class="nextop-docs--catalog__circle"
            :style="{
                'opacity': opacity ? 1: 0,
                'top': `${top}px`
            }"
        />
        <li
            :key="target"
            v-for="{target, name, level} in list"
            :class="{'is-active': target === active}"
        >
            <a
                :title="name"
                :href="target"
                :style="{
                    'padding-left': `${level*8}px`,
                    'font-weight': `${800 - level*100}`
                }"
            >
                {{name}}
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Catalog',
    props: {
        list: {
            type: Array,
            default: ()=>[],
        },
    },
    watch: {
        '$route.hash': {
            immediate: true,
            handler: function(val) {
                if (val) val = decodeURI(val);
                this.$nextTick(()=>{
                    this.setActive(val);
                });
            },
        },
    },
    data() {
        return {
            active: null,
            opacity: false,
            top: 0,
        };
    },
    methods: {
        setActive(hash) {
            if (hash) {
                const target = this.$refs.list.querySelector(`li a[href="${decodeURIComponent(hash)}"]`);
                this.top = target.offsetTop + 7;
                this.active = hash;
                this.opacity = true;
            } else {
                this.top = 0;
                this.active = null;
                this.opacity = false;
            }
        },
    },
};
</script>

<style scoped lang="scss">
.nextop-docs--catalog {
    position: absolute;
    display: inline-block;
    background: #fff;
    margin: 0;
    list-style: none;
    top: 10px;
    padding: 0 5px 10px 0;
    border-left: 1px solid #E5E7EB;
    // max-height: 85%;
    // overflow-y: scroll;
    &__circle {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 2px solid #3573FE;
        border-radius: 50%;
        position: absolute;
        left: -.5px;
        background: #fff;
        transition: top .2s ease-in-out, opacity .2s ease-in-out;
        transform: translate(-50%,2px);
    }
    > li {
        cursor: pointer;
        > a {
            color: #374151;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 200px;
            padding-top: 5px;
            padding-bottom: 5px;
            transition: .3s;
        }
        &:hover > a {
            color: #3573FE;
        }
    }
    .is-active > a {
        color: #3573FE
    }
}
</style>
