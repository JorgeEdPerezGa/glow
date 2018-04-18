import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, Linking, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class SettingScreen extends Component {
  static navigationOptions = (props) => {
    const { navigate } = props.navigation;

    return {
      tabBarIcon:  ({ tintColor }) => {
        return <Icon name='list' size={30} color={tintColor} />;
      }
    }
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#292b31'}}>
        <Text style={styles.titleText}>ABOUT ANXIETY</Text>
        <Text style={styles.paragraphText}>Anxiety disorders are real, serious medical conditions - just as real and serious as physical disorders such as heart disease or diabetes. Anxiety disorders are the most common and pervasive mental disorders in the United States.</Text>
        <Text style={styles.paragraphText}>The term "anxiety disorder" refers to specific psychiatric disorders that involve extreme fear or worry, and includes:</Text>
        <SectionList
          sections={[
            {title: '',
              data: [
                '• generalized anxiety disorder (GAD)',
                '• panic disorder and panic attacks',
                '• agoraphobia',
                '• social anxiety disorder',
                '• selective mutism',
                '• separation anxiety',
                '• specific phobias'
              ]},
              {title: '',
                data: [
                  // 'Obsessive-compulsive disorder (OCD)',
                  // 'posttraumatic stress disorder (PTSD)'
                ]},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Text style={styles.paragraphText}>Obsessive-compulsive disorder (OCD) and posttraumatic stress disorder (PTSD) are closely related to anxiety disorders, which some may experience at the same time as depression.</Text>
        <Text style={styles.paragraphText}>Anxiety disorders may develop from a complex set of risk factors, including genetics, brain chemistry, personality, and life events.</Text>
        <Text style={styles.sourceText}>Information provided by</Text>
        <Text style={[styles.sourceText, {color: '#abdce8', marginTop: 0}]}
          onPress={() => Linking.openURL('https://adaa.org/')}>
          {' Anxiety and Depression Association of America'}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 380,
    marginBottom: 40,
    marginTop: 0,
    fontWeight: '400',
    color: '#fff',
    padding: 20,
    backgroundColor: '#35c6ce',
    shadowOffset:{ width: 0, height: 20, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  paragraphText: {
    fontSize: 20,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    color: '#adadad'
  },
  sourceText: {
    fontSize: 14,
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    color: '#adadad'
  },
  item: {
    fontSize: 18,
    marginTop: 0,
    marginLeft: 20,
    marginBottom: 20,
    color: '#a5b8cc'
  }
});

export default SettingScreen;
