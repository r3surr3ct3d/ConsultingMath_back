import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, AppRegistry } from 'react-native';
import { useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import { registerUser } from '../configs/firebase';

const Registr = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function Registration() {

        registerUser(login, password)
        .then((userCredential)=>{
            alert('User created successfully!')
            navigation.navigate('Auth')
        })
        .catch((error) => {
            alert('Registration failed! Try another E-Mail!')
            const errorCode = error.code;
            //console.log(errorCode);
        });
            
    }
    return (
        <View style={styles.container} >
            <Text style={styles.text}>REGISTRATION</Text>
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
                    Registration()
                }}>
                <Text style={styles.button_text} >REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Auth')
                }}>
                <Text style={styles.link} >Already registrated?</Text>
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

export default Registr