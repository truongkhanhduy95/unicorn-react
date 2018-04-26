import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const ButtonComp = ({title, onPress, bgColor, textColor})=>
(
    <Button
        style={{marginBottom:10}}
        backgroundColor={bgColor}
        textColor={textColor}
        title={title}
        onPress={onPress}/>

);

export default ButtonComp;
