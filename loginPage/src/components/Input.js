import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const Input = (props) => {

    const {holder} = props;
    return (
        <View style={styles.container}>
            <TextInput 
                // placeholder={props.holder}
                placeholder={holder}
            />
        </View>
       
    )
}


export {Input};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        marginVertical: 20,
    }

})
