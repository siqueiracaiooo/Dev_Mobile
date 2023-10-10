import { Image, TextInput, View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function Start_page(){
    return(
        <ImageBackground style={styles.container}
                source={require('../../../assets/background.jpg')}>
        
        <Image 
                source={require('../../../assets/imperio.png')} 
                style={styles.logo}
            />
            <Image 
            source={require('../../../assets/republica.png')} 
            style={styles.logo2}
        />
        
        <View style={styles.viewLinks}>
            <Link to={{screen: 'Lightsaber'}}>
            <Text style={styles.LinkBtn}>START</Text>
            </Link>
        </View>



        </ImageBackground>
)}