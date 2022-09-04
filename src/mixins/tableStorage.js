/*
 * @Author: lingyong.zeng
 * @Date: 2021-04-26 09:35:29
 * @LastEditors: 蔡远程
 * @LastEditTime: 2021-08-26 14:43:51
 * @Description:
 */
import { SessionStorage, } from '../storage';
import { isObjDeepEqual, isEmpty, isString, isBoolean, cloneDeep, } from '@master_vantop/vantop-util';

// 根据本地列配置生成用于远程存储的数据结构
const generateColumnPropsByLocal = (localColumnsProps) => localColumnsProps.map(({ prop, visible = true, }) => ({
    prop,
    visible,
}));

// 比对本地/远程列配置并生成返回列配置数据
const generateColumnProps = (localColumnsProps, storageColumnProps) => {
    if (isEmpty(localColumnsProps)) {
        return [];
    }

    const _localColumnsProps = JSON.parse(JSON.stringify(localColumnsProps));
    let columnsProps = [];
    // 根据远程存储的顺序来生成
    if (isEmpty(storageColumnProps)) {
        // 无远程存储按本地列配置生成
        columnsProps = generateColumnPropsByLocal(localColumnsProps);
    } else {
        if (localColumnsProps.length !== storageColumnProps.length) {
            // 本地与远程字段项不匹配：按本地列配置生成
            columnsProps = generateColumnPropsByLocal(localColumnsProps);
        } else {
            // 有远程存储按远程存储顺序组合
            for (const storageItem of storageColumnProps) {
                let propValue, prop, visible;
                if (isString(storageItem)) {
                    propValue = storageItem;
                    prop = storageItem;
                    visible = true;
                } else {
                    prop = propValue = storageItem.prop;
                    visible = isBoolean(storageItem.visible) ? storageItem.visible : true;
                }
                const idx = _localColumnsProps.findIndex(localItem => localItem.prop === propValue);
                if (idx > -1) {
                    _localColumnsProps.splice(idx, 1)[0];
                    columnsProps.push({
                        prop,
                        visible,
                    });
                } else {
                    // 本地与远程字段项不匹配：按本地列配置生成
                    columnsProps = generateColumnPropsByLocal(localColumnsProps);
                    break;
                }
            }
        }
    }
    return columnsProps;
};

export const tableStorage = {
    data() {
        return {
            tableRefKey: 'tableInstance',
            storageColumnProps: [],
            isInitiatedStorage: false,
        };
    },
    computed: {
        tableInstance() {
            return this.$refs[this.tableRefKey] || null;
        },
    },
    mounted() {
        this.__checkStorage();
    },
    methods: {
        __getTableInstance() {
            return this.$refs[this.tableRefKey] || null;
        },
        __getColumns() {
            return this.__getTableInstance().columns;
        },
        __checkStorage() {
            const tableInstance = this.__getTableInstance();
            if (!tableInstance) {
                throw new Error(`Use table storage function must either provide a ref key named "${this.tableRefKey}" or overwirte the variable tableRefKey into your owns!`);
            }
            // ensure it enable the storage func
            if (tableInstance.storage) {
                const _columns = this.__getColumns();

                if (isEmpty(_columns)) {
                    return;
                }

                SessionStorage.getItem(tableInstance.storageKey).then(res => {
                    this.isInitiatedStorage = true;
                    if (res) {
                        const props = generateColumnProps(_columns, res);
                        this.storageColumnProps = props;
                        SessionStorage.updateItem(tableInstance.storageKey, props).catch(err => {
                            // eslint-disable-next-line no-console
                            console.error(`[Error] update columns failurely ${err} (tableStorage.js)`);
                        });
                    } else {
                        // in case it do not have the initial val
                        const props = generateColumnProps(_columns);
                        this.storageColumnProps = props;
                        SessionStorage.setItem(tableInstance.storageKey, this.storageColumnProps);
                    }
                }).catch(err => {
                    this.storageColumnProps = generateColumnProps(_columns);
                    // eslint-disable-next-line no-console
                    console.error(`[Error] get columns failurely ${err} (tableStorage.js)`);
                });
            }
        },
        storageHandleColumns(columns, checkStore = false) {
            if (checkStore) {
                this.__checkStorage();
                return;
            }

            const tableInstance = this.__getTableInstance();
            if (!tableInstance.storageKey) {
                throw new Error('Must provide a storage key! ([mixins] tableStorage.js)');
            }

            const columnsProps = columns.map(({ prop, visible = true, }) => ({
                prop,
                visible,
            }));

            if (this.isInitiatedStorage && !isObjDeepEqual(this.storageColumnProps, columnsProps)) {
                SessionStorage.updateItem(tableInstance.storageKey, columnsProps).catch(err => {
                    // eslint-disable-next-line no-console
                    console.error(`[Error] update columns failurely ${err} (tableStorage.js)`);
                });
                this.storageColumnProps = cloneDeep(columnsProps);
            }
        },
    },
};
