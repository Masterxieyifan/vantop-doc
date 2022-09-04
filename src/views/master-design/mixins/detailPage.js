/*
 * @Author: lingyong.zeng
 * @Date: 2021-10-28 16:51:00
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-05-12 14:10:41
 * @Description:
 * @FilePath: /vantop-ui/mixins/detailPage.js
 */
import { isObject, } from '@master_vantop/vantop-util';

const MODIFY_TYPES = ['add', 'edit', 'copy'];
const ROUTE_REGEX = /^\/(.*)?\/(.*)\/(.*)/;

export const DetailPageParent = {
    name: 'DetailPageParent',
    provide: function() {
        return {
            _setPageConfig: this.setPageConfig,
            _goBack: this.pageConfig.back,
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.pageConfig.backRoute = from;
        });
    },
    data() {
        return {
            pageConfig: {
                type: '',
                tag: '',
                col: 3,
                modules: null,
                backRoute: null,
                back: () => {
                    let { backRoute, } = this.pageConfig;
                    if (backRoute.path === '/') {
                        // 无正常回退路由（如刷新）

                        // 当前路由替换尾部路径，如'/goods/bom-manage/view' => '/goods/bom-manage/index'
                        const path = this.$route.path.replace(
                            ROUTE_REGEX,
                            '/$1/$2/index'
                        );
                        backRoute = { path, };
                    }

                    if (isObject(backRoute)) {
                        this.$router.replace(backRoute);
                    } else {
                        //eslint-disable-next-line no-console
                        console.error('路由参数有误！');
                    }
                },
            },
        };
    },
    computed: {
        isModify({ pageConfig: { type, }, }) {
            return MODIFY_TYPES.includes(type);
        },
        isView({ pageConfig: { type, }, } ) {
            return type === 'view';
        },
    },
    methods: {
        setPageConfig(pageConfig) {
            this.pageConfig = Object.assign(
                {},
                this.pageConfig,
                pageConfig
            );
        },
    },
};

export const DetailPageChild = {
    name: 'DetailPageChild',
    inject: ['_setPageConfig', '_goBack'],
    computed: {
        pageType() {
            return this.$route.params.operateType;
        },
    },
    mounted() {
        this._setPageConfig(this.pageConfig);
    },
};