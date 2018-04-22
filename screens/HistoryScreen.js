import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, Linking, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class HistoryScreen extends Component {
  static navigationOptions = {
    title: 'YOUR GLOW',
    tabBarIcon:  ({ tintColor }) => {
      return <Icon name='lightbulb-outline' size={30} color={tintColor} />;
    }
  }
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  handleUpdate = () => {
    let color = this.props.color
    this.setState({ counter: color })
  }

  render() {
    let newColor = this.state.counter >= 3 ? 'blue' : '#3aff7c';
    return (
      <View
        style={{backgroundColor: newColor, flex: 1}}>
        <Text
          style={styles.titleText}
          onPress={() => this.handleUpdate()}
          >YOUR GLOW</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 380,
    marginBottom: 30,
    marginTop: 87,
    fontWeight: '400',
    color: '#fff',
    padding: 20,
    backgroundColor: '#292b31',
    shadowOffset:{ width: 0, height: 20, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  }
});

export const mapStateToProps = store => ({
  color: store.color
})

export default connect(mapStateToProps)(HistoryScreen);
