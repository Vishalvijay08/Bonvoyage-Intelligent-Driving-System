import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import Video from 'react-native-video';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import Dialogflow from 'react-native-dialogflow';
import Voice from 'react-native-voice';
class DrowsyScreen extends Component {

	constructor(props) {
        super(props);
 
        Dialogflow.setConfiguration(
          "d8e9eafeda164b23ade64bfa133391c1", Dialogflow.LANG_GERMAN
        );
    }

	render() {
		return(
			<View style={{flex:1}}>
			<Button 
			title="Speak"
			onPress={() => {
           Dialogflow.requestQuery("Some text for your Dialogflow agent", result=>console.log(result), error=>console.log(error));
        }}
   />
			</View>
			);	
	}
} 
class CrashScreen extends Component {
	render() {
		return(
			<View>
			<Text>CrashScreen</Text>
			</View>
		);
	}
} 
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class SosScreen extends Component {
	render() {
		return(
			<View>
			<Text>DrowsyScreen</Text>
			</View>
		);
	}
} 
export default createMaterialBottomTabNavigator({
	Drowsy: {
		screen: DrowsyScreen,
		navigationOptions: () => ({
			tabBarLabel: 'Drowsy',
			tabBarIcon: ({tintColor}) => (
				<Icon 
					name="camera-front" 
					color={tintColor} 
					size={24}
				/>
			)
		})
	},
	Crash: {
		screen: CrashScreen,
		navigationOptions: () => ({
			tabBarLabel: 'Crash',
			tabBarIcon: ({tintColor}) => (
				<Icon 
					name="camera-rear" 
					color={tintColor} 
					size={24}
				/>
			)
		})
	},
	Sos: {
		screen: SosScreen,
		navigationOptions: () => ({
			tabBarLabel: 'SOS',
			tabBarIcon: ({tintColor}) => (
				<Icon 
					name="report" 
					color={tintColor} 
					size={24}
				/>
			)
		})
	},
},{ 
	shifting: 'true',
	initialRouteName: 'Drowsy',
	activeTintColor: '#F8F8F8',
	inactiveTintColor: 'grey',
	barStyle: { backgroundColor: 'black' },
});