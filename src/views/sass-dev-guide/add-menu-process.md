## 新增菜单流程

### 1.在运营系统页面新增菜单
地址 `https://admin.nextop.com/erp/menu`

<img src="@img/add-menu-01.png">

填入参数如上图所示，注意菜单编号前缀必须为 `G_`

### 2.在权限后台进行菜单对应权限组的设置
地址 `https://web-development.nextop.com/auth-resource-admin`

<img src="@img/add-menu-02.png">

`如果菜单为一级菜单` 点击新增权限组，然后将运营系统菜单管理页对应菜单的编号粘贴为权限组编码

`如果菜单为二级菜单` 找到一级菜单对应的权限组，点击新增子级权限组，粘贴对应的编码即可

<img src="@img/add-menu-03.png">

### 3.发布权限组
<img src="@img/add-menu-04.png">

发布新增的权限组到指定的租户下，注意发布后数据将下放到对应租户下，不可修改，编码一定填写正确。

### 4.用户设置菜单权限
地址 `https://saas.nextop.com/basicsystem/authority-center/auth-config`

<img src="@img/add-menu-05.png" width="1150px">

在权限配置页面给用户设置对应的权限组权限


### <h3>注意事项</h3>
<h3>目前只同步了何多多租户下的部分用户数据，给用户设置权限时需要登录1888888888账号</h3>

### <h3>HOST配置</h3>
10.0.10.129 saas.nextop.com </br>
10.0.10.122 web-login.nextop.com </br>
10.0.10.122 web-warehouse.nextop.com </br>
10.0.10.122 web-goods.nextop.com </br>
10.0.10.122 web-finance.nextop.com </br>
10.0.10.122 web-customer.nextop.com </br>
10.0.10.122 web-purchase.nextop.com </br>
10.0.10.122 web-demand.nextop.com </br>
10.0.10.129 web-system.nextop.com </br>
10.0.10.122 web-logistics.nextop.com </br>
10.0.10.122 web-sales.nextop.com </br>
10.0.10.122 web-ocr.nextop.com </br>
10.0.10.129 web-basicsystem.nextop.com </br>
10.0.10.129 api.nextop.com </br>
127.0.0.1 local-main.nextop.com </br>
10.0.10.129 admin.nextop.com </br>
10.0.10.162 web-development.nextop.com </br>
