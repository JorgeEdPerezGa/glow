
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, Linking, Image, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = (props) => {
    const { navigate } = props.navigation;

    return {
      // title: 'ABOUT',
      headerRight: (
        <Button
          title = "MORE ABOUT ANXIETY"
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
      <ScrollView style={{backgroundColor: '#292b31'}}>
        <Text style={styles.titleText}>GLOW</Text>
        <Text style={styles.paragraphText}>is a mobile application that provides a user's clinician the ability to accurately measure and record anxiety and depression related disorders', based on an individuals state in the PHQ-9 scale.</Text>
        <Text style={styles.paragraphText}>The PHQ-9, created by Dr. Kurt Kroenke, is a validated, 9-question tool to assess for the degree of depression present in an individual; the questions help the clinician assess the impact of the patient's symptoms on his or her life.</Text>
        <Text style={styles.paragraphText}>In addition to making criteria-based diagnoses of depressive disorders, the PHQ-9 is also a reliable and valid measure of depression severity. These characteristics plus its brevity make the PHQ-9 a useful clinical and research tool.</Text>
        <Text style={styles.paragraphText}>Anxiety disorders may develop from a complex set of risk factors, including genetics, brain chemistry, personality, and life events.</Text>

        <Text style={styles.sourceText}>To view Dr. Kurt Kroenke's publications, visit</Text>
        <Text style={[styles.sourceText, {color: '#abdce8', marginTop: 0}]}
          onPress={() => Linking.openURL('https://www.ncbi.nlm.nih.gov/pubmed/?term=Kroenke+K%5BAuthor%5D/')}>
          {'PubMed'}
        </Text>

        <Text style={styles.paragraphTextTitle}>CONTRIBUTORS</Text>

        <Image
          style={styles.image}
          source={{uri: 'https://avatars0.githubusercontent.com/u/25073768?s=460&v=4'}}
        />
        <Text style={styles.imageText}>Jorge Ed PerezGa</Text>

        <Image
          style={styles.image}
          source={{uri: 'https://avatars1.githubusercontent.com/u/31218316?s=460&v=4'}}
        />
        <Text style={styles.imageText}>Nyssa Keller</Text>
      </ScrollView>
    )
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
    backgroundColor: '#ed5c8f',
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
    color: '#c9c9c9',
    fontWeight: '500'
  },
  // paragraphText2: {
  //   fontSize: 15,
  //   marginTop: 30,
  //   marginLeft: 20,
  //   marginRight: 20,
  //   marginBottom: 50,
  //   // color: '#1c4f67'
  // },
  paragraphTextTitle: {
    fontSize: 27,
    fontWeight: '400',
    marginBottom: 10,
    color: '#ccc',
    textAlign: 'center',
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'center',
      width: 380,
      marginBottom: 40,
      marginTop: 40,
      fontWeight: '400',
      color: '#fff',
      padding: 20,
      backgroundColor: '#6150ce',
      shadowOffset:{ width: 0, height: 20, },
      shadowColor: 'black',
      shadowOpacity: 0.3,
  },
  sourceText: {
    fontSize: 14,
    // textAlign: 'center',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    color: '#ccc'
  },
  item: {
    fontSize: 18,
    marginTop: 0,
    marginLeft: 20,
    marginBottom: 20,
    color: '#3d3c3c'
  },
  image: {
    width: 400,
    height: 400,
    margin: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageText: {
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    color: '#ccc'
  },
  iconSet: {
    flex: 1
  },
  iconImage: {
    width: 50,
    height: 50,
  }
});

export default ReviewScreen;
