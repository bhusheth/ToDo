import React from 'react';
import { View, Text } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import ButtonClass from './Button';

export default class SignIn extends React.Component{
    static navigationOptions = {
        title: 'Sign In',
    };
    render() {
      return (
          <View>
              <FormLabel>Username</FormLabel>
              <FormInput />
              {/* <FormValidationMessage>Please enter valid username.</FormValidationMessage> */}
              <FormLabel>Password</FormLabel>
              <FormInput />
              {/* <FormValidationMessage>Please enter valid password.</FormValidationMessage> */}
              <ButtonClass
                  title='Log In' 
                  onPress={ () => this.props.navigation.popToTop() }
                  />
          </View>
      )
    }
}