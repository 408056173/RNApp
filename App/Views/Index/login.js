/**
 * Created by zero on 2017/1/3.
 */
import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    Picker,
    ActivityIndicator,
    Image,
    Alert,
} from 'react-native'
var ProgressBar =require('ProgressBarAndroid');
import Button from 'apsl-react-native-button'
//import {ajax} from '../../Network'
//--import styleUtils from '../../Styles'
//import {clickPicker} from '../../Views/Camera'
import Global from '../Settings/GlobalVariable'

export default class LoginView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ID: '0',
            loginuser: 'liu',
            loginpwd: '123456',
            loadShow:false,
        }
    }

    submitLogin(queryType) {
        //queryType 0 非住宅 1 住宅
        //alert(1)
        this.setState({
            loadShow:true
        })
        setTimeout(() => {
            this.setState({
                loadShow:false
            })
        }, 2000)

        let json = {
            usr:this.state.loginuser,
            psd:this.state.loginpwd,
            action:"logcheck"
        }
        //初始化
        let url = 'http://' + Global.ip + Global.port + Global.GetPersonList; //获取权属人列表url 引入Global

        let query= 'type=24&action=logcheck&usr='+ this.state.loginuser + '&psd=' + this.state.loginpwd;
        //type 3 提交信息
        /*ajax({
            url: url,
            query:query,
            method: 'post',
            headers:'text',
        }).then(res => {
            if (res == 'wronguser') {//有户名或密码错误
                Alert.alert('', '用户名或密码错误',[]);
            }else if(res == 'engaged'){
                Alert.alert('操作提示', '您登录的用户可能正在登录或者上次登录未安全退出，是否强制登录？',
                    [
                        {text:'确定',onPress:()=>this.Login()},
                        {text:'取消',onPress:()=>console.log('你点击了确定~')},
                    ]);
            }else{
                Global.userid = res;
                this.props.navigator.push({
                    id: 'index',
                    params: {

                    },
                })
            }
        }).catch((error) => {
            Alert.alert('', '提交失败！', [])
        });*/
    }

    Login() {
        let json = {
            usr: this.state.loginuser,
            psd: this.state.loginpwd,
            action: "login"
        }
        let url = 'http://' + Global.ip + Global.port + Global.GetPersonList ; //获取权属人列表url 引入Global
        let query = 'type=24&action=login&usr=' + this.state.loginuser + '&psd=' + this.state.loginpwd;
     /*   ajax({
            url: url,
            query: query,
            headers: 'text',
        }).then(res => {
                if (res == "fail") {
                    Alert.alert('操作提示', '用户名或密码错误！', [])
                }else{
                    Global.userid = res;
                    this.props.navigator.push({
                        id: 'index',
                        params: {
                            //id: res
                        },
                    })
                }
            }
        ).catch((error) => {
            Alert.alert('操作提示', '登录失败！', [])
        });*/
    }

    render() {

        /*  if(this.state.loadType==0)
         {
         return( <View style={[styles.container, styleUtils.containerShadow]}>
         <ActivityIndicator
         style={[{margin:10}, {backgroundColor:'#cccccc'}, {height: 80}]}
         size="large"/>
         </View>)
         }*/
        return (

            <View style={[styles.container,]}>
                <View style={styles.textContainer}>

                    <ScrollView>
                        <View style={{}}>
                            <Text style={[styles.title]}>{Global.ProName}{Global.ProVersions}</Text>
                           {/* <Image style={styles.style_image}
                                   source={require('../../assets/IMG.PNG')}/>*/}
                            <TextInput placeholder={'用户名'} transparent="#fff" underlineColorAndroid="#fff" onChangeText={(val)=>this.setState({loginuser:val,loginpwd:''})}
                                       style={styles.textInput}>{this.state.loginuser}</TextInput>
                            <TextInput placeholder={'密码'} underlineColorAndroid="#fff" secureTextEntry={true} onChangeText={(val)=>this.setState({loginpwd:val})}
                                       style={styles.textInput}>{this.state.loginpwd}</TextInput>
                        </View>
                        <Button style={styles.logoutButton} onPress={() => this.submitLogin()}
                                textStyle={styles.logoutButtonFontsize}>登录</Button>
                        <Text style={styles.Statement}>{Global.ProStatement}</Text>
                    </ScrollView>
                    {this.state.loadShow==true &&
                    <View
                        style={{ flex: 1,alignItems: 'center',position: 'absolute',opacity:0.5, justifyContent: 'center'}}
                    >
                        <ActivityIndicator
                            style={{height: Global.ScreenHeight,width:Global.ScreenWidth+1,backgroundColor:'#383838',  alignItems: 'center',justifyContent: 'center', padding: 8}}

                            color='#fff'
                            size="large"/>
                    </View>}
                    {

                    }
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    style_image: {
        borderRadius:10,
        height: Global.ScreenWidth - 150,
        width: Global.ScreenWidth - 15,
        marginTop: 1,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
    },
    textContainer: {
        //...styleUtils.containerBg,
        flex: 1,
        backgroundColor: '#A7022B',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -1,
        paddingTop: 15
    },
    appNameView: {
        marginTop: 25,
    },
    appNameText: {
        fontSize: 20,
        color: '#666'
    },
    Statement:{
        color: '#fff',
        alignSelf: 'center',
    },
    text: {
        left: -45,
        color: '#111',
    },
    title: {
        fontSize: 36,
        color: '#fff',
        width: Global.ScreenWidth - 50,
        borderBottomColor: '#6c6c6c',
        marginBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    textInput: {
        //left:60,
        borderRadius:5,
        width: Global.ScreenWidth - 130,
        color: '#000',
        fontSize: 16,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderBottomColor: '#fff',
        alignSelf: 'center',
    },
    Picker: {
        left: 60,
        width: Global.ScreenWidth - 150,
        marginTop: -30,
        borderBottomColor: '#6c6c6c',
        alignItems: 'center',
    },
    view2: {
        alignSelf: 'center',
        padding: 5,
        margin: 5,
    },
    logoutButton: {
        backgroundColor: '#ff3b30',
        borderWidth: 0,
        margin: 10,
        marginTop: 40
    },
    logoutButtonFontsize: {
        fontSize: 18,
        color: 'white'
    },
})

