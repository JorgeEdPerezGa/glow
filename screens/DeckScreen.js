import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Deck from '../src/Deck';

const data = [
  { id: 1, text: 'Did you exercise today?', uri: 'https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { id: 2, text: 'Did you take prescribed medicine?', uri: 'https://images.pexels.com/photos/860378/pexels-photo-860378.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { id: 3, text: '', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Question 4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 6, text: 'Question 5', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
];

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'QUESTIONNAIRE',
    tabBarIcon:  ({ tintColor }) => {
      return <Icon name='layers' size={30} color={tintColor} />;
    }
  }

  renderCard(item) {
    return (
      <Card
        key={item.id}
        // title={item.text}
        image={{ uri: item.uri }}
        >
        <Text style={{ marginBottom: 10 }}>
        </Text>
        {/* <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        /> */}
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
    return (
      <View>
        <Deck
          data={data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}/>
      </View>
    );
  }
}

export default DeckScreen;
