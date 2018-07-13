import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export default class ButtonClass extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const { onPress, title, icon } = this.props;
        return (
            <Button backgroundColor={'blue'} style={styles.button} 
            title={title} 
            onPress={onPress}
            icon={icon}
            />
        );
    }
}

const styles = StyleSheet.create({
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