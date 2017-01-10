/**
 * Created by zero on 2016/12/13.
 */
//import Global from '../Settings/GlobalVariable'
var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');
var Global =
    { ip :'192.168.3.106',port:':8787',
        uploadImg:'/ashx/AndroidS.ashx',GetListLaws:'/ashx/AndroidL.ashx',GetLawsDetail:'/ashx/Answer.ashx',
        GetPersonList:'/ashx/AndroidS.ashx',
        LoginCheck:'/ashx/logincheck.ashx',
        ProName:'阳光征收房屋土地管理系统',//项目名称
        ProVersions:'V2.0',
        ProStatement:'评估宝软件开发有限公司.版权所有',
        userId:'0', //帐号ID
        proID:'0',  //项目ID
        propertyID:'0', //产权人ID
        queryType:'0',  //非住宅 住宅
        ChildrenId:'0', //子ID
        imageData:'',   //影像资料
        imageId:'',   //影像资料Id
        ScreenWidth:width,ScreenHeight:height};
//var Global = { ip :'123.57.152.39',port:':8081',uploadImg:'/ashx/androids.ashx',GetListLaws:'/ashx/AndroidL.ashx',GetLawsDetail:'/ashx/Answer.ashx',ScreenWidth:width,ScreenHeight:height};

module.exports = Global;

//type: 1 获取产权人列表  2 获取产权人住宅非住宅 3 产权人住宅 非住宅提交信息
//queryType: 0 非住宅 1 住宅