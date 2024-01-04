import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { logoutUser } from '../configs/firebase';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';

import Main from '../components/Main';
import Auth from '../components/Auth';
import Precise from '../components/Precise/Precise';
import Estimation from '../components/Estimation/Estimation';
import Context from '../components/Context/Context';
import RankedGame from '../components/Precise/RankedGame';
import EndlessGame from '../components/Precise/EndlessGame';
import RankedGameEst from '../components/Estimation/RankedGameEst';
import EndlessGameEst from '../components/Estimation/EndlessGameEst';
import RankedGameCont from '../components/Context/RankedGameCont';
import EndlessGameCont from '../components/Context/EndlessGameCont';
import Registr from '../components/Registr';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
    button: {
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
});
const AddNavigate = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Auth"
                component={Auth}
                options={{ title: 'ConsMath Backend Part' }}
            />
            <Stack.Screen 
                name="Registration" 
                component={Registr} 
                options={{ title: 'ConsMath Backend Part' }} 
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title: ' ' }}
                
            />
            <Stack.Screen name="Precise" component={Precise} />
            <Stack.Screen name="Estimation" component={Estimation} />
            <Stack.Screen name="Context" component={Context} />
            <Stack.Screen name="RankedGame" component={RankedGame} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGame" component={EndlessGame} options={{ title: 'Endless Game' }} />
            <Stack.Screen name="RankedGameEst" component={RankedGameEst} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameEst" component={EndlessGameEst} options={{ title: 'Endless Game' }} />
            <Stack.Screen name="RankedGameCont" component={RankedGameCont} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameCont" component={EndlessGameCont} options={{ title: 'Endless Game' }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AddNavigate