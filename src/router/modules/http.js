/*
 * @Descripttion: FE库开发指南 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-12-26 18:34:38
 * @LastEditors: 蔡远程
 */
const modules = import.meta.globEager('../../views/http/*.md');
const load = path =>  modules[`../../views/http/${path}.md`].default;
export default [
    {
        title: '用户存储',
        path: '/http/StorageService',
        component: load('StorageService'),
    },
    {
        title: '公共下载',
        path: '/http/ComonDownload',
        component: load('ComonDownload'),
    },
    {
        title: '公共上传',
        path: '/http/ComonUpload',
        component: load('ComonUpload'),
    },
    {
        path: '/http*',
        redirect: '/http/StorageService',
    }
];