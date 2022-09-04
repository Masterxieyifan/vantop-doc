## 更新日志

### 0.0.25
*2022-07-14*
#### 优化
- Table
    - 渲染优化
    - 组件单例化
- ListTable
    - 固定列渲染优化
- Popover / Preview
    - 单例化
- 指令
    - 新增 v-hint 指令
    - 新增 v-lazy 图片懒加载指令

### 0.0.24
*2022-07-01*
#### 新特性
- transfer
    - 新增 target-order 参数
#### Bug修复
- 指令
    - 因与基础组件库 v-clickoutside 的冲突，移除 clickoutside 全局指令
- PageFrame
    - 修复事件监听移除时出现的错误
    - 样式修复

### 0.0.23
*2022-06-09*
#### 新特性
- 指令
    - 新增全局公共指令
#### Bug修复
- AdvancedSearch
    - 修复 TAB 切换高级搜索URL数据/重置条件显示异常
    - 修复 SelectTree 选中时没有高亮问题
- Sidebar
    - 修复异步数据加载时 $tree undefined 报错
    - 修复自定义 label 属性时，搜索结果异常问题
    - 修复 defaultExpandAll 失效问题
    - 修复 check-change 回调方法多次触发问题
- ImportDialogue
    - 新增 data 属性穿透
- PageList
    - 修复未开启 urlHash 时仍自动带上 urlHash
- table
    - 修复 toolbar 样式展示问题

### 0.0.22
*2022-05-23*
#### 新特性
- Sidebar
    - 新增 Sidebar 侧边栏组件
#### 优化
- PageList
    - 侧边栏样式与交互优化


### 0.0.21
*2022-05-17*
#### 新特性
- PageFrame
    - 新增 PageFrame 列表模板组件
- IndexElement
    - 新增 IndexElement 指标元素组件
- CustomTarget
    - 新增 CustomTarget 指标考模板组件

### 0.0.20
*2022-05-12*
#### 新特性
- Import Dialogue
    - 新增自定义触发源配置
    - 新增是否需要自动上传配置
#### 优化
- Select Tree
    - 当配合 Advanced Search 组件使用时，多选情况下默认展示确认框
    - 选中时默认聚焦搜索框
    - 样式优化
- PageList
    - 帮助中心跳转逻辑调整
    - 新增是否展示刷新按钮配置
    - 新增是否展示跳转帮助中心按钮配置
- Advanced Search
    - 默认多选下拉组件，自动替换成 Select Tree 组件
#### Bug 修复
- Select Tree
    - 修复没有选中值点击确认按钮报错
    - 修复先清空下拉值再清空选中值时,label回显未清空问题

### 0.0.19
*2022-04-26*
#### 新特性
- Tour
    - 新增 MdTour 组件
- TourStep
    - 新增 MdTourStep 组件

### 0.0.18
*2022-04-21*
#### 优化
- PageList
    - 顶部栏样式优化
- AdvancedSearch
    - 重置筛选文案调整
- Table
    - 移除全局监听事件优化
#### Bug修复
- PageList
    - 修复 aside 侧边栏样式影响
    - 修复超过2个tab嵌套使用时，切换tab，缓存pageHandbook操作手册说明
### 0.0.17
*2022-04-11*
#### 新特性
- Fullscreen
    - 新增 md-fullscreen 全屏组件
- Charts
    - 新增渲染完成事件 init
    - 代码优化
- PageList
    - 新增帮助手册
    - 新增帮组中心
    - 新增刷新功能
- InputNumber
    - 新增 startDisabled \ endDisabled 属性
    - 支持 form 表单校验
#### 优化
- ImportDialogue
    - 代码优化
    - 样式优化
- AdvancedSearch
    - 修复优化代码造成列表页面 TAB 切换报错
- PageList
    - 修复优化计算属性版本引发的逻辑错误

### 0.0.16
*2022-03-25*
#### 优化
- AdvancedSearch
    - watch 监听增加防抖
    - 优化逻辑代码
- PageList
    - 代码优化
- DetailFrame
    - 底部操作栏样式居中
### 0.0.15
*2022-03-21*
#### 新特性
- Table
    - Columns 新增 children 属性，支持分组表头配置
- ListTable
    - 表头排序支持重置排序功能
- SelectTree
    - 新增严格过滤支持，过滤后数据选择不影响原数据
