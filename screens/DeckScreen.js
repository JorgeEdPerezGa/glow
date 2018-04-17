import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Deck from '../src/Deck';

const data = [
  { id: 1, title:'Q. 1/10', text: 'Little interest or pleasure in doing things?', uri: 'https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { id: 2, title:'Q. 2/10', text: 'Feeling down, depressed, or hopeless?', uri: 'https://images.pexels.com/photos/860378/pexels-photo-860378.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { id: 3, title:'Q. 3/10', text: 'Trouble falling or staying asleep, or sleeping too much?', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, title:'Q. 4/10', text: 'Feeling tired or having little energy?', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, title:'Q. 5/10', text: 'Poor appetite or overeating?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 6, title:'Q. 6/10', text: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, title:'Q. 7/10', text: 'Trouble concentrating on things, such as reading the newspaper or watching television?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 8, title:'Q. 8/10', text: 'Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 9, title:'Q. 9/10', text: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 10, title:'Q. 10/10', text: 'How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
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
      <Card containerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 350 }}
        key={item.id}
        title={item.title}
        image={{ uri: item.uri }}
        >
        <Text style={styles.cardText}>
          {item.text}
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
        <Text style={styles.titleText}>NO DAY BUT TODAY</Text>
        <Deck
          data={data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 50,
    marginBottom: 40,
    // color: '#1c5068'
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: 20,
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 20,
    // color: '#1c4f67'
  },
});

export default DeckScreen;
