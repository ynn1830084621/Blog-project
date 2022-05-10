//统一的接口管理文件
let ipUrl = 'http://127.0.0.1:7001/default/';
let servicePath = {
    getArticleList : ipUrl + 'getArticleList',//首页文章列表接口
    getArticleById : ipUrl + 'getArticleById/',//文章详情页接口
    getTypeInfo : ipUrl + 'getTypeInfo',//文章分类信息接口
    getListById : ipUrl + 'getListById/',//根据类别ID获得文章列表接口
}
export default servicePath