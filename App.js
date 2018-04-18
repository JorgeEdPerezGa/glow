import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DeckScreen from './screens/DeckScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

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
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        }, {
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
  }, {
    navigationOptions: {
      tabBarVisible: false
    },
    lazy: true
  });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
