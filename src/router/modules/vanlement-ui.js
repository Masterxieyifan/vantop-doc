/*
 * @Descripttion: vanlement-ui 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-07-19 14:00:15
 * @LastEditors: 蔡远程
 */

const modules = import.meta.globEager('../../views/vanlement-ui/*.md');
const load = path => modules[`../../views/vanlement-ui/${path}.md`].default;
export default [
    {
        title: '开发指南',
        collapse: true,
        children: [
            {
                path: '/vanlement-ui/installation',
                title: '安装',
                component: load('installation'),
            },
            {
                path: '/vanlement-ui/quickstart',
                title: '快速上手',
                component: load('quickstart'),
            },
            {
                path: '/vanlement-ui/i18n',
                title: '国际化',
                component: load('i18n'),
            },
            {
                path: '/vanlement-ui/custom-theme',
                title: '自定义主题',
                component: load('custom-theme'),
            },
            {
                path: '/vanlement-ui/transition',
                title: '内置过渡动画',
                component: load('transition'),
            }
        ],
    },
    {
        title: 'Basic',
        collapse: true,
        children: [
            {
                path: '/vanlement-ui/layout',
                title: 'Layout 布局',
                component: load('layout'),
            },
            {
                path: '/vanlement-ui/container',
                title: 'Container 布局容器',
                component: load('container'),
            },
            {
                path: '/vanlement-ui/color',
                title: 'Color 色彩',
                component: load('color'),
            },
            {
                path: '/vanlement-ui/typography',
                title: 'Typography 字体',
                component: load('typography'),
            },
            {
                path: '/vanlement-ui/border',
                title: 'Border 边框',
                component: load('border'),
            },
            {
                path: '/vanlement-ui/icon',
                title: 'Icon 图标',
                component: load('icon'),
            },
            {
                path: '/vanlement-ui/button',
                title: 'Button 按钮',
                component: load('button'),
            },
            {
                path: '/vanlement-ui/link',
                title: 'Link 文字链接',
                component: load('link'),
            }
        ],
    },
    {
        title: 'Form',
        collapse: true,
        children: [
            {
                path: '/vanlement-ui/radio',
                title: 'Radio 单选框',
                component: load('radio'),
            },
            {
                path: '/vanlement-ui/checkbox',
                title: 'Checkbox 多选框',
                component: load('checkbox'),
            },
            {
                path: '/vanlement-ui/input',
                title: 'Input 输入框',
                component: load('input'),
            },
            {
                path: '/vanlement-ui/input-number',
                title: 'InputNumber 计数器',
                component: load('input-number'),
            },
            {
                path: '/vanlement-ui/select',
                title: 'Select 选择器',
                component: load('select'),
            },
            {
                path: '/vanlement-ui/cascader',
                title: 'Cascader 级联选择器',
                component: load('cascader'),
            },
            {
                path: '/vanlement-ui/switch',
                title: 'Switch 开关',
                component: load('switch'),
            },
            {
                path: '/vanlement-ui/slider',
                title: 'Slider 滑块',
                component: load('slider'),
            },
            {
                path: '/vanlement-ui/time-picker',
                title: 'TimePicker 时间选择器',
                component: load('time-picker'),
            },
            {
                path: '/vanlement-ui/date-picker',
                title: 'DatePicker 日期选择器',
                component: load('date-picker'),
            },
            {
                path: '/vanlement-ui/datetime-picker',
                title: 'DateTimePicker 日期时间选择器',
                component: load('datetime-picker'),
            },
            {
                path: '/vanlement-ui/upload',
                title: 'Upload 上传',
                component: load('upload'),
            },
            {
                path: '/vanlement-ui/rate',
                title: 'Rate 评分',
                component: load('rate'),
            },
            {
                path: '/vanlement-ui/color-picker',
                title: 'ColorPicker 颜色选择器',
                component: load('color-picker'),
            },
            {
                path: '/vanlement-ui/transfer',
                title: 'Transfer 穿梭框',
                component: load('transfer'),
            },
            {
                path: '/vanlement-ui/form',
                title: 'Form 表单',
                component: load('form'),
            }
        ],
    },
    {
        title: 'Data',
        collapse: true,
        children: [
            {
                path: '/vanlement-ui/table',
                title: 'Table 表格',
                component: load('table'),
            },
            {
                path: '/vanlement-ui/tag',
                title: 'Tag 标签',
                component: load('tag'),
            },
            {
                path: '/vanlement-ui/checkable-tag',
                title: 'CheckableTag 可选标签',
                component: load('checkable-tag'),
            },
            {
                path: '/vanlement-ui/progress',
                title: 'Progress 进度条',
                component: load('progress'),
            },
            {
                path: '/vanlement-ui/tree',
                title: 'Tree 树形控件',
                component: load('tree'),
            },
            {
                path: '/vanlement-ui/pagination',
                title: 'Pagination 分页',
                component: load('pagination'),
            },
            {
                path: '/vanlement-ui/badge',
                title: 'Badge 标记',
                component: load('badge'),
            },
            {
                path: '/vanlement-ui/avatar',
                title: 'Avatar 头像',
                component: load('avatar'),
            },
            {
                path: '/vanlement-ui/skeleton',
                title: 'Skeleton 骨架屏',
                component: load('skeleton'),
            },
            {
                path: '/vanlement-ui/empty',
                title: 'Empty 空状态',
                component: load('empty'),
            },
            {
                path: '/vanlement-ui/descriptions',
                title: 'Descriptions 描述列表',
                component: load('descriptions'),
            },
            {
                path: '/vanlement-ui/result',
                title: 'Result 结果',
                component: load('result'),
            }
        ],
    },
    {
        title: 'Notice',
        collapse: true,
        children: [
            {
                path: '/vanlement-ui/alert',
                title: 'Alert 警告',
                component: load('alert'),
            },
            {
                path: '/vanlement-ui/loading',
                title: 'Loading 加载',
                component: load('loading'),
            },
            {
                path: '/vanlement-ui/message',
                title: 'Message 消息提示',
                component: load('message'),
            },
            {
                path: '/vanlement-ui/message-box',
                title: 'MessageBox 弹框',
                component: load('message-box'),
            },
            {
                path: '/vanlement-ui/notification',
                title: 'Notification 通知',
                component: load('notification'),
            }
        ],
    },
    {
        title: 'Navigation',
        collapse: true,
        children: [
            {
                path: '/vanlement-ui/menu',
                title: 'NavMenu 导航菜单',
                component: load('menu'),
            },
            {
                path: '/vanlement-ui/tabs',
                title: 'Tabs 标签页',
                component: load('tabs'),
            },
            {
                path: '/vanlement-ui/breadcrumb',
                title: 'Breadcrumb 面包屑',
                component: load('breadcrumb'),
            },
            {
                path: '/vanlement-ui/page-header',
                title: 'PageHeader 页头',
                component: load('page-header'),
            },
            {
                path: '/vanlement-ui/dropdown',
                title: 'Dropdown 下拉菜单',
                component: load('dropdown'),
            },
            {
                path: '/vanlement-ui/steps',
                title: 'Steps 步骤条',
                component: load('steps'),
            }
        ],
    },
    {
        title: 'Others',
        collapse: true,
        children: [
            {
                path: '/vanlement-ui/dialog',
                title: 'Dialog 对话框',
                component: load('dialog'),
            },
            {
                path: '/vanlement-ui/tooltip',
                title: 'Tooltip 文字提示',
                component: load('tooltip'),
            },
            {
                path: '/vanlement-ui/popover',
                title: 'Popover 弹出框',
                component: load('popover'),
            },
            {
                path: '/vanlement-ui/popconfirm',
                title: 'Popconfirm 气泡确认框',
                component: load('popconfirm'),
            },
            {
                path: '/vanlement-ui/card',
                title: 'Card 卡片',
                component: load('card'),
            },
            {
                path: '/vanlement-ui/carousel',
                title: 'Carousel 走马灯',
                component: load('carousel'),
            },
            {
                path: '/vanlement-ui/collapse',
                title: 'Collapse 折叠面板',
                component: load('collapse'),
            },
            {
                path: '/vanlement-ui/timeline',
                title: 'Timeline 时间线',
                component: load('timeline'),
            },
            {
                path: '/vanlement-ui/divider',
                title: 'Divider 分割线',
                component: load('divider'),
            },
            {
                path: '/vanlement-ui/calendar',
                title: 'Calendar 日历',
                component: load('calendar'),
            },
            {
                path: '/vanlement-ui/image',
                title: 'Image 图片',
                component: load('image'),
            },
            {
                path: '/vanlement-ui/viewer',
                title: 'Viewer 图片查看器',
                component: load('viewer'),
            },
            {
                path: '/vanlement-ui/backtop',
                title: 'Backtop 回到顶部',
                component: load('backtop'),
            },
            {
                path: '/vanlement-ui/infiniteScroll',
                title: 'InfiniteScroll 无限滚动',
                component: load('infiniteScroll'),
            },
            {
                path: '/vanlement-ui/drawer',
                title: 'Drawer 抽屉',
                component: load('drawer'),
            }
        ],
    },
    {
        path: '/vanlement-ui*',
        redirect: '/vanlement-ui/installation',
    }
];