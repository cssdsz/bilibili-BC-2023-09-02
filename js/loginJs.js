function pwdLogin() {
    $('.login-pwd').css('display', 'flex');
    $('.login-phone').css('display', 'none');
    $('.login-right>div>a:nth-child(1)').css('color','#4FA5D9')
    $('.login-right>div>a:nth-child(2)').css('color','#505050')
}
function phoneLogin() {
    $('.login-pwd').css('display', 'none');
    $('.login-phone').css('display', 'flex');
    $('.login-right>div>a:nth-child(1)').css('color','#505050')
    $('.login-right>div>a:nth-child(2)').css('color','#4FA5D9')
}
// 获取密码输入框 得到焦点/失去焦点 执行不同方法
$('.login-pwd div:nth-child(2)>input').on('focus',openEye);
$('.login-pwd div:nth-child(2)>input').on('blur',closeEye);
function openEye(){
    $('.login-box>img:nth-of-type(2)').css('display','none');
    $('.login-box>img:nth-of-type(4)').css('display','none');
}
function closeEye(){
    $('.login-box>img:nth-of-type(2)').css('display','inline');
    $('.login-box>img:nth-of-type(4)').css('display','inline');
}