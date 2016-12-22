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

import Icon from '../Index/icon'

export default class indexView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return(
            <View>
                <Text>index</Text>
                <Icon />
            </View>
        )
    }
}