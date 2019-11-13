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
import FavoriteDogs from './FavoriteDogs.js'
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../components/StyledText';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      dataSource:null,
      dogArray:[],
      favoriteArray:[],
      value:0,
    }
    this.badDogButtonPress = this.badDogButtonPress.bind(this);
    this.goodDogButtonPress = this.goodDogButtonPress.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this)
  }

  componentDidMount(){
    this.getNewDog()
  }

  componentDidUpdate(prevState) {
    if(prevState.dataSource !== this.state.dataSource){
    }
  }

  getNewDog () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json() )
      .then((responseJson) => {
        //console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson.message,
        })
      })
    .catch((error) => {
      console.log(error)
    });
  }
  goodDogButtonPress(){
    //console.log('hi')
    this.getNewDog()
    this.addToFavorites()
    //console.log('heya')
  }

  badDogButtonPress(){
    this.getNewDog()
  }

  addToFavorites() {
    //console.log('hi')
    const temp = this.state.dataSource
    //console.log('TEMP:'+ temp)
    const favArray = this.state.favoriteArray.concat(temp)
    this.setState({
      favoriteArray: favArray
    })
    
  }

  render(){
    //console.log(this.state.favoriteArray)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.getStartedText}>
        Click to Rate a Doggo
      </Text>

      <View style={{marginRight:90, marginLeft:90}}>
      <Button 
        color='#33cc33'
        style={{marginBottom:20}}
        title='GOOD DOG'
        onPress={()=>this.goodDogButtonPress()}
      />
      </View>
        
      <Image 
          style={{width: 300, height: 300, alignItems:'center',marginHorizontal: 30, marginBottom:20, marginTop:20}}
          source = {{uri:`${this.state.dataSource}`}}
      />

      <View style={{marginRight:90, marginLeft:90}}>
      <Button 
        color="#ff0000"
        title='FETCH NEW DOG'
        onPress={()=>this.badDogButtonPress()}
      />
      </View>

      <Text style={{fontSize:60}}>Favorites:</Text>
      <FavoriteDogs favoriteDogs={this.state.favoriteArray}/>

    </ScrollView>
  );
}
}

LinksScreen.navigationOptions = {
  title: 'GOOD dog BAD dog',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ffffcc',
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgb(0, 0, 102)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
