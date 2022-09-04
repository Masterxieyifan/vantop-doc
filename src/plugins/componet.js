/*
 * @Descripttion: 全局注册组件
 * @Author: 蔡远程
 * @Date: 2021-09-06 11:11:40
 * @LastEditTime: 2022-04-12 10:58:41
 * @LastEditors: 蔡远程
 */

import Vue from 'vue';

//md-loader demo-block
import DemoBlock from '@/components/demo-block.vue';
Vue.component('demo-block', DemoBlock);

Vue.config.productionTip = false;

Vue.prototype.$api = {
    getTableList: () => new Promise(resolve => {
            const records = [];
            for (let i = 1; i <= 20; i++) {
                records.push({
                    name: '里德' + i,
                    age: i,
                    sex: i % 2 === 0 ? '男' : '女',
                 });
            }
            setTimeout(() => resolve({
                    records,
                    total: 200,
                }), 1500);
        }),
};