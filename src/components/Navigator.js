import React, { Component } from 'react';
import {  View } from 'react-native';
import Home from './Home';
import Profile from './Profile';
import Detail from './Detail';
import SubDetail from './SubDetail';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

//安卓端需要加上一個headerRight讓title居中
const navigationOptions = {
    headerStyle: { borderBottomWidth: 0, elevation: 0 },
    headerTitleStyle: { color: '#333', flex: 1, textAlign: 'center' },
    headerTintColor: '#666',
    headerBackTitle: null,
    gesturesEnabled: true,
};

const navigationOptionsWithBack = { ... navigationOptions, headerRight: <View/>};

const tabBarOptions = {
    upperCaseLabel: false,
    indicatorStyle: { height: 0  },
    style: { backgroundColor: '#fff' },
    tabStyle: { height: 49},
    labelStyle: { color: '#333', fontSize: 17, lineHeight: 49 },
}

const Tab = TabNavigator(
    {
    Home: { screen: Home, navigationOptions: { headerTitle: 'Home', ...navigationOptions } },
    Profile: { screen: Profile, navigationOptions: { headerTitle: 'Profile', ...navigationOptions } },
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        lazy: true,
        tabBarOptions,
    }
)


export default Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        Detail: { screen: Detail, navigationOptions: { headerTitle: 'Detail', ...navigationOptionsWithBack } },
        SubDetail: { screen: SubDetail, navigationOptions: { headerTitle: 'SubDetail', ...navigationOptionsWithBack } },
    },
     {
        headerMode: 'float',
        transitionConfig: () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })
    }
)
