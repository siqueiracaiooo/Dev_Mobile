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
                VOCÊ ESCOLHEU: Sabre de Luz de Anakin Skywalker
            </Text>
            <Text style={styles.itemDescription}>
            O poderoso sabre de luz de Anakin Skywalker te fornecerá o poder necessário para vencer qualquer batalha com um bom ataque e uma ótima defesa, assim como o antigo general das guerras clonicas. Um futuro brilhante o aguarda! Você será capaz de dominar o lado sombrio da força que este sabre carrega consigo?
            </Text>

            <Text style={styles.Attack}>
            Poder de Ataque: 7/10
            </Text>

            <Text style={styles.Defense}>
            Defesa: 9/10
            </Text>

            <Text style={styles.Fraqueza}>
            Vulnerabilidade se empunhada por um não usuario da força.
            </Text>

            <View style={styles.Escolha}>
                <Link to={{screen: 'Start_page'}}>
                    <Text style={styles.viewEscolha}>Trocar/Escolher outra arma</Text>
                </Link>
            </View>
        </ImageBackground>
    )
}