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
                VOCÊ ESCOLHEU: BlasTech DL-44
            </Text>
            <Text style={styles.itemDescription}>
            Você escolheu a lendária BlasTech DL-44 de han solo, com um grande poder de ataque, ele permite que você tenha uma ótima mobilidade, porém uma péssima defesa, qualquer golpe sofrido atingira o usuário diretamente, porém sua mobilidade é aumentada, se aproveite disso!
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

            <View style={styles.Escolha}>
                <Link to={{screen: 'Start_page'}}>
                    <Text style={styles.viewEscolha}>Trocar/Escolher outra arma</Text>
                </Link>
            </View>
        </ImageBackground>
    )
}