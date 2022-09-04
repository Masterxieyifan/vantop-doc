/*
 * @Author: lingyong.zeng
 * @Date: 2022-06-24 17:37:30
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-06-24 18:27:46
 * @Description:
 * @FilePath: /vantop-docs/src/router/modules/filter.js
 */
const modules = import.meta.globEager('../../views/filter/*.md');
const load = path =>  modules[`../../views/filter/${path}.md`].default;
export default [
    {
        title: '全局过滤器',
        path: '/filter/index',
        component: load('index'),
    },
    {
        path: '/filter*',
        redirect: '/filter/index',
    }
];