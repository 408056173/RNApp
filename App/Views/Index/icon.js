/**
 * Created by zero on 2016/12/22.
 */
import React, {
    Component
} from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native'

import icon from '../../Components/Utils/iconfontConf'

export default class iconView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return(
            <View>
                <Text>图标{icon['uniE602']}</Text>
            </View>
        )
    }
}