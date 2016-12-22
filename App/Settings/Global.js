/**
 * Created by zero on 2016/12/22.
 */
var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');
var Global = { ip :'192.168.3.107',port:':8787',uploadImg:'/ashx/androids.ashx',GetListLaws:'/ashx/AndroidL.ashx',GetLawsDetail:'/ashx/Answer.ashx',ScreenWidth:width,ScreenHeight:height};
//var Global = { ip :'123.57.152.39',port:':8081',uploadImg:'/ashx/androids.ashx',GetListLaws:'/ashx/AndroidL.ashx',GetLawsDetail:'/ashx/Answer.ashx',ScreenWidth:width,ScreenHeight:height};

module.exports = Global;