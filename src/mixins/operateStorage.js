/*
 * @Author: lingyong.zeng
 * @Date: 2021-07-05 10:44:34
 * @LastEditors: 蔡远程
 * @LastEditTime: 2022-03-01 14:06:24
 * @Description:
 * @FilePath: /nextop-docs/src/mixins/operateStorage.js
 */

import { cloneDeep, isString, isObject, isEmpty, isArray, } from '@master_vantop/vantop-util';
import { Base64, } from 'js-base64';

/**
 * 将 hash 字符串转换为键值对对象
 *
 * @param {String} str #query=eyJudW0iOiJMWTAwMSIsImZiYU51bSI6IkZCMDAxIn0#tab=...
 * @return {Object} {query: {status: '1', num: 'AB'}, tab={...}}
 */
function parseHashToObject(str) {
    if (!isString(str) || !str.length) {
        return null;
    }
    const hashList = str.substr(1).split('#');
    const objVal = {};
    for (const hash of hashList) {
        const [key, value] = hash.split('=');
        if (isEmpty(value)) {
            continue;
        }
        objVal[key] = JSON.parse(Base64.decode(value));
    }
    return objVal;
}

/**
 * 将键值对对象转换为 hash 字符串
 *
 * @param {Object} objVal {query: {status: '1', num: 'AB'}, tab={...}}
 * @return {String} #query=eyJudW0iOiJMWTAwMSIsImZiYU51bSI6IkZCMDAxIn0#tab=...
 */
function parseParamsToHash(objVal) {
    if (!isObject(objVal) || isEmpty(objVal)) {
        return '';
    }
    let hash = '';
    let prefix = '';
    for (let [key, value] of Object.entries(objVal)) {
        if (value === null || value === undefined) {
            continue;
        }
        if (isArray(value)) {
            value = value.join(',');
        }
        hash += `${prefix}${key}=${Base64.encodeURI(JSON.stringify(value))}`;
        prefix = '#';
    }
    return hash ? ('#' + hash) : '';
}

/**
 * 过滤掉属性值为空且默认值也为空的数据
 *
 * @param {Object} obj {query: {name: 'xx', age: '', list: []}, {tab: {}}}
 * @param {Object} originObj {query: {name: 'xx', age: 11, list: []}, {tab: {}}}
 * @return {Object} {query: {name: 'xx', age: 11}
 */
function filterNoEmptyAttrs(obj, originObj) {
    if (!obj) return obj;
    const ret = {};
    for (let key of Object.keys(obj)){
        const val = obj?.[key];
        const originVal = originObj?.[key];
        if (isEmpty(val) && isEmpty(originVal)) {
            continue;
        } else if (isObject(val)) {
            let attrVal = filterNoEmptyAttrs(val, originVal);
            if (attrVal !== undefined) {
                ret[key] = attrVal;
            }
        } else {
            ret[key] = val;
        }
    }
    return ret;
}

