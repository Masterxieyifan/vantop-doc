/*
 * @Descripttion: FE库开发指南 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-12-09 16:40:12
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/library/*.md');
const load = path => modules[`../../views/library/${path}.md`].default;
export default [
    {
        title: '流程概览',
        path: '/library/process',
        component: load('process'),
    },
    {
        title: '开发规范',
        path: '/library/standard',
        component: load('standard'),
    },
    {
        title: '组件库开发',
        path: '/library/ui',
        component: load('ui'),
    },
    {
        title: '工具库开发',
        path: '/library/util',
        component: load('util'),
    },
    {
        title: '文档开发',
        path: '/library/docs',
        component: load('docs'),
    },
    {
        title: '发包流程',
        path: '/library/publish',
        component: load('publish'),
    },
    {
        path: '/library*',
        redirect: '/library/process',
    }
];