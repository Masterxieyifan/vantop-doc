/*
 * @Descripttion: FE库开发指南 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-07-14 17:22:11
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/sass-dev-guide/**/*.md');
const listPageMoudles = import.meta.globEager('../../views/sass-dev-guide/list-page/*.md');
const load = path =>  modules[`../../views/sass-dev-guide/${path}.md`].default;
const listPageLoad = path =>  listPageMoudles[`../../views/sass-dev-guide/list-page/${path}.md`].default;

export default [
    {
        title: '列表页面配置',
        path: '/sass-dev-guide/list-page',
        children: [
            {
                path: '/sass-dev-guide/list-page/basic',
                title: '基础',
                component: listPageLoad('basic'),
            },
            {
                path: '/sass-dev-guide/list-page/search',
                title: '条件栏配置',
                component: listPageLoad('search'),
            },
            {
                path: '/sass-dev-guide/list-page/table',
                title: '表格配置',
                component: listPageLoad('table'),
            },
            {
                path: '/sass-dev-guide/list-page/normal',
                title: '列表案例配置',
                component: listPageLoad('normal'),
            },
            {
                path: '/sass-dev-guide/list-page/tab',
                title: 'TAB 切换场景配置',
                component: listPageLoad('tab'),
            },
            {
                path: '/sass-dev-guide/list-page/order',
                title: '表格排序',
                component: listPageLoad('order'),
            },
            {
                path: '/sass-dev-guide/list-page/get-table-data',
                title: '获取表格数据',
                component: listPageLoad('get-table-data'),
            },
            {
                path: '/sass-dev-guide/list-page/get-table-instance',
                title: '获取表格实例',
                component: listPageLoad('get-table-instance'),
            },
            {
                path: '/sass-dev-guide/list-page/md-table',
                title: '仍在使用 md-table',
                component: listPageLoad('md-table'),
            }
        ],
    },
    {
        title: '详情页面配置',
        path: '/sass-dev-guide/detail-page',
        children: [
            {
                path: '/sass-dev-guide/baisc',
                title: '基础配置',
                component: load('detail-page/basic'),
            },
            {
                path: '/sass-dev-guide/preview',
                title: '新版预览详情页',
                component: load('detail-page/preview'),
            }
        ],
    },
    {
        title: 'UI列表规范',
        path: '/sass-dev-guide/list-page-ui',
        component: load('list-page-ui'),
    },
    {
        title: '拖拽组件配置',
        path: '/sass-dev-guide/vuedraggable-page',
        component: load('vuedraggable-page'),
    },
    {
        title: '新增菜单流程',
        path: '/sass-dev-guide/add-menu-process',
        component: load('add-menu-process'),
    },
    {
        title: '本地联调配置',
        path: '/sass-dev-guide/env-local',
        component: load('env-local'),
    },
    {
        title: '子应用共享代码',
        path: '/sass-dev-guide/common-share',
        component: load('common-share'),
    },
    {
        title: '页面用户指引',
        path: '/saas-dev-guide/page-guide',
        component: load('page-guide'),
    },
    {
        path: '/sass-dev-guide/list-page*',
        redirect: '/sass-dev-guide/list-page/basic',
    },
    {
        path: '/sass-dev-guide*',
        redirect: '/sass-dev-guide/list-page',
    }
];
