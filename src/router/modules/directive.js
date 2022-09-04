/*
 * @Author: lingyong.zeng
 * @Date: 2022-06-17 09:35:07
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-06-17 11:08:32
 * @Description:
 * @FilePath: /vantop-docs/src/router/modules/directive.js
 */
const modules = import.meta.globEager('../../views/directive/*.md');
const load = path =>  modules[`../../views/directive/${path}.md`].default;
export default [
    {
        title: 'trim',
        path: '/directive/trim',
        component: load('trim'),
    },
    {
        title: 'hint',
        path: '/directive/hint',
        component: load('hint'),
    },
    {
        title: 'lazy',
        path: '/directive/lazy',
        component: load('lazy'),
    },
    {
        title: 'loadmore',
        path: '/directive/loadmore',
        component: load('loadmore'),
    },
    {
        title: 'sroll',
        path: '/directive/scroll',
        component: load('scroll'),
    },
    {
        path: '/directive*',
        redirect: '/directive/loadmore',
    }
];