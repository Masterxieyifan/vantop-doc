<!--
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2021-10-12 14:55:20
 * @LastEditTime: 2021-10-26 16:05:59
 * @LastEditors: 蔡远程
-->
<template>
    <div class="variable-search">
        <el-input
            class="variable-search--input"
            placeholder="请输入变量名或变量值"
            v-model="search"
            @input="handleSearch"
            clearable
        />
        <template v-for="item in variableList">
            <div
                class="variable-group--block"
                :key="item.name"
            >
                <p class="variable-group--block__title">{{item.name}}</p>
                <template v-for="children in item.children">
                    <div
                        class="variable-item--block"
                        :key="children.name"
                    >
                        <span class="variable-item--block__name">{{children.name}}:</span>
                        <span class="variable-item--block__value">{{children.value}}</span>
                        <span>;</span>
                        <span
                            v-if="children.name && children.name.toLocaleLowerCase().indexOf('color')>-1"
                            class="variable-item--block__color"
                            :style="{'background-color': children.value}"
                        />
                        <el-button
                            iconed
                            class="variable-item--block__copy"
                            type="info"
                            size="small"
                            icon="nt-icon-copy-16"
                            hint="复制"
                            @click="handleCopy(children)"
                        />
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
import CSS_VARIABLES_CONFIG from './variable';
import { copyText, isEmpty, } from '@master_vantop/vantop-util';
export default {
    name: 'VariableSearch',
    data() {
        return {
            variableList: CSS_VARIABLES_CONFIG,
            search: '',
        };
    },
    methods: {
        handleCopy(data) {
            copyText(`var(${data.name}, ${data.value})`).then(()=>{
                this.$message.success(`${data.name} 变量复制成功`);
            }).catch(()=>{
                this.$message.error(`${data.name} 变量复制失败`);
            });
        },
        handleSearch(val) {
            const tempVariable = JSON.parse(JSON.stringify(CSS_VARIABLES_CONFIG));
            if (isEmpty(val)) {
                this.variableList = tempVariable;
                return;
            }
            const newVal = val.toLocaleLowerCase();
            const result = tempVariable.filter(item=>{
                item.children = item.children.filter(child=>child.name.toLowerCase().indexOf(newVal) > -1
                    || child.value.toLowerCase().indexOf(newVal) > -1);
                return item.children.length > 0;
            });
            this.variableList = result;
        },
    },
};
</script>

<style scoped lang="scss">
.variable-search {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 3px 24px;
    background-color: #fafafa;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
    display: block;
    word-break: break-all;
    .variable-search--input {
        margin-top: 15px;
        width: 200px;
    }
    .variable-group--block {
        margin: 15px 0;
        &__title {
            color: #408080;
            font-style: italic;
            margin: 0;
        }
    }
    .variable-item--block {
        display: flex;
        align-items: center;
        &__name {
            margin-right: 10px;
        }
        &__value {
            color: #219161;
        }
        &__copy {
            margin-left: 5px;
        }
        &__color {
            display: inline-block;
            width: 15px;
            height: 15px;
            margin-left: 5px;
        }
    }
}
</style>
