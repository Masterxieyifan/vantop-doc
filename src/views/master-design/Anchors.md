## anchors 锚点


### 基础用法
:::demo 传入`anchorList`来生成锚点组件，通过给内容块设置id值来绑定锚点。

```html
<template>
    <div class="anchors-demo-block">
        <div class="anchors-item" id="id-1">内容一</div>
        <div class="anchors-item" id="id-2">内容二</div>
        <div class="anchors-item" id="id-3">内容三</div>
        <md-anchors :anchorList="list"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: 'id-1',
                        label: '内容1',
                    },
                    {
                        id: 'id-2',
                        label: '内容2',
                    },
                    {
                        id: 'id-3',
                        label: '内容3',
                    },
                ]
            }
        }
    }
</script>
```
:::


### Anchors Attributes
| 参数 | 说明 | 类型 |是否必须| 默认值 |
|  ----  | ----  |---- | ---| ---- |
| anchorList | 锚点数组 | Array| 是 | [ { id: 'ID_1', label: '内容1' } ] |


