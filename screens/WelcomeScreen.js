import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';


const SLIDE_DATA = [
  { text: 'Welcome to HYPERGLOW', color: 'green' },
  { text: 'Respond daily quesions, slide right for yes and left for no.', color: 'blue' },
  { text: 'test', color: 'gray' }
];

class WelcomeScreen extends Component {
  state = { 
    token: null 
  }

  componentWillMount = async() => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
       this.props.navigation.navigate('deck');
    } else {
      this.setState({ token });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides
        data={ SLIDE_DATA }
        onComplete={this.onSlidesComplete}/>
    );
  }
}

export default WelcomeScreen;
