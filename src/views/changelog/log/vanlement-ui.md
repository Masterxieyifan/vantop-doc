## 更新日志

### 10.0.13
*2021-05-23*
#### 优化
- menu
    - 样式优化
    - 动画时间优化
- divider\tooltip\cascader
    - 样式优化

### 10.0.12
*2021-04-21*
#### 新特性
- Drawer
    - 新增 posReferTarget 参数，支持指定父级元素为定位参照物。
#### 优化
- Menu
    - 竖直方向菜单优化
- Button
    - iconed 组件尺寸调整
### 10.0.11
*2021-04-02*
#### 新特性
- popoupManager
    - 提供 nextZIndex 方法，获取并递增组件全局 ZIndex 值。
    - 提供 resetZIndex 方法，重置组件全局 ZIndex 值。
#### 优化
- Tree
    - 修复 el-tree 严格过滤下，复选框勾选错误问题
- Button
    - 修复 iconed 类型下，键盘导航导致的 tooltip 激活


### 10.0.10
*2021-03-21*
#### 新特性
- Tree
    - 新增 filter-strictly 严格过滤配置
- Steps
    - 新增自动计算激活步骤功能
#### 优化
- Button
    - 当 hint 为空时，不展示 tooltip
- Rate / Dialog
    - 组件样式优化

### 10.0.9
*2021-02-22*
#### 新特性
- Cascader
    - filterable 为 true 时，默认筛选方法不区分大小写
#### Bug修复
- Input / Select
    - 修复 label 值长度过短时，label 样式重叠覆盖问题
- Transfer
    - 修复按钮对不齐问题
### 10.0.8
*2021-02-10*
#### 新特性
- Alert
    - 新增自定义 icon 配置项
#### 优化
- Tabs
    - 去除按钮类型的下横线
- Badge
    - 修改 info 类型背景色
### 10.0.7
*2021-01-12*
#### 新特性
- Tabs
    - 新样式修改
    - 新增 gutter-card 类型选项卡
    - 新增支持模拟滚动功能
    - 新增 scroll-position 偏移滚动功能
    - 新增溢出折叠功能
- Steps
    - 新样式修改
    - 新增图标弹出层配置功能
    - 新增描述弹出层配置功能
#### Bug修复
- Button
    - 修复 loading 状态下抖动问题
    - 修复 iconed 类型按钮失焦 tooltip 未消失问题

### 10.0.6
*2021-12-13*
#### 新特性
- Drawer
    - 新增 footer 插槽
    - 新增 confirm 和 cancel 事件
#### Bug修复
- Tree
    - 修复控制台 offsetWidth 找不到导致的报错
- CheckableTag
    - 修复 ongoing 选中色值错误
### 10.0.5
*2021-12-06*
#### 新特性
- Tag
    - 新增 large 尺寸
- CheckableTag
    - 新增 CheckableTag 可选标签组件
- CheckableTagGroup
    - 新增 CheckableTagGroup 可选标签组合组件
- Timeline
    - Timeline 时间线组件节点样式修改

### 10.0.4
*2021-11-26*
#### 新特性
- Upload
    - 支持图片宽度的配置（list-width）
- Radio
    - radio-button 新增朴素按钮 plain 配置
    - radio-button 交互样式修改

#### Bug修复
- Dialog
    - 修复全屏弹窗高度不正确
- Select
    - 修复多选情况下，tag 大小展示异常
- Form
    - 修复 form-item label 顶部定位时，样式异常
    - 修复 form-item labe 值更新时，文本溢出省略判断未更新

### 10.0.3
*2021-11-12*
#### Bug修复
- Dialog
    - 修复部分场景下字体模糊问题
- Form
    - 修复 label 文字和星号省略时展示不全问题
#### 优化
- Description
    - 布局重构，改用 Row 栅格布局


### 10.0.2
*2021-11-04*
#### 优化
- Menu
    - 修改最大高度
- Dialog
    - 修改底部间距


### 10.0.1
*2021-10-28*
#### 新特性
- All
    - 盘古开天辟地