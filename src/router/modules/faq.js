/*
 * @Descripttion: 微前端相关 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-12-26 18:34:17
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/faq/*.md');
const load = path =>  modules[`../../views/faq/${path}.md`].default;
export default [
        {
            title: 'ERP登陆页加载验证码图片失败',
            path: '/faq/verify-code-error',
            component: load('verify-code-error'),
        },
        {
            title: 'ERP本地如何调试组件/工具库等',
            path: '/faq/local-debug-npm',
            component: load('local-debug-npm'),
        },
        {
            path: '/faq*',
            redirect: '/faq/verify-code-error',
        }
    ];