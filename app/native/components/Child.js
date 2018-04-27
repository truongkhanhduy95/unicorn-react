import React, {Component} from 'react';
import {View, StyleSheet, TextPropertiesAndroid} from 'react-native';
import {connect} from 'react-redux';

export default class Child extends Component{
    render(){
        return(
            <View>
                <Text style={style.text} >{this.props.counter}</Text>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    counter: state.counter;
}

export default connect(null,null)(Child);

const style = StyleSheet.create({
    text: {
        fontSize: 100,
        color: '#000',
    }
});