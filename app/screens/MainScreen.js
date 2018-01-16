import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeScreen from './HomeScreen';
import DummyScreen from './DummyScreen';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {selectedTab: 'home'};
    }
    
    render() {
        return (
                // <View><Text>xxx</Text></View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('../../public/images/ic_home.png')}/>}
                        renderSelectedIcon={() => <Image source={require('../../public/images/ic_home_active.png')}/>}
                        // badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <HomeScreen />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'dummy'}
                        title="Dummy"
                        renderIcon={() => <Image source={require('../../public/images/ic_knowledge.png')}/>}
                        renderSelectedIcon={() => <Image source={require('../../public/images/ic_knowledge_active.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'dummy'})}>
                        <DummyScreen />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'dummy2'}
                        title="Dummy 2"
                        renderIcon={() => <Image source={require('../../public/images/ic_knowledge.png')}/>}
                        renderSelectedIcon={() => <Image source={require('../../public/images/ic_knowledge_active.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'dummy2'})}>
                        <DummyScreen />
                    </TabNavigator.Item>
                </TabNavigator>
        );
    }
}