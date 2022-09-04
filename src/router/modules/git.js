/*
 * @Descripttion: git 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-12-09 15:05:27
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/git/*.md');
const load = path => modules[`../../views/git/${path}.md`].default;
export default [
    {
        title: 'Commit信息规范',
        path: '/git/commit',
        component: load('commit'),
    },
    {
        title: '常用 Git 命令清单',
        path: '/git/handle',
        component: load('handle'),
    },
    {
        title: 'Flow工作流',
        path: '/git/flow',
        component: load('flow'),
    },
    {
        path: '/git*',
        redirect: '/git/commit',
    }
];