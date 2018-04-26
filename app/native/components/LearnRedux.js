import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import ButtonComp from './ButtonComp';


export default class LearnRedux extends Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.parent}>
                    <Child/>
                </View>
                <View style={{flex:1}}>
                    <ButtonComp
                        title="Increase"
                        textColor="#fff"
                        bgColor="#397af8"
                        onPress={() =>{}}/>
                    <ButtonComp
                        title="Decrease"
                        bgColor="orange"
                        onPress={() =>{}}/>
                </View>
            </View>
        );
    } 
}

const style = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center'
    },
    parent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});