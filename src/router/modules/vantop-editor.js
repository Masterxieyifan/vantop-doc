/*
 * @Descripttion: 代码风格 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-12-09 16:53:18
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/vantop-editor/*.md');
const load = path => modules[`../../views/vantop-editor/${path}.md`].default;
export default [
    {
        title: '简介',
        path: '/vantop-editor',
        component: load('README'),
    },
    {
        title: '快速上手',
        path: '/vantop-editor/quickstart',
        component: load('quickstart'),
    },
    {
        title: '场景配置',
        path: '/vantop-editor/type',
        component: load('type'),
    },
    {
        title: '上传图片、word文件',
        path: '/vantop-editor/upload',
        component: load('upload'),
    },
    {
        title: '自定义配置',
        path: '/vantop-editor/custom',
        component: load('custom'),
    },
    {
        path: '/vantop-editor*',
        redirect: '/vantop-editor/README',
    }
];