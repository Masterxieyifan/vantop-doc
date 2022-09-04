<!--
 * @Author: lingyong.zeng
 * @Date: 2022-04-12 11:30:06
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-04-15 11:06:32
 * @Description: 
 * @FilePath: /vantop-docs/src/views/master-design/Tour.md
-->
## Tour 用户指引

### 基础用法
:::demo

```html
<template>
    <div>
        <el-button id="tour-step-1" type="primary">创建</el-button>
        <el-button id="tour-step-2">导出</el-button>
        <el-button id="tour-step-3">授权</el-button>
        <md-tour
            v-if="tourVisible" 
            ref="myTour" 
            name="myTour" 
            :steps="steps"
            :callbacks="tourCallback"
        >
        </md-tour>
        <el-button type="text" @click="startTour">
            开始指引
        </el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tourVisible: true,
                tourCallback: {
                    onStart() {
                        console.log('开始');
                    },
                    onStop() {
                        console.log('结束了');
                    },
                    onNextStep: current => {
                        // 使用 this 时声明箭头函数
                        console.log('下一步');
                    },
                    onSkip() {      
                        console.log('跳过');
                    },
                    onFinish() {    
                        console.log('完成');
                    }
                },
                steps: [
                    {
                        id: "tour-step-1",
                        target: '#tour-step-1',
                        content: `点击此处进入「创建数据」!`,
                        params: {
                            placement: 'left',
                            enableScrolling: false,
                        }
                    },
                    {
                        id: "tour-step-2",
                        target: '#tour-step-2',
                        content: `点击此处进行「导出数据」!`,
                        params: {
                            placement: 'top',
                            enableScrolling: false,
                        }
                    },
                    {
                        id: "tour-step-3",
                        target: '#tour-step-3',
                        content: `点击此处进行「权限授予」!`,
                        params: {
                            placement: 'top',
                            enableScrolling: false,
                        }
                    },
                ]
            };
        },
        mounted() {
            // this.$refs['myTour'].start()
        },
        methods: {
            startTour() {
                this.$refs['myTour'].start()
            }
        }
    }
</script>
```
:::


### Tour Attributes
| 参数名称             | 描述             | 类型     |是否必须 |默认值  |
| --------------------| ----------------| --------| -------| ------|
| steps               | 指引步骤内容      | Array | 否      |[]  |


### Tour Methods
| 方法名称             | 说明             | 参数     |
| --------------------| ----------------| --------| 
| start               | 开始显示第几个指引（参数支持传入id或索引） | (start: Number/String） | 


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
```