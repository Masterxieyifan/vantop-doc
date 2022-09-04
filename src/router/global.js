/*
 * @Descripttion: 其他单个 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-02-24 14:16:23
 * @LastEditors: 蔡远程
 */
import Home from '@/views/home.vue';
const Example = () => import('@/components/example.vue');
export default [
    {
        path: '/',
        title: 'Home',
        component: Home,
    },
    {
        path: '/example',
        title: 'example',
        component: Example,
    },
    {
        path: '*',
        redirect: '/',
    }
];