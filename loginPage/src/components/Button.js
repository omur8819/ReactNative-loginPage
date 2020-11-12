import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';


const Button = (props) => {

    const {text} = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


export {Button};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#82ada9',
        padding: 20,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10,
        

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
})
