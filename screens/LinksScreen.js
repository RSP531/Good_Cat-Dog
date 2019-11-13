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
    this.goodDogButtonPress = this.badDogButtonPress.bind(this);
    this.goodDogButtonPress = this.goodDogButtonPress.bind(this);
  }

  componentDidMount(){
    this.getNewDog()
  }

  getNewDog () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json() )
      .then((responseJson) => {
        //console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson.message
        })
      })
    .catch((error) => {
      console.log(error)
    });
  }
  goodDogButtonPress(){

  }

  badDogButtonPress(){

  }

  render(){
  return (
    <ScrollView style={styles.container}>
      <Button 
        color='#33cc33'
        style={{marginBottom:20}}
        title='GOOD DOG'
        onPress={()=>this.goodCatButtonPress()}
      />
        
      <Image 
          style={{width: 300, height: 300, alignItems:'center',marginHorizontal: 30, marginBottom:20, marginTop:20}}
          source = {{uri:`${this.state.dataSource}`}}
      />

      <Button 
        color="#ff0000"
        title='BAD DOG'
        onPress={()=>this.badCatButtonPress()}
      />
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
});
