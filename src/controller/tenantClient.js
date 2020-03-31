/**

 @Name：layuiAdmin 用户相关操作配置文件
 @Author：jason
 @Site：http://www.layui.com/admin/
 @License：LPPL

 */

layui.define(function(exports){
    //对外暴露的接口
    exports('tenantClient', {
        listUrl: '/tenant/selectTenantByKeyValue'
    });
});