/**

 @Name：layuiAdmin 公共业务
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：LPPL
    
 */
 
layui.define(function(exports){
  exports('comClient', {
      userDataName : 'userInfo',
      baseUrl : 'http://127.0.0.1:8080',
      appKey: '1a41206d18a4546161d139c02602f413',
      tenantId: 1,
      publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEran3cr5vOBOvB13P8XGC2zJs
H0gHpSxt2BEJvYVxvz0Hd3YIksDcIztkTyZHgPNn5IOph6lwqK4gQAQdeFC1iFjX
X+Ko2GIFz63tiHxMUmX9UO6WgiVr2Nv6MQDDZpICZ9WcHcwX/wckcnGEI+bZ/NM5
rwxNYDyXzqCJU019KQIDAQAB
-----END PUBLIC KEY-----`
  });
});