import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DeckScreen from './screens/DeckScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';

const data = [
  { id: 1, text: 'Did you exercise today?', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Did you take your medicine?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Question 3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Question 4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 6, text: 'Question 5', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
];

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
        >
        <Text style={{ marginBottom: 10 }}>
          Jorge
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title='No more cards'>
        <Text style={{ marginBottom: 10 }}>
          There are no more cards.
        </Text>
      </Card>
    )
  }

  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          deck: { screen: DeckScreen },
          history: { screen: HistoryScreen },
          review: StackNavigator({
            settings: { screen: SettingsScreen}
          })
        })
      }
    },
    {
      swipeEnabled: true, // fixes a bug in react navigation
      lazy: false, // fixes a bug in react navigation
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
        <Deck
          data={data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
