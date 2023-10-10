import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import Espada from './src/pages/Lightsaber';
import Mandalorian_suit from './src/pages/Mandalorian_suit';
import Han_blaster from './src/pages/Han_blaster';
import { NavigationContainer } from '@react-navigation/native';
import Lightsaber from './src/pages/Lightsaber';
import Start_page from './src/pages/Start_page';
import Escolhido_blaster from './src/pages/Escolha_blaster/Escolhido_blaster'
import Escolhido_lightsaber from './src/pages/Escolha_lightsaber/Escolhido_lightsaber'
import Escolhido_suit from './src/pages/Escolhido_suit/Escolhido_suit'




const Stack = createNativeStackNavigator();

export default function App() {
    return (
        
        <NavigationContainer>
            
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='Start_page'
                    component={Start_page}
                /> 
                <Stack.Screen
                    name='Lightsaber'
                    component={Lightsaber}
                    />
                <Stack.Screen
                    name='Mandalorian_suit'
                    component={Mandalorian_suit}
                    />
                <Stack.Screen
                    name='Han_blaster'
                    component={Han_blaster}
                    />
                <Stack.Screen
                    name='Escolhido_blaster'
                    component={Escolhido_blaster}
                    /> 
                <Stack.Screen
                    name='Escolhido_lightsaber'
                    component={Escolhido_lightsaber}
                    />
                <Stack.Screen
                    name='Escolhido_suit'
                    component={Escolhido_suit}
                    />




                    
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282828",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: '20px'
    },
});
