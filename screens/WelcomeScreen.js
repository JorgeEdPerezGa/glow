import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to HYPERGLOW' },
  { text: 'Respond daily quesions, slide right for yes and left for no.' },
  { text: 'test' }
];

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={ SLIDE_DATA }/>
    );
  }
}

export default WelcomeScreen;
