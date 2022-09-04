import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';
import './plugins';

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');


window._docsCopy = function(e) {
    const elm = e.previousSibling,
        text = e.parentElement.previousSibling.textContent;

    window._copy(text).then(() => {
        elm.style.display = 'block',
        setTimeout(() => {
            elm.style.display = 'none';
        }, 1000);
    }).catch(() => {
        alert('复制失败了！');
    });
};

window._copy = (text = '') => new Promise((resolve, reject) => {
    const elm = document.createElement('textarea');
    elm.value = `${text}`;

    document.body.appendChild(elm);
    elm.select();

    try {
        const command = document.execCommand('copy');
        document.body.removeChild(elm);
        command ? resolve() : reject();
    } catch (e) {
        document.body.removeChild(elm);
        reject();
    }
});