export const operateStorage = {
    isPage: true,
    data() {
        return {
            query: {
                current: 1,
                size: 20,
            },
            urlHashParams: null,        // urlHash 数据
            originHashParams: null,     // 默认值备份数据
            hasHash: false,
            pageParent: null,           // 页面父级
        };
    },
    computed: {
        originQuery() {                 // 默认 query 数据
            return this.originHashParams?.query;
        },
    },
    // 仅路由页面组件触发，读取 urlHash 并解析合并赋值到页面组件
    created() {
        if (!this.$options?.isPage) {
            return;
        }

        // 自动合成 query 数据对象
        if (isArray(this.filterConditions)) {
            // 条件配置
            for (let { prop, value = null, } of this.filterConditions) {
                prop && this.$set(this.query, prop, value);
            }
            // 扩展条件配置
            if (isObject(this?.extraQuery)) {
                for (let prop of Object.keys(this.extraQuery)) {
                    this.$set(this.query, prop, JSON.parse(JSON.stringify(this.extraQuery[prop])));
                }
            }
        }

        const hashValue = location.hash ? parseHashToObject(location.hash) : null;
        this.hasHash = !isEmpty(hashValue);
        this.urlHashParams = hashValue;
        // 以 data 定义的数据对象作默认值存储，以备重置处理
        const originHashParams = {
            query: {},
            tab: {},
            head: {},
        };

        Object.keys(this.query).forEach(prop => {
            originHashParams.query[prop] = this.query[prop];
        });
        this.originHashParams = JSON.parse(JSON.stringify(originHashParams));

        // 将 urlHash 参数值合并到 query/tab/head 对象中
        for (let type of ['query', 'tab', 'head']) {
            this?.[type] && Object.assign(this[type], hashValue?.[type]);
        }
    },
    mounted() {
        this.getPageParent();
    },
    beforeDestroy() {
        this.pageParent = null;
    },
    methods: {
        /**
         * 设置默认值（用于异步设置，非 data 中设置），会变更 data 对象的 query|tab|head
         * @param {Object Array} list [{type: 'query', prop: 'name', value: 'zly'},...]
         */
        setDefault(list) {
            const { originHashParams = {}, }  = this;
            for (let [type, prop, value] of list) {
                if (!originHashParams[type]) {
                    originHashParams[type] = {};
                }
                originHashParams[type][prop] = value;
                // 无 urlHash 时自动写入页面组件数据对象
                if (!this.hasHash) {
                    this.$set(this[type], prop, value);
                }
            }
            this.originHashParams = JSON.parse(JSON.stringify(originHashParams));
            // 无 urlHash 时存储为 urlHash
            if (!this.hasHash) {
                this.urlHashParams = filterNoEmptyAttrs(cloneDeep(originHashParams), this.originHashParams);
                this.saveUrlParamsToHash(this.urlHashParams);
            }
        },
        /**
         * 设置 urlHash
         * @param {Object Array} list [{type: 'query', prop: 'name', value: 'zly'},...]
         */
        setUrlParams(list) {
            let urlHashParams = cloneDeep(this.urlHashParams);
            if (!urlHashParams) urlHashParams = {};
            for (let { type, prop, value, } of list) {
                if (!urlHashParams?.[type]) {
                    urlHashParams[type] = {};
                }
                Object.assign(urlHashParams[type], { [prop]: value, });
            }
            this.urlHashParams = filterNoEmptyAttrs(urlHashParams, this.originHashParams);
            this.saveUrlParamsToHash(this.urlHashParams);
        },
        /**
         * 对地址栏设置 HASH 存储
         * @param {Object} list {query: {name: 'xx', ...}, {tab: {active: 'xx'}, ...}
         */
        saveUrlParamsToHash(urlHashParams) {
            if (this.$options.enableHash === false) {
                return;
            }
            const urlParamsHash = parseParamsToHash(urlHashParams);
            location.replace(('' + location).split('#')[0] + urlParamsHash);
        },
        /**
         * 重置换 urlHash 及参数， 会变更 data 对象的 query|tab|head
         * @param {String} type 'query|tab|head'
         * @param {String} prop 'any str'
         */
        resetUrlParams(type, prop) {
            if (this.urlHashParams === null) {
                return;
            }
            if (!type) {
                this.urlHashParams = cloneDeep(this.originHashParams);
            } else if (type && !prop) {
                this.urlHashParams[type] = cloneDeep(this.originHashParams?.[type]);
            } else {
                this.urlHashParams[type][prop] = cloneDeep(this.originHashParams?.[type]?.[prop]);
            }

            // 自动回写页面组件数据属性值
            if (this?.[type] && isObject(this[type])) {
                Object.assign(this[type], this.urlHashParams[type]);
            }

            this.urlHashParams = filterNoEmptyAttrs(this.urlHashParams, this.originHashParams);
            this.saveUrlParamsToHash(this.urlHashParams);
        },
        /**
         * 清除 urlHash 参数并更新 urlHash
         * @param {String} type 'query|tab|head'
         */
        delUrlParams(type) {
            const hashValue = location.hash ? parseHashToObject(location.hash) : null;
            if (type && hashValue?.[type]) {
                delete hashValue[type];
            }
            this.saveUrlParamsToHash(hashValue);
        },
        // 获取高级搜索的查询数据（因高级搜索自定义了可用条件，有高级搜索场景下需高级搜索的查询参数为主）
        getQueryParams() {
            return this.$refs?.['advancedSearch']?.queryParams || this.query;
        },
        // 找到父级页面组件
        getPageParent() {
            let parent = this || this.$parent || this.$root;
            let isPage = parent.$options.isPage;

            while (parent && !isPage) {
                parent = parent.$parent;
                if (parent) {
                    isPage = parent.$options.isPage;
                }
            }
            if (parent && isPage) {
                this.pageParent = parent;
            }
        },
    },
};