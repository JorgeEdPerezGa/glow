import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Deck from '../src/Deck';

const MARGIN_TOP = '8%';

const data = [
  { id: 1, title:'1/10', text: 'Little interest or pleasure in doing things?', uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FxTz0KsB.png'

  'https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&h=350'
 },
  { id: 2, title:'2/10', text: 'Feeling down, depressed, or hopeless?',
  uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FuXykmXZ.png'

  'https://images.pexels.com/photos/127260/pexels-photo-127260.jpeg?auto=compress&cs=tinysrgb&h=350'
},
  { id: 3, title:'3/10', text: 'Trouble falling or staying asleep, or sleeping too much?', uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FXQmRVyH.png'

  'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
},
  { id: 4, title:'4/10', text: 'Feeling tired or having little energy?', uri:

  //'https://i.imgur.com/lwRXYg3.png'

  'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&h=350'
},
  { id: 5, title:'5/10', text: 'Poor appetite or overeating?', uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FLjABTSk.png'

   'https://images.pexels.com/photos/70861/pexels-photo-70861.jpeg?auto=compress&cs=tinysrgb&h=350'
},
  { id: 6, title:'6/10', text: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down?', uri:
  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2Foyp2bXo.png'

   'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
},
  { id: 7, title:'7/10', text: 'Trouble concentrating on things, such as reading the newspaper or watching television?', uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2F92tpFtm.png'

  'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
},
  { id: 8, title:'8/10', text: 'Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?', uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FSD84YzT.png'

  'https://images.pexels.com/photos/306253/pexels-photo-306253.jpeg?auto=compress&cs=tinysrgb&h=350'
},
  { id: 9, title:'9/10', text: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?', uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2F5G7V1q7.png'

  'https://images.pexels.com/photos/967933/pexels-photo-967933.jpeg?auto=compress&cs=tinysrgb&h=350'
},
  { id: 10, title:'10/10', text: 'Have these problems made it difficult for you to do your work, take care of things at home, or get along with other people?', uri:

  //'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FNFX7wmj.png'

  'https://images.pexels.com/photos/942002/pexels-photo-942002.jpeg?auto=compress&cs=tinysrgb&h=350'
},
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
      <View>
        <Card containerStyle={styles.card}
          key={item.id}
          // title={item.title}
          image={{ uri: item.uri }}
          >
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>
              <Text style={styles.cardText}>
                {item.text}
              </Text>
            </View>
            {/* <Button
              icon={{ name: 'code' }}
              backgroundColor="#03A9F4"
              title="View Now!"
            /> */}
          </Card>
      </View>
    )
  }

  renderNoMoreCards() {
    return (
      <Card>
        <Text style={styles.noMoreCards}>
          {"Those are all of today's questions. See you Tomorrow!"}
        </Text>
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.titleText}>QUESTIONNAIRE</Text>
        <View style={{
          shadowOffset:{ width: 0, height: 35, },
          shadowColor: 'black',
          shadowOpacity: 0.2,
        }}>
          <Deck
            data={data}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#293046',
    backgroundColor: '#202227',
    backgroundColor: '#292b31',
    flex: 1,
  },
  card: {
    marginTop: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 380,
    borderWidth: 0,
    borderColor: '#7b7b7b',
    backgroundColor: '#f3f3f3',
    shadowOffset:{ width: 0, height: 15, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  titleText: {
    zIndex: 1,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 380,
    marginBottom: 30,
    marginTop: 87,
    fontWeight: '400',
    color: '#fff',
    padding: 20,
    backgroundColor: '#e06e69',
    shadowOffset:{ width: 0, height: 20, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 20,
    color: '#e06e69',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 20,
    // color: '#1c4f67'
  },
  noMoreCards: {
    padding: 30,
    backgroundColor:'#e0a669',
    fontSize: 25,
    color: '#fff',
    textAlign: 'center'
  }
});

export default DeckScreen;
