<template>
    <md-page-frame  :pageConfig="pageConfig">
        <!-- 页面模版 搜索 插槽 -->
        <template #search>
            <md-select-input/>
        </template>
        <md-module-card title="PageFrameTab1-card1">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </md-module-card>
        <md-module-card title="PageFrameTab1-card2">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </md-module-card>
    </md-page-frame>
</template>
<script>
export default {
    data(){
        return {
            // 子组件1 配置
            pageConfig: {
                skeleton: true,
                padding: 20,
                // operationBtnsLayout: 'inline',
                pageHandbook: `
                    <h4>操作按钮说明：</h4>
                    <ol>
                        <li>哇巴哇巴哇巴哇巴哇巴哇巴1</li>
                        <li>哇巴哇巴哇巴哇巴哇巴哇巴1</li>
                    </ol>
                `,
                // // 页面 操作 按钮
                // operationBtns: [
                //     {
                //         icon: 'van-add-new-16',
                //         text: '新增',
                //         key: 'add',
                //         click: item => this.handle(item),
                //     },
                // ],
            },
        }
    },
    mounted(){
        setTimeout(() => {
            // 手动 修改子组件骨架屏 状态
            this.pageConfig.skeleton = false;
        }, 1000)
    },
    methods: {
        handle(item){
            console.log(item);
        },
        toQuery() {
            console.log('Tab1');
        },
    }
}
</script>
