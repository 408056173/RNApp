/**
 * Created by zero on 2017/1/10.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View, Text
} from 'react-native'
var ImagePicker = require('react-native-image-picker');
var options = {
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
var Platform = require('react-native').Platform;
import Global from '../../Views/Settings/GlobalVariable'
export function clickPicker() {

    ImagePicker.launchCamera(options, (response) => {
        Global.imageConfirm=true;
        console.log('Response = ', response);
        let formData = new FormData();
        let file = {uri: response.uri, type: 'multipart/form-data', name: 'a.jpg'};
        //file:///storage/sdcard0/Pictures/image-3d51110a-68f7-4563-902e-59e72a77856b.jpg
        formData.append("images", file);
        formData.append("proID", Global.proID);
        //formData.append("id", Global.imageId);
        //formData.append("modularid", "258");

        /** '/ashx/getadddwelldata.ashx?action=dtfwlist&ownerid=' + ownerid + "&modularid=" + modularid */
        let url = 'http://' + Global.ip + Global.port + '/ashx/androids.ashx';
        //url ='http://192.168.3.104/imgS/imgS.ashx';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },

            body: formData,
        })
            .then((response) => response.text())
            .then((responseData) => {
                if(Global.imageData!=''&&Global.imageData!=null){
                    Global.imageData = Global.imageData + ',' + responseData;
                }else{
                    Global.imageData = responseData;
                }
                Global.imageConfirm=false;
                console.log('responseData', responseData);
            })
            .catch((error) => {
                console.log('error', error)
            });
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
            const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
            const source = {uri: response.uri, isStatic: true};
        }

        /** this.setState({
            avatarSource: source
        });*/
    });
}
