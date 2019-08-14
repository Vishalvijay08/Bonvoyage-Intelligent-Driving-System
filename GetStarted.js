import React, {Component} from 'react';
import {Platform, Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Button, blurRadius} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './Main';
const remote = 'https://i.pinimg.com/originals/02/ff/22/02ff229ba11746a1c0ab3e4bde3a16f6.jpg';

class Start extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const resizeMode = 'contain';
    return (
        <View style={styles.container}>
        
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: remote }}/>
          </View>
        
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} style={styles.button}>
              <Text style={{color: 'white', fontFamily: 'Lora', fontSize: 17}}>Get Started</Text>
            </TouchableOpacity> 
          </View>
        
        </View>
        
      );
  }
}

class MainScreen extends Component {
 static navigationOptions = {
    header: null,
  };
  render() {
    return <Main />;
  }
}

const styles = StyleSheet.create ({

  container: {
    flex:1, 
  },

  image: {
    flex:1.5, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  buttonContainer: {
    flex:0.4,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  button: {
  width:180, 
  height: 50, 
  backgroundColor: '#000000', 
  justifyContent: 'center', 
  alignItems: 'center', 
  elevation: 3,
  borderRadius: 60
  }

});

const RootStack = createStackNavigator(
{
  Home: Start,
  Main: MainScreen
},
{
  initialRouteName: 'Home'
}
);

export default class GetStarted extends Component {
   static navigationOptions = {
    header: null,
  };
  render(){
    return <RootStack />;
  }
}