import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {TabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DummyScreen from './DummyScreen';
import tabStyles from './styles';
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    }
});

export default MainScreen = TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Dummy: {
        screen: DummyScreen
    },
    Dummy2: {
        screen: DummyScreen
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
        showIcon: true
    }
});