import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import FavoriteCats from './FavoriteCats.js'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading:true,
      dataSource:null,
      catArray:[],
      favoriteArray:[],
      value:0,
    }
    this.badCatButtonPress = this.badCatButtonPress.bind(this);
    this.goodCatButtonPress = this.goodCatButtonPress.bind(this);
  }
  componentDidUpdate(prevState) {
    if(prevState.dataSource !== this.state.dataSource){
    }
  }

  componentDidMount() {
    this.getNewCat()

    this.getNewCatArray();
    this.getNewCatArray();
    this.getNewCatArray();
    this.getNewCatArray();
  }


  getNewCatArray = () => {
    return fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState( state => {
        const catArray = state.catArray.concat(responseJson[0].url)
          return {
            catArray,
          }
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  getNewCat () {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => response.json() )
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson[0].url
          })
        })
      .catch((error) => {
        console.log(error)
      });
  }

  goodCatButtonPress(){
    this.getNewCat()
    this.addToFavorites()
  }

  badCatButtonPress(){
    this.getNewCat()
    //this.addToFavorites()
  }

  addToFavorites() {
    // const temp = this.state.catArray[0]
    const temp2 = this.state.dataSource
    //console.log(temp)
    const favArray = this.state.favoriteArray.concat(temp2)
    //console.log(favArray)
    this.setState({
      favoriteArray: favArray
    })
    
  }

  render() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.getStartedText}>
          Click to Rate a Cat
        </Text>
        {/* <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View> */}

        {/* <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change this text and your app will automatically reload.
          </Text>
        </View> */}

        {/* <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View> */}
        <View style={{marginRight:90, marginLeft:90, }}>
        <Button 
          color='#33cc33'
          title='GOOD CAT'
          type="outline"
          onPress={()=>this.goodCatButtonPress()}
        />
        </View>
        
        <Image 
          style={{width: 300, height: 300, alignItems:'center',marginHorizontal: 30, marginBottom:20, marginTop:20}}
          source = {{uri:`${this.state.dataSource}`}}
        />

        <View style={{marginRight:90, marginLeft:90}}>
        <Button 
          color="#ff0000"
          title='bad cat'
          raised='true'
          onPress={()=>this.badCatButtonPress()}
        />
        </View>

        <Text style={{fontSize:60}}>Saved Catz:</Text>
        <FavoriteCats favoriteCats={this.state.favoriteArray}/>
        <Text style={{fontSize:60}}>Good Catz</Text>
        <Text style={{fontSize:60}}>Good Catz</Text>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This app and its contents were made 
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            after 7pm on Tuesday
          </MonoText>
        </View>
      </View>
    </View>
  );
}
}

HomeScreen.navigationOptions = {
  title: 'GOOD cat BAD cat',
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text></Text>
      // <Text style={styles.developmentModeText}>
      //   Development mode is enabled: your app will be slower but you can use
      //   useful development tools. {learnMoreButton}
      // </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3399ff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  badButton: {
    marginBottom:20,
    color: '#ff0066',
  },
  contentContainer: {
    paddingTop: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontFamily: 'notoserif',
    fontSize: 20,
    color: 'rgb(0, 0, 102)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
