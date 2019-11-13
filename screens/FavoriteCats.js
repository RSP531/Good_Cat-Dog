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

export default class FavoriteCats extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
  }


  render() {
    return (
      <View>
        {this.props.favoriteCats.map((image)=> (
          <Image 
                key={image}
                style={{width: 300, height: 300, alignItems:'center',marginHorizontal: 30, marginBottom:20, marginTop:20}}
                source={{uri:`${image}`}}
            />
        ))}
      </View>
    )
  }
}
