/*
 * @Descripttion: 业务或者其他icon 加载
 * @Author: 蔡远程
 * @Date: 2021-09-06 11:17:28
 * @LastEditTime: 2022-04-28 11:49:49
 * @LastEditors: 蔡远程
 */
function loadStyle(url) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}

// SASS
loadStyle('//at.alicdn.com/t/font_2762041_xcppj0fu6v.css');
