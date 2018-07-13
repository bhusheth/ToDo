import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import ButtonClass from './Button'


export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'tyKet',
    };
    render() {
        return (
            <View>
            <ImageBackground source={require('../media/tyket_logo.jpg')} style={{ height: '100%', width: '100%' }}>
                    <View style={styles.buttonGroup}>
                        <ButtonClass
                            title='Sign Up'
                            icon={{ name: 'description' }}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        />
                        <ButtonClass title='Sign In'
                         onPress={() => this.props.navigation.navigate('SignIn')}
                            icon={{ name: 'label' }}
                         />
                    </View>
            </ImageBackground>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    button: {   
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonGroup: {
        marginTop: 400,
    },
});

