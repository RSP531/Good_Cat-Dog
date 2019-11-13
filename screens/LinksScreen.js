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

    }
  }
  render(){
  return (
    <ScrollView style={styles.container}>
      {/* <ExpoLinksView /> */}
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
