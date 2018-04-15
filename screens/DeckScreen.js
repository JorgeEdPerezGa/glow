import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Deck'
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