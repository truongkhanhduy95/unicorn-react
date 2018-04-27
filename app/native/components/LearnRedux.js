import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import ButtonComp from './ButtonComp';
import Child from './Child';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class LearnRedux extends Component{

    handleIncrease =()=>{
        this.props.counterIncrease();
    }

    handleDecrease =()=>{
        this.props.counterDecrease();
    }

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
                        onPress={this.handleIncrease}/>
                    <ButtonComp
                        title="Decrease"
                        bgColor="orange"
                        onPress={this.handleDecrease}/>
                </View>
            </View>
        );
    } 
}

export default connect(null,actions)(LearnRedux);

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