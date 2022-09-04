/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2021-07-30 18:05:38
 * @LastEditTime: 2021-11-15 09:59:08
 * @LastEditors: 蔡远程
 */
import changelog from '@/views/changelog/changelog.vue';
export default [
    {
        title: 'vanlement-ui',
        collapse: true,
        children: [
            {
                title: 'vanlement',
                component: changelog,
                meta: {
                    changelogName: 'vanlement-ui',
                },
                path: '/changelog/vanlement-ui',
            },
            {
                title: 'element',
                component: changelog,
                meta: {
                    changelogName: 'element-ui',
                },
                path: '/changelog/element-ui',
            }
        ],
    },
    {
        title: 'van-table',
        path: '/changelog/van-table',
        meta: {
            changelogName: 'van-table',
        },
        component: changelog,
    },
    {
        title: 'master-design',
        path: '/changelog/master-design',
        meta: {
            changelogName: 'master-design',
        },
        component: changelog,
    },
    {
        title: 'vantop-util',
        path: '/changelog/vantop-util',
        meta: {
            changelogName: 'vantop-util',
        },
        component: changelog,
    },
    {
        title: 'vantop-editor',
        path: '/changelog/vantop-editor',
        meta: {
            changelogName: 'vantop-editor',
        },
        component: changelog,
    },
    {
        path: '/changelog*',
        redirect: '/changelog/vanlement-ui',
    }
];