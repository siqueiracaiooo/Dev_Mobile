import { Image, TextInput, View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function Han_blaster(){
    return(
        <ImageBackground style={styles.container}
                source={require('../../../assets/background.jpg')}>

            <Image 
                source={require('../../../assets/Solo_blaster.webp')} 
                style={styles.logo}
            />

            <Text style={styles.itemName}>
                Blaster: BlasTech DL-44
            </Text>
            <Text style={styles.itemDescription}>
            O BlasTech DL-44, nas mãos de Han Solo, tornou-se uma pistola blaster lendária na galáxia de Star Wars. Este blaster é amplamente reconhecido por sua confiabilidade e potência de fogo, tornando-o uma escolha icônica para contrabandistas, mercenários e heróis rebeldes.
            </Text>

            <Text style={styles.Attack}>
            Poder de Ataque: 9/10
            </Text>
            
            <Text style={styles.Defense}>
            Defesa: 2/10
            </Text>

            <Text style={styles.Fraqueza}>
            Vulnerabilidade contra ataques de curta distancia
            </Text>
            
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Lightsaber'}}>
                    <Text style={styles.LinkBtn}>Lightsaber</Text>
                </Link>

                <Link to={{screen: 'Mandalorian_suit'}}>
                    <Text style={styles.LinkBtn}>Armadura mandaloriana</Text>
                    </Link>
            </View>
            <View style={styles.Escolha}>
                <Link to={{screen: 'Escolhido_blaster'}}>
                    <Text style={styles.viewEscolha}>Escolher esta arma</Text>
                </Link>
            </View>
        </ImageBackground>
    )
}