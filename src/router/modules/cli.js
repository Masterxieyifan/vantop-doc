/*
 * @Descripttion: cli 工具
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-05-06 11:35:50
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/cli/*.md');
const load = path =>  modules[`../../views/cli/${path}.md`].default;
export default [
        {
            title: 'CLI 简介',
            path: '/cli/readme',
            component: load('readme'),
        },
        {
            path: '/cli*',
            redirect: '/cli/readme',
        }
    ];