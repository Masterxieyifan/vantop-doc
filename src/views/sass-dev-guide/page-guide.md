<!--
 * @Author: lingyong.zeng
 * @Date: 2022-04-14 14:00:54
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-04-15 11:06:07
 * @Description: 
 * @FilePath: /vantop-docs/src/views/sass-dev-guide/page-guide.md
-->
### 页面用户指引

1. 用户指引页面仅针对菜单对应的页面（权限控制逻辑与菜单同样）

2. 当前页面浏览指引时：ESC/跳过/完成后，该页面将不再显示指引

#### 使用步骤

1. 从 `@nextop/nextop-mixins` 引入 `pageTour`

2. 配置步骤数据，指定挂载节点

3. 当前页面插入 `<md-tour/>` 组件

4. 在需要使用调用指引显示


#### 代码案例

```html
<template>
    <md-page-list :page-config="pageConfig" ref="pageList">
        <template #search>
            //...
        </template>
        <template #table>
           //...
        </template>
        
        <!-- 用户指引: tourVisible/tourCallback 来自 pageTour 的 mixins -->
        <md-tour
            v-if="tourVisible"
            ref="pageTour"
            name="pageTour"
            :steps="steps"
            :callbacks="tourCallback"
        >
        </md-tour>
    </md-page-list>
</template>

<script>
import { operateStorage, pageTour } from '@nextop/nextop-mixins';

export default {
    mixins: [operateStorage, importData, pageTour],         // 引入pageTour的mixin
    data() {
        return {
            steps: [    // 指引步骤数据
                {
                    id: 'tour-step-1',
                    target: '#tour-step-1',                 // 定位节点
                    content: '点击此处进入「创建数据」!',       // 内容
                    params: {                               // 其它配置
                        placement: 'left',
                    }
                },
                {
                    id: 'tour-step-2',
                    target: '#tour-step-2',
                    content: '点击此处进行「导入/导出数据」!',
                    params: {
                        placement: 'top',
                    }
                },
                {
                    id: 'tour-step-3',
                    target: '#tour-step-3',
                    content: '点击此处进行「快捷搜索」!',
                    params: {
                        placement: 'top',
                    },
                    // before 方法的使用请参照文档下方
                    // 针对按钮可能平铺显示或在更多按钮中，请配置以下这行代码
                    before: () => this.$refs['pageList'].checkInMoreBtn('#tour-step-3')
                },
            ],
            pageConfig: {
                skeleton: true,
                pageTitle: this.$route.name,
                operationBtns: [
                    {
                        id: 'tour-step-1'        // 指定ID（以便用户指引定位）
                        text: '创建BOM',
                        key: 'add',
                    },
                    {
                        type: 'Render',
                        render: () => (
                            <FileHandle
                                id="tour-step-2"  // 指定ID（以便用户指引定位）
                            >
                            </FileHandle >
                        )
                    },
                ],
            },
            filterConditions: [
                {
                    id: 'tour-step-3',            // 指定ID（以便用户指引定位）
                    label: '快捷搜索',
                    prop: 'contains-name',
                    status: 'fixed',              // 需要指引的条件请设置为固定条件
                    value: ['1', ''],
                    render: {
                        options: [
                            {
                                value: '0',
                                label: '主体物料查询',
                            },
                            {
                                value: '1',
                                label: '包含物料查询',
                            }
                        ]
                    },
                },
                //...
            ],
        };
    },
    async mounted() {
        const queryParams = await this.$refs.advancedSearch.init();
        this.pageConfig.skeleton = false;
        this.toQuery(queryParams);
    },
    methods: {
        async toQuery(queryParams) {
            const params = this.preHandleParams(queryParams, {
                filterEmpty: true,
                joinProps: this.joinProps,
            });

            // 表格查询
            const { records } = await this.$refs['listTable'].queryTable(params);

            // 显示用户指引（如果要等到表格加载后再显示指引，请用 await 调用 queryTable)
            this._initGuidePromise.then(() => {
                this.$refs['myTour']?.start();
            });
        },
    }
};
</script>
```


### before() UI step functions
如果你需要在某个步骤之前进行 UI 设置工作，您可以在任何/每个步骤中包含一个 `before` 函数。此函数将在 `start/nextStep/previousStep` 呈现之前被调用。该函数必须返回一个 `Promise`。当 `start/nextStep/previousStep` 被触发时调用该函数。当 `Promise` 被拒绝时，它不会移动到下一步或上一步。如果 `Promise` 得到解决，那么它将朝着指定的方向移动。

当您需要在步骤之间更改屏幕上显示的内容时使用它。例如，您可能想要隐藏一组菜单并打开一个屏幕，或者您想要执行异步操作。这在单页应用程序中特别有用。

```js
steps: [
  {
    target: '#v-step-0',  // We're using document.querySelector() under the hood
    content: `Discover <strong>Vue Tour</strong>!`,
    before: type => new Promise((resolve, reject) => {
      // Time-consuming UI/async operation here
      resolve('foo')
    })
  }
]
```