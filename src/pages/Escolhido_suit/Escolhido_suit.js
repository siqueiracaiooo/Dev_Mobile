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
                VOCÊ ESCOLHEU: Armadura mandaloriana
            </Text>
            <Text style={styles.itemDescription}>
            Conhecido por toda a galaxia, o manto dos mandalorianos é um equipamento nobre feito inteiramente de beskar, minerio encontrado nas minas de mandalore, planeta natal dessa facção, praticamente impenetrável, esta armadura resiste a tiros de blaster e a golpes de sabre de luz, porém o corpo do usuário fica exposto em lugares descobertos, cuidado com ataques de oportunidades, por ser uma armadura pesada, quem a utiliza tem a mobilidade reduzida, e fica vulnerável a ataques de oportunidades, que causam o dobro de dano.  
            </Text>

            <Text style={styles.Attack}>
            Poder de Defesa: 10/10
            </Text>
            
            <Text style={styles.Defense}>
            Mobilidade: 4/10
            </Text>

            <Text style={styles.Fraqueza}>
            Vulnerabilidade contra ataques de oportunidade
            </Text>

            <View style={styles.Escolha}>
                <Link to={{screen: 'Start_page'}}>
                    <Text style={styles.viewEscolha}>Trocar/Escolher outra arma</Text>
                </Link>
            </View>
        </ImageBackground>
    )
}