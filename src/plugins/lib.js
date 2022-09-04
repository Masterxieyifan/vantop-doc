/*
 * @Descripttion: 库依赖
 * @Author: 蔡远程
 * @Date: 2021-09-06 11:04:25
 * @LastEditTime: 2021-12-27 11:42:37
 * @LastEditors: 蔡远程
 */

import Vue from 'vue';

//element
import ElementUI from 'element-ui';
import icon from '../config/icon.json';
Vue.prototype.$icon = icon; // Icon 列表页用
Vue.use(ElementUI);


// vxe-table
import 'xe-utils';
import VXETable from 'vxe-table';
import XEUtils from 'xe-utils';

window.XEUtils = XEUtils;
Vue.use(VXETable);


// Master Design
import MasterDesign from 'master-design';
Vue.use(MasterDesign);


//vantop-editor
import 'vantop-editor/lib/vantop-editor.css';
import VantopEditor from 'vantop-editor';
Vue.component('vantop-editor', VantopEditor);