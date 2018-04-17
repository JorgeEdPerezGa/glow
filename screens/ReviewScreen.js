
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, Linking } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = (props) => {
    const { navigate } = props.navigation;

    return {
      // title: 'ABOUT',
      headerRight: (
        <Button
          title = "ABOUT US"
          onPress = {() => navigate('settings')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
        />
      ),
      tabBarIcon:  ({ tintColor }) => {
        return <Icon name='nature-people' size={30} color={tintColor} />;
      }
      // style: {
      //   marginTop: Platform.OS === 'android' ? 24 : 0
      // }
    }
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.titleText}>ANXIETY DISORDERS</Text>
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
        <Text style={styles.sourceText}>information provided by</Text>
        <Text style={[styles.sourceText, {color: 'blue', marginTop: 0}]}
          onPress={() => Linking.openURL('https://adaa.org/')}>
          {' Anxiety and Depression Association of America'}
        </Text>
      </ScrollView>
    )
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
  paragraphText: {
    fontSize: 20,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    // color: '#1c4f67'
  },
  sourceText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  item: {
    fontSize: 18,
    marginTop: 0,
    marginLeft: 20,
    marginBottom: 20,
    color: '#3d3c3c'
  }
});

export default ReviewScreen;
