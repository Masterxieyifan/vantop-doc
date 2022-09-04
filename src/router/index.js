import Vue from 'vue';
import VueRouter from 'vue-router';
import globalConfig from './global';
import { isEmpty, } from '@master_vantop/vantop-util';
// hightlight
import hljs from 'highlight.js';
import 'highlight.js/styles/docco.css';
import '../styles/common.scss';
import { isOpen, OPEN_ROUTER, } from '@/config/openSource.js';

Vue.use(VueRouter);

// 获取module内的路由
const sideBarArr = [];
const modulesFiles = import.meta.globEager('./modules/*.js');
const modules = Object.keys(modulesFiles).reduce((modules, modulePath, index) => {
    const value = modulesFiles[modulePath].default;
    const tempRoute = {
        sideBar: index,
        children: value,
    };
    if (isOpen) {
        const module = modulePath.replace(/^\.\/modules\/(.+).js$/, '$1');
        if (OPEN_ROUTER.indexOf(module) < 0) return modules;
    }
    modules.push(tempRoute);
    sideBarArr[index] = tempRoute;
    return modules;
}, []);

export const sideBarConfig = sideBarArr;

const routesConfig = [
    ...modules,
    ...globalConfig
];
export const routes = arrPave(routesConfig);

let scrollbarDom;
Vue.nextTick(()=>{
    scrollbarDom = document.body.querySelector('.nextop-docs--wrapper > .page-component__scroll > .md-scrollbar__wrap ');
});

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routes,
});

router.afterEach((to) => {
    Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
        if (scrollbarDom) {
            let position = {
                top: 0,
                left: 0,
                behavior: 'smooth',
            };
            if (to.hash) {
                let hash = decodeURI(to.hash);
                hash = hash.slice(1);
                const hashDom = document.getElementById(hash);
                const top = (hashDom && hashDom.offsetTop) || 0;
                position.top = top > 20
                    ? top - 20 : top;
            }
            scrollbarDom.scrollTo(position);
        }
    });
});

export default router;

function arrPave(arr) {
    const result = [];
    function pave(data, sideBar) {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            const sideBarTemp = isEmpty(item.sideBar) ? sideBar : item.sideBar;
            if (item.children) {
                pave(item.children, sideBarTemp);
            } else {
                if (!isEmpty(sideBar)) {
                    item.meta = {
                        ...item.meta,
                        sideBar: sideBar,
                    };
                }
                result.push(item);
            }
        }
    }
    pave(arr);
    return result;
}