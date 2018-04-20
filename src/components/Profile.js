import React, { Component } from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAction, minAction } from '../actions/countAction';

class Profile extends Component {
  render() {
    const { counter, addAction, minAction } = this.props;
    return (
      <SafeAreaView style={ {flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#666'} }>
        <Text>{ counter }</Text>
        <View style={ {width: 300, flexDirection: 'row',justifyContent: 'space-evenly'} }>
        <TouchableOpacity onPress={ ()=>addAction() }>
            <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>minAction() }>
            <Text>Min</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('Detail') }>
            <Text>Go Detail</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

const mapStateToProps = state => ({
  counter: state.count.counter
});

const mapDispatchToProps = {
  addAction,
  minAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  
