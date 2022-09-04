/*
 * @Descripttion: cdn 管理
 * @Author: 蔡远程
 * @Date: 2021-12-30 17:40:58
 * @LastEditTime: 2022-07-19 14:07:23
 * @LastEditors: 蔡远程
 */

const NEXTOP_CDN_DOMAIN = 'https://cdn-weblib.nextop.com';

const externals = [
    {
        package: 'vue',
        root: 'Vue',
        version: '2.6.10',
        ossPkg: 'npm/vue',
        css: '',
        js: 'vue.js',
        jsMin: 'vue.min.js',
    },
    {
        package: 'vue-router',
        root: 'VueRouter',
        version: '3.5.3',
        ossPkg: 'npm/vue-router',
        css: '',
        js: 'vue-router.js',
        jsMin: 'vue-router.min.js',
    },
    {
        package: 'xe-utils',
        root: 'XEUtils',
        version: '3.1.7',
        ossPkg: 'npm/xe-utils',
        css: '',
        js: 'xe-utils.umd.js',
        jsMin: 'xe-utils.umd.min.js',
    },
    {
        package: 'vxe-table',
        root: 'VXETable',
        ossPkg: 'van-table',
        version: '10.0.8',
        css: 'style.css',
        js: 'index.umd.js',
        jsMin: 'index.umd.min.js',
    },
    {
        package: 'axios',
        root: 'axios',
        version: '0.19.1',
        ossPkg: 'npm/axios',
        css: '',
        js: 'axios.js',
        jsMin: 'axios.min.js',
    },
    {
        package: 'echarts',
        root: 'echarts',
        version: '4.9.0',
        ossPkg: 'npm/echarts',
        css: '',
        js: 'echarts.js',
        jsMin: 'echarts.min.js',
    },
    {
        package: 'nprogress',
        root: 'NProgress',
        version: '0.2.0',
        ossPkg: 'npm/nprogress',
        css: 'nprogress.css',
        js: 'nprogress.js',
        jsMin: 'nprogress.min.js',
    },
    {
        package: 'element-ui',
        root: 'ELEMENT',
        ossPkg: 'vanlement-ui',
        version: '10.0.14-release.2',
        css: 'theme-chalk/index-var.css',
        js: 'index.js',
    },
    {
        package: '@master_vantop/vantop-util',
        root: 'VantopUtil',
        ossPkg: 'vantop-util',
        version: '1.0.73',
        js: 'index.js',
    },
    {
        package: '@master_vantop/nextop-core',
        root: 'NextopCore',
        version: '0.0.47',
        js: 'index.min.js',
    },
    {
        package: '@master_vantop/nextop-http',
        root: 'NextopHttp',
        version: '0.0.48-alpha.1',
        js: 'index.min.js',
    },
    {
        package: 'master-design',
        root: 'MasterDesign',
        ossPkg: 'master-design',
        version: '0.0.25',
        js: 'index.umd.js',
        css: 'index.css',
    }
];

/**
 * 获取cdn的文件地址
 * @param {*} packageName 包名
 * @param {*} version 版本
 * @param {*} file 文件路径
 * @return {*} 地址
 */
const getFileUrl = function(
    packageName,
    version,
    file,
    domain = NEXTOP_CDN_DOMAIN,
    ossPkg
) {
    return ossPkg ? `${domain}/${ossPkg}/${version}/${file}` : `${domain}/${packageName}/${version}/${file}`;
};

/**
 * 获取要忽略打包的包
 */
exports.getExternals = () => {
    const ext = {};
    externals.forEach((item) => {
        ext[item.package] = item.root;
    });
    return ext;
};

/**
 * 获取包的cdn路径列表
 * @param {} minfy 是否压缩版本
 */
exports.getCdn = (minfy) => {
    let js = externals.map((item) => {
        let file = minfy ? item.jsMin || item.js : item.js;
        return getFileUrl(item.package, item.version, file, item.domain, item.ossPkg);
    });
    let css = externals
        .filter((item) => item.css)
        .map((item) =>
            getFileUrl(item.package, item.version, item.css, item.domain, item.ossPkg)
        );

    return {
        js,
        css,
    };
};
