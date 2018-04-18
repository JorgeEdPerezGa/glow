import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, Linking, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

class HistoryScreen extends Component {
  static navigationOptions = {
    title: 'YOUR GLOW',
    tabBarIcon:  ({ tintColor }) => {
      return <Icon name='format-list-bulleted' size={30} color={tintColor} />;
    }
  }
  render() {
    return (
      <View style={{backgroundColor: '#3aff7c', flex: 1}}>
        <Text style={styles.titleText}>YOUR GLOW</Text>
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

export default HistoryScreen;
