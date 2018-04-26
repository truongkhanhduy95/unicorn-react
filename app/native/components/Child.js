import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Child extends Component{
    render(){
        return(
            <View>
                <Text style={style.text} >0</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    text: {
        fontSize: 100,
        color: '#000',
    }
});