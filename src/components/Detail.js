import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <SafeAreaView style={ {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
        <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('SubDetail') }>
            <Text>Go SubDetail</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

  
