import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Questions',
    tabBarIcon:  ({ tintColor }) => {
      return <Icon name='mood' size={30} color={tintColor} />;
    }
  }
  render() {
    return (
      <View>
          <Text>Deck Screen</Text>
      </View>
    );
  }
}

export default DeckScreen;