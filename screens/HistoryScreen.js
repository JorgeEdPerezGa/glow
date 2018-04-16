import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class HistoryScreen extends Component {
  static navigationOptions = {
    title: 'History',
    tabBarIcon:  ({ tintColor }) => {
      return <Icon name='sort-variant' size={30} color={tintColor} />;
    }
  }
  render() {
    return (
      <View>
          <Text>History Screen</Text>
      </View>
    );
  }
}

export default HistoryScreen;