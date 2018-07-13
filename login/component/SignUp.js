import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';
import ButtonClass from './Button';

const Form = t.form.Form;

const User = t.struct({
    fullName: t.String,
    email: t.String,
    username: t.String,
    password: t.String,
    confirmPassword: t.String
});

var options = {
    fields: {
        password: {
            password: true,
            secureTextEntry: true
        },
        confirmPassword: {
            password: true,
            secureTextEntry: true
        }
    }
};


export default class SignUp extends React.Component {
    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('Value:', value);
    }
    static navigationOptions = {
        title: 'Sign Up',
    };
    render() {
        return (
            <View style={styles.container}>
                <Form type={User} ref = { c => this._form = c}/>
                <ButtonClass title='Sign Up' onPress={this.handleSubmit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffff',
    },
    button: { 
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
});