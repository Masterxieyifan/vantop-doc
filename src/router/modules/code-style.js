/*
 * @Descripttion: 代码风格 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-05-19 11:51:41
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/code-style/*.md');
const load = path =>  modules[`../../views/code-style/${path}.md`].default;

export default [
    {
        title: 'JavaScript',
        path: '/code-style/javascript',
        component: load('javascript'),
    },
    {
        title: 'CSS',
        path: '/code-style/css',
        component: load('css'),
    },
    {
        title: 'BEM 命名规范',
        path: '/code-style/bem',
        component: load('bem'),
    },
    {
        title: 'HTML',
        path: '/code-style/html',
        component: load('html'),
    },
    {
        title: 'Vue和文件命名',
        path: '/code-style/vue',
        component: load('vue'),
    },
    {
        title: '业务状态/枚举类型',
        path: '/code-style/enum',
        component: load('enum'),
    },
    {
        path: '/code-style*',
        redirect: '/code-style/javascript',
    }
];