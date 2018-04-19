import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';


const SLIDE_DATA = [
  { text: 'SWIPE RIGHT TO BEGIN', color: '#E54760' },
  { text: 'WELCOME TO GLOW', color: '#E58100' },
  { text: "GLOW is a mobile application that provides a user a more accurate record of anxiety and depression related disorders", color: '#D4AB35' },
  { text: 'Respond the set of ten daily questions and receive a color reflecting your weekly status', color: '#3CB88D'
  },
  { text: 'Different colors aware the user of a certain status triggering mindfulness in everyday activities', color: '#08A8AB'
  },
  { text: '', color: '#2E639C' }
];

class WelcomeScreen extends Component {
  // state = {
  //   token: null
  // }

  componentWillMount = async() => {
    // let token = await AsyncStorage.getItem('fb_token');
    // if (token) {
    //    this.props.navigation.navigate('deck');
    // } else {
    //   this.setState({ token });
    // }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    // if (_.isNull(this.state.token)) {
    //   return <AppLoading />;
    // }

    return (
      <Slides
        data={ SLIDE_DATA }
        onComplete={this.onSlidesComplete}/>
    );
  }
}

export default WelcomeScreen;
