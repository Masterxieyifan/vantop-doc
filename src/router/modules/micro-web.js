/*
 * @Descripttion: 微前端相关 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-05-24 17:40:43
 * @LastEditors: hongdong.liao
 */
const modules = import.meta.globEager('../../views/micro-web/*.md');
const load = path =>  modules[`../../views/micro-web/${path}.md`].default;
export default [
        {
            title: 'Switch Host使用指南',
            path: '/micro-web/switch-host',
            component: load('SwitchHost'),
        },
        {
            title: '蓝盾相关CI/CD流程',
            path: '/micro-web/pass-ci-cd',
            component: load('pass-ci-cd'),
        },
        {
            title: '微前端常见问题解答',
            path: '/micro-web/issues',
            component: load('issues'),
        },
        {
            title: '微前端HTTP请求说明',
            path: '/micro-web/http',
            component: load('http'),
        },
        {
            title: '如何在项目里面使用Vuex',
            path: '/micro-web/vuex',
            component: load('vuex'),
        },
        {
            path: '/micro-web*',
            redirect: '/micro-web/switch-host',
        }
    ];