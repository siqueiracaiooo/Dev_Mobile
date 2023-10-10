import { Image, TextInput, View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function Mandalorian_suit(){
    return(
        <ImageBackground style={styles.container}
                source={require('../../../assets/background.jpg')}>

            <Image 
                source={require('../../../assets/mandalorian_suit.webp')} 
                style={styles.logo}
            />

            <Text style={styles.itemName}>
                Traje: Armadura mandaloriana
            </Text>
            <Text style={styles.itemDescription}>
            O Traje do Mandaloriano é uma armadura lendária usada pelos guerreiros Mandalorianos, conhecidos por sua destemida ferocidade e habilidades formidáveis. Esta armadura é uma peça central do estilo de vida e tradição Mandaloriana, incorporando a força, honra e resiliência do povo guerreiro.            </Text>

            <Text style={styles.Attack}>
            Poder de Defesa: 10/10
            </Text>
            
            <Text style={styles.Defense}>
            Mobilidade: 4/10
            </Text>

            <Text style={styles.Fraqueza}>
            Vulnerabilidade contra ataques de oportunidade
            </Text>


            <View style={styles.viewLinks}>
                <Link to={{screen: 'Lightsaber'}}>
                    <Text style={styles.LinkBtn}>Lightsaber</Text>
                </Link>
                <Link to={{screen: 'Han_blaster'}}>
                    <Text style={styles.LinkBtn}>Blaster</Text>
                    </Link>
            </View>

            <View style={styles.Escolha}>
                <Link to={{screen: 'Escolhido_suit'}}>
                    <Text style={styles.viewEscolha}>Escolher esta arma</Text>
                </Link>
            </View>
        </ImageBackground>
    )
}