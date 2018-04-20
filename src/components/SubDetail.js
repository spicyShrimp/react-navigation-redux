import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default class SubDetail extends Component {
  render() {
    return (
      <SafeAreaView style={ {flex: 1, justifyContent: 'space-evenly', alignItems: 'center',} }>
        <TouchableOpacity onPress={ ()=>this.props.navigation.goBack() }>
            <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>this.props.navigation.goBack('Tab') }>
            <Text>Go Tab</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};