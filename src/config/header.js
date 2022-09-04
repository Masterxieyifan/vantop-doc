/*
 * @Descripttion: header 配置
 * @Author: 蔡远程
 * @Date: 2021-07-11 14:49:44
 * @LastEditTime: 2022-06-24 17:37:13
 * @LastEditors: lingyong.zeng
 */
import { isOpen, OPEN_ROUTER, } from '@/config/openSource.js';

let fullHeader = [
    {
        title: '指南',
        children: [
            {
                title: 'Git',
                path: '/git',
            },
            {
                title: '前端风格',
                path: '/code-style',
            },
            {
                title: '业务开发指引',
                path: '/sass-dev-guide',
            },
            {
                title: '基础建设开发指引',
                path: '/library',
            }
        ],
    },
    {
        title: '基础服务',
        children: [
            {
                title: 'Master Design',
                path: '/master-design',
            },
            {
                title: 'Vanlement UI',
                path: '/vanlement-ui',
            },
            {
                title: 'Van Table',
                path: '/van-table',
            },
            {
                title: 'Vantop Editor',
                path: '/vantop-editor',
            },
            {
                title: 'HTTP服务',
                path: '/http',
            },
            {
                title: '工具库',
                path: '/vantop-util',
            },
            {
                title: '全局指令',
                path: '/directive',
            },
            {
                title: '全局过滤器',
                path: '/filter',
            }
        ],
    },
    {
        title: '工具',
        children: [
            {
                title: 'CSS 主题',
                path: '/css-theme',
            },
            {
                title: 'Nextop CLI',
                path: '/cli',
            }
        ],
    },
    {
        title: '微前端',
        path: '/micro-web',
    },
    {
        title: '更新日志',
        path: '/changelog',
    },
    {
        title: '常见问题',
        path: '/faq',
    },
    {
        title: '在线编程',
        path: '/example',
    }
];

if (isOpen) {
    fullHeader = fullHeader.filter(item=>{
        if (item.children) {
            item.children = item.children.filter(child=>OPEN_ROUTER.indexOf(child.path.slice(1))>= 0);
            return item.children.length > 0;
        }
        return OPEN_ROUTER.indexOf(item.path.slice(1)) >= 0;
    });
}

export default fullHeader;