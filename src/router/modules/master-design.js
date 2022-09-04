/*
 * @Descripttion: master-design 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-05-23 10:11:27
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/master-design/*.md');
const load = path =>  modules[`../../views/master-design/${path}.md`].default;
export default [
    {
        path: '/master-design',
        title: '简介',
        component: load('README'),
    },
    {
        title: 'Basic',
        collapse: true,
        children: [
            {
                path: '/master-design/table',
                title: 'Table 表格',
                component: load('Table'),
            },
            {
                path: '/master-design/basic-box',
                title: 'Basic Box 容器',
                component: load('BasicBox'),
            },
            {
                path: '/master-design/popover',
                title: 'Popover 省略弹窗',
                component: load('Popover'),
            },
            {
                path: '/master-design/input-number',
                title: 'Input Number 数字输入框',
                component: load('InputNumber'),
            },
            {
                path: '/master-design/select-tree',
                title: 'Select Tree 下拉树',
                component: load('SelectTree'),
            },
            {
                path: '/master-design/Empty',
                title: 'Empty 空',
                component: load('Empty'),
            },
            {
                path: '/master-design/preview',
                title: 'Preview 图片预览',
                component: load('Preview'),
            },
            {
                path: '/master-design/time',
                title: 'Time 时间',
                component: load('Time'),
            },
            {
              path: '/master-design/loading-button',
              title: 'LoadingButton 加载按钮',
              component: load('LoadingButton'),
            },
            {
              path: '/master-design/scrollbar',
              title: 'Scrollbar 滚动条',
              component: load('Scrollbar'),
            },
            {
              path: '/master-design/render',
              title: 'Render 渲染组件',
              component: load('Render'),
            },
            {
                path: '/master-design/fullscreen',
                title: 'Fullscreen 全屏',
                component: load('Fullscreen'),
            },
            {
                path: '/master-design/tour',
                title: 'Tour 用户指引',
                component: load('Tour'),
            },
            {
                path: '/master-design/index-element',
                title: 'IndexElement 指标元素',
                component: load('IndexElement'),
            }
        ],
    },
    {
        title: 'List',
        collapse: true,
        children: [
            {
                path: '/master-design/page-list',
                title: 'Page List 列表模版',
                component: load('PageList'),
            },
            {
                path: '/master-design/page-frame',
                title: 'Page Frame 列表模版',
                component: load('PageFrame'),
            },
            {
                path: '/master-design/list-table',
                title: 'List Table 列表表格',
                component: load('ListTable'),
            },
            {
                path: '/master-design/advanced-search',
                title: 'Advanced Search 高级筛选',
                component: load('AdvancedSearch'),
            },
            {
                path: '/master-design/sidebar',
                title: 'Sidebar 侧边栏',
                component: load('Sidebar'),
            },
            {
                path: '/master-design/select-input',
                title: 'Select Input 下拉输入',
                component: load('SelectInput'),
            },
            {
                path: '/master-design/select-date',
                title: 'Select Date 下拉时间',
                component: load('SelectDate'),
            },
            {
                path: '/master-design/multiple-input',
                title: 'Multiple Input 多项输入',
                component: load('MultipleInput'),
            }
        ],
    },
    {
        title: 'Business',
        collapse: true,
        children: [
            {
                path: '/master-design/detail-frame',
                title: 'Detail Frame 详情页模版',
                component: load('DetailFrame'),
            },
            {
                path: '/master-design/transfer',
                title: 'Transfer 穿梭框',
                component: load('Transfer'),
            },
            {
                path: '/master-design/tree-transfer',
                title: 'Tree Transfer 树形穿梭框',
                component: load('TreeTransfer'),
            },
            {
                path: '/master-design/sticky',
                title: 'Sticky 吸底',
                component: load('Sticky'),
            },
            {
                path: '/master-design/anchors',
                title: 'Anchors 锚点',
                component: load('Anchors'),
            },
            {
                path: '/master-design/timeline',
                title: 'Timeline 操作日志',
                component: load('Timeline'),
            },
            {
                path: '/master-design/charts',
                title: 'Charts 图表',
                component: load('Charts'),
            },
            {
                path: '/master-design/module-card',
                title: 'Module Card 模块盒子',
                component: load('ModuleCard'),
            },
            {
                path: '/master-design/import-dialogue',
                title: 'Import Dialogue 导入弹窗',
                component: load('ImportDialogue'),
            },
            {
                path: '/master-design/custom-target',
                title: 'CustomTarget 指标卡模板',
                component: load('CustomTarget'),
            }
        ],
    },
    //新增组件路由放上面👆
    {
        title: '历史遗留组件（不推荐使用）',
        children: [
            {
                path: '/master-design/search-list',
                title: 'Search List 搜索列表',
                component: load('SearchList'),
            },
            {
                path: '/master-design/search-tree',
                title: 'Search Tree 搜索树',
                component: load('SearchTree'),
            },
            {
                path: '/master-design/tree',
                title: 'Tree 搜索树2.0',
                component: load('Tree'),
            },
            {
                path: '/master-design/sticky-header',
                title: 'Sticky Header 吸顶',
                component: load('StickyHeader'),
            },
            {
                path: '/master-design/collapse',
                title: 'Collapse 折叠面板',
                component: load('Collapse'),
            },
            {
                path: '/master-design/advanced-filter',
                title: 'Advanced Filter 高级搜索',
                component: load('AdvancedFilter'),
            },
            {
                path: '/master-design/upload',
                title: 'Upload 导入',
                component: load('Upload'),
            }
        ],
    },
    {
        path: '/master-design*',
        redirect: '/master-design',
    }
];
