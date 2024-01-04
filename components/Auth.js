import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import React,{ useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import { loginUser } from '../configs/firebase';

const Auth = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function Auth(){
        
        loginUser(login, password)
        .then((userCredential) =>{
            alert('User logined successfully!')
            navigation.navigate('Main')
        })
        .catch((error) => {
            alert('Your E-Mail or password is incorrect! Try again!')
            const errorCode = error.code;
            //console.log(errorCode);
        });

    }

    return (
        <View style={styles.container} >
            <Text style={styles.text}>LOG IN</Text>
            <TextInput
                editable
                placeholder='Login / E-Mail'
                textAlign='center'
                value={login}
                onChangeText={text => setLogin(text)}
                style={styles.input} />
            <TextInput
                editable
                placeholder='Password'
                textAlign='center'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input} />
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    Auth()
                }}>
                <Text style={styles.button_text} >SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Registration')
                }}>
                <Text style={styles.link} >First time here? Proceed registration procedure!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    text: {
        backgroundColor: '#86bfe8',
        borderRadius: 81,
        padding: 10,
        paddingHorizontal: 30,
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
    },
    input: {
      marginTop: 20,
      padding: 15,
      width: 300,
      fontSize: 20,
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: '#fff'
    },
    button: {
        margin: 20,
        padding: 15,
        width: 200,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#223764',
        color: '#fff',
    },
    button_text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    link: {
        margin: 50,
        fontSize: 18,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
});

export default Auth