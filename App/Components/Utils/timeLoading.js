/**
 * Created by zero on 2016/12/15.
 */
import React, {Component} from 'react'
import{
    View,Text, ToastAndroid,
    ActivityIndicator
}from 'react-native'

class CommonTimeLoading extends Component {
    constructor(props) {
        super(props)
        this.state = {animating: true,time:1000}
    }

    componentDidMount() {
        this.loadType('time');
    }

    loadType(type)
    {
        switch(type)
        {
            case "time":
                setTimeout(() => {
                    this.setState({
                        animating: false
                    })
                    if(this.state.alert){
                        ToastAndroid.showWithGravity('操作成功',ToastAndroid.SHORT,ToastAndroid.CENTER)
                    }
                    setTimeout(() => {
                        this.props.navigator.pop()
                    }, this.state.time)
                }, this.state.time)
                break;
        }
    }

    render() {
        if (!this.state.animating) {
            return ( <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            ><Text></Text></View>)
        } else {
            return (
                <View
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                >
                    <ActivityIndicator
                        style={{height: 80,alignItems: 'center',justifyContent: 'center', padding: 8}}
                        color='#099fde'
                        size="large"/>
                </View>
            )
        }
    }
}

export default CommonTimeLoading