#### 优化
- ListTable
    - 首次 Loading 状态下，不展示 Empty 插槽内容
- Charts
    - Dom 首次渲染优化
    - 事件绑定机制优化
- MultipleInput
    - 样式优化
- Timeline
    - 样式优化
#### Bug 修复
- Charts
    - resize 事件失效修复

### 0.0.14
*2022-03-07*
#### 优化
- ListTable
    - v-show 替换 v-if，避免远程存储多次触发 
    - 优化 tableStorage 请求逻辑
    - width/min-width 宽度适配调整

### 0.0.13
*2022-02-25*
#### 优化
- ListTable
    - 默认开启 storage 配置

### 0.0.12
*2022-02-22*
#### 优化
- ListTable
    - 默认开启远程排序配置

### 0.0.11
*2022-02-10*
#### 新特性
- MultipleInput
    - 新增输入框自定义占位文本
#### 优化
- Empty
    - 修改 empty 默认图片
- Timeline
    - 修改操作人文案
- DetailFrame
    - 去除顶部操作栏间距
    - 优化顶部动画
### 0.0.10
*2022-01-12*
#### 新特性
- Render
    - 新增 MdRender 组件
#### Bug修复
- table
    - 修复筛选 toolbar 层级过高
#### 优化
- Charts
    - 修改 empty 插槽默认值
- PageList
    - 修改 tabs 样式

### 0.0.9
*2021-12-24*
#### 新特性
- Scrollbar
    - 新增 MdScrollbar 组件
- LoadingButton
    - 新增 MdLoadingButton 组件
- StorageHash
    - 新增 SelectInputSelect 支持
#### 优化
- Empty
    - 修改 Empty 组件 title 和 description 默认值
- PageList
    - 头部 UI 样式修改
- DetailFrame
    - 按钮配置增加 validator 属性
    - 增加自定义按钮布局 operationsLayout 属性
- ModuleCard 
    - 阴影使用 css 变量

### 0.0.8
*2021-12-13*
#### 新特性
- SelectTree
    - 新增 node-key 唯一键配置
- ModuleCard
    - 新增 title 插槽
- MultipleInput
    - 新增回车搜索、Shift+回车换行交互
### 0.0.7
*2021-12-07*
#### 新特性
- DetailFrame
    - DetailFrame 顶部右侧支持自定义渲染 headRight

### 0.0.6
*2021-12-06*
#### 新特性
- Timeline
    - Timeline 操作日志时间线组件重构

#### Bug修复
- PageList
    - 修复动态赋值 filterStatus，路由退回选不中问题

#### 优化
- ModuleCard
    - ModuleCard 组件头部增加固定高度


### 0.0.5
*2021-11-26*
#### 新特性
- Time
    - 时间组件倒计时，新增临界值处理

#### Bug修复
- Table
    - 修复多选框与表头未对齐问题
- Preview
    - 修复 flex 布局下，空状态图片未撑开问题
- AdvancedSearch
    - 修复 multiple-input 组件空值判断错误导致的高亮问题
- ListTable
    - 修复 sort-config 属性名未正常解析
### 0.0.4
*2021-11-18*
#### 新特性
- 新增 DetailFrame 组件（详情页布局框架）
- 新增 ModuleCard 组件（带标题/按钮的盒子布局）

#### Bug修复
- Anchors
    - 修复样式层级过低导致遮盖
    - 修复定位滚动导致页面顶部错位
    
### 0.0.3
*2021-11-12*
#### 新特性
- Table
    - 新增 selectionMode 配置项，可快速配置表格选择框模式
    - columns 新增 renderFilter 表头筛选配置
#### Bug修复
- Table
    - 部分场景下滚动条错位问题修复


### 0.0.2
*2021-11-04*
#### 新特性
- Table
    - 空数据默认展示图片和文案修改
    - 新增单元格复制配置功能
- SelectDate
    - 新增 dateReset 属性，可配置当下拉框值变更时是否重置时间控件的值
#### Bug修复
- Table
    - 修复操作列间距问题
    - 修复列配置 toolbar 弹窗超长文本展示异常问题
    - 修复 border 为 full 时，表头边框展示补全问题
- Charts
    - 修复空数据展示异常问题


### 0.0.1
*2021-10-28*
#### 新特性
- All
    - 女娲塑泥造人