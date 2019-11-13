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
//import console = require('console');

export default class FavoriteDogs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
  }


  render() {
    //console.log(this.props.favoriteDogs)
    return (
      <View>
        {this.props.favoriteDogs.map((image)=> (
          <Image 
                key={image}
                style={{width: 300, height: 300, alignItems:'center',marginHorizontal: 30, marginBottom:20, marginTop:20}}
                source={{uri:`${image}`}}
          />
        ))}
        <Text style={{textAlign:'center'}}>
          Make sure you give lots of pets
        </Text>
      </View>
    )
  }
}
