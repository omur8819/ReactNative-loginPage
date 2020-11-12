import React from 'react';
import { SafeAreaView, 
         View, 
         Text, 
         Image, 
         StyleSheet, 
         Dimensions, 
         ScrollView,
        KeyboardAvoidingView,
        Platform
        } from 'react-native';
import { Input, Button } from './components/index';

const Login = () => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#b2dfdb'}}>
            <KeyboardAvoidingView 
                style={{flex: 1}} 
                behavior={Platform.OS == 'android' ? null : "padding"}
                >
                <ScrollView style={{flex: 1}} 
                // bounces={false} for android there is 
                >
                    <Image 
                        source={require('./assets/shop.png')}
                        style={styles.logoStyle}
                    />
                    <Input holder="Please enter your e-mail!" />
                    <Input holder="Please enter your password!" />
                    <Button text="Login" />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login;


const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .3,
        tintColor: 'black',
        marginTop: 30,
        marginBottom: 30,
    },
})