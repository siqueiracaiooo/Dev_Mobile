import { Image, TextInput, View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function Lightsaber(){
    return(
        <ImageBackground style={styles.container}
                source={require('../../../assets/background.jpg')}>

            <Image 
                source={require('../../../assets/Lightsaber.webp')} 
                style={styles.logo}
            />

            <Text style={styles.itemName}>
                Sabre de luz: Anakin Skywalker
            </Text>
            <Text style={styles.itemDescription}>
            Este é o lendário Sabre de Luz de Anakin Skywalker, uma arma icônica que conta a história de um herói caído. Com uma empunhadura prateada e uma lâmina de cristal Kyber azul, este sabre irradia a aura da Força, tornando-o instantaneamente reconhecível em toda a galáxia.
            </Text>

            <Text style={styles.Attack}>
            Poder de Ataque: 7/10
            </Text>

            <Text style={styles.Defense}>
            Defesa: 9/10
            </Text>

            <Text style={styles.Fraqueza}>
            Vulnerabilidade ao lado sombrio da força se empunhada por um usuário com baixa sabedoria.
            </Text>


            <View style={styles.viewLinks}>
                <Link to={{screen: 'Mandalorian_suit'}}>
                    <Text style={styles.LinkBtn}>Armadura mandaloriana</Text>
                </Link>
                <Link to={{screen: 'Han_blaster'}}>
                    <Text style={styles.LinkBtn}>Blaster</Text>
                    </Link>
            </View>

            <View style={styles.Escolha}>
                <Link to={{screen: 'Escolhido_lightsaber'}}>
                    <Text style={styles.viewEscolha}>Escolher esta arma</Text>
                </Link>
            </View>
        </ImageBackground>
    )
}