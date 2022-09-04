/*
 * @Descripttion: cli 工具
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-05-06 14:57:41
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/css-theme/*.md');
const load = path =>  modules[`../../views/css-theme/${path}.md`].default;
export default [
        {
            title: 'CSS 主题变量',
            path: '/css-theme/css-variables',
            component: load('css-variables'),
        },
        {
            path: '/css-theme*',
            redirect: '/css-theme/css-variables',
        }
    ];