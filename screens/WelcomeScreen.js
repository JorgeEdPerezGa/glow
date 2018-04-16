import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to HYPERGLOW', color: 'green' },
  { text: 'Respond daily quesions, slide right for yes and left for no.', color: 'blue' },
  { text: 'test', color: 'gray' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides
        data={ SLIDE_DATA }
        onComplete={this.onSlidesComplete}/>
    );
  }
}

export default WelcomeScreen;
