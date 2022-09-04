/*
 * @Descripttion: van-table 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-12-09 16:51:00
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/van-table/*.md');
const load = path =>  modules[`../../views/van-table/${path}.md`].default;
export default [
    {
        title: '基础使用',
        collapse: true,
        children: [
            {
                path: '/van-table/guide',
                title: '简介',
                component: load('guide'),
            },
            {
                path: '/van-table/basic',
                title: '基础表格',
                component: load('basic'),
            },
            {
                path: '/van-table/formatter',
                title: '格式化内容',
                component: load('formatter'),
            },
            {
                path: '/van-table/border',
                title: '边框',
                component: load('border'),
            },
            {
                path: '/van-table/group',
                title: '多级表头',
                component: load('group'),
            },
            {
                path: '/van-table/tree',
                title: '树状结构',
                component: load('tree'),
            },
            {
                path: '/van-table/complex',
                title: '复杂表格',
                component: load('complex'),
            },
            {
                path: '/van-table/freeze',
                title: '冻结列',
                component: load('freeze'),
            }
        ],
    },
    {
        path: '/van-table*',
        redirect: '/van-table/guide',
    }
];