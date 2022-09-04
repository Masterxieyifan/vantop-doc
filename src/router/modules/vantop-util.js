/*
 * @Descripttion: vantop-util 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2022-04-22 17:55:23
 * @LastEditors: 蔡远程
 */

const modules = import.meta.globEager('../../views/vantop-util/**/*.md');
const load = path => modules[`../../views/vantop-util/${path}.md`].default;
export default [
    {
        path: '/vantop-util',
        title: '简介',
        component: load('README'),
    },
    {
        title: '验证',
        children: [
            {
                path: '/vantop-util/validator',
                title: '使用',
                component: load('validator/README'),
            },
            {
                path: '/vantop-util/validator/isObjDeepEqual',
                title: 'isObjDeepEqual',
                component: load('validator/isObjDeepEqual'),
            },
            {
                path: '/vantop-util/validator/isEmpty',
                title: 'isEmpty',
                component: load('validator/isEmpty'),
            },
            {
                path: '/vantop-util/validator/isString',
                title: 'isString',
                component: load('validator/isString'),
            },
            {
                path: '/vantop-util/validator/isNumber',
                title: 'isNumber',
                component: load('validator/isNumber'),
            },
            {
                path: '/vantop-util/validator/isObject',
                title: 'isObject',
                component: load('validator/isObject'),
            },
            {
                path: '/vantop-util/validator/isFunction',
                title: 'isFunction',
                component: load('validator/isFunction'),
            },
            {
                path: '/vantop-util/validator/isBoolean',
                title: 'isBoolean',
                component: load('validator/isBoolean'),
            },
            {
                path: '/vantop-util/validator/isSymbol',
                title: 'isSymbol',
                component: load('validator/isSymbol'),
            },
            {
                path: '/vantop-util/validator/isArray',
                title: 'isArray',
                component: load('validator/isArray'),
            },
            {
                path: '/vantop-util/validator/isDate',
                title: 'isDate',
                component: load('validator/isDate'),
            },
            {
                path: '/vantop-util/validator/isEmail',
                title: 'isEmail',
                component: load('validator/isEmail'),
            },
            {
                path: '/vantop-util/validator/isIdCard',
                title: 'isIdCard',
                component: load('validator/isIdCard'),
            },
            {
                path: '/vantop-util/validator/isMobile',
                title: 'isMobile',
                component: load('validator/isMobile'),
            },
            {
                path: '/vantop-util/validator/isPhone',
                title: 'isPhone',
                component: load('validator/isPhone'),
            },
            {
                path: '/vantop-util/validator/isURL',
                title: 'isURL',
                component: load('validator/isURL'),
            },
            {
                path: '/vantop-util/validator/isLowerCase',
                title: 'isLowerCase',
                component: load('validator/isLowerCase'),
            },
            {
                path: '/vantop-util/validator/isUpperCase',
                title: 'isUpperCase',
                component: load('validator/isUpperCase'),
            },
            {
                path: '/vantop-util/validator/isAlphabets',
                title: 'isAlphabets',
                component: load('validator/isAlphabets'),
            },
            {
                path: '/vantop-util/validator/isNumCombineLetter',
                title: 'isNumCombineLetter',
                component: load('validator/isNumCombineLetter'),
            }
        ],
    },
    {
        title: '助手',
        children: [
            {
                path: '/vantop-util/helper',
                title: '使用',
                component: load('helper/README'),
            },
            {
                path: '/vantop-util/helper/getType',
                title: 'getType',
                component: load('helper/getType'),
            },
            {
                path: '/vantop-util/helper/copyText',
                title: 'copyText',
                component: load('helper/copyText'),
            },
            {
                path: '/vantop-util/helper/cloneDeep',
                title: 'cloneDeep',
                component: load('helper/cloneDeep'),
            },
            {
                path: '/vantop-util/helper/filterEmptyAttrs',
                title: 'filterEmptyAttrs',
                component: load('helper/filterEmptyAttrs'),
            },
            {
                path: '/vantop-util/helper/downloadFile',
                title: 'downloadFile',
                component: load('helper/downloadFile'),
            },
            {
                path: '/vantop-util/helper/debounce',
                title: 'debounce',
                component: load('helper/debounce'),
            },
            {
                path: '/vantop-util/helper/throttle',
                title: 'throttle',
                component: load('helper/throttle'),
            },
            {
                path: '/vantop-util/helper/findIndex',
                title: 'findIndex',
                component: load('helper/findIndex'),
            },
            {
                path: '/vantop-util/helper/findLastIndex',
                title: 'findLastIndex',
                component: load('helper/findLastIndex'),
            },
            {
                path: '/vantop-util/helper/removeInvisibleCharacter',
                title: 'removeInvisibleCharacter',
                component: load('helper/removeInvisibleCharacter'),
            },
            {
                path: '/vantop-util/helper/hasOwnProperty',
                title: 'hasOwnProperty',
                component: load('helper/hasOwnProperty'),
            },
            {
                path: '/vantop-util/helper/mapMetaData',
                title: 'mapMetaData',
                component: load('helper/mapMetaData'),
            },
            {
                path: '/vantop-util/helper/chunk',
                title: 'chunk',
                component: load('helper/chunk'),
            },
            {
                path: '/vantop-util/helper/findChildInArr',
                title: 'findChildInArr',
                component: load('helper/findChildInArr'),
            },
            {
                path: '/vantop-util/helper/changeUrlPar',
                title: 'changeUrlPar',
                component: load('helper/changeUrlPar'),
            },
            {
                path: '/vantop-util/helper/serialize',
                title: 'serialize',
                component: load('helper/serialize'),
            },
            {
                path: '/vantop-util/helper/uniencode',
                title: 'uniencode',
                component: load('helper/uniencode'),
            },
            {
                path: '/vantop-util/helper/memoize',
                title: 'memoize',
                component: load('helper/memoize'),
            },
            {
                path: '/vantop-util/helper/sumBy',
                title: 'sumBy',
                component: load('helper/sumBy'),
            },
            {
                path: '/vantop-util/helper/countBy',
                title: 'countBy',
                component: load('helper/countBy'),
            },
            {
                path: '/vantop-util/helper/uniq',
                title: 'uniq',
                component: load('helper/uniq'),
            },
            {
                path: '/vantop-util/helper/uniqBy',
                title: 'uniqBy',
                component: load('helper/uniqBy'),
            },
            {
                path: '/vantop-util/helper/union',
                title: 'union',
                component: load('helper/union'),
            },
            {
                path: '/vantop-util/helper/unionBy',
                title: 'unionBy',
                component: load('helper/unionBy'),
            },
            {
                path: '/vantop-util/helper/difference',
                title: 'difference',
                component: load('helper/difference'),
            },
            {
                path: '/vantop-util/helper/differenceBy',
                title: 'differenceBy',
                component: load('helper/differenceBy'),
            },
            {
                path: '/vantop-util/helper/xor',
                title: 'xor',
                component: load('helper/xor'),
            },
            {
                path: '/vantop-util/helper/xorBy',
                title: 'xorBy',
                component: load('helper/xorBy'),
            },
            {
                path: '/vantop-util/helper/intersection',
                title: 'intersection',
                component: load('helper/intersection'),
            },
            {
                path: '/vantop-util/helper/intersectionBy',
                title: 'intersectionBy',
                component: load('helper/intersectionBy'),
            },
            {
                path: '/vantop-util/helper/syncDelay',
                title: 'syncDelay',
                component: load('helper/syncDelay'),
            }
        ],
    },
    {
        title: '时间',
        children: [
            {
                path: '/vantop-util/date-helper',
                title: '使用',
                component: load('date-helper/README'),
            },
            {
                path: '/vantop-util/date-helper/addDays',
                title: 'addDays',
                component: load('date-helper/addDays'),
            },
            {
                path: '/vantop-util/date-helper/formatDate',
                title: 'formatDate',
                component: load('date-helper/formatDate'),
            },
            {
                path: '/vantop-util/date-helper/calcDuration',
                title: 'calcDuration',
                component: load('date-helper/calcDuration'),
            },
            {
                path: '/vantop-util/date-helper/getTimeInterval',
                title: 'getTimeInterval',
                component: load('date-helper/getTimeInterval'),
            }
        ],
    },
    {
        title: '字符串',
        children: [
            {
                path: '/vantop-util/string',
                title: '使用',
                component: load('string/README'),
            },
            {
                path: '/vantop-util/string/lowerFirst',
                title: 'lowerFirst',
                component: load('string/lowerFirst'),
            },
            {
                path: '/vantop-util/string/upperFirst',
                title: 'upperFirst',
                component: load('string/upperFirst'),
            }
        ],
    },
    {
        title: '数学',
        children: [
            {
                path: '/vantop-util/math-helper',
                title: '使用',
                component: load('math-helper/README'),
            },
            {
                path: '/vantop-util/math-helper/fixedNumber',
                title: 'fixedNumber',
                component: load('math-helper/fixedNumber'),
            },
            {
                path: '/vantop-util/math-helper/number2CNY',
                title: 'number2CNY',
                component: load('math-helper/number2CNY'),
            },
            {
                path: '/vantop-util/math-helper/number2Byte',
                title: 'number2Byte',
                component: load('math-helper/number2Byte'),
            },
            {
                path: '/vantop-util/math-helper/splitNumByThou',
                title: 'splitNumByThou',
                component: load('math-helper/splitNumByThou'),
            },
            {
                path: '/vantop-util/math-helper/toNumber',
                title: 'toNumber',
                component: load('math-helper/toNumber'),
            },
            {
                path: '/vantop-util/math-helper/toFixed',
                title: 'toFixed',
                component: load('math-helper/toFixed'),
            },
            {
                path: '/vantop-util/math-helper/round',
                title: 'round',
                component: load('math-helper/round'),
            },
            {
                path: '/vantop-util/math-helper/add',
                title: 'add',
                component: load('math-helper/add'),
            },
            {
                path: '/vantop-util/math-helper/subtract',
                title: 'subtract',
                component: load('math-helper/subtract'),
            },
            {
                path: '/vantop-util/math-helper/multiply',
                title: 'multiply',
                component: load('math-helper/multiply'),
            },
            {
                path: '/vantop-util/math-helper/divide',
                title: 'divide',
                component: load('math-helper/divide'),
            }
        ],
    },
    {
        title: '浏览器助手',
        children: [
            {
                path: '/vantop-util/browser',
                title: '使用',
                component: load('browser/README'),
            },
            {
                path: '/vantop-util/browser/loadStyle',
                title: 'loadStyle',
                component: load('browser/loadStyle'),
            },
            {
                path: '/vantop-util/browser/UA',
                title: 'UA',
                component: load('browser/UA'),
            },
            {
                path: '/vantop-util/browser/CookieHelper',
                title: 'CookieHelper',
                component: load('browser/CookieHelper'),
            },
            {
                path: '/vantop-util/browser/LocalStorage',
                title: 'LocalStorage',
                component: load('browser/LocalStorage'),
            },
            {
                path: '/vantop-util/browser/SessionStorage',
                title: 'SessionStorage',
                component: load('browser/SessionStorage'),
            }
        ],
    }
];
