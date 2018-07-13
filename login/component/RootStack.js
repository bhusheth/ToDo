import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SignIn from './SignIn';
import SignUp from './SignUp';

const NavigationStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp  
    },
},
{
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
    }
);

export default class RootStack extends React.Component {
    render() {
        return <NavigationStack />;
    }
}