import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = (props) => {
    const { navigate } = props.navigation;

    return {
      title: 'LEARN ABOUT',
      headerRight: (
        <Button
          title = "Settings"
          onPress = {() => navigate('settings')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
        />
      ),
      // style: {
      //   marginTop: Platform.OS === 'android' ? 24 : 0
      // }
    }
  }


  render() {
    return (
      <View>
        <Text>REVIEW SCREEN</Text>
      </View>
    )
  }
}

export default ReviewScreen;