import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36454F',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: '174px',
        height: '360px',
        marginBottom: '40px'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px',
        
    },
    itemName: {
        fontSize: '20px',
        color: 'Black',
        justifyContent: 'center',
        marginBottom: '10px',
        fontWeight: 'bold'
    },
    itemDescription: {
        fontSize: '14px',
        color: 'black',
        padding: 20,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    LinkBtn: {
        fontSize: '15px',
        color: 'black',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        border: '2px solid black',
        fontWeight: 'bold',
    }, 
    Attack: {
        fontSize: '14px',
        color: 'red',
        padding: 20,
        justifyContent: 'center'
    },
    Defense: {
        fontSize: '14px',
        color: 'blue',
        padding: 20,
        justifyContent: 'center'
    },     
    Fraqueza: {
        fontSize: '14px',
        color: 'gray',
        padding: 20,
        justifyContent: 'center',
        fontWeight:'bold'
    },

    Escolha: {
        color: 'white',
        borderRadius: '5px',
        padding: '10px',
        border: '5px solid black',
        marginTop: '30px',
    },

    viewEscolha: {
        fontWeight: 'bold',
        fontSize: '25px',
        justifyContent: 'center',
    }

});

export default styles;